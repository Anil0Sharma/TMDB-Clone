import React, { useState } from "react";

const SwitchButton = ({ labels = [], onSwitch }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSwitch = (index) => {
    setActiveIndex(index);
    if (onSwitch) onSwitch(labels[index]);
  };

  return (
    <div className="flex border border-blue-900 rounded-full overflow-hidden w-max hover:cursor-pointer">
      {labels.map((label, index) => (
        <button
          key={label}
          onClick={() => handleSwitch(index)}
          className={`px-4 py-2 transition-all duration-200 text-sm font-medium hover:cursor-pointer
            ${
              index === activeIndex
                ? "bg-blue-900 text-green-300"
                : "bg-white text-blue-900"
            }`}
          style={{
            borderRadius:
              index === 0
                ? "9999px 0 0 9999px"
                : index === labels.length - 1
                ? "0 9999px 9999px 0"
                : "0",
          }}
        >
          {label}
        </button>
      ))}
    </div>
  );
};

export default SwitchButton;
