import { Page, Text, View } from "@react-pdf/renderer";
import React from "react";
import { styles } from "./styles";

const getDefinition = (
  metricName,
  highLevelMetricDefinitions,
  analyticsMetricDefinitions
) => {
  const lowerCaseName = metricName?.toLowerCase();
  const definition =
    (
      highLevelMetricDefinitions[lowerCaseName] ||
      analyticsMetricDefinitions[lowerCaseName]
    )?.definition || "";
  return definition;
};

export const OverviewPage = ({ overviewPageData }) => {
  const { tableData, highLevelMetricDefinitions, analyticsMetricDefinitions } =
    overviewPageData;

  return (
    <Page size="A4" style={styles.page} break>
      <View style={styles.table}>
        {tableData[0].map((item, index) => (
          <View key={index}>
            {index > 0 && (
              <Text style={styles.definition}>
                {getDefinition(
                  tableData[0][index],
                  highLevelMetricDefinitions,
                  analyticsMetricDefinitions
                )}
              </Text>
            )}
            <View style={styles.tableRow}>
              {tableData.map((column, colIndex) => (
                <View style={styles.tableCol} key={colIndex}>
                  <Text style={index === 0 ? styles.header : styles.tableCell}>
                    {column[index]}
                  </Text>
                </View>
              ))}
            </View>
          </View>
        ))}
      </View>
    </Page>
  );
};
