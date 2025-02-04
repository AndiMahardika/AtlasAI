import { IDetail } from "@/types/types";

interface ISubdivisions {
  country: IDetail;
}

export default function Subdivisions({ country }: ISubdivisions) {
  return (
    <div className="container mx-auto px-2 md:px-0">
      <h1 className="text-xl md:text-3xl font-bold mt-4 text-blue-500">
        Subdivisions: {country.subdivisions?.length || 0}
      </h1>
      {country.subdivisions?.length ? (
        country.subdivisions.map((item, index) => <span key={index}>{item.name}, </span>)
      ) : (
        <p>No subdivisions available</p>
      )}
    </div>
  );
}
