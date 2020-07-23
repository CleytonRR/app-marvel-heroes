import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View>
      <Text style={styles.teste}>Apenas um teste</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  teste: {
    color: "blue",
  },
});
