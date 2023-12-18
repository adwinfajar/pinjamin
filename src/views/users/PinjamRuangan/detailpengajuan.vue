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
      <div class="">
        <div class="grid md:flex md:flex-row md:justify-around gap-2">
          <span class="text-[14px] md:text-[16px] md:w-[20%] text-[#2B9FDC]"
            >Ruangan</span
          >
          <div class="grid gap-2 md:w-[80%]">
            <div class="flex flex-col text-[12px] gap-1">
              <label for="" class="md:text-[16px]">Ruangan</label>
              <p>
                {{ roomStore.rooms.name }} -
                {{ roomStore.rooms.capacity }} Orang
              </p>
            </div>
          </div>
        </div>
      </div>
      <!-- form pinjaman -->
      <div class="">
        <div class="grid md:flex md:flex-row md:justify-around gap-2">
          <span class="text-[14px] md:text-[16px] md:w-[20%] text-[#2B9FDC]"
            >Pinjaman</span
          >
          <div class="grid gap-2 md:w-[80%]">
            <div class="flex flex-col text-[12px] gap-1">
              <label for="" class="md:text-[16px]">Acara</label>
              <p>{{ ruangStore.acara }}</p>
            </div>
            <div class="flex flex-col text-[12px] gap-1">
              <label for="" class="md:text-[16px]">Deskripsi</label>
              <p>{{ ruangStore.deskripsi }}</p>
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
          <div class="grid grid-cols-3 gap-2">
            <div class="flex flex-col text-[12px] gap-1">
              <label for="" class="md:text-[16px]">Tanggal</label>
              <p>{{ ruangStore.tanggal }}</p>
            </div>
            <div class="flex flex-col text-[12px] gap-1">
              <label for="" class="md:text-[16px]">Mulai</label>
              <p>{{ ruangStore.jammulai }}</p>
            </div>
            <div class="flex flex-col text-[12px] gap-1">
              <label for="" class="md:text-[16px]">Selesai</label>
              <p>{{ ruangStore.jamselesai }}</p>
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
            >Peserta & Konsumsi</span
          >
          <div class="grid grid-rows-2 gap-2 w-[100%] md:w-[80%]">
            <div class="grid grid-cols-3 gap-2">
              <div class="flex flex-col text-[12px] gap-1">
                <label for="" class="md:text-[16px]">Peserta</label>
                <p>{{ ruangStore.peserta }}</p>
              </div>
              <div class="flex flex-col text-[12px] gap-1">
                <label for="" class="md:text-[16px]">Konsumsi</label>
                <p v-if="ruangStore.konsumsi == 0">Tidak Pakai</p>
                <p v-if="ruangStore.konsumsi == 1">Pakai</p>
              </div>
            </div>
            <div class="text-[12px] gap-1">
              <label for="" class="md:text-[16px]">Deskripsi</label>
              <p>
                {{ ruangStore.keterangan }}
              </p>
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
          class="bg-[#E26B00] hover:bg-orange-600 p-1 md:px-8 md:py-[10px] flex justify-center rounded-md md:rounded-[16px] text-white"
        >
          Selanjutnya
        </button>
      </div>
    </form>
  </div>
</template>
<script>
import { useRoomTransactionStore } from "../../../stores/room_transaction.store";
import { useRoomStore } from "../../../stores/room.store";
import { useRuangStore1 } from "../../../stores/stores2";

export default {
  data() {
    return {
      roomStore: useRoomStore(),
      roomTransactionStore: useRoomTransactionStore(),
      formData: {
        room_id: null,
        date: null,
        time_start: null,
        time_end: null,
        event: null,
        description: null,
        participant: null,
        consumption: null,
        note: null,
      },
    };
  },
  methods: {
    async create() {
      this.formData.room_id = this.ruangStore.ruangan;
      this.formData.date = this.ruangStore.tanggal;
      this.formData.time_start = this.ruangStore.jammulai;
      this.formData.time_end = this.ruangStore.jamselesai;
      this.formData.event = this.ruangStore.acara;
      this.formData.description = this.ruangStore.deskripsi;
      this.formData.participant = this.ruangStore.peserta;
      this.formData.consumption = this.ruangStore.konsumsi;
      this.formData.note = this.ruangStore.keterangan;

      let room_transaction = await this.roomTransactionStore.add(this.formData);

      if (room_transaction) {
        this.$router.push("/users");
      }
    },
  },
  mounted() {
    this.roomStore.show(this.ruangStore.ruangan);
  },
  setup() {
    const ruangStore = useRuangStore1();

    return { ruangStore };
  },
};
</script>
