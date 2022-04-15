import React from "react";
import {InputErrorMessage} from '../CommonComponents/FormHanding/Style'
const Errormsg = (props) => {
  return <InputErrorMessage >{props.children}</InputErrorMessage>;
};
export default Errormsg;