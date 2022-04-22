import React from "react";
import Input from "./CustomInput/Index";
import Select from "./CustomSelect/Index";
import Datepicker from './CustomDatePicker/Index';
import Textarea from './CustomTextArea/Index';
import CustomTimePicker from './CustomTimePicker/Index';
import CustomImageSelector from './CustomImageSelector/Index';
// import Checkbox from "./Checkbox";
// import PasswordInput from './PasswordInput'
const Formickcontroller = (props) => {
  const { control, ...rest } = props;
  // console.log("enter to controller");
  switch (control) {
    case "input":
      return <Input {...rest} />;

    case "select":
      return <Select {...rest} />;
    case "imgselector":
      return <CustomImageSelector {...rest} />;
    // case "checkbox":
    //   return <Checkbox {...rest} />;
    // case "password":
    //   return <PasswordInput {...rest} />;
    case "textarea":
      return <Textarea {...rest} />;

    // case "radio":
    //   return <Radio {...rest} />;
    case "date":
      return <Datepicker {...rest} />;
    case 'time':
      return <CustomTimePicker {...rest} />
    default:
      return null;
  }
};

export default Formickcontroller;
