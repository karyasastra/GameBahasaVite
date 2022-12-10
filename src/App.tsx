import { css } from "@emotion/react"
import { Outlet } from "react-router-dom"
import { useState, useMemo } from 'react';

function App() {
  const ratio = 9 / 16; // w / h
  const [h, setH] = useState(window.innerHeight);
  const w = useMemo(() => h * ratio, [h]);

  // window.onresize = function(){ setH(window.innerHeight); }

  return (
    <div style={{
      height: h,
      width: '100%',
      maxWidth: w,
      background: 'black',
      overflow: 'hidden',
      position: 'relative',
    }}>
      <Outlet />
    </div>
  )
}

export default App
