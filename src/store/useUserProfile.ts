import { IProfile } from "@/types/types";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface OptionsStoreUser {
  userData: IProfile | null;
  setUserData: (data: IProfile) => void
  cleanUser: () => void
}

const useUserStore = create<OptionsStoreUser>()(
    persist(
      (set) => ({
      userData: null,
      setUserData: (data: IProfile) => set({userData: data}),
      cleanUser: () => set({userData : null})
    }),
    {
      name: 'userAtlasAI',
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useUserStore;