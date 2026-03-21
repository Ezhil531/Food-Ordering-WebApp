import { useState, useEffect } from "react";
import { RESTAURANT_API } from "../Utils";

export const useRestaurants = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [resTitile, setResTitle] = useState("");
  useEffect(() => {
    fetchRestaurants();
  }, []);

  const fetchRestaurants = async () => {
    try {
      const response = await fetch(RESTAURANT_API);
      const data = await response.json();
      // console.log(data?.data?.cards);
      setRestaurants(
        data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants,
      );
      setResTitle(data?.data?.cards[0]?.card?.card?.title);
      setFilteredRestaurants(
        data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants,
      );
    } catch (error) {
      console.error("Error fetching restaurants:", error);
    }
  };

  return {
    restaurants,
    filteredRestaurants,
    resTitile,
    setFilteredRestaurants,
  };
};
