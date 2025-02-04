import { IDetail } from "@/types/types";
import Select from "react-select";
import Card from "@/components/share/card";
import useNavigateToDetail from "@/hooks/useNavigateToDetail";

interface IContinets {
  country: IDetail;
}

export default function Continent({ country }: IContinets) {
  const { getDetail } = useNavigateToDetail()

  const continentCountries = country.continent.countries.map((item) => ({
    label: `${item.emoji} ${item.name}`,
    value: item.code
  }));

  return (
    <div className="container mx-auto space-y-3 px-2 md:px-0">
      <h1 className="text-xl md:text-3xl font-bold mt-4 text-blue-500">
        Continent: {country.continent.name}
      </h1>
      <Select options={continentCountries} className="md:w-1/2 mx-auto" placeholder="Search for a country..." onChange={e => getDetail(e?.value)} />
      <div className="grid md:grid-cols-4 gap-x-2">
        {country.continent.countries.length > 0 ? (
          country.continent.countries.map((item) => <Card key={item.code} data={item} />)
        ) : (
          <p>No continent available</p>
        )}
      </div>
    </div>
  );
}