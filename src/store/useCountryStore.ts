import { ICountries } from "@/types/types";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface OptionsStore {
  countries: ICountries[];
  selectedCountry: string | null;
  addCountries: (data: ICountries[]) => void;
  setSelectedCountry: (data: string) => void;
}

const useCountryStore = create<OptionsStore>()(
    persist(
      (set) => ({
      countries: [],
      selectedCountry: null,
      addCountries: (data) => set({ countries: data }),
      setSelectedCountry: (data) => set({selectedCountry: data})
    }),
    {
      name: 'countries',
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useCountryStore;