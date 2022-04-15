import React from "react";
import { Field, ErrorMessage } from "formik";
import ErrorMsg from "../ErrorMessage";
import { Input } from "antd";
import { InputStyleContainer } from "./Style";

const InputField = (props) => {
  const { label, placeholder, name, ...rest } = props;
  return (
    <InputStyleContainer>
      {/* <label htmlFor={name}>{label}</label> */}
      <Field name={name} id={name}>
        {({ field, form, meta }) => (
          <Input type="text" {...rest} placeholder={placeholder} {...field} />
        )}
      </Field>
      <ErrorMessage name={name} component={ErrorMsg} />
    </InputStyleContainer>
  );
};

export default InputField;
