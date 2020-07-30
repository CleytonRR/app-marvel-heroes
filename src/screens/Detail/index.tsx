import React from "react";
import {
  StatusBar,
  ImageBackground,
  ContainerLinearGradient,
  ContainerTitle,
  ContainerScroll,
  SubTitle,
  Title,
  ContainerAtribute,
  ContainerDetail,
  AtributeData,
  Description,
} from "./styles";

import SkillSection from "../../components/SkillSection";
import SectionMovie from "../../components/SectionMovie";

import Images from "../../assets/chars/";

import Age from "../../assets/icons/age.svg";
import Weight from "../../assets/icons/weight.svg";
import Universe from "../../assets/icons/universe.svg";
import Height from "../../assets/icons/height.svg";

const Detail = ({ route }) => {
  const {
    alterEgo,
    name,
    imagePath,
    biography,
    caracteristics,
    abilities,
    movies,
  } = route.params.data;

  function getAge(yearbirth: string) {
    return new Date().getFullYear() - parseInt(yearbirth);
  }

  return (
    <>
      <StatusBar />
      <ContainerScroll>
        <ImageBackground
          source={Images[`${imagePath.split("/")[2].split(".")[0]}`]}
        >
          <ContainerLinearGradient />
          <ContainerTitle>
            <SubTitle>{alterEgo}</SubTitle>
            <Title>{name}</Title>
          </ContainerTitle>
          <ContainerAtribute>
            <ContainerDetail>
              <Age width={50} height={30} />
              <AtributeData>{getAge(caracteristics.birth)} anos</AtributeData>
            </ContainerDetail>

            <ContainerDetail>
              <Weight width={50} height={30} />
              <AtributeData>{caracteristics.weight.value}kg</AtributeData>
            </ContainerDetail>

            <ContainerDetail>
              <Height width={50} height={30} />
              <AtributeData>{caracteristics.height.value}m</AtributeData>
            </ContainerDetail>

            <ContainerDetail>
              <Universe width={50} height={30} />
              <AtributeData>{caracteristics.universe}</AtributeData>
            </ContainerDetail>
          </ContainerAtribute>
        </ImageBackground>

        <Description>{biography}</Description>
        <SkillSection skills={abilities} />
        <SectionMovie movies={movies} />
      </ContainerScroll>
    </>
  );
};

export default Detail;
