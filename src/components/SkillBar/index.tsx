import React from "react";
import Svg, { Line } from "react-native-svg";
import { Container, SkillName, ContainerBar } from "./styles";

const SkillBar = () => {
  return (
    <>
      <Container>
        <SkillName>Força</SkillName>
        <ContainerBar>
          <Svg height="15" width="100%">
            <Line
              x1="0"
              y1="0"
              x2="100%"
              y2="0"
              stroke="rgba(255,255,255,0.2)"
              strokeWidth="100%"
              strokeDasharray="3"
            />
            <Line
              x1="0"
              y1="0"
              x2="10"
              y2="0"
              clipPath="url(#clip)"
              stroke="rgba(255,255,255,0.7)"
              strokeWidth="100%"
              strokeDasharray="3"
            />
          </Svg>
        </ContainerBar>
      </Container>

      <Container>
        <SkillName>Inteligência</SkillName>
        <ContainerBar>
          <Svg height="15" width="100%">
            <Line
              x1="0"
              y1="0"
              x2="100%"
              y2="0"
              stroke="rgba(255,255,255,0.2)"
              strokeWidth="100%"
              strokeDasharray="3"
            />
            <Line
              x1="0"
              y1="0"
              x2="10"
              y2="0"
              clipPath="url(#clip)"
              stroke="rgba(255,255,255,0.7)"
              strokeWidth="100%"
              strokeDasharray="3"
            />
          </Svg>
        </ContainerBar>
      </Container>
    </>
  );
};

export default SkillBar;
