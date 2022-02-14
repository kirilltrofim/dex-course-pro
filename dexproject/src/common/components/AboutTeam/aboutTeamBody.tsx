import styled from "styled-components";
import React, { FC } from "react";

const AboutTeamWrapper = styled.div`
  background: linear-gradient(276.45deg, #707070 0%, #393939 100.28%);
  border-radius: 0px 0px 10px 10px;
  padding: 65px 144px 0px 0px;
`;

const AboutTeamContainer = styled.div`
  display: flex;
  align-items: center;
`;

const AboutTeamLogo = styled.img`
  width: 210px;
  height: 210px;
  margin: 0 146px;
`;

const AboutTeamContent = styled.div``;

const AboutTeamHeadTitle = styled.h1`
  font-size: var(--fs-title);
  line-height: var(--lh-title);
  color: var(--white);
  margin-bottom: 40px;
`;

const AboutTeamInfo = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const AboutTeamInfoBlock = styled.div`
  margin-right:84px;
`;

const AboutTeamInfoItem = styled.div`
  margin-bottom: 54px;
`;

const AboutTeamTitle = styled.h3`
  font-size: var(--fs-bd);
  line-height: var(--lh-bd);
  color: var(--white);
  font-weight: var(--fw-bold);
  margin-bottom: 8px;
`;

const AboutTeamText = styled.p`
  font-size: var(--fs-md);
  line-height: var(--lh-md);
  color: var(--white);
  font-weight: var(--fw-medium);
`;

interface Props {}

export const AboutTeamBody: FC<Props> = () => {
  return (
    <AboutTeamWrapper>
      <AboutTeamContainer>
        <AboutTeamLogo src="assets/images/PORTeam.png" />
        <AboutTeamContent>
          <AboutTeamHeadTitle>Denver Nuggets</AboutTeamHeadTitle>
          <AboutTeamInfo>
            <AboutTeamInfoBlock>
              <AboutTeamInfoItem>
                <AboutTeamTitle>Year of foundation</AboutTeamTitle>
                <AboutTeamText>1976</AboutTeamText>
              </AboutTeamInfoItem>
              <AboutTeamInfoItem>
                <AboutTeamTitle>Conference</AboutTeamTitle>
                <AboutTeamText>Western</AboutTeamText>
              </AboutTeamInfoItem>
            </AboutTeamInfoBlock>
            <AboutTeamInfoBlock>
              <AboutTeamInfoItem>
                <AboutTeamTitle>Division</AboutTeamTitle>
                <AboutTeamText>Northwestern</AboutTeamText>
              </AboutTeamInfoItem>
            </AboutTeamInfoBlock>
          </AboutTeamInfo>
        </AboutTeamContent>
      </AboutTeamContainer>
    </AboutTeamWrapper>
  );
};
