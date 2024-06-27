const express = require("express");
const { generateMIReport } = require("./reports/messaging_insights/Report");
const { generateCharts } = require("./utils/chart");
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Route to handle the generateMIReport POST request
app.post("/generateMIReport", async (req, res) => {
  try {
    const { timeSeriesPageData } = req.body;
    const charts = await generateCharts(timeSeriesPageData);

    const stream = await generateMIReport({ ...req.body, charts });
    res.setHeader("Content-Type", "application/pdf");
    stream.pipe(res);
    stream.on("end", () => console.log("Done streaming, response sent."));
  } catch (error) {
    console.error("Error generating PDF:", error);
    res.status(500).send("Error generating PDF");
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
