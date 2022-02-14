import styled from "styled-components";
import React,{FC} from 'react';

const HeaderSectionWrapper = styled.header`
  background: var(--white);
  border: 0.5px solid var(--light-grey);
  box-sizing: border-box;
  border-radius: 10px 10px 0px 0px;
  padding: 0 35px;
  height: 69px;
  /* width: 1140px;
  margin: 0px auto; */
`;

const HeaderSectionContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderSectionText = styled.h3`
  font-size: var(--fs-sm);
  line-height: var(--lh-sm);
  color: var(--red);
  font-weight: var(--fw-medium);
`;

const HeaderSectionInfo = styled.div`
  display: flex;
  align-items: center;
`;

const HeaderSectionInfoBranch = styled(HeaderSectionText)``;

const HeaderSectionInfoName = styled(HeaderSectionText)``;

const HeaderSectionSlash = styled.span`
  color: var(--light-grey);
  margin: 0 4px;
`;

const HeaderSectionSetting = styled.div``;

const HeaderSectionSettingEdit = styled.a`
  margin-right: 24px;
`;

const HeaderSectionSettingRemove = styled.a``;

const HeaderSectionSettingImg = styled.img``;

interface Props{
  branch:string;
  name:string
}

export const HeaderSection:FC<Props> = ({branch, name}) => {
  return (
    <HeaderSectionWrapper>
      <HeaderSectionContainer>
        <HeaderSectionInfo>
          <HeaderSectionInfoBranch>{branch}</HeaderSectionInfoBranch>
          <HeaderSectionSlash>/</HeaderSectionSlash>
          <HeaderSectionInfoName>{name}</HeaderSectionInfoName>
        </HeaderSectionInfo>
        <HeaderSectionSetting>
          <HeaderSectionSettingEdit href="#">
            <HeaderSectionSettingImg src="assets/icons/create.svg" />
          </HeaderSectionSettingEdit>
          <HeaderSectionSettingRemove href="#">
            <HeaderSectionSettingImg src="assets/icons/delete.svg" />
          </HeaderSectionSettingRemove>
        </HeaderSectionSetting>
      </HeaderSectionContainer>
    </HeaderSectionWrapper>
  );
};
