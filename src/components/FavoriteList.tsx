import { AllInfoPlusIsLike } from "../types/nationalTypes";
import CountryCard from "./CountryCard";

function FavoriteList({
  countries,
  handleAddLike,
}: {
  countries: AllInfoPlusIsLike[];
  handleAddLike: (id: string) => void;
}) {
  const likeCountries = countries.filter((country) => country.isLike === true);

  return (
    <div className="py-[20px] w-[1080px] mx-auto flex flex-col justify-center items-center">
      <h2 className="text-[24px] mb-5">Favorite Countries</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {likeCountries.map((country) => {
          return <CountryCard key={country.id} country={country} handleAddLike={handleAddLike} />;
        })}
      </ul>
    </div>
  );
}

export default FavoriteList;
