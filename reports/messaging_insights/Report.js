import { Document, renderToStream } from "@react-pdf/renderer";
import React from "react";
import { OverviewPage, TimeSeriesPage } from "./pages";

const MessagingInsightsDocument = ({ pdfData }) => {
  const { overviewPageData, timeSeriesPageData, charts } = pdfData;
  return (
    <Document>
      <OverviewPage overviewPageData={overviewPageData} />
      <TimeSeriesPage timeSeriesPageData={timeSeriesPageData} charts={charts} />
    </Document>
  );
};

export const generateMIReport = async (pdfData) => {
  return await renderToStream(<MessagingInsightsDocument pdfData={pdfData} />);
};
