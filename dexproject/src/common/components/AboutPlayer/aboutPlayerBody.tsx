import styled from "styled-components";
import React, { FC } from "react";

const AboutPlayerWrapper = styled.div`
  background: linear-gradient(276.45deg, #707070 0%, #393939 100.28%);
  border-radius: 0px 0px 10px 10px;
  padding:65px 144px 0px 0px;
`;

const AboutPlayerContainer = styled.div`
  display: flex;
`;

const AboutPlayerLogo = styled.img`
    margin-right:56px;
`;

const AboutPlayerContent = styled.div``;

const AboutPlayerHeadTitle = styled.h1`
  font-size: var(--fs-title);
  line-height: var(--lh-title);
  color: var(--white);
  margin-bottom:40px;
`;

const AboutPlayerHeadTitleNumber = styled.span`
  color: var(--light-red);
  margin-left: 9px;
`;

const AboutPlayerInfo = styled.div`
  width: 100%;
  display: flex;
  justify-content:space-between;
`;

const AboutPlayerInfoBlock = styled.div``;

const AboutPlayerInfoItem = styled.div`
  margin-bottom: 54px;
`;

const AboutPlayerTitle = styled.h3`
  font-size: var(--fs-bd);
  line-height: var(--lh-bd);
  color: var(--white);
  font-weight: var(--fw-bold);
  margin-bottom: 8px;
`;

const AboutPlayerText = styled.p`
  font-size: var(--fs-md);
  line-height: var(--lh-md);
  color: var(--white);
  font-weight: var(--fw-medium);
`;

interface Props {}

export const AboutPlayerBody: FC<Props> = () => {
  return (
    <AboutPlayerWrapper>
      <AboutPlayerContainer>
        <AboutPlayerLogo src="assets/images/POR.png" />
        <AboutPlayerContent>
          <AboutPlayerHeadTitle>
            Greg Whittington
            <AboutPlayerHeadTitleNumber>#22</AboutPlayerHeadTitleNumber>
          </AboutPlayerHeadTitle>
          <AboutPlayerInfo>
            <AboutPlayerInfoBlock>
              <AboutPlayerInfoItem>
                <AboutPlayerTitle>Position</AboutPlayerTitle>
                <AboutPlayerText>Forward</AboutPlayerText>
              </AboutPlayerInfoItem>
              <AboutPlayerInfoItem>
                <AboutPlayerTitle>Height</AboutPlayerTitle>
                <AboutPlayerText>206cm</AboutPlayerText>
              </AboutPlayerInfoItem>
              <AboutPlayerInfoItem>
                <AboutPlayerTitle>Age</AboutPlayerTitle>
                <AboutPlayerText>27</AboutPlayerText>
              </AboutPlayerInfoItem>
            </AboutPlayerInfoBlock>
            <AboutPlayerInfoBlock>
              <AboutPlayerInfoItem>
                <AboutPlayerTitle>Team</AboutPlayerTitle>
                <AboutPlayerText>Denver Nuggets</AboutPlayerText>
              </AboutPlayerInfoItem>
              <AboutPlayerInfoItem>
                <AboutPlayerTitle>Weight</AboutPlayerTitle>
                <AboutPlayerText>95kg</AboutPlayerText>
              </AboutPlayerInfoItem>
            </AboutPlayerInfoBlock>
          </AboutPlayerInfo>
        </AboutPlayerContent>
      </AboutPlayerContainer>
    </AboutPlayerWrapper>
  );
};
