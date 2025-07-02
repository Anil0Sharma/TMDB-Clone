import React from "react";

const NavbarModal = ({ items }) => {
  if (!items || items.length === 0) return null;

  return (
    <div className="absolute top-full mt-2 w-48 bg-white shadow-md rounded-md py-2 z-50">
      {items.map((item, idx) => (
        <a
          key={idx}
          href="#"
          className="block px-4 py-2 text-black hover:bg-gray-100"
        >
          {item}
        </a>
      ))}
    </div>
  );
};

export default NavbarModal;
