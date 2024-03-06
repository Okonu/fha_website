<script lang="ts" setup>
const partnersArr = [
  {
    id: crypto.randomUUID(),
    imgSource: '/images/founders.png',
    title: 'founders',
    text: 'Join us every first Wednesday of the month to pitch your next big idea and get'
  },
  {
    id: crypto.randomUUID(),
    imgSource: '/images/investors.png',
    title: 'investors',
    text: 'Join us every first Wednesday of the month to pitch your next big idea and get'
  },
  {
    id: crypto.randomUUID(),
    imgSource: '/images/developers.png',
    title: 'developers',
    text: 'Join us every first Wednesday of the month to pitch your next big idea and get'
  },
  {
    id: crypto.randomUUID(),
    imgSource: '/images/incubators.png',
    title: 'incubators',
    text: 'Join us every first Wednesday of the month to pitch your next big idea and get'
  }
]
</script>

<template>
  <div class="h-auto py-2 lg:py-0 lg:h-[1733.443px] bg-[url('/images/Vector-12.png')]">
    <h2
      class="text-lg font-semibold lg:text-2xl leading-[44px] text-[#07182C] capitalize pt-[79px] pb-6 text-center"
    >
      there’s room for everyone
    </h2>

    <div
      class="partners flex flex-col w-[328px] justify-start items-center gap-y-[18px] md:flex-wrap lg:flex-row lg:gap-x-4 lg:w-[1286px] lg:justify-center mx-auto"
    >
      <div
        class="card flex flex-col items-center justify-center relative"
        v-for="partner in partnersArr"
        :key="partner.id"
      >
        <img
          class="card-image w-[300px] h-[270px] rounded-t-lg z-10 pt-2 px-[13.75px]"
          :src="partner.imgSource"
          alt="Partners"
        />
        <div
          class="card-rectangle w-[328px] h-[309px] rounded-lg absolute bg-white shrink-0 lg:w-[308px] lg:h-[243px]"
        ></div>
        <p
          class="card-title text-[#4a90e2] text-center text-lg font-semibold leading-[30px] capitalize pt-2 z-10 lg:text-[#07182C] lg:text-[20px]"
        >
          {{ partner.title }}
        </p>
        <p
          class="card-text h-[92px] text-center text-[#667085] text-sm font-semibold w-[289.701px] z-10 lg:invisible"
        >
          {{ partner.text }}
        </p>
      </div>
    </div>
    <!-- OUR SERVICES -->

    <section class="bg-[url('/images/Vector-13.png')] shrink-0 mt-[-27.73px] z-20 font-ff-inter">
      <h2
        class="text-lg xl:text-2xl leading-[44px] font-semibold lg:-tracking-[0.48px] text-[#07182C] capitalize text-center h-[44px] mb-5 lg:pt-[135px] lg:pb-[42px]"
      >
        our services
      </h2>
      <div
        class="flex flex-col w-[328px] justify-start items-center gap-y-[18px] lg:gap-16 lg:w-[1286px] lg:justify-center mx-auto"
      >
        <div
          class="flex flex-col justify-center items-center w-[328px] gap-4 text-[#1C1C1C] lg:flex-row lg:w-[919px] lg:h-[265px] lg:shrink-0"
        >
          <!-- lg:pb-[64px] lg: border lg: border-red-400-->
          <img
            class="rounded-lg lg:order-2 lg:w-[450px] lg:shrink-0"
            src="/images/services-network.png"
            alt="Team at work"
          />

          <div
            class="flex flex-col items-start gap-3 self-start lg:w-[309px] lg:mr-40 lg:self-stretch lg:order-1 lg:gap-4"
          >
            <h3 class="text-base font-semibold lg:pt-[73px] lg:w-[450px] lg:text-xl">
              Network with like-minded people
            </h3>
            <p class="leading-6 lg:pb-[81px]">
              Join us every first Wednesday of the month to pitch your next big idea and get
              feedback from prospective customers and VCS
            </p>
          </div>
        </div>

        <div
          class="flex flex-col justify-center items-center w-[328px] gap-4 text-[#1C1C1C] lg:flex-row lg:w-[919px] lg:h-[265px] lg:shrink-0"
        >
          <img
            class="rounded-lg lg:w-[450px] lg:shrink-0"
            src="/images/services-resources.png"
            alt="Team at work"
          />

          <div
            class="flex flex-col items-start gap-3 self-start lg:w-[309px] lg:self-stretch lg:ml-40 lg:order-1 lg:gap-4"
          >
            <h3 class="text-base font-semibold capitalize lg:pt-[73px] lg:w-[450px] lg:text-xl">
              access resources
            </h3>
            <p class="leading-6 lg:pb-[81px]">
              Get access to business plans, pitch deck templates, BRS, licenses, contracts,
              financial statements on our database
            </p>
          </div>
        </div>

        <div
          class="flex flex-col justify-center items-center w-[328px] gap-4 text-[#1C1C1C] lg:flex-row lg:w-[919px] lg:h-[265px] lg:shrink-0"
        >
          <img
            class="rounded-lg lg:order-2 lg:w-[450px] lg:shrink-0"
            src="/images/services-get-funded.png"
            alt="Team at work"
          />

          <div
            class="flex flex-col items-start gap-3 self-start lg:w-[309px] lg:gap-4 lg:mr-40 lg:self-stretch lg:order-1"
          >
            <h3 class="font-semibold lg:pt-[73px] lg:w-[450px] lg:text-xl">Get Funded</h3>
            <p class="leading-6 lg:pb-[81px]">
              Pitch your idea to the network of angel investors, VCs and get seed capital
            </p>
          </div>
        </div>

      </div>
    </section>
  </div>
</template>
