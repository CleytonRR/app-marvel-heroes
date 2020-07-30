import React from "react";
import { Container, TitleSkill } from "./styles";

import SkillBar from "../SkillBar";

interface Params {
  force: number;
  intelligence: number;
  agility: number;
  endurance: number;
  velocity: number;
}

const SkillSection = ({ skills }) => {
  function createSkillList(skillsData: Params) {
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
