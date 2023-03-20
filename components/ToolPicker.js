import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faPaintBrush, faSprayCan, faEraser } from '@fortawesome/free-solid-svg-icons';

const ToolPicker = ({ tool, setTool }) => {
  const tools = [
    { name: 'pen', icon: faPencilAlt },
    { name: 'brush', icon: faPaintBrush },
    { name: 'spray', icon: faSprayCan },
    { name: 'eraser', icon: faEraser },
  ];

  return (
    <div>
      {tools.map((t) => (
        <button
          key={t.name}
          onClick={() => setTool(t.name)}
          style={{
            backgroundColor: tool === t.name ? 'lightgray' : 'gray',
            color: tool === t.name ? 'blue' : 'black',
            margin: '0 5px',
            width: '45px',
            height: '45px',
          }}
        >
          <FontAwesomeIcon icon={t.icon} />
        </button>
      ))}
    </div>
  );
};

export default ToolPicker;
