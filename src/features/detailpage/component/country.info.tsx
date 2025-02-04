import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { IDetail } from "@/types/types";
import { Link } from "react-router-dom";

interface ICountryinfo {
  country: IDetail;
}

export default function CountryInfo({ country }: ICountryinfo) {
  return (
    <div className="flex flex-col space-y-6">
      <h1 className="text-4xl md:text-6xl font-bold mt-4 text-blue-500">{country.name}</h1>
      <Table>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">Code :</TableCell>
            <TableCell>{country.code}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Capital :</TableCell>
            <TableCell>{country.capital}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Currency :</TableCell>
            <TableCell>{country.currency}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Phone :</TableCell>
            <TableCell>{country.phone}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Languages :</TableCell>
            <TableCell>
              {country.languages.length > 0 ? (
                <ol>
                  {country.languages.map((item) => (
                    <li key={item.code}>{item.name} ({item.native}) {item.code}</li>
                  ))}
                </ol>
              ) : (
                <p>Not Available</p>
              )}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <Link to="#">
        <Button className="w-fit">Ask AI About This Country</Button>
      </Link>
    </div>
  );
}