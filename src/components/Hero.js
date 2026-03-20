import RestuarantCard from "./RestuarantCard";
import { useRestaurants } from "../CustomHooks/useRestaurans";
import { Link } from "react-router-dom";

const Hero = () => {
  const { restaurants } = useRestaurants();
  const list =
    restaurants[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
  console.log(list);
  return (
    <div className="h-screen">
      {/* <div className="search-section">
        <h1 className="greetings">Hi, Ezhil</h1>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search for food..."
            className="search-input"
          />
          <button className="search-button">Search</button>
        </div>
      </div> */}
      <h1 className="mt-4 ml-1 font-bold text-4xl">
        {restaurants[0]?.card?.card?.title}
      </h1>
      <div className="flex flex-wrap gap-4 justify-center mt-4">
        {list?.map((restaurant) => (
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
