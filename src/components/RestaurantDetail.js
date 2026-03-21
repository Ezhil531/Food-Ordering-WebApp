import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useRestaurantDetail } from "../CustomHooks/useRestaurantDetail";
import keyUp from "url:../Asserts/key.png";
import ItemList from "./ItemList";


const RestaurantDetail = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const { restaurantId } = useParams();
  const { filter } = useRestaurantDetail(restaurantId);
  console.log(filter);
  return (
    <div className="min-h-screen">
      <h1 className="text-3xl font-bold mt-4 ml-20">{"Restaurant List"}</h1>
      {filter?.map((item, index) => (
        <div key={item?.card?.card?.categoryId}>
          <div
            className="flex items-center justify-between border-b mx-20 mt-10 cursor-pointer"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          >
            <h1 className="text-xl font-bold">{item?.card?.card?.title}</h1>

            <img src={keyUp} alt="toggle" className="w-4 h-4" />
          </div>

          {/* Toggle content */}
          {openIndex === index &&
            item?.card?.card?.itemCards?.map((detail) => (
              <ItemList key={detail?.card?.info?.id} detail={detail} />
            ))}
        </div>
      ))}
    </div>
  );
};

export default RestaurantDetail;
