import React from "react";
import { Container, TitleSkill } from "./styles";

import SkillBar from "../SkillBar";

const SkillSection = ({ skills }) => {
  function createSkillList(skillsData) {
    const skillNames = Object.keys(skillsData);
    var skillList = [];
    skillNames.forEach((item) => {
      skillList.push({
        label: item,
        quantity: `${skillsData[item]}%`,
      });
    });
    return skillList;
  }
  return (
    <Container>
      <TitleSkill>Habilidade</TitleSkill>
      <SkillBar skill={createSkillList(skills)} />
    </Container>
  );
};

export default SkillSection;
