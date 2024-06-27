import exporter from "highcharts-export-server";

const generateChart = (chartOptions) => {
  return new Promise(async (resolve, reject) => {
    const exportSettings = {
      export: {
        type: "png",
        options: chartOptions,
      },
    };

    exporter.startExport(exportSettings, (res, err) => {
      if (err) {
        return reject(err);
      }
      resolve(`data:image/png;base64,${res.data}`);
    });
  });
};

export const generateCharts = async (timeSeriesPageData) => {
  const charts = {};

  const options = exporter.setOptions({
    export: {
      type: "png",
    },
  });

  // Initialize a pool of workers
  await exporter.initPool(options);

  for (const [metricName, data] of Object.entries(timeSeriesPageData)) {
    const chartOptions = {
      title: {
        text: metricName,
      },
      colors: ["#34C3F2", "#B56DC6", "#F2CA1B", "#59C1A7"],
      xAxis: {
        type: "datetime",
      },
      yAxis: {
        title: {
          text: "Value",
        },
      },
      series: [
        {
          type: "column",
          name: metricName,
          data: data.map((point) => [point.time, point.value]),
        },
      ],
    };

    charts[metricName] = await generateChart(chartOptions);
  }

  exporter.killPool();

  return charts;
};
