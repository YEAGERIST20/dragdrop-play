// src/App.js
import React, { useState, useRef } from "react";
import Sidebar from "./components/Sidebar";
import MidArea from "./components/MidArea";
import PreviewArea from "./components/PreviewArea";
import CatSprite from "./components/CatSprite";
import "./index.css"; // or "./App.css" if that’s your CSS file

function App() {
  const [blocks, setBlocks] = useState([]);
  const spriteRef = useRef(null);

  const handleFlagClick = () => {
    blocks.forEach((block) => {
      switch (block.type) {
        case "MOVE":
          spriteRef.current?.moveForward(block.value);
          break;
        case "TURN":
          spriteRef.current?.turn(block.value);
          break;
          case "SAY":
        spriteRef.current?.say(block.value);
        break;
        default:
          break;
      }
    });
  };

  return (
    <div className="flex h-screen">
      <div className="w-1/4 bg-gray-200 p-4">
        <Sidebar />
      </div>
      <div className="w-2/4 bg-gray-100 relative">
        <div className="text-center text-gray-600 mt-2">Drop blocks here</div>
        <MidArea onBlocksChange={setBlocks} />
        <button
          className="absolute top-2 right-2 bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded"
          onClick={handleFlagClick}
        >
          🚩
        </button>
      </div>
      <div className="w-1/4 bg-blue-100 flex justify-center items-center relative">
        <PreviewArea />
        <CatSprite ref={spriteRef} />
      </div>
    </div>
  );
}

export default App;
