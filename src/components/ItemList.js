import { IMG_CDN_URL } from "../Utils";

const ItemList = ({ detail }) => {
  console.log(detail);
  return (
    <div className="p-4 mx-20 flex justify-between border-b border-gray-300">
      <div className="flex flex-col gap-4">
        <img
          src={IMG_CDN_URL + detail?.card?.info?.imageId}
          alt={detail?.card?.info?.name}
          className="w-28 h-28 object-cover"
        />
        <p className="text-gray-600 mb-2">{detail?.card?.info?.name}</p>
      </div>
      <button
        className="bg-orange-600 text-white px-4 py-2 rounded cursor-pointer hover:bg-orange-500 h-10"
        onClick={() => {}}
      >
        + Add
      </button>
    </div>
  );
};
export default ItemList;
