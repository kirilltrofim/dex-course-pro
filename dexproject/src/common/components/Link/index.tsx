import styled from "styled-components";
import {FC} from 'react'

const StyledLink = styled.a`
font-weight: var(--fw-medium);
font-size: var(--fs-sm);
line-height: 19px;
text-decoration-line: underline;
color:var(--red);

&.disabled{
    pointer-events: none;
    color:var(--lightest-grey);  
}
`;

interface Props{
    className?:string;
    text:string;
}

export const Link:FC<any> = ({className,text,...props}) =>{
    return(
        <StyledLink href="#" {...props} className={className ? className : ''}>{text}</StyledLink>
    )
}