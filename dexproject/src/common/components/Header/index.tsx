import styled from "styled-components";
import React,{FC} from 'react';

const StyledHeader = styled.header`
    box-shadow: 0px 1px 10px rgba(209, 209, 209, 0.5);
    background:var(--white);
`;

const HeaderContainer = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    height:80px;
    padding:0px 50px;
    margin:0px auto;
`

const HeaderLogo = styled.img``;

const HeaderUser = styled.h2`
    position:relative;
    padding-right:48px;
    cursor:pointer;
    :before{
        position:absolute;
        content:'';
        width:30px;
        height:30px;
        background:url('assets/icons/profile.svg');
        right:0;
        top:0;
    }
`;

export const Header:FC = () =>{
    return (
        <StyledHeader>
            <HeaderContainer>
                <HeaderLogo src="img/logo.png"/>
                <HeaderUser>John Smith</HeaderUser>
            </HeaderContainer>
        </StyledHeader>
    )
}