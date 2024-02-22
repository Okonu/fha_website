<script setup lang="ts">
import { Icon } from '@iconify/vue';
const whatWeOfferData = [
  'Coaching',
  '1:1 mentorship',
  'Group sessions',
  'Boutique marketing',
  'Webinars'
];
const investorsData = ['Data', 'Webinars'];
const dataAndResearchData = ['Market insights', 'Statistics', 'Expert opinions', 'Webinars'];
const resourcesData = ['Blog', 'Accelerators', 'Incubators', 'Our impact reports', 'Archives'];
const aboutUsData = ['Our team', 'Join Us', 'For investors', 'For founders'];
</script>
<template lang="html">
  <footer class="bg-[#07182C] flex flex-col items-center">
    <section
      class="justify-start lg:justify-center py-4 lg:py-16 flex flex-col lg:flex-row gap-8 xl:gap-28 2xl:gap-36"
    >
      <div class="flex gap-6 lg:gap-8 self-start lg:self-auto px-8">
        <section class="flex flex-col gap-3">
          <p class="font-semibold mb-1 uppercase text-white">What we offer</p>
          <ul class="list-none space-y-3">
            <li
              class="text-[#4A90E2] font-semibold"
              v-for="item in whatWeOfferData"
              :key="whatWeOfferData.indexOf(item)"
            >
              {{ item }}
            </li>
          </ul>
        </section>
        <section class="flex flex-col gap-3">
          <p class="font-semibold mb-1 uppercase text-white">Investors</p>
          <ul class="list-none space-y-3">
            <li
              class="text-[#4A90E2] font-semibold"
              v-for="item in investorsData"
              :key="investorsData.indexOf(item)"
            >
              {{ item }}
            </li>
          </ul>
        </section>
      </div>
      <div class="flex gap-6 lg:gap-8 self-start lg:self-auto px-8">
        <section class="flex flex-col gap-3">
          <p class="font-semibold mb-1 uppercase text-white">Data and Research</p>
          <ul class="list-none space-y-3">
            <li
              class="text-[#4A90E2] font-semibold"
              v-for="item in dataAndResearchData"
              :key="dataAndResearchData.indexOf(item)"
            >
              {{ item }}
            </li>
          </ul>
        </section>
        <section class="flex flex-col gap-3">
          <p class="font-semibold mb-1 uppercase text-white">Resources</p>
          <ul class="list-none space-y-3">
            <li
              class="text-[#4A90E2] font-semibold"
              v-for="item in resourcesData"
              :key="resourcesData.indexOf(item)"
            >
              {{ item }}
            </li>
          </ul>
        </section>
      </div>
      <div class="flex gap-0 justify-between lg:gap-8 lg:self-auto px-8">
        <section class="flex flex-col gap-3">
          <p class="font-semibold mb-1 uppercase text-white">About us</p>
          <ul class="list-none space-y-3">
            <li
              class="text-[#4A90E2] font-semibold"
              v-for="item in aboutUsData"
              :key="aboutUsData.indexOf(item)"
            >
              {{ item }}
            </li>
          </ul>
        </section>
        <section class="flex flex-col gap-3">
          <p class="font-semibold mb-1 uppercase">Contact us</p>
          <p class="text-[#4A90E2] font-semibold">hello@yfs.com</p>
          <p class="text-[#4A90E2] font-semibold">0712345678</p>
          <div class="social-media-container flex gap-4">
            <Icon icon="mdi:twitter" aria-hidden color="#1C60B0" class="w-6 h-6" />
            <Icon icon="mdi:linkedin" aria-hidden color="#1C60B0" class="w-6 h-6" />
            <Icon icon="mdi:instagram" aria-hidden color="#1C60B0" class="w-6 h-6" />
            <Icon icon="mdi:facebook" aria-hidden color="#1C60B0" class="w-6 h-6" />
          </div>
        </section>
      </div>
    </section>
    <div
      class="xl:max-w-7xl w-full flex items-start px-8 gap-2 lg:gap-0 flex-col lg:flex-row justify-between py-8 lg:py-12 lg:px-0"
    >
      <a href="#"
        ><img src="/images/logo-footer-dark.svg" alt="logo" class="w-[97px] md:w-[190px]"
      /></a>
      <p class="text-[#667085]">all rights reserved by founders.ke</p>
    </div>
  </footer>
</template>
