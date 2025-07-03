import React, { useState } from "react";

const SwitchButton = ({ labels = [], onSwitch }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSwitch = (index) => {
    setActiveIndex(index);
    if (onSwitch) {
      onSwitch(labels[index]);
    }
  };

  return (
    <div className="flex border border-blue-900 rounded-full w-max relative bg-white px-1 py-1">
      {labels.map((label, index) => (
        <button
          key={label}
          onClick={() => handleSwitch(index)}
          className={`relative z-10 px-4 py-2 text-sm font-semibold transition-all duration-200 hover:cursor-pointer
            ${
              index === activeIndex
                ? "bg-blue-900 text-green-300 rounded-full z-20 shadow"
                : "text-blue-900"
            }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
};

export default SwitchButton;
