import { useEffect, useState } from "react";
import { RESTAUARNT_DETAIL } from "../Utils";

export const useRestaurantDetail = (restaurantId) => {
  const [result, setResult] = useState(null);

  useEffect(() => {
    fetchDetail();
  }, [restaurantId]);

  const fetchDetail = async () => {
    try {
      const response = await fetch(
        RESTAUARNT_DETAIL + `&restaurantId=${restaurantId}`,
      );
      const data = await response.json();
      setResult(data?.data?.cards[2]?.card?.card?.info);
    } catch (error) {
      console.error("Error fetching restaurant details:", error);
    }
  };

  return result;
};
