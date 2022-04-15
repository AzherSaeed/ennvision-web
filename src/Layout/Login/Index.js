import React from "react";
import { CenterDiv } from "../../CommonComponents/Global";
import { LoginFormContainer } from "./Style";
import ic_logo from "../../Assets/ic_logo.svg";
import { Formik } from "formik";
import * as Yup from "yup";
import FormControl from "../../CommonComponents/FormHanding/FormController";
import Button from "../../CommonComponents/Button";
import { Form } from "antd";
import { useNavigate } from "react-router-dom";
import { PrimaryColor } from "../../CommonComponents/Global";
import GenerecService from "../../services/GenericService";
import { API_URL } from "../../services/config";

const initialValues = {
  username: "",
  password: "",
};
const validationSchema = Yup.object({
  username: Yup.string().required("Required!"),
  password: Yup.string()
    .required("Required!")
    .min(6, "Minimum six character is required"),
});
const Index = () => {
  const navigate = useNavigate();
  const genericService = new GenerecService();

  const onSubmit = (values, { resetForm }) => {
    genericService
      .post(`${API_URL}auth/signin`, values)
      .then((msg) => {
        if(msg.resultCode == 200){
          resetForm();
          navigate("/createuser");
        }
        else if(msg.resultCode == 401){
          alert(msg.message);

        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <CenterDiv>
      <LoginFormContainer>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {(formik) => {
            return (
              <Form
                name="basic"
                onFinish={formik.handleSubmit}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                validateMessages={validationSchema}
              >
                <div className="login-input-fields">
                  <img src={ic_logo} alt="ic_logo" />
                  <FormControl
                    control="input"
                    type="text"
                    name="username"
                    placeholder="Enter username Address"
                  />
                  <FormControl
                    control="password"
                    type="text"
                    name="password"
                    placeholder="Enter Password"
                  />
                  <p>Forgot Passowrd?</p>
                  <Button
                    bkColor={PrimaryColor}
                    color="white"
                    padding="8px"
                    width="100%"
                    type="submit"
                    title="Sign In"
                  />
                </div>
              </Form>
            );
          }}
        </Formik>
      </LoginFormContainer>
    </CenterDiv>
  );
};

export default Index;
