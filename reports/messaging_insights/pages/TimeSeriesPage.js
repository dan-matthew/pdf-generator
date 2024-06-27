import { Image, Page, Text, View } from "@react-pdf/renderer";
import React from "react";
import { styles } from "./styles";

export const TimeSeriesPage = ({ charts }) => {
  return (
    <>
      {Object.entries(charts).map(([metricName, img]) => (
        <Page key={metricName} size="A4" style={styles.pageTimeSeries} break>
          <View style={styles.section}>
            <Text style={styles.header}>{metricName}</Text>
            <View style={styles.imageContainer}>
              <Image style={styles.image} src={img} />
            </View>
          </View>
        </Page>
      ))}
    </>
  );
};
