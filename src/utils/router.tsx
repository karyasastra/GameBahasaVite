import App from "@/App";
import Buku from "@/pages/Buku";
import Cerita from "@/pages/Cerita";
import Home from "@/pages/Home";
import Puisi from "@/pages/Puisi";
import {
  createMemoryRouter,
  createHashRouter
} from "react-router-dom";

export const router = createMemoryRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/buku',
        element: <Buku />
      },
      {
        path: '/puisi',
        element: <Puisi />
      },
      {
        path: '/cerita',
        element: <Cerita />
      }
    ],
  },
]);
