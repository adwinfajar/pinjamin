import { defineStore } from "pinia";
import { axiosWrapper } from "@/helper/axios-wrapper.js";

const baseUrl = import.meta.env.VITE_BASE_URL;

export const useRoomStore = defineStore({
  id: "room",
  state: () => ({
    rooms: [],
    room: null,
  }),
  actions: {
    async fetch() {
      let url = `${baseUrl}/room`;

      const rooms = await axiosWrapper.get(url);

      if (rooms) {
        this.rooms = rooms.data;
      }
    },
    async show(id) {
      let url = `${baseUrl}/room/${id}`;

      const rooms = await axiosWrapper.get(url);

      if (rooms) {
        this.rooms = rooms.data;
      }
    },
    async add(data) {
      const room = await axiosWrapper.post(`${baseUrl}/room`, data, true);

      this.room = room.data;

      return room;
    },
    async update(id, data) {
      return await axiosWrapper.put(`${baseUrl}/room/${id}`, data, true);
    },
    async delete(id) {
      return await axiosWrapper.delete(`${baseUrl}/room/${id}`, {}, true);
    },
  },
});
