<template>
  <div class="w-[80vw] mx-auto text-pinjamin flex flex-row gap-12">
    <!-- Items Informasi Mobil -->
    <div class="w-[40vw] bg-red-300">
      <span class="text-[18px] md:text-[24px]" style="line-height: 2em"
        >Ruangan</span
      >
      <swiper
        :pagination="{
          dynamicBullets: true,
        }"
        :modules="modules"
        class="mySwiper"
      >
        <swiper-slide>
          <div>
            <div
              class="border border-[#666666] gap-4 flex flex-col rounded-[18px] p-3 md:p-6"
            >
              <div class="bg-orange-50 flex justify-between items-center">
                <div class="flex flex-col bg-red-100">
                  <Span
                    class="text-[18px] md:text-[27px] font-semibold pb-3"
                    style="line-height: 1.2em"
                    >Sekolah Vokasi UNS Surakarta
                  </Span>
                  <Span
                    class="flex flex-row items-center text-[14px] md:text-[18px] gap-1"
                  >
                    <img
                      src="../../assets/calender.png "
                      class="w-[2.3333vmax] h-[2.3333vmax] md:w-[28px] md:h-[28px]"
                      alt=""
                    />
                    231313123</Span
                  >
                  <Span
                    class="flex flex-row items-center text-[14px] md:text-[18px] gap-1"
                  >
                    <img
                      src="../../assets/time-line.png "
                      class="w-[2.3333vmax] h-[2.3333vmax] md:w-[28px] md:h-[28px]"
                      alt=""
                    />
                    231313123</Span
                  >
                </div>
                <div>
                  <button
                    class="w-[15.5vmin] md:w-[15.5vmin] bg-[#EEFFEE] text-[11px] md:text-[14px] text-[#008000] rounded-lg"
                  >
                    Diterima
                  </button>
                </div>
              </div>

              <div class="h-[2px] bg-[#D9D9D9]"></div>

              <div class="h-[5vmin] flex flex-row justify-between items-center">
                <span
                  class="text-[11px] md:text-[12px]"
                  style="line-height: 1.2em"
                  >Pinjaman ruangan disetujui</span
                >
              </div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>Slide 2</swiper-slide>
      </swiper>
    </div>
    <!-- Items iinformasi ruangan -->
    <div class="w-[40vw] bg-red-300">
      ini
      <swiper
        :pagination="{
          dynamicBullets: true,
        }"
        :modules="modules"
        class="mySwiper"
      >
        <swiper-slide>Slide 1</swiper-slide>
        <swiper-slide>Slide 2</swiper-slide>
      </swiper>
    </div>
  </div>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import { useCarTransactionStore } from "../../stores/car_transaction.store";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Pagination],
    };
  },
  data() {
    return {
      carTransactionStore: useCarTransactionStore(),
      formData: {
        date: null,
        time: null,
        destination: null,
      },
    };
  },
  methods: {
    async create() {
      let car_transaction = await this.carTransactionStore.add(this.formData);

      if (car_transaction) {
        this.$router.push("/users");
      }
    },
  },
  mounted() {
    this.carTransactionStore.fetchByStatus("Diterima");
  },
};
</script>

<style>
.swiper {
  width: 100%;
  height: 90%;
}

.swiper-slide {
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
}
</style>
