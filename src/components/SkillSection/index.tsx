import React from "react";
import { Container, TitleSkill, CustomSlider } from "./styles";

import SkillBar from "../SkillBar";
const SkillSection = () => {
  return (
    <Container>
      <TitleSkill>Habilidade</TitleSkill>
      <SkillBar />
    </Container>
  );
};

export default SkillSection;
