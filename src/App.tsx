import Header from "./components/header/Header";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import * as PageConfig from "./pages/PageConfig";

const router = createBrowserRouter(
  PageConfig.pages.map((page) => {
    return { path: page.path, element: page.element };
  })
);

export function App() {
  return (
    <>
      <Header pages={PageConfig.pages}></Header>
      <RouterProvider router={router} />,
    </>
  );
}
