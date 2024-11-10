import {StyleSheet} from "react-native";

const createStyle = ({spacing}: {spacing: number}) =>
  StyleSheet.create({
    itemContainer: {
      marginHorizontal: spacing / 2,
      height: 85, // Customize height as needed
      backgroundColor: "blue",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 10,
    },

    itemContent: {
      flex: 1,
    },

    wraperDetailes: {
      marginTop: 10,
      alignItems: "center",
      justifyContent: "center",
    },
    itemLable: {
      color: "white",
      fontSize: 16,
      textAlign: "center",
    },
  });

export default createStyle;
