import Navbar from "@/components/share/navbar";
import { useCountryDetail } from "./hooks/useCountryDetail";
import CountryInfo from "./component/country.info";
import Subdivisions from "./component/subdivisions";
import States from "./component/states";
import Continent from "./component/continent";

export default function DetailPage() {
  const { country, loading, error } = useCountryDetail();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!country) return <p>Data not found</p>;

  return (
    <main>
      <Navbar />
      <section>
        <div className="container mx-auto grid md:grid-cols-2 px-2 md:px-0">
          <CountryInfo country={country} />
          <div className="flex justify-center items-center">
            <h1 className="text-[200px] text-center">{country.emoji}</h1>
          </div>
        </div>
      </section>
      <Subdivisions country={country} />
      <States country={country} />
      <Continent country={country} />
    </main>
  );
}
