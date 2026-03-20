import { IMG_CDN_URL } from "../Utils";
const RestuarantCard = ({ restaurant }) => {
  console.log(IMG_CDN_URL + restaurant?.cloudinaryImageId);
  return (
    <div className="w-[300px] h-[260px] bg-white rounded-lg shadow-md m-6 border border-gray-200 border-solid">
      <img
        src={IMG_CDN_URL + restaurant?.cloudinaryImageId}
        alt={restaurant.name}
        className="h-40 w-full object-cover rounded-tl-lg rounded-tr-lg"
      />
      <h3 className="text-lg font-semibold ml-3">{restaurant?.name}</h3>
      {/* <p className="restaurant-cuisine">{restaurant?.cuisine}</p> */}
      <p className="ml-3">{restaurant?.costForTwo}</p>
      <p className="ml-3">{restaurant?.avgRatingString}</p>
    </div>
  );
};

export default RestuarantCard;

