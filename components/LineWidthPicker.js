import React from 'react';

const LineWidthPicker = ({ lineWidth, setLineWidth }) => {
  const lineWidthOptions = [2, 5, 10, 15, 20];

  const handleChange = (event) => {
    setLineWidth(parseInt(event.target.value, 10));
  };

  return (
    <div>
      <label htmlFor="lineWidth">Line width: </label>
      <select id="lineWidth" value={lineWidth} onChange={handleChange}>
        {lineWidthOptions.map((width) => (
          <option key={width} value={width}>
            {width}px
          </option>
        ))}
      </select>
    </div>
  );
};

export default LineWidthPicker;
