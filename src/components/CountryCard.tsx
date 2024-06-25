import { AllInfoPlusIsLike } from "../types/nationalTypes";

export type CountryInfoProps = Pick<AllInfoPlusIsLike, "name" | "flags" | "capital" | "id">;

function CountryCard({ country, handleAddLike }: { country: CountryInfoProps; handleAddLike: (id: string) => void }) {
  return (
    <li className="border rounded ">
      <button className="w-[100%] flex flex-col items-center justify-center" onClick={() => handleAddLike(country.id)}>
        <div className="w-[100%] h-[140px] overflow-hidden">
          <img className="w-[100%] h-[100%] autofill" src={country.flags.png} />
        </div>
        <h3 className="font-bold">{country.name.common}</h3>
        <p>{country.capital}</p>
      </button>
    </li>
  );
}

export default CountryCard;
