import Navbar from "@/components/share/navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import useCountryStore from "@/store/useCountryStore";
import { SendHorizontal } from "lucide-react";
import Select from "react-select";

export default function Chatbot() {
  const { countries } = useCountryStore()

  return (
    <main className="min-h-screen flex flex-col justify-between px-2 bg-white">
      
      <div className="sticky top-0 left-0 right-0">
      <Navbar />
      <div className="flex flex-col md:flex-row max-w-3xl w-full gap-x-1 gap-y-1 md:gap-y-0 mx-auto mt-1">
        {/* <Select options={countries} className="max-w-3xl mx-auto w-full sticky mt-1" /> */}
        <Select options={countries} className="w-full" />
        <div className="flex gap-x-1">
          <Button className="bg-blue-500 text-wrap md:text-nowrap">Get travel recommendations</Button>
          <Button className="bg-blue-500 text-wrap md:text-nowrap">Translate country information</Button>
        </div>
      </div>
      </div>

      {/* <section className="max-w-3xl mx-auto bg-white border-x-4 border-slate-900 flex flex-col justify-between py-2"> */}
        {/* <div className="max-w-3xl mx-auto w-full mt-2"> */}
          {/* <Select options={countries} className="max-w-3xl mx-auto w-full sticky" /> */}
        {/* </div> */}

        <div className="py-2 space-y-2 flex-1 max-w-3xl w-full mx-auto h-full">
          <div className="w-full grid text-white justify-items-end pl-10">
            <p className="bg-slate-200 text-sm p-2 rounded-md text-black">Get travel recommendations</p>
          </div>
          <div className="w-full grid text-white justify-items-start pr-10">
            <p className="bg-slate-900 text-sm p-2 rounded-md text-white">Translate country information</p>
          </div>
          <div className="w-full grid text-white justify-items-end pl-10">
            <p className="bg-slate-200 text-sm p-2 rounded-md text-black"> lorem </p>
          </div>
          <div className="w-full grid text-white justify-items-start pr-10">
            <p className="bg-slate-900 text-sm p-2 rounded-md text-white">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae quidem expedita deserunt temporibus eveniet odio nulla quam cumque laboriosam. Quidem sequi architecto cupiditate ipsam dolorem magni explicabo totam velit similique in, praesentium repudiandae eum, necessitatibus veritatis! Suscipit doloremque possimus totam. Nesciunt dolorum commodi vel tenetur quis unde, tempore, doloribus, sapiente obcaecati quia totam laboriosam quod alias? Ratione, ducimus. Fuga, neque veniam ipsum odio eligendi illum quae nostrum velit perspiciatis earum hic laboriosam nesciunt modi, maiores voluptatibus, error molestias deserunt. Tempora ad doloremque possimus doloribus, animi quisquam ducimus necessitatibus veniam incidunt officia a, fugit provident nemo illum pariatur cumque sunt consequuntur iste ut? Impedit, sunt doloremque quo explicabo deleniti dolores? Eligendi rerum facilis cumque iusto officiis quis animi consequatur dolore veritatis in voluptate esse, labore, architecto sunt! Accusamus, ab harum illum voluptates dolorum nihil fugiat optio repudiandae eos veritatis magni a magnam eaque ad. Laborum qui ab tenetur reprehenderit quibusdam esse quisquam! Laboriosam quae laudantium at debitis molestiae eum quis eos minima dolores! Doloribus recusandae dolore quibusdam suscipit aliquid voluptatem voluptas placeat, dolores ut iusto provident, unde ea inventore fuga necessitatibus illum quos saepe ex, cumque magnam aperiam eum? Ullam cum ea suscipit deleniti voluptate dolores asperiores maxime hic ipsum aspernatur? Lorem ipsum dolor sit amet consectetur adipisicing elit. Error omnis cum enim voluptate a hic sed voluptatem accusantium, corrupti exercitationem eligendi dolor maiores incidunt minima aut, dolorum sint quas ducimus?</p>
          </div>
        </div>

        <form action="" className="flex gap-x-2 max-w-3xl w-full mx-auto sticky bottom-0 bg-white py-1">
          <Input placeholder="ask" className="bg-slate-200" />
          <Button type="submit" size={"icon"}>
            <SendHorizontal />
          </Button>
        </form>
      {/* </section> */}
    </main>
  )
}
