<script setup lang="ts">

  import { ref, onMounted } from 'vue';
  import Notification from '@/views/Components/Notification.vue';
  import Loader from '@/views/Components/Loader.vue';
  import { BASE_URL } from '@/config/api.js'; 

  type NotificationType = "success" | "error";
  const notificationType = ref<NotificationType>('success');
   
  const showLoader = ref(false);
  const showNotification = ref(false);
  const notificationMessage = ref('');
   
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
  max-width:  100rem;
}

.h-full {
  height:  100%;
}
.overflow-y-auto {
  overflow-y: auto;
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
      <form @submit.prevent="submitForm" class="w-full h-full flex flex-col justify-between overflow-y-auto">
        <h2><strong><i>YOUR JOURNEY BEGINS HERE</i></strong></h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 flex-grow">
          <div class="flex flex-col">
            <label for="name" class="mb-2">Name</label>
            <input type="text" id="name" v-model="name" placeholder="Name" class="input-field w-full p-2 border border-gray-300 rounded" required />
          </div>
          <div class="flex flex-col">
            <label for="email" class="mb-2">Email</label>
            <input type="email" id="email" v-model="email" placeholder="Email" class="input-field w-full p-2 border border-gray-300 rounded" required />
          </div>
          <div class="flex flex-col">
            <label for="companyName" class="mb-2">Company Name</label>
            <input type="text" id="companyName" v-model="companyName" placeholder="Company Name" class="input-field w-full p-2 border border-gray-300 rounded" required />
          </div>
          <div class="flex flex-col">
            <label for="businessType" class="mb-2">What Type of Business Are You in the Tech Space?</label>
            <select id="businessType" v-model="businessType" class="input-field w-full p-2 border border-gray-300 rounded" required>
              <option value="">Select Business Type</option>
              <option v-for="type in businessTypes" :key="type" :value="type">{{ type }}</option>
            </select>
          </div>
          <div class="flex flex-col">
            <label for="financialLevel" class="mb-2">What Is the Current Financial Level of Your Business?</label>
            <select id="financialLevel" v-model="financialLevel" class="input-field w-full p-2 border border-gray-300 rounded" required>
              <option value="">Select Financial Level</option>
              <option v-for="level in financialLevels" :key="level" :value="level">{{ level }}</option>
            </select>
          </div>
          <div class="flex flex-col">
            <label for="focusArea" class="mb-2">What Are Your Primary Areas of Focus or Expertise in the Tech Ecosystem?</label>
            <select id="focusArea" v-model="focusArea" class="input-field w-full p-2 border border-gray-300 rounded" required>
              <option value="">Select Focus Area</option>
              <option v-for="area in focusAreas" :key="area" :value="area">{{ area }}</option>
            </select>
          </div>
          <div class="flex flex-col">
            <label for="challenges" class="mb-2">What Challenges or Opportunities Do You Face in Scaling Your Tech Business?</label>
            <textarea id="challenges" v-model="challenges" placeholder="Challenges" class="input-field w-full p-2 border border-gray-300 rounded" required></textarea>
          </div>
          <div class="flex flex-col">
            <label for="fundingStatus" class="mb-2">Are You Currently Seeking Funding for Your Tech Business?</label>
            <select id="fundingStatus" v-model="fundingStatus" class="input-field w-full p-2 border border-gray-300 rounded" required>
              <option value="">Select Funding Status</option>
              <option v-for="status in fundingStatuses" :key="status" :value="status">{{ status }}</option>
            </select>
          </div>
          <div class="flex flex-col">
            <label for="partnership" class="mb-2">Are You Open to Partnering with a Technical Team to Enhance Operations, Strategies, and Implementation for Sustainable Growth?</label>
            <select id="partnership" v-model="partnership" class="input-field w-full p-2 border border-gray-300 rounded" required>
              <option value="">Select Partnership Option</option>
              <option v-for="option in partnershipOptions" :key="option" :value="option">{{ option }}</option>
            </select>
          </div>
          <div class="flex flex-col">
            <label for="communitySupport" class="mb-2">How Would You Like the Community to Support Your Tech Business, and What Ideas Do You Have for Vision 2028 and Its Theme?</label>
            <textarea id="communitySupport" v-model="communitySupport" placeholder="Community Support" class="input-field w-full p-2 border border-gray-300 rounded" required></textarea>
          </div>
        </div>
        <button type="submit" class="submit-button w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600">Submit</button>
        <p>
        <strong>VISION 2028</strong>
        <br/>
        We're embarking on an unprecedented journey to craft the 'Mother of All Tech Communities' in Africa. 
        This partnership represents a nexus of expertise, resources, and shared vision. 
        We envision an ecosystem where innovation knows no bounds, where tech businesses, startups, consultants, and entrepreneurs flourish together. 
        Our collective commitment is to generate not just success for a few but prosperity for all. By 2028, we aim to nurture a minimum of 50 thriving 
        tech companies and create 5000 job opportunities for tech professionals. This vision of shared success is the heartbeat of our partnership, 
        and we're inviting you to actively shape and participate in this transformative journey.
        <br/>
        Our partnership thrives on inclusivity, recognizing that every voice and background holds the potential to enrich our ecosystem. 
        We're building an innovation hub that spans across digital platforms and events, fostering connections among tech enthusiasts and 
        professionals across Africa. Your contributions and insights are instrumental in shaping this vibrant tech future. 
        Together, we are the architects of a brighter, more prosperous tech landscape in Africa—a 
        future where innovation and success have no limits."
      </p>
      </form>
    </div>
  </div>
</template>
