import {StyleSheet} from "react-native";

export default StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
  conteinerContent: {
    padding: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    alignItems: "center",
  },

  itemAmount: {
    color: "#FFF",
    fontSize: 16,
  },
  paymentDetails: {
    padding: 12,
    alignItems: "center",
  },
  wraperDetailes: {
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  date: {
    fontSize: 16,
    color: "black",
    marginBottom: 5,
    fontWeight: "500",
  },
  mainAmount: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 5,
  },
  detailsRow: {
    flexDirection: "row",
    justifyContent: "center",

    alignItems: "center",
  },
  subText: {
    fontSize: 14,
    color: "#333",
    marginHorizontal: 5,
  },
  interestContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FAE3E3",
    padding: 5,
    borderRadius: 8,
    marginBottom: 10,
  },
  interestLabel: {
    fontSize: 12,
    color: "#FF6A6A",
    marginRight: 5,
  },
  interestAmount: {
    fontSize: 14,
    color: "#FF6A6A",
    fontWeight: "bold",
  },
  nextPaymentText: {
    fontSize: 14,
    color: "#555",
    marginTop: 10,
  },
});
