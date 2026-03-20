const Header = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-gray-100 h-20">
      <img
        src="https://png.pngtree.com/png-vector/20250217/ourmid/pngtree-unique-food-logo-png-image_15488394.png"
        alt="Food Logo"
        className="w-30"
      />
      <div>
        <ul className="flex gap-4">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">About</li>
          <li className="cursor-pointer">Contact Us</li>
          <li className="cursor-pointer">Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
