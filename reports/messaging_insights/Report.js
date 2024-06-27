import { Document, renderToStream } from "@react-pdf/renderer";
import React from "react";
import { OverviewPage } from "./pages/OverviewPage";

const MessagingInsightsDocument = ({ pdfData }) => {
  const { overviewPageData } = pdfData;
  return (
    <Document>
      <OverviewPage overviewPageData={overviewPageData} />
    </Document>
  );
};

const generateMIReport = async (pdfData) => {
  return await renderToStream(<MessagingInsightsDocument pdfData={pdfData} />);
};

module.exports = { generateMIReport };
