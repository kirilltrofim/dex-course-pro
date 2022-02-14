import styled from "styled-components";
import {FC} from 'react';
import SearchIMG from 'assets/icons/search.svg';

const StyledSearchContainer = styled.div`
        position:relative;
        width:360px;

        :before{
        position:absolute;
        content:'';
        background:url(${SearchIMG}) no-repeat;
        width:16px;
        height:16px;
        right:15px;
        top:11.32px;
    }
`;

const StyledSearch = styled.input`
    display:block;
    width:100%;
    height:40px;
    background: var(--white);
    border: 0.5px solid var(--lightest-grey);
    box-sizing: border-box;
    border-radius: 4px;
    padding:8px;
    font-size:var(--fs-sm);
    line-height:var(--lh-sm);
    font-weight:var(--fw-medium);
    color:var(--grey);

    ::placeholder{
    font-size:var(--fs-sm);
    line-height:var(--lh-sm);
    font-weight:var(--fw-medium);
    color:var(--grey);
    }

    :focus{
        box-shadow: 0px 0px 5px #D9D9D9;
        outline:none;
    }
`;
interface Props{}

export const Search:FC<Props> = () =>{
    return(
        <StyledSearchContainer>
            <StyledSearch placeholder="Search..."/>
        </StyledSearchContainer>
    )
}