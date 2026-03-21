import { useEffect, useState } from "react";
import { RESTAUARNT_DETAIL } from "../Utils";

export const useRestaurantDetail = (restaurantId) => {
  const [result, setResult] = useState([]);

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        const response = await fetch(
          RESTAUARNT_DETAIL + `&restaurantId=${restaurantId}`,
        );
        const data = await response.json();

        const cards =
          data?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
        // const cards = data?.data?.cards;

        setResult(cards || []);
      } catch (error) {
        console.error("Error fetching restaurant details:", error);
      }
    };

    fetchDetail();
  }, [restaurantId]);

  const filter =
    result?.filter(
      (item) =>
        item?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
    ) || [];

  console.log(result);

  const title = result?.filter(
    (item) =>
      item?.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.gandalf.widgets.v2.TextBoxV2",
  );

  console.log(title);

  return { result, filter, title };
};
