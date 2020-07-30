import React from "react";
import Svg, { Line } from "react-native-svg";
import { Container, SkillName, ContainerBar } from "./styles";

interface SkillType {
  [index: number]: { label: string; quantity: int };
}

const SkillBar = ({ skill }) => {
  return (
    <>
      {skill.map((item, index) => (
        <Container key={index}>
          <SkillName>{item.label}</SkillName>
          <ContainerBar>
            <Svg height="15" width="100%">
              <Line
                x1="0"
                y1="0"
                x2="100%"
                y2="0"
                stroke="rgba(255,255,255,0.2)"
                strokeWidth="100%"
                strokeDasharray="2"
              />
              <Line
                x1="0"
                y1="0"
                x2={item.quantity}
                y2="0"
                clipPath="url(#clip)"
                stroke="rgba(255,255,255,0.7)"
                strokeWidth="100%"
                strokeDasharray="2"
              />
            </Svg>
          </ContainerBar>
        </Container>
      ))}
    </>
  );
};

export default SkillBar;
