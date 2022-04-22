import React from "react";
import { Field, ErrorMessage } from "formik";
import ErrorMsg from "../ErrorMessage";
import { Input } from "antd";
import { CustomInputContaienr } from "./style";

const InputField = (props) => {
  const { label, placeholder, name, ...rest } = props;
  return (
    <CustomInputContaienr>
      <label htmlFor={name}>{label}</label>
      <Field name={name} id={name}>
        {({ field, form, meta }) => (
          <Input className="customInput" type="text" {...rest} placeholder={placeholder} {...field} />
        )}
      </Field>
      <ErrorMessage name={name} component={ErrorMsg} />
    </CustomInputContaienr>
  );
};

export default InputField;
