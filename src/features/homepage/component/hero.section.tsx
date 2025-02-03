import background from "../../../assets/background.png"

export default function HeroSection() {
  return (
    <section className="md:min-h-screen grid md:grid-cols-2 container mx-auto px-2 md:px-0">
      <div className="flex flex-col justify-center space-y-4 my-10 md:my-0">
        <h1 className="text-3xl md:text-6xl font-bold text-blue-500"> Welcome to AtlasAI !</h1>
        <p className="text-sm md:text-base">Explore the world effortlessly! Discover comprehensive information about every country, from culture and economy to top travel destinations. Get personalized travel recommendations and instant translations with our AI assistant.</p>
        <p className="text-base md:text-lg font-semibold text-blue-500">Search, Discover, and Plan your dream journey today ! 🚀</p>
      </div>
      <div className="flex md:justify-center items-center overflow-hidden">
        <img src={background} alt="" className="animate-spin" />
      </div>
    </section>
  )
}
