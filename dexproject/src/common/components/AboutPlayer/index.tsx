import React, { FC } from "react";
import styled from "styled-components";
import { HeaderSection } from "./headerSection";
import { AboutPlayerBody } from "./aboutPlayerBody";

const AboutPlayerWrapper = styled.div`
  width: 1140px;
  margin: 0px auto;
`;

interface Props{}

export const AboutPlayer:FC<Props> = () => {
  return (
    <>
      <AboutPlayerWrapper>
        <HeaderSection branch="Players" name="Greg Whittington" />
        <AboutPlayerBody />
      </AboutPlayerWrapper>
    </>
  );
};
