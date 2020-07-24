import React from "react";
import {
  SubTitle,
  ContainerImages,
  SectionImage,
  ContainerTitles,
  TitleSection,
  ImageBox,
  ContainerLinearGradient,
  SubTitleImage,
  TitleImage,
} from "./styles";

const SectionChar = () => {
  return (
    <SectionImage>
      <ContainerTitles>
        <TitleSection>Heróis</TitleSection>
        <SubTitle>Ver tudo</SubTitle>
      </ContainerTitles>

      <ContainerImages>
        <ImageBox source={require(`../../assets/chars/spider-man.png`)}>
          <ContainerLinearGradient />
          <SubTitleImage>Peter Parker</SubTitleImage>
          <TitleImage>Homem Aranha</TitleImage>
        </ImageBox>
      </ContainerImages>
    </SectionImage>
  );
};

export default SectionChar;
