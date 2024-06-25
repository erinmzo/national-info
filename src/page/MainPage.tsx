import { useEffect, useState } from "react";
import { getNationalInfo } from "../api/national";
import CountryList from "../components/CountryList";
import FavoriteList from "../components/FavoriteList";
import { AllInfoPlusIsLike } from "../types/nationalTypes";

function MainPage() {
  const [countries, setCountries] = useState<AllInfoPlusIsLike[]>([]);

  useEffect(() => {
    const getInfo = async () => {
      try {
        const data = await getNationalInfo();
        setCountries(data.map((country) => ({ ...country, isLike: false, id: country.latlng.toString() })));
      } catch (error) {
        console.log(error);
      }
    };

    getInfo();
  }, []);

  const handleAddLike: (id: string) => void = (id) => {
    setCountries((prev) =>
      prev.map((country) => {
        if (country.id === id) {
          return { ...country, isLike: !country.isLike };
        } else {
          return country;
        }
      })
    );
  };
  return (
    <div className="flex flex-col justify-center items-center py-10">
      <FavoriteList countries={countries} handleAddLike={handleAddLike} />
      <h1 className="mb-[30px] text-[30px] font-bold">Countries</h1>
      <CountryList countries={countries} handleAddLike={handleAddLike} />
    </div>
  );
}

export default MainPage;
