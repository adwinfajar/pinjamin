import { defineStore } from "pinia";
import { axiosWrapper } from "@/helper/axios-wrapper.js";

const baseUrl = import.meta.env.VITE_BASE_URL;

export const useCarStore = defineStore({
  id: "car",
  state: () => ({
    cars: [],
    car: null,
  }),
  actions: {
    async fetch() {
      let url = `${baseUrl}/car`;

      const cars = await axiosWrapper.get(url);

      if (cars) {
        this.cars = cars.data;
      }
    },
    async show(id) {
      let url = `${baseUrl}/car/${id}`;

      const cars = await axiosWrapper.get(url);

      if (cars) {
        this.cars = cars.data;
      }
    },
    async add(data) {
      const car = await axiosWrapper.post(`${baseUrl}/car`, data, true);

      this.car = car.data;

      return car;
    },
    async update(id, data) {
      return await axiosWrapper.put(`${baseUrl}/car/${id}`, data, true);
    },
    async delete(id) {
      return await axiosWrapper.delete(`${baseUrl}/car/${id}`, {}, true);
    },
  },
});
