import App from "@/App";
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
      }
    ],
  },
]);
