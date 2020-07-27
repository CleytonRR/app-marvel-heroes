import React from "react";
import { Text } from "react-native";
import { useFonts } from "expo-font";
import Routes from "./src/routes";

export default function App() {
  let [fontsLoaded] = useFonts({
    Gilroy: require("./src/assets/fonts/gilroy-regular.ttf"),
    GilroyBold: require("./src/assets/fonts/gilroy-bold.ttf"),
    GilroyHeavy: require("./src/assets/fonts/gilroy-heavy.ttf"),
    GilroyMedium: require("./src/assets/fonts/gilroy-medium.ttf"),
    GilroySemiBold: require("./src/assets/fonts/gilroy-semibold.ttf"),
  });

  if (!fontsLoaded) {
    return <Text>Carregando...</Text>;
  }
  return <Routes />;
}
