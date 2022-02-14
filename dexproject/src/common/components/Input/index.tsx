import { FC, useState } from "react";
import * as e from "./elements";
import CloseEye from "assets/icons/close_eye_.svg";
import OpenEye from 'assets/icons/open_eye_.svg';

interface Props {
  id: string;
  label: string;
  closeEye?: boolean;
  type?:string;
  pattern?:string
}

export const Input: FC<Props> = ({ id, label, closeEye, type,pattern }) => {
  const [passwordShow, setPasswordShow] = useState(false);

  const handlePasswordShow = () =>{
    setPasswordShow(!passwordShow)
  }


  return (
      <e.ComponentWrapper>
        <e.StyledLabel htmlFor={id}>{label}</e.StyledLabel>
        <e.StyledInputWrapper closeEye={closeEye ? closeEye : false}>
          <e.StyledInput id={id} placeholder="" pattern={pattern} type={closeEye ? (passwordShow ? 'text' : 'password') : 'text'} />
          {
            closeEye && <e.StyledInputEye onClick={handlePasswordShow} src={passwordShow ? OpenEye : CloseEye}/>
          }
        </e.StyledInputWrapper>
      </e.ComponentWrapper>
  );
};
