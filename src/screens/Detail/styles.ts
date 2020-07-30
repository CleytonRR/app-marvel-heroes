import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";

export const StatusBar = styled.StatusBar.attrs(() => {
  barStyle: "dark-content";
})``;

export const ImageBackground = styled.ImageBackground.attrs(() => ({
  resizeMode: "stretch",
}))`
  height: 490px;
`;

export const ContainerLinearGradient = styled(LinearGradient).attrs(() => ({
  colors: ["rgba(0,0,0,0.0)", "#000000"],
  start: [0.4, -0.1],
}))`
  position: absolute;
  height: 100%;
  width: 100%;
`;

export const ContainerTitle = styled.View`
  flex: 1;
  justify-content: flex-end;
  padding: 5%;
`;

export const SubTitle = styled.Text`
  font-size: 20px;
  font-family: "GilroyMedium";
  color: #b7b7c8;
`;
export const Title = styled.Text`
  color: #f8f8f8;
  font-family: "GilroyHeavy";
  font-size: 40px;
`;

export const ContainerScroll = styled.ScrollView.attrs(() => ({}))`
  flex: 1;
  background-color: #000;
`;
export const ContainerAtribute = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20px;
  padding: 0 5%;
`;

export const ContainerDetail = styled.View`
  justify-content: center;
  align-items: center;
  padding-top: 25px;
`;
export const AtributeIcone = styled.Image``;
export const AtributeData = styled.Text`
  font-family: "GilroyMedium";
  color: #f8f8f8;
  font-size: 12px;
  margin-top: 5px;
`;
export const Description = styled.Text`
  font-size: 14px;
  font-family: "GilroyMedium";
  color: #b7b7c8;
  margin-bottom: 20px;
  padding: 0 5%;
`;
