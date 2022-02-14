import React, { FC, useState } from "react";
import { Input, Button, Link, Checkbox } from "common/components";
import * as e from "./elements";
import {validPassword, validLogin} from "../../common/components/Regex";



type Props = {};

export const SignUp: FC<Props> = () => {
    const [checked, setChecked] = useState(false);

    const handleChecked = () => setChecked(!checked)

  return (
    <e.SignUpWrapper>
      <e.SignUpContainer>
        <e.SignUpTitle>Sign Up</e.SignUpTitle>
        <e.SignUpForm>
          <Input id="IName" label="Name" />
          <Input id="ILogin" label="Login" pattern={validLogin}/>
          <Input type="password" id="IPassword" label="Password" pattern={validPassword} closeEye />
          <Input type="password" id="IPasswordAgain" label="Enter your password again" pattern={validPassword} closeEye/>
          <e.SignUpAccept>
            <Checkbox checked={checked} onChange={handleChecked} text='I accept the agreement'/>
          </e.SignUpAccept>
          <Button text="Sign Up" margin="24px 0px 24px 0px" />
        </e.SignUpForm>
        <e.StyledMember>
          <e.StyledMemberText>Not a member yet? </e.StyledMemberText>
          <Link to="SignIn" text="Sign in" />
        </e.StyledMember>
      </e.SignUpContainer>
    </e.SignUpWrapper>
  );
};
