import React, { useId } from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from '@/utils/router'
import urlAudio from '@/assets/Pufino - Dreaming [FTUM Release].mp3';

function Audio(){
  const id = useId();

  document.addEventListener('click', function(){
    /// @ts-ignore
    document.getElementById(id)?.play();
  });

  return (
    <audio id={id} src={urlAudio} loop={true} autoPlay={true}></audio>
  );
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Audio />
    <RouterProvider router={router} />
  </React.StrictMode>,
)
