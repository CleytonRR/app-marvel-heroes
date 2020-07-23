import React from "react";
import { View, Text, StyleSheet } from "react-native";

import Marvel from "../../assets/icons/marvel.svg";
import Search from "../../assets/icons/search.svg";
import Menu from "../../assets/icons/menu.svg";

function CustomHeader() {
  return (
    <View style={styles.container}>
      <Menu />
      <Marvel />
      <Search stroke={"#000"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "stretch",
  },
});

export default CustomHeader;
