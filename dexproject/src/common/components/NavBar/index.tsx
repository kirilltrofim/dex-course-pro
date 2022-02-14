import styled from "styled-components";
import React, { FC } from "react";
import { INavBarLinkTitle } from "common/interfaces/INavbar";

const NavbarWrapper = styled.aside`
  background: var(--white);
  padding: 0 47px;
`;

const NavbarContainer = styled.nav`
  display: inline-flex;
  flex-direction: column;
  justify-content:space-between;
  height:992px;
`;

const NavbarLinkContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items:center;
`;

const NavbarLink = styled.a`
  display: inline-block;
  margin-top:40px;
  text-align: center;
  text-decoration: none;
`;

const NavbarLinkImg = styled.img``;


const NavbarLinkTitle = styled.h3<INavBarLinkTitle>`
  margin-top: 4px;
  font-size: var(--fs-spsm);
  line-height: 150%;
  font-weight: var(--fw-medium);
  color:${({color}:INavBarLinkTitle) => color ? color : 'var(--light-grey)'};

  &.active {
    color: var(--red);
  }
`;

export const Navbar: FC = () => {
  return (
    <NavbarWrapper>
      <NavbarContainer>
        <NavbarLinkContainer>
          <NavbarLink href="#">
            <NavbarLinkImg src="assets/icons/group_person.svg" />
            <NavbarLinkTitle>Teams</NavbarLinkTitle>
          </NavbarLink>
          <NavbarLink href="#">
            <NavbarLinkImg src="assets/icons/person.svg" />
            <NavbarLinkTitle className="active">Players</NavbarLinkTitle>
          </NavbarLink>
        </NavbarLinkContainer>
        <NavbarLink href="#">
            <NavbarLinkImg src="assets/icons/input.svg" />
            <NavbarLinkTitle color="var(--lightestRed)">Sign Out</NavbarLinkTitle>
          </NavbarLink>
      </NavbarContainer>
    </NavbarWrapper>
  );
};
