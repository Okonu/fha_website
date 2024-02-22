<template>
  <Notification
    v-if="showNotification"
    :message="notificationMessage"
    :type="notificationType"
    @close="showNotification = false"
  />

  <Loader :show="showLoader" />

  <div v-if="!otpRequested" class="fixed inset-0 flex items-center justify-center z-50" @click.self="closeForm">
    <div class="bg-white p-6 rounded shadow-lg w-full max-w-4xl h-full backdrop-filter backdrop-blur-md" @click.stop>
      <form @submit.prevent="requestOtp" class="w-full h-full flex flex-col justify-between">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 flex-grow">
          <select v-model="userType" class="input-field" required>
            <option value="">Select User Type</option>
            <option value="founder">Founder</option>
            <option value="investor">Investor</option>
          </select>
          <input type="email" v-model="email" placeholder="Email" class="input-field" required />
        </div>
        <button type="submit" class="submit-button w-full">Request OTP</button>
      </form>
    </div>
  </div>

  <div v-else class="fixed inset-0 flex items-center justify-center z-50" @click.self="closeForm">
    <div class="bg-white p-6 rounded shadow-lg w-full max-w-4xl h-full backdrop-filter backdrop-blur-md" @click.stop>
      <form @submit.prevent="submitOtp" class="w-full h-full flex flex-col justify-between">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 flex-grow">
          <input type="text" v-model="otp" placeholder="OTP" class="input-field" required />
        </div>
        <button type="submit" class="submit-button w-full">Login</button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import Notification from '@/views/Components/Notification.vue';
import Loader from '@/views/Components/Loader.vue';
import { BASE_URL } from '@/config/api.js';   

const router = useRouter();
const showLoader = ref(false);
const showNotification = ref(false);
const notificationMessage = ref('');
const notificationType = ref('success');
const otpRequested = ref(false);
const userType = ref('');
const email = ref('');
const otp = ref('');

const closeForm = () => {
  otpRequested.value = false;
};

const requestOtp = async () => {
  showLoader.value = true;
  const endpoint = userType.value === 'founder' ? '/api/founder-request-otp' : '/api/investor-request-otp';
  try {
    const response = await fetch(`${BASE_URL}${endpoint}?email=${email.value}`, {
      method: 'POST',
    });
    if (response.ok) {
      notificationMessage.value = 'OTP request sent successfully!';
      notificationType.value = 'success';
      otpRequested.value = true;
    } else {
      notificationMessage.value = 'Failed to request OTP. Please try again.';
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
};

const submitOtp = async () => {
  showLoader.value = true;
  const endpoint = userType.value === 'founder' ? '/api/founder-login' : '/api/investor-login';
  try {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: email.value, otp: otp.value }),
    });

    if (response.ok) {
      notificationMessage.value = 'Login successful!';
      notificationType.value = 'success';
      router.push('/dashboard');
    } else {
      notificationMessage.value = 'Failed to login. Please try again.';
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
};
</script>

<style scoped>
.input-field {
  width:   100%;
  padding:   10px;
  margin:   10px   0;
  border:   1px solid #4A90E2;
  border-radius:   5px;
  background-color: #07182C;
  color: #fff;
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
  max-width:   50rem;   
}

.h-full {
  height:   50%;
}
</style>
