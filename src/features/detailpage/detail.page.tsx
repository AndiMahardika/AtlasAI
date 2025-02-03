import Navbar from "@/components/share/navbar";
import { useCountryDetail } from "./hooks/useCountryDetail";
import CountryInfo from "./component/country.info";
import Subdivisions from "./component/subdivisions";
import States from "./component/states";
import Continent from "./component/continent";
import { Loader } from "lucide-react";

export default function DetailPage() {
  const { country, loading, error } = useCountryDetail();

  return (
    <main>
      <Navbar />

      { loading ? (
          <div className="min-h-screen flex flex-col items-center justify-center">
            <Loader className="animate-spin" size={42} />
            <p className="text-lg font-semibold text-slate-400">Loading data...</p>
          </div>
        ) : error ? (
          <div className="min-h-screen flex items-center justify-center">
            <p className="text-red-500 p-2 md:text-lg py-4 md:py-10 border-2 border-red-500 w-fit mx-auto"><span className="font-bold">Error</span>: Failed to fetch country details. Please check your internet connection or try again later.</p>
          </div>
        ) : (
          <>
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
          </>
        )}
    </main>
  );
}
