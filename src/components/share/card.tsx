import { Table, TableBody,TableCell,TableRow } from "@/components/ui/table"
import { Button } from "../ui/button"
import { ICountries } from "@/types/types"

interface ICard {
  data: ICountries
}

export default function Card({data}: ICard) {
  return (
    <div className='border-2 border-slate-500 rounded-md mb-2 p-2 flex flex-col justify-between'>
      <div className="space-y-2">
        <p className='text-center text-8xl'>{data.emoji}</p>
        <h4 className="text-center text-lg font-semibold">{data.name}</h4>
      </div>
      <div className="space-y-2">
        <Table>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">Code</TableCell>
              <TableCell>{data.code}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Capital</TableCell>
              <TableCell>{data.capital}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Currency</TableCell>
              <TableCell>{data.currency}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <Button variant={"default"} className="w-full bg-blue-500 hover:bg-blue-600" >Detail</Button>
      </div>
    </div>
  )
}
