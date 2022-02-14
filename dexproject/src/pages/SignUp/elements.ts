import styled from "styled-components";
import Background from 'assets/images/backgroundSignUp.svg';


export const SignUpWrapper = styled.div`
  background: url(${Background}),linear-gradient(to right, #ffffff 0%, #ffffff 42%, var(--light-blue) 42%, var(--light-blue) 100%);
  background-repeat: no-repeat;
  background-position: 85% center;
`;

export const SignUpContainer = styled.div`
    min-height:100vh;
    margin-left:120px;
    max-width:366px;
    display:flex;
    flex-direction:column;
    justify-content: center;
`;

export const SignUpForm = styled.form``;

export const SignUpTitle = styled.h1`
    font-size:var(--fs-title);
    line-height:var(--lh-title);
    color:var(--blue);
    margin-bottom:32px;
`;

export const StyledMember = styled.div`
  text-align: center;
`;

export const StyledMemberText = styled.p`
  display:inline;
  font-weight: var(--fw-medium);
  font-size:var(--fs-sm);
  line-height: var(--lh-sm);
  color:var(--grey);
`;

export const SignUpAccept = styled.div``;

// export const SignUpAcceptText = styled.p`
//   display:inline-block;
//   font-size: var(--fs-sm);
//   line-height: var(--lh-sm);
//   font-weight: var(--fw-medium);
//   color: var(--grey);
// `
