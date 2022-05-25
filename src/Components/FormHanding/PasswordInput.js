import React from "react";
import { Field, ErrorMessage } from "formik";
import ErrorMsg from "../ErrorMessage";

import { Input } from "antd";
import { InputStyleContainer } from "./Style";

const PasswordField = (props) => {
  const { label, placeholder, name, ...rest } = props;
  return (
    <InputStyleContainer>
      {/* <label htmlFor={name}>{label}</label> */}
      <Field name={name} id={name}>
        {({ field, form, meta }) => (
          <Input.Password
            {...rest}
            placeholder={placeholder}
            {...field}
            iconRender={(visible) =>
              visible ? (
                <span className="paswordIconLabel">Hide</span>
              ) : (
                <span className="paswordIconLabel">Show</span>
              )
            }
          />
        )}
      </Field>
      <ErrorMessage name={name} component={ErrorMsg} />
    </InputStyleContainer>
  );
};

export default PasswordField;
