import { Table, TableBody,TableCell,TableRow } from "@/components/ui/table"
import { Button } from "../ui/button"

export default function Card() {

  return (
    <div className='border-2 rounded-md mb-2 p-2 flex flex-col justify-between'>
      <div className="space-y-2">
        <p className='text-center text-8xl'>🇫🇷</p>
        <h4 className="text-center text-lg font-semibold">France</h4>
      </div>
      <div className="space-y-2">
        <Table>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">Code</TableCell>
              <TableCell>AE</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Capital</TableCell>
              <TableCell>Washington, D.C</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Currency</TableCell>
              <TableCell>IDR</TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <Button variant={"default"} className="w-full bg-blue-500 hover:bg-blue-600" >Detail</Button>
      </div>
    </div>
  )
}
