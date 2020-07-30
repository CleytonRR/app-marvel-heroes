import React from "react";

import {
  ContainerImages,
  ContainerTitles,
  TitleSection,
  SectionImage,
  ImageBox,
} from "./styles";

import Images from "../../assets/movies";

const SectionMovie = ({ movies }) => {
  return (
    <SectionImage>
      <ContainerTitles>
        <TitleSection>Filmes</TitleSection>
      </ContainerTitles>
      <ContainerImages>
        {movies.map((movie, index) => (
          <ImageBox
            key={index}
            source={Images[`${movie.split("/")[2].split(".")[0]}`]}
          />
        ))}
      </ContainerImages>
    </SectionImage>
  );
};

export default SectionMovie;
