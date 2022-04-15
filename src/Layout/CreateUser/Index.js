import React from "react";
import { CreateUserMainContainer } from "./style";
import SideBar from "../SideBar/Index";
import { Formik } from "formik";
import * as Yup from "yup";
import FormControl from "../../CommonComponents/FormHanding/FormController";
import { Form } from "antd";
import Button from "../../CommonComponents/Button";
import { PrimaryColor } from "../../CommonComponents/Global";
import { useNavigate } from "react-router-dom";
import GenerecService from "../../services/GenericService";
import { API_URL } from "../../services/config";

const selectOptions = [{ key: "user", value: "User" }];

const initialValues = {
  username: "",
  email: "",
  role: "",
  password: "",
  phoneNumber: "",
};
const validationSchema = Yup.object({
  username: Yup.string().required("User Name is required"),
  email: Yup.string().required("Email is required"),
  password: Yup.string().required("Password is required"),
  phoneNumber: Yup.string().required("Phone Number is required"),
  role: Yup.string().required("Required!"),
});

const Index = () => {
  const navigate = useNavigate();
  const genericService = new GenerecService();

  const onSubmit = (values) => {
    console.log(values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const formSubmitHandler = () => {
    console.log("asdf");
    // navigate('/confirmation')
  };

  return (
    <SideBar>
      <CreateUserMainContainer>
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
                <div className="create-user-main">
                  <div className="create-user-main-inner-fields">
                    <div className="create-user-main-inner-fields-first">
                      <FormControl
                        control="input"
                        type="text"
                        name="firstname"
                        placeholder="First Name"
                      />
                      <FormControl
                        control="input"
                        type="text"
                        name="lastname"
                        placeholder="Last Name"
                      />
                      <FormControl
                        control="input"
                        type="text"
                        name="username"
                        placeholder="username"
                      />
                      <FormControl
                        control="input"
                        type="text"
                        name="email"
                        placeholder="Email Address"
                      />
                      <FormControl
                        control="input"
                        type="number"
                        name="phoneNumber"
                        placeholder="+1 (617) 397-8483"
                      />
                    </div>
                    <div className="create-user-main-inner-fields-second">
                      <FormControl
                        control="password"
                        type="text"
                        name="password"
                        placeholder="Enter Password"
                      />
                      <FormControl
                        control="password"
                        type="text"
                        name="firstname"
                        placeholder="Confirm Password"
                      />
                      <FormControl
                        control="password"
                        type="text"
                        name="firstname"
                        placeholder="4 digit Pin"
                      />
                      <FormControl
                        control="select"
                        placeholder="Select Status"
                        options={selectOptions}
                        name="selectOption"
                      />
                    </div>
                    <div className="create-user-main-inner-fields-third">
                      <h1>Third</h1>
                    </div>
                  </div>
                  <div className="create-user-main-btn">
                    <Button
                      clicked={formSubmitHandler}
                      bkColor={PrimaryColor}
                      color="white"
                      padding="8px"
                      width="38%"
                      type="text"
                      title="Submit"
                    />
                  </div>
                </div>
              </Form>
            );
          }}
        </Formik>
      </CreateUserMainContainer>
    </SideBar>
  );
};

export default Index;
