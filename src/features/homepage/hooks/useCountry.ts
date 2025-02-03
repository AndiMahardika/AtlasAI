import useCountryStore from "@/store/useCountryStore";
import { ICountries } from "@/types/types";
import { gql, useQuery } from "@apollo/client";
import { useEffect } from "react";

const LIST_COUNTRIES = gql`
  {
    countries {
      name
      code
      emoji
      capital
      currency
    }
  }
`;

export default function useCountry() {
  const { data, loading, error } = useQuery(LIST_COUNTRIES);
  const { addCountries } = useCountryStore()

  useEffect(() => {
    if (data) {
      const formattedData = data.countries.map((item: ICountries) => ({
        label: `${item.emoji} ${item.name}`,
        value: item.code
      }));
      addCountries(formattedData);
    }
  }, [data, addCountries])

  return { data, loading, error }
}
