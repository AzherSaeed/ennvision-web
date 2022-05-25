import { Field, ErrorMessage } from "formik";
import React from "react";
// import ErrorMsg from "../../errorMsg";

const Chackbox = (props) => {
  const { name, label, value, ...rest } = props;
  return (
    <div className="form-contol">
      <label htmlFor={name}>{label}</label>
      <label
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Field
          name={name}
          value="loggedIn"
          type="checkbox"
          style={{ marginRight: "10px" }}
        />
        keep me loggedIn
      </label>

      <label
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Field
          name={name}
          value="Remember"
          type="checkbox"
          style={{ marginRight: "10px" }}
        />
        keep me Remembered
      </label>

      {/* <ErrorMessage name={name} component={ErrorMsg} /> */}
    </div>
  );
};

export default Chackbox;
