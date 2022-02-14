import styled, {css} from "styled-components";
import { IButton } from "common/interfaces/IButton";

/* width:${({width}) => width ? width : '365px'}; */

export const StyledButtonWrapper = styled.div<{
    margin?:string;
}>`
    margin:${({margin}) => margin ? margin : '0'};
`

export const StyledButton = styled.button<IButton>`
    display:inline-block;
    position:relative;
    padding:${({padding}) => padding ? padding : '10px 159px'};
    /* height:40px; */
    border-radius:4px;
    font-weight:var(--fw-medium);
    background:${({background}) => background ? background : 'var(--red)'};
    color:${({color}) => color ? color : 'var(--white)'};
    border:${({border}) => border ? border : 'none'};
    cursor:${({disabled}) => disabled ? 'default' : 'pointer'};

    :hover{
        background:${({hover}) => hover ? hover : 'var(--light-red)'};
    }

    :active{
        background:${({backgroundActive}) => backgroundActive ? backgroundActive : 'var(--dark-red)'};
        border:${({borderActive}) => borderActive ? borderActive : 'none'};
        color:${({colorActive}) => colorActive ? colorActive : 'var(--white)'};
    }

    :disabled{
        background:var(--lightest-grey1);
        color:var(--lightest-grey);
    }

    ${({plus}) => plus && css`
        :before{
            position:absolute;
            content:'';
            width:9.33px;
            height:9.33px;
            top:11px;
            right:27px;
            background:url('assets/icons/add.svg')
        }
    `}
`




