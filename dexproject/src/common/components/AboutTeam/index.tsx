import React, { FC } from "react";
import styled from "styled-components";
import { HeaderSection } from "./headerSection";
import { AboutTeamBody } from "./aboutTeamBody";

const AboutTeamWrapper = styled.div`
  width: 1140px;
  margin: 0px auto;
`;

interface Props{}

export const AboutTeam:FC<Props> = () => {
  return (
    <>
      <AboutTeamWrapper>
        <HeaderSection branch="Teams" name="Denver Nuggets" />
        <AboutTeamBody />
      </AboutTeamWrapper>
    </>
  );
};
