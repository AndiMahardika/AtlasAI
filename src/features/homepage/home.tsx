import Navbar from "@/components/share/navbar";
import HeroSection from "./component/hero.section";
import Select from 'react-select'
import Card from "@/components/share/card";
import Footer from "@/components/share/footer";
import AboutUs from "./component/aboutus.section";

const options = [
  { value: 'japan', label: '🇯🇵 Japan' },
  { value: 'france', label: '🇫🇷 France' },
  { value: 'brazil', label: '🇧🇷 Brazil' }
]

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar/>
      <HeroSection/>
      <AboutUs />

      <section className="container mx-auto space-y-3 px-2 md:px-0 pt-8 md:pt-0">
        <h3 className="text-3xl md:text-4xl text-center font-bold text-blue-500">Explore Countries</h3>
        <Select options={options} className="md:w-1/2 mx-auto" placeholder="Search for a country..."></Select>
        <div className="grid md:grid-cols-4 gap-x-2">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </section>
      
      <Footer/>
    </main>
  )
}
