// src/App.jsx
import React from 'react';
import BlockPanel from './components/BlockPanel';
import Workspace from './components/Workspace';

export default function App() {
  return (
    <div className="flex h-screen">
      <BlockPanel
        onDragStart={(e, block) =>
          e.dataTransfer.setData('block', JSON.stringify(block))
        }
      />
      <Workspace />
    </div>
  );
}
