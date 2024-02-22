<script setup lang="ts">
import {
  AccordionContent,
  AccordionHeader,
  AccordionItem,
  AccordionRoot,
  AccordionTrigger
} from 'radix-vue'
import { Icon } from '@iconify/vue'
const accordionItems = [
  {
    value: 'item-1',
    title: 'Is Young Founders free for everyone?',
    content:
      'Yes, we have a basic package that is free for all founders and investors. You get access to the community’s WhatsApp group where amazing conversations take place every day.'
  },
  {
    value: 'item-2',
    title: 'Does Young Founders fund or arrange for funding for startups?',
    content:
      'No, Young Founders does not fund or arrange for funding for startups. We provide a community for founders and investors to meet to spur conversations around funding.'
  },
  {
    value: 'item-3',
    title: 'Does Young Founders charge for membership?',
    content: 'Yes, Young Founders has a premium membership package which starts at $4.99 per month which allows a founder access to a list of investors, market research reports, pitch deck templates and bundled services including marketing, legal and accounting services.'
  },
  {
    value: 'item-4',
    title: 'Does Young Founders organize physical events?',
    content: 'Yes, Young Founders organizes both virtual and physical events targeted at first-time and seasoned founders. Our mixers will be taking place once a month at venues that will be announced.'
  },
]
</script>
<template lang="html">
  <section class="px-6 lg:px-0 bg-[#07182C] pt-4 text-white">
    <div class="flex flex-col gap-2 lg:gap-5 text-center lg:max-w-3xl lg:mx-auto">
      <h2 class="font-semibold text-lg lg:text-2xl">Frequently asked questions</h2>
      <p class="capitalize text-sm lg:text-base">
        Everything you need to know about the product and billing.
      </p>
    </div>
    <div class="lg:max-w-6xl mx-auto mt-8 lg:mt-16">
      <AccordionRoot type="single" default-value="'item-1'" :collapsible="true">
        <template v-for="item in accordionItems" :key="item.value">
          <AccordionItem class="accordion-item" :value="item.value">
            <AccordionHeader class="flex mt-6 lg:mt-8">
              <AccordionTrigger class="accordion-trigger group flex justify-between w-full">
                <span class="font-medium text-start text-sm lg:text-lg">{{
                  item.title
                }}</span>
                <Icon
                  icon="radix-icons:chevron-down"
                  class="ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300 group-data-[state=open]:rotate-180"
                  aria-hidden
                />
              </AccordionTrigger>
            </AccordionHeader>
            <AccordionContent class="accordion-content text-sm lg:text-lg">
              <div class="py-2 lg:px-5 lg:py-4">
                {{ item.content }}
              </div>
            </AccordionContent>
          </AccordionItem>
        </template>
      </AccordionRoot>
    </div>
    <section
      class="flex max-w-6xl mx-auto flex-col items-center justify-center p-4 lg:p-8 rounded-2xl text-white bg-[#0E2541] mt-8 lg:mt-16"
    >
      <img src="/images/Avatargroup.png" alt="avatar group" />
      <p class="font-semibol mt-4 lg:mt-8 font-semibold lg:text-lg">Still have questions?</p>
      <p class="mt-2 text-center text-sm lg:text-base">
        Can’t find the answer you’re looking for? Please chat to our friendly team.
      </p>
      <button
        type="button"
        class="bg-[#4A90E2] font-semibold mt-4 text-white rounded-lg px-4 py-2 lg:px-5 lg:py-3 lg:mt-8"
      >
        Get in touch
      </button>
    </section>
  </section>
</template>

<style scoped>
/* styles.css */
.AccordionContent {
  overflow: hidden;
}
.AccordionContent[data-state='open'] {
  animation: slideDown 300ms ease-out;
}
.AccordionContent[data-state='closed'] {
  animation: slideUp 300ms ease-out;
}

@keyframes slideDown {
  from {
    height: 0;
  }
  to {
    height: var(--radix-accordion-content-height);
  }
}

@keyframes slideUp {
  from {
    height: var(--radix-accordion-content-height);
  }
  to {
    height: 0;
  }
}
</style>
