<script setup lang="ts">
import { ref } from 'vue'
const impactStatsInfo = ref([
  { stats: '950', statsContent: 'Active community members' },
  { stats: '80', statsContent: 'Pitches done' },
  { stats: '90', statsContent: 'Startups joined' }
])
</script>
<template lang="html">
  <section class="mt-12 px-4">
    <div class="flex flex-col gap-2 lg:gap-5 text-center lg:max-w-3xl lg:mx-auto">
      <h2 class="font-semibold text-lg lg:text-2xl">Our Impact</h2>
      <p class="text-[#475467] capitalize text-sm lg:text-base">
        we continue to impact the founders ecosystem. check out our
        <a href="#" class="text-[#4A90E2]">impact report</a>
      </p>
    </div>
    <div
      class="stats flex justify-between items-center px-4 mt-4 py-6 lg:max-w-6xl lg:mx-auto lg:p-16 lg:gap-8"
    >
      <section
        class="flex flex-col items-center max-w-[100px] lg:max-w-fit text-center w-full justify-between gap-4 lg:gap-3"
        v-for="stat in impactStatsInfo"
        :key="impactStatsInfo.indexOf(stat)"
      >
        <p class="text-2xl text-[#4A90E2] font-semibold lg:text-5xl">{{ stat.stats }}+</p>
        <p class="self-stretch text-[10px] text-center lg:text-base text-[#42307D]">
          {{ stat.statsContent }}
        </p>
      </section>
    </div>
  </section>
</template>
