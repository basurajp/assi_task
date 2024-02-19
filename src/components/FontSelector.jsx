
import React from 'react';

const FontSelector = ({ selectedFont, onSelectFont }) => {
  const fontOptions = ['Arial', 'Helvetica', 'Georgia', 'Times New Roman', 'Courier New'];

  return (
    <div>
      <label className='text-sm font-semibold mr-4'>Select Font:</label>
      <select className='text-sm px-2 w-[60%]' value={selectedFont} onChange={(e) => onSelectFont(e.target.value)}>
        {fontOptions.map((font) => (
          <option key={font} value={font}>
            {font}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FontSelector;
