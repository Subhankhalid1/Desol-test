import { create } from "zustand";
import { fetchCar } from "../services/carApi";

interface CarStore {
  cars: any[];
  loading: boolean;
  page: number;
  limit: number;
  totalCars: number;
  totalPages: number;
  fetchCars: (page: number, limit: number, token:any) => void;
}

const useMovieStore = create<CarStore>((set) => ({
  cars: [],
  loading: false,
  page: 1,
  limit: 6,
  totalCars: 0,
  totalPages: 1,
  fetchCars: async (page, limit, token) => {
    set({ loading: true });
    try {
      const response = await fetchCar(page, limit, token);
      set({
        cars: response.data.data.cars || [],
        totalCars: response.data.data.pagination.totalCars,
        totalPages: response.data.data.pagination.totalPages,
        loading: false,
      });
    } catch (error) {
      console.error("Error fetching cars:", error);
      set({ loading: false });
    }
  },
}));

export default useMovieStore;
