import BiographyPage from "../pages/biography-page/BiographyPage";
import AnalyzeJobPage from "../pages/analyze-job-page/AnalyzeJobPage";
import JobsListPage from "../pages/jobs-list-page/JobsListPage";
import StatisticsPage from "../pages/statistics-page/StatisticsPage";
import type { JSX } from "react";

export interface PageInformation {
  title: string;
  path: string;
  element: JSX.Element;
}

export const pages: Array<PageInformation> = [
  {
    title: "General Information",
    path: "/biography",
    element: <BiographyPage />,
  },

  {
    title: "Analyze Job Offering",
    path: "/analysis",
    element: <AnalyzeJobPage />,
  },
  {
    title: "List Ingested Jobs",
    path: "/jobs",
    element: <JobsListPage />,
  },
  {
    title: "Job Statistics",
    path: "/statistics",
    element: <StatisticsPage />,
  },
];
