import styled from "styled-components/native";

export const SectionImage = styled.SafeAreaView`
  margin-bottom: 20px;
  margin-top: 20px;
  padding: 0 5%;
`;

export const ContainerTitles = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const TitleSection = styled.Text`
  font-size: 18px;
  font-family: "GilroyBold";
  color: #fff;
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
