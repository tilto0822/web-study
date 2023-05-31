'use client';

import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);

  const textStyle = {
    fontSize: '72px',
    fontWeight: '900',
    color: 'magenta'
  };

  const handleButton = () => {
    setCount((prev) => ++prev);
  };
  
  return (
    <main>
      <span
        style={textStyle}
      >
        The count is {count}!
      </span>
      <br />
      <button
        type="button"
        onClick={handleButton}
        style={{
          border: 'none',
          borderRadius: '8px',
          padding: '8px 14px',
          backgroundColor: 'magenta',
          color: 'white',
        }}
      >
        Click me!
      </button>
      <a href="/temp">이동하기</a>
    </main>
  )
}
