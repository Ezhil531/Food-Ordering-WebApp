import { useState } from "react";
import RestuarantCard from "./RestuarantCard";
import { useRestaurants } from "../CustomHooks/useRestaurans";
import { Link } from "react-router-dom";

const Hero = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const {
    restaurants,
    resTitile,
    filteredRestaurants,
    setFilteredRestaurants,
  } = useRestaurants();

  const handleSearch = () => {
    const filtered = restaurants.filter((restaurant) =>
      restaurant?.info?.name.toLowerCase().includes(searchTerm.toLowerCase()),
    );
    setFilteredRestaurants(filtered);
    setSearchTerm("");
  };

  // if(filteredRestaurants.length === 0) {
  //   return ()
  // }

  return (
    <div className="h-screen">
      <div className="flex items-center justify-center p-4 relative">
        <h1 className="absolute left-4 text-2xl font-bold">Hi, Ezhil ✌️</h1>
        <div className="flex items-center gap-4">
          <input
            type="text"
            placeholder="Search for food..."
            className="w-[400px] border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            className="bg-orange-600 text-white px-4 py-2 rounded-md hover:bg-orange-500 cursor-pointer"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>
      <h1 className="mt-4 ml-1 font-bold text-4xl">{resTitile}</h1>
      <div className="flex flex-wrap gap-4 justify-left mt-4">
        {filteredRestaurants?.map((restaurant) => (
          <Link
            key={restaurant?.info?.id}
            to={`/restaurant/${restaurant?.info?.id}`}
          >
            <RestuarantCard
              key={restaurant?.info?.id}
              restaurant={restaurant?.info}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Hero;
