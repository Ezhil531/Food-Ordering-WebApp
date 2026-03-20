import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-gray-100 h-20 sticky top-0 z-10">
      <img
        src="https://png.pngtree.com/png-vector/20250217/ourmid/pngtree-unique-food-logo-png-image_15488394.png"
        alt="Food Logo"
        className="w-20"
      />
      <div>
        <ul className="flex gap-4">
          <li className="cursor-pointer">
            <Link to="/">Home</Link>
          </li>
          <li className="cursor-pointer">
            <Link to="/about">About</Link>
          </li>
          <li className="cursor-pointer">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="cursor-pointer">
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
