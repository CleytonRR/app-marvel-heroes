import React from "react";
import { useRoute } from "@react-navigation/native";

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

interface caracteristic {
  birth: string;
  weight: {
    value: number;
  };
  height: {
    value: number;
  };
  universe: string;
}

interface Params {
  alterEgo: string;
  name: string;
  imagePath: string;
  biography: string;
  caracteristics: caracteristic;
  abilities: object;
  movies: [];
}

const Detail: React.FC = () => {
  const route = useRoute();
  const routeParams = route.params.data as Params;
  const {
    alterEgo,
    name,
    imagePath,
    biography,
    caracteristics,
    abilities,
    movies,
  } = routeParams;

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
