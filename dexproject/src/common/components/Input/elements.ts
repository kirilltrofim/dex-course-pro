import styled, { css } from "styled-components";
import { IInput, IInputWrapper } from "common/interfaces/IInput";

export const ComponentWrapper = styled.div`
  margin-bottom: 24px;
`;

export const StyledInputWrapper = styled.div<IInputWrapper>`
  position: relative;
  width: ${({ width }) => (width ? width : "366px")};
  height: ${({ height }) => (height ? height : "40px")};
`;

export const StyledInputEye = styled.img`
  cursor: pointer;
  position: absolute;
  right:12px;
  top:12px;
`;

export const StyledLabel = styled.label`
  display: block;
  font-size: var(--fs-sm);
  line-height: var(--lh-sm);
  font-weight: var(--fw-medium);
  color: var(--grey);
`;

export const StyledInput = styled.input<IInput>`
  position: relative;
  width: 100%;
  height: 100%;
  background: var(--lightest-grey1);
  border: ${({ error }) => (error ? "1px solid #FF768E" : "none")};
  padding: 8px 0px 8px 12px;
  color: var(--dark-grey);
  font-size: var(--fs-sm);
  line-height: var(--lh-sm);
  font-weight: var(--fw-medium);
  border-radius: 4px;

  :hover {
    background: var(--lightest-grey);
  }

  :focus {
    box-shadow: 0px 0px 5px #d9d9d9;
    background: var(--lightest-grey1);
    border: none;
    outline: none;
  }

  :disabled {
    color: var(--lightest-grey);
  }
`;
