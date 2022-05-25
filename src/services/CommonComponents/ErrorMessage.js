import React from "react";
import {InputErrorMessage} from '../Components/FormHanding/Style'
const Errormsg = (props) => {
  return <InputErrorMessage >{props.children}</InputErrorMessage>;
};
export default Errormsg;