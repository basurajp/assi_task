
import React from 'react';

const TextInput = ({ onChangeText, text }) => {
  return (
    <div className='flex items-center'>
      <label className='text-sm font-semibold mr-5 '>Enter Text:</label>
      <textarea className='px-2' value={text} onChange={(e) => onChangeText(e.target.value)} />
    </div>
  );
};

export default TextInput;
