import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";

export const SectionImage = styled.SafeAreaView`
  margin-bottom: 20px;
`;
export const SubTitle = styled.Text`
  font-size: 16px;
  font-family: "GilroySemiBold";
  color: #b7b7c8;
`;
export const ContainerTitles = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const TitleSection = styled.Text`
  font-size: 18px;
  font-family: "GilroyBold";
  color: #f2264b;
`;

export const ContainerImages = styled.ScrollView.attrs(() => ({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {
    alignItems: "center",
  },
}))`
  margin-top: 20px;
`;

export const ButtonSection = styled.TouchableOpacity``;

export const ImageBox = styled.ImageBackground.attrs(() => ({
  borderRadius: 20,
}))`
  width: 125px;
  height: 230px;
  border-radius: 20px;
  margin-right: 16px;
  background-color: black;
  justify-content: flex-end;
  padding-left: 10px;
  position: relative;
`;

export const ContainerLinearGradient = styled(LinearGradient).attrs(() => ({
  colors: ["rgba(0,0,0,0.0)", "#000000"],
  start: [0.2, 0.4],
}))`
  position: absolute;
  left: 0;
  right: 0;
  height: 280px;
  border-radius: 20px;
`;

export const SubTitleImage = styled.Text`
  color: #f8f8f8;
  font-family: "Gilroy";
`;
export const TitleImage = styled.Text`
  color: #f8f8f8;
  font-family: "GilroyHeavy";
  font-size: 20px;
`;
