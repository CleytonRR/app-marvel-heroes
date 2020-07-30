import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import file from "../../assets/application.json";
import Images from "../../assets/chars";
import {
  SubTitle,
  ContainerImages,
  SectionImage,
  ContainerTitles,
  TitleSection,
  ImageBox,
  ButtonSection,
  ContainerLinearGradient,
  SubTitleImage,
  TitleImage,
} from "./styles";

const SectionChar = () => {
  const navigation = useNavigation();
  const [data, setData] = useState<object>({});
  const [typeName, setTypeName] = useState<string[]>([]);

  useEffect(() => {
    (() => {
      setData(file);
      setTypeName(Object.keys(file));
    })();
  }, []);

  function redirectForDetail(data: Object) {
    navigation.navigate("Detail", { data });
  }

  return (
    <>
      {typeName.map((item, index) => (
        <SectionImage key={index}>
          <ContainerTitles>
            <TitleSection>{item}</TitleSection>
            <SubTitle>Ver tudo</SubTitle>
          </ContainerTitles>
          <ContainerImages>
            {data[item].map((detail, index) => (
              <ButtonSection
                key={index}
                onPress={() => redirectForDetail(detail)}
              >
                <ImageBox
                  source={
                    Images[`${detail.imagePath.split("/")[2].split(".")[0]}`]
                  }
                >
                  <ContainerLinearGradient />
                  <SubTitleImage>{detail.alterEgo}</SubTitleImage>
                  <TitleImage>{detail.name}</TitleImage>
                </ImageBox>
              </ButtonSection>
            ))}
          </ContainerImages>
        </SectionImage>
      ))}
    </>
  );
};

export default SectionChar;
