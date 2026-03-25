import { createBrowserRouter } from "react-router";
import { Layout } from "./components/layout";
import HomePage from "./pages/home";
import ProductsPage from "./pages/products";
import AboutPage from "./pages/about";
import TechnologyPage from "./pages/technology";
import ContactPage from "./pages/contact";
import NotFound from "./pages/not-found";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: HomePage },
      { path: "products", Component: ProductsPage },
      { path: "about", Component: AboutPage },
      { path: "technology", Component: TechnologyPage },
      { path: "contact", Component: ContactPage },
      { path: "*", Component: NotFound },
    ],
  },
]);
