<script setup lang="ts">
// @ts-nocheck
import { ref } from 'vue';
import InvestorForm from '@/views/Investors/Components/InvestorRegistrationView.vue';

const showInvestorForm = ref(false);
</script>

<template>
  <section class="lg:h-screen hero-section relative flex justify-center">
    <RouterLink to="/" class="hidden lg:block absolute z-40 w-[90%] mt-14">
      <img src="/logo.svg" alt="logo" class="w-[250px]" />
    </RouterLink>
    <div class="flex flex-col z-50 text-white items-center mt-12 lg:mt-44 lg:pt-8 pb-7">
      <RouterLink to="/"
        ><img src="/logo.svg" alt="logo" class="w-[200px] md:w-[250px] lg:hidden"
      /></RouterLink>
      <p class="mt-9 font-semibold text-sm lg:text-base">Bet on the next biggest startup idea</p>
      <div
        class="flex flex-col gap-4 lg:gap-8 mt-4 max-w-[328px] lg:max-w-[829px] md:max-w-md text-center text-white items-center"
      >
        <p class="font-semibold text-2xl lg:text-6xl">
          Invest in Innovation: Powering the Future Together
        </p>
        <p class="text-sm md:text-base lg:max-w-lg">
          Get access to a growing list of startups, market analytics research and a vibrant
          community of founders and investors, now all in one place
        </p>
        <button @click="showInvestorForm = true" class="open-form-button">Join as Investor</button>
    <InvestorForm :show="showInvestorForm" @close="showInvestorForm = false" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-section {
  background: linear-gradient(180deg, rgb(21,  49,  82), rgb(10,  30,  52));
}

.open-form-button {
  padding:  10px  20px;
  background-color: #4A90E2;
  color: #fff;
  border: none;
  border-radius:  5px;
  cursor: pointer;
  margin-bottom:  20px;
}

.open-form-button:hover {
  background-color: #3a80c1;
}
</style>