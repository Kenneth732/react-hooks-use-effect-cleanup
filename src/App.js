import React, { useState } from 'react';
import './App.css';
import Clock from './Clock';

export default function App() {
  const [showClock, setShowClock] = useState(true);

  return (
    <div>
      {showClock ? <Clock /> : null}
      <button onClick={() => setShowClock(!showClock)}>Toggle Clock</button>
    </div>
  );
}


