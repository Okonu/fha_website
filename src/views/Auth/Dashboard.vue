<template>
    <div class="dashboard">
      <section class="founders-section">
        <h2>Founders</h2>
        <FoundersTable :founders="founders" />
      </section>
      <section class="investors-section">
        <h2>Investors</h2>
        <InvestorsTable :investors="investors" />
     </section>
    </div>
  </template>
  
  <script setup lang="ts">
  // @ts-nocheck
  import { ref, onMounted } from 'vue';
  import FoundersTable from '@/views/Auth/Components/FoundersTable.vue';
  import InvestorsTable from '@/views/Auth/Components/InvestorsTable.vue'; 
  import { BASE_URL } from '@/config/api.js'; 
  
  const founders = ref([]);
  
  onMounted(async () => {
    try {
      const response = await fetch(`${BASE_URL}/api/founders`);
      founders.value = await response.json();
    } catch (error) {
      console.error('Failed to fetch founders:', error);
    }
  });

  const investors = ref([]);

  onMounted(async () => {
    try {
        const response = await fetch(`${BASE_URL}/api/investors`);
        investors.value = await response.json();
    } catch (error) {
        console.error('Failed to fetch investors:', error);
    }
 });
  </script>
  
  <style scoped>
  .dashboard {
    padding:  20px;
  }

  .investors-section {
    margin-bottom:   20px;
    }

  .founders-section {
    margin-bottom:  20px;
  }
  </style>
  