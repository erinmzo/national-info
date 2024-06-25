import { AllInfoPlusIsLike } from "../types/nationalTypes";
import CountryCard from "./CountryCard";

function CountryList({
  countries,
  handleAddLike,
}: {
  countries: AllInfoPlusIsLike[];
  handleAddLike: (id: string) => void;
}) {
  return (
    <div className="w-[1080px] mx-auto">
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {countries?.map((country) => {
          return <CountryCard key={country.id} country={country} handleAddLike={handleAddLike} />;
        })}
      </ul>
    </div>
  );
}

export default CountryList;
