import { IDetail } from "@/types/types";

interface IStates {
  country: IDetail;
}

export default function States({ country }: IStates) {
  return (
    <div className="container mx-auto px-2 md:px-0">
      <h1 className="text-xl md:text-3xl font-bold mt-4 text-blue-500">
        States: {country.states.length}
      </h1>
      {country.states.length > 0 ? (
        country.states.map((state) => <span key={state.code}>{state.name}, </span>)
      ) : (
        <p>No states available</p>
      )}
    </div>
  );
}