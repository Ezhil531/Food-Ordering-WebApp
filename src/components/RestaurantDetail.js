import { useParams } from "react-router-dom";
import { useRestaurantDetail } from "../CustomHooks/useRestaurantDetail";

const RestaurantDetail = () => {
  const { restaurantId } = useParams();
  const detail = useRestaurantDetail(restaurantId);
  console.log(detail);
  return (
    <div className="h-screen">Restaurant Detail Page for {restaurantId}</div>
  );
};

export default RestaurantDetail;
