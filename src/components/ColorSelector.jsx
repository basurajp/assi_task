// ColorSelector.js
import React from 'react';

const ColorSelector = ({ selectedColor, onSelectColor }) => {
  const colorOptions = ['black', 'red', 'blue', 'green', 'purple'];

  return (
    <div>
      <label className='text-sm font-semibold mr-2'>Select Color:</label>
      <select className='text-sm px-3' value={selectedColor} onChange={(e) => onSelectColor(e.target.value)}>
        {colorOptions.map((color) => (
          <option key={color} value={color}>
            {color}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ColorSelector;
