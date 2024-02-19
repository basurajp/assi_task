import React from "react";

const SizeSelector = ({ selectedSize, onSelectSize }) => {
  const sizeOptions = ["12px", "16px", "20px", "24px", "28px"];

  return (
    <div >
      <label className='text-sm font-semibold mr-4'>Select Size:</label>
      <select className='text-sm px-3'
        value={selectedSize}
        onChange={(e) => onSelectSize(e.target.value)}
      >
        {sizeOptions.map((size) => (
          <option key={size} value={size}>
            {size}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SizeSelector;
