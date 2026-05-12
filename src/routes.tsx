import { createBrowserRouter } from "react-router";
import { Root } from "@/components/layout/Root";
import { Home } from "@/pages/Home";
import { Events } from "@/pages/Events";
import { About } from "@/pages/About";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "events", Component: Events },
      { path: "about", Component: About },
    ],
  },
]);