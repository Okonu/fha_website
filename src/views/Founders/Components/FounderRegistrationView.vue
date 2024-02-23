<script setup lang="ts">
// @ts-nocheck
  import { ref, onMounted } from 'vue';
  import Notification from '@/views/Components/Notification.vue';
  import Loader from '@/views/Components/Loader.vue';
  import { BASE_URL } from '@/config/api.js'; 
   
  const showLoader = ref(false);
  const showNotification = ref(false);
  const notificationMessage = ref('');
  const notificationType = ref('success');
   
  const props = defineProps({
    show: Boolean,
  });
   
  const emit = defineEmits(['close']);
   
  const closeForm = () => {
    emit('close');
  };
   
  const name = ref('');
  const email = ref('');
  const companyName = ref('');
  const businessType = ref('');
  const financialLevel = ref('');
  const focusArea = ref('');
  const challenges = ref('');
  const fundingStatus = ref('');
  const partnership = ref('');
  const communitySupport = ref('');
   
  const businessTypes = ref([]);
  const financialLevels = ref([]);
  const focusAreas = ref([]);
  const fundingStatuses = ref([]);
  const partnershipOptions = ref([]);
   
  onMounted(async () => {
    try {
      const businessTypesResponse = await fetch(`${BASE_URL}/api/enums/business-types`);
      businessTypes.value = await businessTypesResponse.json();
   
      const financialLevelsResponse = await fetch(`${BASE_URL}/api/enums/financial-levels`);
      financialLevels.value = await financialLevelsResponse.json();
   
      const focusAreasResponse = await fetch(`${BASE_URL}/api/enums/focus-areas`);
      focusAreas.value = await focusAreasResponse.json();
   
      const fundingStatusesResponse = await fetch(`${BASE_URL}/api/enums/funding-status`);
      fundingStatuses.value = await fundingStatusesResponse.json();
   
      const partnershipOptionsResponse = await fetch(`${BASE_URL}/api/enums/partnering-options`);
      partnershipOptions.value = await partnershipOptionsResponse.json();
    } catch (error) {
      console.error('Failed to fetch enum values:', error);
    }
  });
   
  const submitForm = async () => {
    showLoader.value = true;
    const formData = {
      name: name.value,
      email: email.value,
      company_name: companyName.value,
      business_type: businessType.value,
      financial_level: financialLevel.value,
      focus_area: focusArea.value,
      challenges: challenges.value,
      funding_status: fundingStatus.value,
      partnership: partnership.value,
      community_support: communitySupport.value,
    };
   
    try {
      const response = await fetch(`${BASE_URL}/api/register-founder`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
   
      if (response.ok) {
        notificationMessage.value = 'Registration successful!';
        notificationType.value = 'success';
      } else {
        const errorData = await response.json();
        notificationMessage.value = errorData.message || 'An error occurred.';
        notificationType.value = 'error';
      }
      showNotification.value = true;
    } catch (error) {
      notificationMessage.value = 'An error occurred.';
      notificationType.value = 'error';
      showNotification.value = true;
    } finally {
      showLoader.value = false;
    }
    closeForm();
  };
</script>


<style scoped>
.input-field {
  width:  100%;
  padding:  10px;
  margin:  10px  0;
  border:  1px solid #4A90E2;
  border-radius:  5px;
  background-color: #07182C;
  color: #fff;
}

.submit-button {
  padding:  10px;
  margin:  10px  0;
  border: none;
  border-radius:  5px;
  background-color: #4A90E2;
  color: #fff;
  cursor: pointer;
}

.submit-button:hover {
  background-color: #3a80c1;
}

.backdrop-filter {
  backdrop-filter: blur(10px);
  background-color: rgba(0,  0,  0,  0.5);
}

.max-w-4xl {
  max-width:  70rem;
}

.h-full {
  height:  70%;
}
</style>
<template>
  <Notification
    v-if="showNotification"
    :message="notificationMessage"
    :type="notificationType"
    @close="showNotification = false"
  />

  <Loader :show="showLoader" />

  <div v-if="show" class="fixed inset-0 flex items-center justify-center z-50" @click.self="closeForm">
    <div class="bg-white p-6 rounded shadow-lg w-full max-w-4xl h-full backdrop-filter backdrop-blur-md" @click.stop>
      <form @submit.prevent="submitForm" class="w-full h-full flex flex-col justify-between">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 flex-grow">
          <input type="text" v-model="name" placeholder="Name" class="input-field" required />
          <select v-model="focusArea" class="input-field" required>
            <option value="">Select Focus Area</option>
            <option v-for="area in focusAreas" :key="area" :value="area">{{ area }}</option>
          </select>
          
          <input type="text" v-model="challenges" placeholder="Challenges" class="input-field" required />
          <select v-model="fundingStatus" class="input-field" required>
            <option value="">Select Funding Status</option>
            <option v-for="status in fundingStatuses" :key="status" :value="status">{{ status }}</option>
          </select>
          
          <select v-model="financialLevel" class="input-field" required>
            <option value="">Select Financial Level</option>
            <option v-for="level in financialLevels" :key="level" :value="level">{{ level }}</option>
          </select>
          
          <input type="email" v-model="email" placeholder="Email" class="input-field" required />
          <input type="text" v-model="companyName" placeholder="Company Name" class="input-field" required />
          
          <select v-model="businessType" class="input-field" required>
            <option value="">Select Business Type</option>
            <option v-for="type in businessTypes" :key="type" :value="type">{{ type }}</option>
          </select>
          
          <select v-model="partnership" class="input-field" required>
            <option value="">Select Partnership Option</option>
            <option v-for="option in partnershipOptions" :key="option" :value="option">{{ option }}</option>
          </select>
          <input type="text" v-model="communitySupport" placeholder="Community Support" class="input-field" required />
        </div>
        <button type="submit" class="submit-button w-full">Submit</button>
      </form>
    </div>
  </div>
</template>