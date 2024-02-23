<script setup lang="ts">
// @ts-nocheck
import { ref, watchEffect } from 'vue';

interface Props {
  message: string;
  type: 'success' | 'error';
}

const props = defineProps<Props>();

const showNotification = ref<boolean>(false);

watchEffect(() => {
  if (props.message) {
    showNotification.value = true;
    
    setTimeout(() => {
      showNotification.value = false;
    },  3000);
  }
});

const close = () => {
  showNotification.value = false;
};

defineExpose({ close });
</script>

<template>
  <transition name="fade">
    <div v-if="showNotification" :class="['notification', type]" @click="close" role="alert" aria-live="polite">
      {{ message }}
    </div>
  </transition>
</template>

<style scoped>
.notification {
  position: fixed;
  top:   20px;
  right:   20px;
  padding:   10px;
  border-radius:   5px;
  cursor: pointer;
  transition: opacity   0.3s;
}

.success {
  background-color: #4CAF50;
  color: white;
}

.error {
  background-color: #f44336;
  color: white;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity   0.3s;
}
.fade-enter, .fade-leave-to {
  opacity:   0;
}
</style>
