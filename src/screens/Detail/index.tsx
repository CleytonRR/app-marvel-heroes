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
  AtributeIcone,
  AtributeData,
  Description,
} from "./styles";

import SkillSection from "../../components/SkillSection";
import SectionChar from "../../components/SectionChar";

import image from "../../assets/chars/spider-man.png";
import Age from "../../assets/icons/age.svg";
import Weight from "../../assets/icons/weight.svg";
import Universe from "../../assets/icons/universe.svg";
import Height from "../../assets/icons/height.svg";

var atributesIcons = [
  {
    label: Age,
    age: 31,
  },
  {
    label: Weight,
  },
  {
    label: Universe,
  },
  {
    label: Height,
  },
];

const Detail = () => {
  return (
    <>
      <StatusBar />
      <ContainerScroll>
        <ImageBackground source={image}>
          <ContainerLinearGradient />
          <ContainerTitle>
            <SubTitle>Peter Parker</SubTitle>
            <Title>Homem Aranha</Title>
          </ContainerTitle>
          <ContainerAtribute>
            {atributesIcons.map((item, key) => (
              <ContainerDetail key={key}>
                <item.label key={key} width={50} height={30} />
                <AtributeData>30 anos</AtributeData>
              </ContainerDetail>
            ))}
          </ContainerAtribute>
        </ImageBackground>

        <Description>
          Em Forest Hills, Queens, Nova York, o estudante de ensino médio, Peter
          Parker, é um cientista orfão que vive com seu tio Ben e tia May. Ele é
          mordido por uma aranha radioativa em uma exposição científica e
          adquire a agilidade e a força proporcional de um aracnídeo. Junto com
          a super força, Parker ganha a capacidade de andar nas paredes e tetos.
          Através de sua habilidade nativa para a ciência, ele desenvolve um
          aparelho que o permitir lançar teias artificiais. Inicialmente
          buscando capitalizar suas novas habilidades, Parker cria um traje e,
          como Homem Aranha, torna-se uma estrela de televisão."
        </Description>
        <SkillSection />
        <SectionChar />
      </ContainerScroll>
    </>
  );
};

export default Detail;
