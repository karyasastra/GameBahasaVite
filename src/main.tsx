import React, { useId } from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from '@/utils/router'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

/// @ts-ignore
document.addEventListener('click', function(){
  /// @ts-ignore
  document.getElementById('bgm')?.play();
});
