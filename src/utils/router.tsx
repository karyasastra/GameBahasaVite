import App from "@/App";
import Buku from "@/pages/Buku";
import Home from "@/pages/Home";
import {
  createMemoryRouter,
  createHashRouter
} from "react-router-dom";

export const router = createHashRouter([
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
      }
    ],
  },
]);
