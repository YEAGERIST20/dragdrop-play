// src/components/MidArea.js
import React, { useState } from 'react';
import { useDrop } from 'react-dnd';

const MidArea = ({ onBlocksChange }) => {
  const [blocks, setBlocks] = useState([]);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'block',
drop: (item) => {
  const blockData = {
    label: item.label,
    color: item.color,
    type: item.type,       // e.g. "MOVE" or "TURN"
    value: item.value || 10, // default value if not specified
  };

  setBlocks((prev) => {
    const updated = [...prev, blockData];
    onBlocksChange(updated); // Send to App.js
    return updated;
  });
},

    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  return (
    <div
      ref={drop}
      className="flex-1 p-4 bg-gray-100"
      style={{ minHeight: '100vh' }}
    >
      <h2 className="text-center text-gray-600 mb-4"></h2>
      {blocks.map((block, index) => (
        <div key={index} className={`text-white px-4 py-2 rounded shadow mt-2 ${block.color}`}>{block.label}</div>
      ))}
    </div>
  );
};

export default MidArea;
