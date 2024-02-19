import React, { useState } from "react";
import FontSelector from "./components/FontSelector";
import SizeSelector from "./components/SizeSelector";
import ColorSelector from "./components/ColorSelector";
import TextInput from "./components/TextInput";
import AddTextButton from "./components/AddTextButton";

const App = () => {
  const [selectedFont, setSelectedFont] = useState("Arial");
  const [selectedSize, setSelectedSize] = useState("16px");
  const [selectedColor, setSelectedColor] = useState("black");
  const [text, setText] = useState("text here ");
  const [additionalTexts, setAdditionalTexts] = useState([]);

  const handleFontChange = (font) => {
    setSelectedFont(font);
  };

  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  const handleTextChange = (newText) => {
    setText(newText);
  };

  const handleAddText = (newText) => {
    setAdditionalTexts((prevTexts) => [...prevTexts, newText]);
  };

  return (
    <div className="flex items-center lg:justify-center lg:gap-10 gap-5 h-screen bg-zinc-300 lg:flex-row flex-col">
      <div className="bg-zinc-200 lg:w-[50%] lg:h-[80vh] w-full h-[30%] rounded-lg shadow-lg pl-10 pt-10">
        <h1
          className="text-xl font-bold"
          style={{
            fontFamily: selectedFont,
            fontSize: selectedSize,
            color: selectedColor,
          }}
        >
          {text}
        </h1>

        {additionalTexts.map((additionalText, index) => (
          <p
            key={index}
            className="text-base"
            style={{
              fontFamily: selectedFont,
              fontSize: selectedSize,
              color: selectedColor,
            }}
          >
            {additionalText}
          </p>
        ))}
      </div>

      <div className="bg-zinc-200 rounded-lg shadow lg:h-[80vh] lg:w-[25%] w-full py-10 flex flex-col items-start pl-5 gap-3 pt-10">
        <FontSelector
          selectedFont={selectedFont}
          onSelectFont={handleFontChange}
        />
        <SizeSelector
          selectedSize={selectedSize}
          onSelectSize={handleSizeChange}
        />
        <ColorSelector
          selectedColor={selectedColor}
          onSelectColor={handleColorChange}
        />
        <TextInput onChangeText={handleTextChange} text={text} />

        <AddTextButton onAddText={handleAddText} />
      </div>
    </div>
  );
};

export default App;
