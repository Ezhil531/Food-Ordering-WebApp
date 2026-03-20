import RestuarantCard from "./RestuarantCard";

const Hero = () => {
  const data = {
    name: "Pizza Place",
    cuisine: "Italian",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/fd59e7bb-4e0e-492a-abfe-c6815c2e8613_518645.jpg",
    rating: 4.5,
    minutes: 30,
  };
  return (
    <div className="hero">
      <div className="search-section">
        <h1 className="greetings">Hi, Ezhil</h1>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search for food..."
            className="search-input"
          />
          <button className="search-button">Search</button>
        </div>
      </div>
      <h1>Top restaurant chains in Chennai</h1>
      <div className="restuarnt-section">
        <RestuarantCard restaurant={data} />
      </div>
    </div>
  );
};
export default Hero;
