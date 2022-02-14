import styled from "styled-components";
import {FC} from 'react';

const StyledNotification = styled.div`
  width: 470px;
  padding: 8px 16px;
  color: var(--white);
  background: var(--light-red);
  font-weight: var(--fw-medium);
  font-size: 16px;
  line-height: 24px;
`;

interface Props{}

export const Notification:FC<Props> = () => {
  return (
    <StyledNotification>
      User with the specified username / password was not found.
    </StyledNotification>
  );
};
