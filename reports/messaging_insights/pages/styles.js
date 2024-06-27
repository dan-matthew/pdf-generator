const { StyleSheet } = require("@react-pdf/renderer");

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
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
});

module.exports = styles;
