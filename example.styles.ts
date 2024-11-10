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
});
