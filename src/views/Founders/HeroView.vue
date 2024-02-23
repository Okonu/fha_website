<template>
  <section class="lg:h-screen relative flex justify-center">
    <img
      src="/images/hero.jpeg"
      class="absolute h-full w-full brightness-[.3] object-cover z-10"
      alt="hero section background"
      densities="x1 x2"
    />
    <RouterLink to="/" class="hidden lg:block absolute z-40 w-[90%] mt-14">
      <img src="/logo.svg" alt="logo" class="w-[250px]" />
    </RouterLink>
    <div class="flex flex-col z-50 text-white items-center mt-12 lg:mt-44 lg:pt-8 pb-7">
      <RouterLink to="/"
        ><img src="/logo.svg" alt="logo" class="w-[200px] md:w-[250px] lg:hidden"
      /></RouterLink>
      <p class="mt-9 font-semibold text-sm lg:text-base">Join the largest startup group in Kenya</p>
      <div
        class="flex flex-col gap-4 lg:gap-8 mt-4 max-w-[328px] lg:max-w-[829px] md:max-w-md text-center text-white items-center"
      >
        <p class="font-semibold text-3xl lg:text-6xl">
          The journey to your next startup starts here
        </p>
        <p class="lg:max-w-lg">
          Be part of an ecosystem. Work   1-on-1 with a mentor and startup coach. Get funded and scale.
        </p>
        <div
          class="cta_buttons flex flex-col lg:flex-row lg:justify-center lg:gap-2 gap-4 font-semibold w-full"
        >
          <RouterLink to="investors" class="bg-[#F6FAFE4D] rounded-lg py-2 lg:px-5 lg:py-3"
            >I’m an investor</RouterLink
          >

          <button @click="showFounderRegistration = true" class="bg-[#4A90E2] rounded-lg py-2 lg:px-5 lg:py-3">Join as a Founder</button>
          <FounderRegistration :show="showFounderRegistration" @close="showFounderRegistration = false" />
        </div>
        
        </div>
      </div>
    
  </section>
</template>

<script setup lang="ts">
// @ts-nocheck
import { ref } from 'vue';
import FounderRegistration from '@/views/Founders/Components/FounderRegistrationView.vue';
const showFounderRegistration= ref(false);
</script>