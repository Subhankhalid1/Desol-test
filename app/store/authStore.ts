import { create } from "zustand";
import { persist } from "zustand/middleware";
import { AuthState } from "../@types/authStoreTypes";

const useAuthStore = create<AuthState>(
  persist(
    (set) => ({
      token: null,
      user: null,
      login: (userData, token) => set({ user: userData, token }),
      logout: () => {
        set({ user: null, token: null });
      },
    }),
    {
      name: "auth-storage",
      getStorage: () => localStorage,
    }
  )
);

export default useAuthStore;
