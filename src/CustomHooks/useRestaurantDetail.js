import { useEffect, useState } from "react";
import { RESTAUARNT_DETAIL } from "../Utils";

export const useRestaurantDetail = (restaurantId) => {
  const [result, setResult] = useState(null);

  useEffect(() => {
    fetchDetail();
  }, [restaurantId]);

  const fetchDetail = async () => {
    const response = await fetch(
      RESTAUARNT_DETAIL + `&restaurantId=${restaurantId}`,
    );
    const data = await response.json();
    setResult(data?.data?.cards[2]?.card?.card?.info);
  };

  return result;
};
