import React,{FC} from 'react';
import * as B from './elements';
import {IButton} from '../../interfaces/IButton'

interface Props extends IButton{
    text:string;
    margin?:string;
}

export const Button:FC<Props> = ({text, ...props}) =>{
    return (
        <B.StyledButtonWrapper {...props}>
            <B.StyledButton {...props} >{text}</B.StyledButton>
        </B.StyledButtonWrapper>
    )
}