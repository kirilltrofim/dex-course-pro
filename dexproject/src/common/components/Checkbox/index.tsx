import React, { FC } from "react";
import styled, { css } from "styled-components";

const CheckboxLabel = styled.label``;

const CheckboxContainer = styled.div`
  position: relative;
  display: inline-block;
  vertical-align: middle;
`;

const Icon = styled.svg`
  position: absolute;
  top: 3px;
  left: 0px;
  fill: none;
  stroke: white;
  stroke-width: 2px;
`;

const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

interface ICheckbox {
  error?: boolean;
  checked?: boolean;
  disabled?:boolean;
}

const StyledCheckbox = styled.div<ICheckbox>`
  display: inline-block;
  width: 12px;
  height: 12px;
  background: ${({ checked }) => (checked ? "#E4163A" : "#FFFFFF")};
  border-radius: 2px;
  transition: all 150ms;
  border: ${({checked}) => checked ?'1px solid #E4163A'  : '1px solid #9c9c9c'};
  ${HiddenCheckbox}:hover + & {
    border: 1px solid #e4163a;
  }
  ${HiddenCheckbox}:disabled + & {
    background: #d1d1d1;
    border: 1px solid transparent;
  }
  ${({ error }) =>
    error &&
    css`
      border: 1px solid #ff768e;
    `}
  ${Icon} {
    visibility: ${({ checked }) => (checked ? "visible" : "hidden")};
  }
`;

const CheckboxText = styled.span<ICheckbox>`
  font-weight: var(--fw-medium);
  font-size: var(--fs-sm);
  line-height: var(--lh-sm);
  color:${({disabled, error}) => disabled ? 'var(--lightest-grey1)' : (error ? 'var(----lightestRed)' : 'var(--grey)')};
  /* color: var(--grey); */
  margin-left:10px;
`;

interface Props {
  className?: string;
  checked: boolean;
  text:string;
  disabled?: boolean;
  onChange: (event:any) => void;
  error?:boolean;
}

export const Checkbox: FC<Props> = ({ className, checked,text, ...props }) => (
  <CheckboxLabel>
    <CheckboxContainer className={className}>
      <HiddenCheckbox checked={checked} {...props} />
      <StyledCheckbox checked={checked} {...props}>
        <Icon viewBox="0 0 24 24">
          <polyline points="20 6 9 17 4 12" />
        </Icon>
      </StyledCheckbox>
    </CheckboxContainer>
    <CheckboxText>{text}</CheckboxText>
  </CheckboxLabel>
);
