import { NationalInfoProps } from "../types/nationalTypes";

function CountryCard({ nationalInfo }: { nationalInfo: NationalInfoProps }) {
  return (
    <li className="border rounded flex flex-col items-center justify-center">
      <div className="w-[100%] h-[160px] overflow-hidden">
        <img
          className="w-[100%] h-[100%] autofill"
          src={nationalInfo.flags.png}
        />
      </div>
      <h3 className="font-bold">{nationalInfo.name.common}</h3>
      <p>{nationalInfo.capital}</p>
    </li>
  );
}

export default CountryCard;
