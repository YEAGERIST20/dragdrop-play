import React from "react";
import { useDrag } from "react-dnd";

const blocks = [
  {
    type: "MOVE",
    label: "Move 10 steps",
    value: 10,
    color: "bg-blue-500",
  },
  {
    type: "TURN",
    label: "Turn 15°",
    value: 15,
    color: "bg-green-500",
  },
  {
    type: "SAY",
    label: "Say 'hello'",
    value: "hello",
    color: "bg-purple-500",
  },
];

const DraggableBlock = ({ block }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "block",
    item: block,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      className={`text-white px-4 py-2 rounded shadow mb-2 cursor-move ${block.color}`}
      style={{ opacity: isDragging ? 0.5 : 1 }}
    >
      {block.label}
    </div>
  );
};

const Sidebar = () => {
  return (
    <div className="p-4 w-48 bg-gray-200 h-full">
      <h2 className="text-lg font-semibold mb-4 text-gray-700">Blocks</h2>
      {blocks.map((block, index) => (
        <DraggableBlock key={index} block={block} />
      ))}
    </div>
  );
};

export default Sidebar;
