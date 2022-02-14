import React from "react";
import { Input, Button, Link } from "common/components";
import * as e from "./elements";
import {validPassword, validLogin} from "../../common/components/Regex";

type Props = {};

export const SignIn = (props: Props) => {
  return (
    <e.SignInWrapper>
      <e.SignInContainer>
        <e.SignInTitle>Sign In</e.SignInTitle>
        <e.SignInForm>
          <Input id="ILogin" label="Login" pattern={validLogin}/>
          <Input type='password' id="IPassword" label="Password" pattern={validPassword} closeEye/>
          <Button text="Sign In" margin="0px 0px 24px 0px" />
        </e.SignInForm>
        <e.StyledMember>
          <e.StyledMemberText>Not a member yet? </e.StyledMemberText>
          <Link to="SignUp" text='Sign up'/>
        </e.StyledMember>
      </e.SignInContainer>
    </e.SignInWrapper>
  );
};
