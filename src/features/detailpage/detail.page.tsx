import Footer from '@/components/share/footer'
import Navbar from '@/components/share/navbar'
import { Button } from '@/components/ui/button'
import { Table, TableBody,TableCell,TableRow } from "@/components/ui/table"
import { Link } from 'react-router-dom'

export default function DetailPage() {
  return (
    <main>
      <Navbar />
      <section>
        <div className='container mx-auto grid md:grid-cols-2 px-2 md:px-0'>
          <div className='flex flex-col space-y-6 order-2 md:order-first'>
          <h1 className='text-4xl md:text-6xl font-bold  mt-4 text-blue-500'>Indonesia</h1>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Code : </TableCell>
                <TableCell>AE</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Capital : </TableCell>
                <TableCell>Jota</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Currency : </TableCell>
                <TableCell>IDR, IDR</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">languages : </TableCell>
                <TableCell>
                  <ol>
                    <li>english</li>
                    <li>english</li>
                    <li>english</li>
                  </ol>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <Link to="#">
            <Button className='w-fit'>Ask AI About This Country</Button>
          </Link>
          </div>
          <div className=''>
            <h1 className='text-[200px] text-center'>🇦🇸</h1>
          </div>
        </div>
      </section>

        <div className='container mx-auto'>
          <h1 className='text-xl md:text-3xl font-bold mt-4 px-2 md:px-0 text-blue-500'>Subdivisions : </h1>
        </div>

        <div className='container mx-auto'>
          <h1 className='text-xl md:text-3xl font-bold mt-4 px-2 md:px-0 text-blue-500'>States : </h1>
        </div>

        <div className='container mx-auto'>
          <h1 className='text-xl md:text-3xl font-bold mt-4 px-2 md:px-0 text-blue-500'>Continent : Ocenia</h1>
          <div className="grid md:grid-cols-4 gap-x-2">
          </div>
        </div>

      <div className='mt-3'>
        <Footer />
      </div>
    </main>
  )
}
