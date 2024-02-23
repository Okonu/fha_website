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
            <label for="name" class="mb-2">What is your name?</label>
            <input type="text" id="name" v-model="name" placeholder="Name" class="input-field w-full p-2 border border-gray-300 rounded" required />
          </div>
          <div class="flex flex-col">
            <label for="email" class="mb-2">What is your email address?</label>
            <input type="email" id="email" v-model="email" placeholder="Email" class="input-field w-full p-2 border border-gray-300 rounded" required />
          </div>
          <div class="flex flex-col">
            <label for="enterpriseLevel" class="mb-2">As an investor, which level of tech enterprise/company would you like to invest in?</label>
            <select id="enterpriseLevel" v-model="enterpriseLevel" class="input-field w-full p-2 border border-gray-300 rounded" required>
              <option value="">Select Enterprise Level</option>
              <option v-for="level in enterpriseLevels" :key="level" :value="level">{{ level }}</option>
            </select>
          </div>
          <div class="flex flex-col">
            <label for="coInvesting" class="mb-2">Would you be interested in co-investing with other members of our community in tech enterprise opportunities?</label>
            <select id="coInvesting" v-model="coInvesting" class="input-field w-full p-2 border border-gray-300 rounded" required>
              <option value="">Select Co-Investing Option</option>
              <option v-for="option in coInvestingOptions" :key="option" :value="option">{{ option }}</option>
            </select>
          </div>
          <div class="flex flex-col">
            <label for="convenientInvesting" class="mb-2">As an investor, do you think it's convenient to invest in tech companies that fall under our umbrella community and have been moulded by our own technical team?</label>
            <select id="convenientInvesting" v-model="convenientInvesting" class="input-field w-full p-2 border border-gray-300 rounded" required>
              <option value="">Select Convenient Investing Option</option>
              <option v-for="option in convenientInvestingOptions" :key="option" :value="option">{{ option }}</option>
            </select>
          </div>
          <div class="flex flex-col">
            <label for="focusArea" class="mb-2">Which type of tech enterprise/company would you like to invest in?</label>
            <select id="focusArea" v-model="focusArea" class="input-field w-full p-2 border border-gray-300 rounded" required>
              <option value="">Select Focus Area</option>
              <option v-for="area in focusAreaOptions" :key="area" :value="area">{{ area }}</option>
            </select>
          </div>
          <div class="flex flex-col">
            <label for="impact" class="mb-2">How important is the potential for social or environmental impact when evaluating investment opportunities in tech enterprises within our community?</label>
            <select id="impact" v-model="impact" class="input-field w-full p-2 border border-gray-300 rounded" required>
              <option value="">Select Impact</option>
              <option v-for="impact in impactOptions" :key="impact" :value="impact">{{ impact }}</option>
            </select>
          </div>
          <div class="flex flex-col">
            <label for="viability" class="mb-2">What criteria do you use to assess the viability of an investment opportunity within the tech ecosystem of our community?</label>
            <select id="viability" v-model="viability" class="input-field w-full p-2 border border-gray-300 rounded" required>
              <option value="">Select Viability</option>
              <option v-for="viability in viabilityOptions" :key="viability" :value="viability">{{ viability }}</option>
            </select>
          </div>
          <div class="flex flex-col">
            <label for="expectation" class="mb-2">Do you have any specific expectations or goals for your investments within our community, such as financial returns, impact on the tech ecosystem, or community involvement?</label>
            <textarea id="expectation" v-model="expectation" placeholder="Expectation" class="input-field w-full p-2 border border-gray-300 rounded" required></textarea>
          </div>
          <div class="flex flex-col">
            <label for="concern" class="mb-2">Are there any concerns or questions you would like to address regarding your role as an investor in our community and our collaborative investment approach?</label>
            <textarea id="concern" v-model="concern" placeholder="Concern" class="input-field w-full p-2 border border-gray-300 rounded" required></textarea>
          </div>
        </div>
        <button type="submit" class="submit-button w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600">Submit</button>
      
      </form>
    </div>
  </div>
</template>



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
const enterpriseLevel = ref('');
const coInvesting = ref('');
const convenientInvesting = ref('');
const focusArea = ref('');
const impact = ref('');
const viability = ref('');
const expectation = ref('');
const concern = ref('');

const enterpriseLevels = ref([]);
const coInvestingOptions = ref([]);
const convenientInvestingOptions = ref([]);
const focusAreaOptions = ref([]);
const impactOptions = ref([]);
const viabilityOptions = ref([]);

onMounted(async () => {
  try {
    const enterpriseLevelsResponse = await fetch(`${BASE_URL}/api/enums/enterprise-levels`);
    enterpriseLevels.value = await enterpriseLevelsResponse.json();

    const coInvestingOptionsResponse = await fetch(`${BASE_URL}/api/enums/co-investings`);
    coInvestingOptions.value = await coInvestingOptionsResponse.json();

    const convenientInvestingOptionsResponse = await fetch(`${BASE_URL}/api/enums/convenient-investments`);
    convenientInvestingOptions.value = await convenientInvestingOptionsResponse.json();

    const focusAreaOptionsResponse = await fetch(`${BASE_URL}/api/enums/investor-focus-areas`);
    focusAreaOptions.value = await focusAreaOptionsResponse.json();

    const impactOptionsResponse = await fetch(`${BASE_URL}/api/enums/social-env-impacts`);
    impactOptions.value = await impactOptionsResponse.json();

    const viabilityOptionsResponse = await fetch(`${BASE_URL}/api/enums/viability-criterias`);
    viabilityOptions.value = await viabilityOptionsResponse.json();
  } catch (error) {
    console.error('Failed to fetch enum values:', error);
  }
});

const submitForm = async () => {
  showLoader.value = true;
  const formData = {
    name: name.value,
    email: email.value,
    enterprise_level: enterpriseLevel.value,
    co_investing: coInvesting.value,
    convenient_investing: convenientInvesting.value,
    focus_area: focusArea.value,
    impact: impact.value,
    viability: viability.value,
    expectation: expectation.value,
    concern: concern.value,
  };

  try {
    const response = await fetch(`${BASE_URL}/api/register-investor`, {
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

.form-container {
  overflow-y: auto;
  max-height:  100vh;
}

.grid-cols-1 md:grid-cols-2 {
  display: flex;
  flex-direction: column;
}

label {
  margin-bottom:  0.5rem; 
}

.submit-button {
  padding:   10px;
  margin:   10px   0;
  border: none;
  border-radius:   5px;
  background-color: #4A90E2;
  color: #fff;
  cursor: pointer;
}

.submit-button:hover {
  background-color: #3a80c1;
}

.backdrop-filter {
  backdrop-filter: blur(10px);
  background-color: rgba(0,   0,   0,   0.5);
}
.max-w-4xl {
  max-width:   110rem; 
}

.h-full {
  height:   100%;
}
</style>