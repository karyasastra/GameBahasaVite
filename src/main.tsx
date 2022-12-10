import React, { useId } from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from '@/utils/router'

function Audio(){
  const id = useId();

  document.addEventListener('click', function(){
    /// @ts-ignore
    document.getElementById(id).play();
  });

  return (
    <audio id={id} src='/Pufino - Dreaming [FTUM Release].mp3' loop={true}></audio>
  );
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Audio />
    <RouterProvider router={router} />
  </React.StrictMode>,
)
