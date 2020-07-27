import styled from "styled-components/native";
import Slider from "@react-native-community/slider";

export const Container = styled.View``;

export const CustomSlider = styled(Slider).attrs(() => ({
  minimumValue: 0,
  maximumValue: 1,
  minimumTrackTintColor: "#FFFFFF",
  maximumTrackTintColor: "#0000ff",
  thumbTintColor: "#ff0",
}))`
  width: 300px;
  height: 100px;
  background-color: #ff00ff;
`;

export const TitleSkill = styled.Text`
  font-size: 18px;
  font-family: "GilroyBold";
  color: #f8f8f8;
  margin-bottom: 20px;
`;
