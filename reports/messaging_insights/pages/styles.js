const { StyleSheet } = require("@react-pdf/renderer");

export const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    padding: 20,
  },
  pageTimeSeries: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  table: {
    flexDirection: "column",
    width: "100%",
    borderWidth: 1,
    borderColor: "#bfbfbf",
  },
  tableRow: {
    flexDirection: "row",
  },
  tableCol: {
    flex: 1,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#bfbfbf",
  },
  tableCell: {
    margin: 5,
    fontSize: 10,
  },
  header: {
    fontSize: 12,
    fontWeight: "bold",
  },
  definition: {
    fontSize: 8,
    marginTop: 2,
    color: "gray",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
    textAlign: "center",
  },
  imageContainer: {
    maxWidth: "80%",
    aspectRatio: 1.5, // Maintain aspect ratio (width / height)
    margin: "auto",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
  },
  header: {
    fontSize: 20,
    marginBottom: 10,
  },
});
