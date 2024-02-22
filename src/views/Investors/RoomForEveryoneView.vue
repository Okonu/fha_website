<script lang="ts" setup>
const partnersArr = [
  {
    id: crypto.randomUUID(),
    imgSource: '/images/investors.png',
    title: 'Venture capital',
    text: 'Join us every first Wednesday of the month to pitch your next big idea and get'
  },
  {
    id: crypto.randomUUID(),
    imgSource: '/images/developers.png',
    title: 'Accelerators',
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
  <div class="h-auto py-2 lg:py-0 lg:h-[1733.443px] bg-[url('/images/VectorDark.svg')] bg-[#07182C]">
    <h2
      class="text-lg font-semibold lg:text-2xl leading-[44px] text-white capitalize pt-11 pb-6 text-center"
    >
      there’s room for everyone
    </h2>

    <div
      class="partners flex flex-col justify-start items-center gap-y-[18px] md:flex-wrap lg:flex-row lg:gap-6 lg:max-w-7xl w-full lg:justify-center mx-auto"
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
          class="card-rectangle w-[328px] h-[309px] rounded-lg absolute bg-[#113255] shrink-0 lg:w-[308px] lg:h-[243px]"
        ></div>
        <p
          class="card-title text-white text-center text-lg font-semibold leading-[30px] capitalize pt-2 z-10 lg:text-[20px]"
        >
          {{ partner.title }}
        </p>
        <p
          class="card-text h-[92px] text-center text-white text-sm font-semibold w-[289.701px] z-10 lg:invisible"
        >
          {{ partner.text }}
        </p>
      </div>
    </div>
    <!-- OUR SERVICES -->

    <section class="bg-[url('/images/Vector-13.png')] shrink-0 mt-[-27.73px] z-20 font-ff-inter">
      <h2
        class="text-lg xl:text-2xl leading-[44px] font-semibold lg:-tracking-[0.48px] text-white capitalize text-center h-[44px] mb-5 lg:pt-[135px] lg:pb-[42px]"
      >
        our services
      </h2>
      <div
        class="flex flex-col w-[328px] justify-start items-center gap-y-[18px] lg:gap-16 lg:w-[1286px] lg:justify-center mx-auto"
      >
        <div
          class="flex flex-col justify-center items-center w-[328px] gap-4 text-white lg:flex-row lg:w-[919px] lg:h-[265px] lg:shrink-0"
        >
          <img
            class="rounded-lg lg:order-2 lg:w-[450px] lg:shrink-0"
            src="/images/services-network.png"
            alt="Team at work"
          />

          <div
            class="flex flex-col items-start gap-3 self-start lg:w-[309px] lg:mr-40 lg:self-stretch lg:order-1 lg:gap-4"
          >
            <h3 class="text-base font-semibold lg:pt-[73px] lg:w-[450px] lg:text-xl">
              Startups bank
            </h3>
            <p class="leading-6 lg:pb-[81px]">
              Look up viable startups in fintech, health-tech, edtech, climate-tech, agritech and other areas you are interested in. Invest and watch your money grow.
            </p>
          </div>
        </div>

        <div
          class="flex flex-col justify-center items-center w-[328px] gap-4 text-white lg:flex-row lg:w-[919px] lg:h-[265px] lg:shrink-0"
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
              Research & market Analytics
            </h3>
            <p class="leading-6 lg:pb-[81px]">
              Get access to comprehensive market insights, product category research reports and other market data to support your next big decision.
            </p>
          </div>
        </div>

        <div
          class="flex flex-col justify-center items-center w-[328px] gap-4 text-white lg:flex-row lg:w-[919px] lg:h-[265px] lg:shrink-0"
        >
          <img
            class="rounded-lg lg:order-2 lg:w-[450px] lg:shrink-0"
            src="/images/services-get-funded.png"
            alt="Team at work"
          />

          <div
            class="flex flex-col items-start gap-3 self-start lg:w-[309px] lg:gap-4 lg:mr-40 lg:self-stretch lg:order-1"
          >
            <h3 class="font-semibold lg:pt-[73px] lg:w-[450px] lg:text-xl">Global impact</h3>
            <p class="leading-6 lg:pb-[81px]">
              Join founders, startup enthusiasts and fellow founders to grow a vibrant community of startupers in Kenya and East Africa.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
