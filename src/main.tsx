import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import BiographyPage from "./pages/biography-page/BiographyPage.tsx";
import AnalyzeJobPage from "./pages/analyze-job-page/AnalyzeJobPage.tsx";
import JobsListPage from "./pages/jobs-list-page/JobsListPage.tsx";
import StatisticsPage from "./pages/statistics-page/StatisticsPage.tsx";

const router = createBrowserRouter([
  {
    path: "/biography",
    element: <BiographyPage />,
  },
  {
    path: "/analysis",
    element: <AnalyzeJobPage />,
  },
  {
    path: "/jobs",
    element: <JobsListPage />,
  },
  {
    path: "/statistics",
    element: <StatisticsPage />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />,
  </StrictMode>
);
