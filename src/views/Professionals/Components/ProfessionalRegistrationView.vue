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
const motivation = ref('');
const credibilityEnhancement = ref('');
const interests = ref('');
const skills = ref('');
const benefits = ref('');
const collaborationEngagement = ref('');
const aspirations = ref('');
const contributions = ref('');
const skillImportance = ref('');
const goals = ref('');

const motivations = ref([]);
const credibilityEnhancements = ref([]);
const interestsAreas = ref([]);
const benefitsOptions = ref([]);
const collaborationTypes = ref([]);
const aspirationsOptions = ref([]);
const skillImportances = ref([]);
const goalsOptions = ref([]);

onMounted(async () => {
  try {
    const motivationsResponse = await fetch(`${BASE_URL}/api/enums/motivations`);
    motivations.value = await motivationsResponse.json();

    const credibilityEnhancementsResponse = await fetch(`${BASE_URL}/api/enums/enhancing-credibility`);
    credibilityEnhancements.value = await credibilityEnhancementsResponse.json();

    const interestsAreasResponse = await fetch(`${BASE_URL}/api/enums/focus-areas`);
    interestsAreas.value = await interestsAreasResponse.json();

    const benefitsOptionsResponse = await fetch(`${BASE_URL}/api/enums/membership-benefits`);
    benefitsOptions.value = await benefitsOptionsResponse.json();

    const collaborationTypesResponse = await fetch(`${BASE_URL}/api/enums/collaboration-types`);
    collaborationTypes.value = await collaborationTypesResponse.json();

    const aspirationsOptionsResponse = await fetch(`${BASE_URL}/api/enums/aspirations`);
    aspirationsOptions.value = await aspirationsOptionsResponse.json();

    const skillImportancesResponse = await fetch(`${BASE_URL}/api/enums/skill-importance-options`);
    skillImportances.value = await skillImportancesResponse.json();

    const goalsOptionsResponse = await fetch(`${BASE_URL}/api/enums/goals`);
    goalsOptions.value = await goalsOptionsResponse.json();
  } catch (error) {
    console.error('Failed to fetch enum values:', error);
  }
});

const submitForm = async () => {
  showLoader.value = true;
  const formData = {
    name: name.value,
    email: email.value,
    motivation: motivation.value,
    credibility_enhancement: credibilityEnhancement.value,
    interests: interests.value,
    skills: skills.value,
    benefits: benefits.value,
    collaboration_engagement: collaborationEngagement.value,
    aspirations: aspirations.value,
    contributions: contributions.value,
    skill_importance: skillImportance.value,
    goals: goals.value,
  };

  try {
    const response = await fetch(`${BASE_URL}/api/register-professional`, {
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
        <h3>Empowering Tech Professionals: Join a Community of Opportunity and Credibility!</h3>
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
            <label for="motivation" class="mb-2">What motivated you to consider joining our tech community, and what are your expectations from this membership?</label>
            <select id="motivation" v-model="motivation" class="input-field w-full p-2 border border-gray-300 rounded" required>
              <option value="">Select</option>
              <option v-for="motivation in motivations" :key="motivation" :value="motivation">{{ motivation }}</option>
            </select>
          </div>
          <div class="flex flex-col">
            <label for="credibilityEnhancement" class="mb-2">Credibility is crucial in the tech industry. 
              How do you envision our community enhancing your professional credibility and reputation within the field?</label>
            <select id="credibilityEnhancement" v-model="credibilityEnhancement" class="input-field w-full p-2 border border-gray-300 rounded" required>
              <option value="">Select</option>
              <option v-for="enhancement in credibilityEnhancements" :key="enhancement" :value="enhancement">{{ enhancement }}</option>
            </select>
          </div>
          <div class="flex flex-col">
            <label for="interests" class="mb-2">Our community offers a broad spectrum of job opportunities. 
              What types of tech roles or projects are you most interested in pursuing within our network?</label>
            <select id="interests" v-model="interests" class="input-field w-full p-2 border border-gray-300 rounded" required>
              <option value="">Select </option>
              <option v-for="area in interestsAreas" :key="area" :value="area">{{ area }}</option>
            </select>
          </div>
          <div class="flex flex-col">
            <label for="skills" class="mb-2"> Are there specific skill sets or areas of expertise 
              you possess that you believe would be valuable to other members of the community?</label>
            <input type="text" id="skills" v-model="skills" placeholder="Skills" class="input-field w-full p-2 border border-gray-300 rounded" required />
          </div>
          <div class="flex flex-col">
            <label for="benefits" class="mb-2">In addition to job opportunities, 
              what other benefits or resources are you looking to access through your membership in our tech community?</label>
            <select id="benefits" v-model="benefits" class="input-field w-full p-2 border border-gray-300 rounded" required>
              <option value="">Select</option>
              <option v-for="option in benefitsOptions" :key="option" :value="option">{{ option }}</option>
            </select>
          </div>
          <div class="flex flex-col">
            <label for="collaborationEngagement" class="mb-2">Networking is a cornerstone of our community. How do you plan to engage with fellow tech professionals, 
              and what kinds of collaborations or partnerships are you interested in pursuing?</label>
            <select id="collaborationEngagement" v-model="collaborationEngagement" class="input-field w-full p-2 border border-gray-300 rounded" required>
              <option value="">Select</option>
              <option v-for="type in collaborationTypes" :key="type" :value="type">{{ type }}</option>
            </select>
          </div>
          <div class="flex flex-col">
            <label for="aspirations" class="mb-2"> What are your long-term aspirations within the tech industry, 
              and how do you see our community playing a role in helping you achieve those goals?</label>
            <select id="aspirations" v-model="aspirations" class="input-field w-full p-2 border border-gray-300 rounded" required>
              <option value="">Select</option>
              <option v-for="option in aspirationsOptions" :key="option" :value="option">{{ option }}</option>
            </select>
          </div>
          <div class="flex flex-col">
            <label for="contributions" class="mb-2">In your opinion, what unique qualities or contributions 
              can you bring to the community that would enrich the experiences of other members?</label>
            <input type="text" id="contributions" v-model="contributions" placeholder="Contributions" class="input-field w-full p-2 border border-gray-300 rounded" required />
          </div>
          <div class="flex flex-col">
            <label for="skillImportance" class="mb-2">How important is ongoing learning and 
              skill development to you, and how can our community support your growth in the tech field?</label>
            <select id="skillImportance" v-model="skillImportance" class="input-field w-full p-2 border border-gray-300 rounded" required>
              <option value="">Select Skill Importance</option>
              <option v-for="importance in skillImportances" :key="importance" :value="importance">{{ importance }}</option>
            </select>
          </div>
          <div class="flex flex-col">
            <label for="goals" class="mb-2">Lastly, if you could envision one significant achievement or milestone 
              that you'd like to accomplish as a member of our tech community, what would it be?</label>
            <select id="goals" v-model="goals" class="input-field w-full p-2 border border-gray-300 rounded" required>
              <option value="">Select</option>
              <option v-for="option in goalsOptions" :key="option" :value="option">{{ option }}</option>
            </select>
          </div>
        </div>
        <button type="submit" class="submit-button w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600">Submit</button>
      </form>
    </div>
  </div>
</template>

