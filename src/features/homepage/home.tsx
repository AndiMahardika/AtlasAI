import Navbar from "@/components/share/navbar";
import HeroSection from "./component/hero.section";
import Select from 'react-select'
import Card from "@/components/share/card";
import Footer from "@/components/share/footer";
import AboutUs from "./component/aboutus.section";
import { ICountries } from "@/types/types";
import { ArrowUpFromLine, Loader } from "lucide-react";
import useCountryStore from "@/store/useCountryStore";
import useCountry from "./hooks/useCountry";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip"
import useNavigateToDetail from "@/hooks/useNavigateToDetail";

export default function Home() {
  const { data, loading, error } = useCountry()
  const { countries } = useCountryStore();
  const [showButton, setShowButton] = useState(false)
  const { getDetail } = useNavigateToDetail()

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if(window.scrollY > 600){
        setShowButton(true)
      } else {
        setShowButton(false)
      }
    })
  }, [])

  return (
    <main className="relative">
      <Navbar/>
      <HeroSection/>
      <AboutUs />

      <section className="container mx-auto space-y-3 px-2 md:px-0 pt-8 md:pt-0">
        <h3 className="text-3xl md:text-4xl text-center font-bold text-blue-500">Explore Countries</h3>
        <Select 
          options={countries} 
          className="md:w-1/2 mx-auto" 
          placeholder="Search for a country..." 
          onChange={(e) => getDetail(e?.value as string)}></Select>
        { loading ? (
          <div className="flex flex-col items-center justify-center py-10 space-y-3">
            <Loader className="animate-spin" size={42} />
            <p className="text-lg font-semibold text-slate-400">Loading data...</p>
          </div>
        ) : error ? (
          <p className="text-red-500 px-2 md:text-lg py-4 md:py-10 border-2 border-red-500 w-fit mx-auto"><span className="font-bold">Error</span>: Failed to fetch countries. Please check your internet connection or try again later.</p>
        ) : (
          <div className="grid md:grid-cols-4 gap-x-2">
          {data.countries && (
            data.countries.map((item: ICountries) => (
              <Card key={item.code} data={item}/>
            ))
          )}
          </div>
        )}
      </section>
      
      {showButton && (
        <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
          <Button size={"icon"} className="sticky bottom-5 left-full md:-translate-x-3/4 -translate-x-4" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <ArrowUpFromLine />
          </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Scrool To Top</p>
          </TooltipContent>
        </Tooltip>
        </TooltipProvider>
      )}

      <Footer/>
    </main>
  )
}
