<template>
  <!-- main content -->
  <div class="w-[80vw] mx-auto text-pinjamin flex flex-col gap-2">
    <!-- bagian breadcrumb -->
    <div class="text-[20px] bg-slate-200" style="line-height: 1.2em">
      breadcrumb
    </div>

    <!-- bagian step section -->
    <div class="text-[20px] bg-slate-200 h-[20vh]" style="line-height: 1.2em">
      bagian step section
    </div>
    <!-- bagian form request -->
    <form
      action=""
      @submit.prevent="create"
      class="p-3 md:p-9 rounded-[36px] border border-[#D9D9D9] flex flex-col gap-5"
    >
      <!-- form pinjaman -->
      <div class="">
        <div class="grid md:flex md:flex-row md:justify-around gap-2">
          <span class="text-[14px] md:text-[16px] md:w-[20%] text-[#2B9FDC]"
            >Pinjaman</span
          >
          <div class="grid gap-2 md:w-[80%]">
            <div class="flex flex-col text-[12px] gap-1">
              <label for="" class="md:text-[16px]">Tujuan</label>
              <p>{{ mobilStore.tujuan }}</p>
            </div>
            <div class="flex flex-col text-[12px] gap-1">
              <label for="" class="md:text-[16px]">Deskripsi</label>
              <p>{{ mobilStore.deskripsi }}</p>
            </div>
          </div>
        </div>
      </div>
      <!-- date & time -->
      <div class="grid md:flex md:flex-row md:justify-start gap-2">
        <span class="text-[14px] md:text-[16px] md:w-[20%] text-[#2B9FDC]"
          >Tanggal & Jam</span
        >
        <div class="grid grid-rows-1 gap-2 w-[100%] md:w-[80%]">
          <div class="grid grid-cols-2 gap-2">
            <div class="flex flex-col text-[12px] gap-1">
              <label for="" class="md:text-[16px]">Tanggal</label>
              <p>{{ mobilStore.tanggal }}</p>
            </div>
            <div class="flex flex-col text-[12px] gap-1">
              <label for="" class="md:text-[16px]">Jam</label>
              <p>{{ mobilStore.waktu }}</p>
            </div>
          </div>
        </div>
      </div>
      <!-- <div class="">
        <div class="grid md:flex md:flex-row md:justify-start gap-2">
          <span class="text-[14px] md:text-[16px] md:w-[20%]"
            >Tanggal & Jam</span
          >

          <div class="grid grid-cols-2 gap-2">
            <div class="flex flex-col text-[12px] gap-1">
              <label for="" class="md:text-[16px]">Tanggal</label>
              
            </div>
            <div class="flex flex-col text-[12px] gap-1">
              <label for="" class="md:text-[16px]">Jam</label>
              
            </div>
          </div>
        </div>
      </div> -->
      <!-- penumpang & driver -->
      <div class="">
        <div class="grid md:flex md:flex-row md:justify-start gap-2">
          <span class="text-[14px] md:text-[16px] md:w-[20%] text-[#2B9FDC]"
            >Panumpang & Sopir</span
          >
          <div class="grid grid-rows-2 gap-2 w-[100%] md:w-[80%]">
            <div class="grid grid-cols-2 gap-2">
              <div class="flex flex-col text-[12px] gap-1">
                <label for="" class="md:text-[16px]">Penumpang</label>
                <p>{{ mobilStore.penumpang }}</p>
              </div>
              <div class="flex flex-col text-[12px] gap-1">
                <label for="" class="md:text-[16px]">Sopir</label>
                <p>{{ mobilStore.sopir }}</p>
              </div>
            </div>
            <div class="text-[12px] gap-1">
              <label for="" class="md:text-[16px]">Deskripsi</label>
              <p>{{ mobilStore.keterangan }}</p>
            </div>
          </div>
        </div>
      </div>
      <!-- rectangle -->
      <div class="h-[1px] bg-[#D9D9D9]"></div>
      <!-- button submit -->
      <div
        class="h-[3vmax] text-[12px] md:text-[16px] flex justify-end items-center gap-5"
      >
        <button class="w-[25%] rounded-md md:w-[10%]">Batal</button>
        <button
          class="bg-[#E26B00] hover:bg-orange-600 p-1 md:px-8 md:py-[10px] flex justify-center rounded-md md:rounded-[16px] text-white md:w-[10%]"
        >
          Selanjutnya
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import { useMobilStore1 } from "@/stores/stores";
import { useCarTransactionStore } from "../../../stores/car_transaction.store";

export default {
  data() {
    // const mobilStore = useMobilStore1();
    return {
      mobilStore: useMobilStore1(),
      carTransactionStore: useCarTransactionStore(),
      formData: {
        date: null,
        time: null,
        destination: null,
        description: null,
        passanger: null,
        passanger_description: null,
        driver: null,
      },
    };
  },
  methods: {
    async create() {
      this.formData.destination = this.mobilStore.tujuan;
      this.formData.description = this.mobilStore.deskripsi;
      this.formData.date = this.mobilStore.tanggal;
      this.formData.time = this.mobilStore.waktu;
      this.formData.passanger = this.mobilStore.penumpang;
      this.formData.driver = this.mobilStore.sopir;
      this.formData.passanger_description = this.mobilStore.keterangan;

      let car_transaction = await this.carTransactionStore.add(this.formData);

      if (car_transaction) {
        this.$router.push("/users");
      }
    },
  },
};
</script>
