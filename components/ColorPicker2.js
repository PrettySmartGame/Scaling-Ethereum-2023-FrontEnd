import React, { useState } from "react";
import { ChromePicker } from "react-color";

const ColorPicker = ({ color, setColor }) => {
  const [displayPicker, setDisplayPicker] = useState(false);

  const handleColorChange = (updatedColor) => {
    setColor(updatedColor.hex);
  };

  const handleClick = () => {
    setDisplayPicker(!displayPicker);
  };

  return (
    <div>
      <div
        onClick={handleClick}
        style={{
          backgroundColor: color,
          width: "89px",
          height: "14px",
          cursor: "pointer",
        }}
      />
      {displayPicker && (
        <div>
          <ChromePicker color={color} onChange={handleColorChange} />
        </div>
      )}
    </div>
  );
};

export default ColorPicker;
