import React from "react";
import { useNavigation } from "@react-navigation/native";
import {
  Container,
  SubTitle,
  Title,
  ContainerAvatar,
  AvatarLinearGradient,
  Avatar,
} from "./styles";

import Alien from "../../assets/icons/alien.svg";
import Antihero from "../../assets/icons/antihero.svg";
import Hero from "../../assets/icons/hero.svg";
import Human from "../../assets/icons/human.svg";
import Villain from "../../assets/icons/villain.svg";

import SectionChar from "../../components/SectionChar";

const avatars = [
  {
    label: Hero,
    colors: ["#005BEA", "#00C6FB"],
  },
  {
    label: Villain,
    colors: ["#ED1D24", "#ED1F69"],
  },
  {
    label: Antihero,
    colors: ["#B224EF", "#7579FF"],
  },
  {
    label: Alien,
    colors: ["#0BA360", "#3CBA92"],
  },
  {
    label: Human,
    colors: ["#FF7EB3", "#FF758C"],
  },
];

function HomeScreen() {
  const navigation = useNavigation();

  return (
    <>
      <Container>
        <SubTitle>Bem vindo ao Marvel Heroes</SubTitle>
        <Title>Escolha o seu personagem</Title>

        <ContainerAvatar>
          {avatars.map((item, index) => (
            <Avatar key={index}>
              <AvatarLinearGradient colors={item.colors} />
              <item.label width={50} height={30} />
            </Avatar>
          ))}
        </ContainerAvatar>

        <SectionChar />
      </Container>
    </>
  );
}

export default HomeScreen;
