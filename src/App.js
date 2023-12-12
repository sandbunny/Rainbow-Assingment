import React, { useState } from 'react';
import ColorBlock from './ColorBlock';
import ColorForm from './ColorForm'; // ColorForm component is created 

function App() {
  const [colors, setColors] = useState([
    'red', 'orange', 'yellow',
    'greenyellow', 'green', 'lightblue',
    'blue', 'violet',
  ]);

  const addColor = (newColor) => {
    setColors([...colors, newColor]);
  };

  return (
    <div className="App">
      <ColorForm addColor={addColor} /> {/* Pass addColor function as a prop */}
      {colors.map((color, i) => (
        <ColorBlock key={i} color={color} />
      ))}
    </div>
  );
}

export default App;
