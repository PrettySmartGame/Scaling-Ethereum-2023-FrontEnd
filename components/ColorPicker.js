import React from 'react';
import { ChromePicker } from 'react-color';

const ColorPicker = ({ color, setColor }) => {
  const handleChangeComplete = (color) => {
    setColor(color.hex);
  };

  return (
    <div>
      <ChromePicker color={color} onChangeComplete={handleChangeComplete} />
    </div>
  );
};

export default ColorPicker;
