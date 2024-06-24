import { useEffect, useState } from "react";
import { getNationalInfo } from "../api/national";
import { NationalInfosProps } from "../types/nationalTypes";
import CountryCard from "./CountryCard";

function CountryList() {
  const [nationalInfos, setNationalInfos] = useState<NationalInfosProps[]>();
  useEffect(() => {
    const getInfo = async () => {
      try {
        const data = await getNationalInfo();
        setNationalInfos(data);
      } catch (error) {
        console.log(error);
      }
    };

    getInfo();
  }, []);
  return (
    <div className="w-[1080px] mx-auto">
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {nationalInfos?.map((nationalInfo) => {
          return (
            <CountryCard
              key={nationalInfo.latlng.toString()}
              nationalInfo={nationalInfo}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default CountryList;
