const RestuarantCard = ({ restaurant }) => {
  return (
    <div className="restaurant-card" style={style.card}>
      <img
        src={restaurant.image}
        alt={restaurant.name}
        className="restaurant-image"
      />
      <h3 className="restaurant-name">{restaurant.name}</h3>
      <p className="restaurant-cuisine">{restaurant.cuisine}</p>
      <p className="restaurant-rating">Rating: {restaurant.rating}</p>
      <p className="restaurant-minutes">Minutes: {restaurant.minutes}</p>
    </div>
  );
};

export default RestuarantCard;

const style = {
  card: {
    border: "1px solid #ccc",
    borderRadius: "8px",
    // padding: "16px",
    height: "260px",
    width: "300px",
    margin: "16px",
  },
};
