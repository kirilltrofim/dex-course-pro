import styled from "styled-components";
import { IInput } from "common/interfaces/IInput";

const InputContainer = styled.input<IInput>`
  width:${({width}) => width ? width : '366px'};
  height:${({height}) => height ? height : '40px'};
  background:var(--lightest-grey1);
  border:${({error}) => error ? '1px solid #FF768E' : 'none'};
  padding:8px 0 8px 12px;
  color:var(--dark-grey);
  font-size:var(--fs-sm);
  line-height:var(--lh-sm);
  font-weight:var(--fw-medium);
  border-radius: 4px;
  :hover{
    background:var(--lightest-grey);
  }
  :focus{
    box-shadow: 0 0 5px #D9D9D9;
    background:var(--lightest-grey1);
    border:none;
    outline:none;
  }
  :disabled{
    color:var(--lightest-grey);
  }
`;

export const Input = () =>{
    return(
        <>
            <InputContainer value={'hello'}/>
        </>
    )
}