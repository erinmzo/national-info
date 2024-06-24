import CountryList from "../components/CountryList";
import FavoriteList from "../components/FavoriteList";

function MainPage() {
  return (
    <div className="flex flex-col justify-center items-center py-10">
      <FavoriteList />
      <h1 className="mb-[30px] text-[30px] font-bold">Countries</h1>
      <CountryList />
    </div>
  );
}

export default MainPage;
