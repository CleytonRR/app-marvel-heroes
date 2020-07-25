import React, { useState, useEffect } from "react";
import file from "../../assets/application.json";
import Images from "../../assets/chars";
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
  const [data, setData] = useState<object>({});
  const [typeName, setTypeName] = useState<string[]>([]);

  useEffect(() => {
    (() => {
      setData(file);
      setTypeName(Object.keys(file));
    })();
  }, []);

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
              <ImageBox
                key={index}
                source={
                  Images[`${detail.imagePath.split("/")[2].split(".")[0]}`]
                }
              >
                <ContainerLinearGradient />
                <SubTitleImage>{detail.alterEgo}</SubTitleImage>
                <TitleImage>{detail.name}</TitleImage>
                {console.log(detail.name)}
              </ImageBox>
            ))}
          </ContainerImages>
        </SectionImage>
      ))}
    </>
  );
};

export default SectionChar;
