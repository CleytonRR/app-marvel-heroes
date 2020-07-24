import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";

export const Container = styled.ScrollView`
  flex: 1;
  background-color: #fff;
  padding: 5%;
`;
export const SubTitle = styled.Text`
  font-size: 16px;
  font-family: "GilroySemiBold";
  color: #b7b7c8;
`;
export const Title = styled.Text`
  font-family: "GilroyHeavy";
  font-size: 32px;
`;
export const ContainerAvatar = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 40px;
  margin-bottom: 40px;
`;
export const Avatar = styled.View`
  width: 60px;
  height: 60px;
  border-radius: 50px;
  background-color: yellow;
  justify-content: center;
  align-items: center;
`;

export const SectionImage = styled.View``;
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
