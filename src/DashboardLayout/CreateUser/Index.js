import React from "react";
import { CreateUserMainContainer } from "./style";
import SideBar from "../SideBar/Index";
import { Formik } from "formik";
import * as Yup from "yup";
import FormControl from "../../Components/FormHanding/FormController";
import { Form } from "antd";
import Button from "../../Components/Button";
import { PrimaryColor } from "../../Components/Global";
import { useNavigate } from "react-router-dom";
import GenerecService from "../../services/GenericService";
import { API_URL } from "../../services/config";

const selectOptions = [{ key: "user", value: "User" }];

const initialValues = {
  username: "",
  email: "",
  firstName: "",
  lastName: "",
  role: ["user"],
  password: "",
  phoneNumber: "",
  userId: 0,
};
const validationSchema = Yup.object({
  username: Yup.string().required("User Name is required"),
  email: Yup.string()
    .email("Valid email is required")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Minimum 6 character is required")
    .required("Password is required"),
  phoneNumber: Yup.string().required("Phone Number is required"),
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  // role: Yup.string().required("Required!"),
});

const Index = () => {
  const navigate = useNavigate();
  const genericService = new GenerecService();

  const onSubmit = (values, { resetForm }) => {
    genericService
      .post(`${API_URL}auth/signup`, values)
      .then((msg) => {

        if (msg.resultCode === 201) {
          navigate("/dashboard-confirmation");
          resetForm();
        } else if (msg.resultCode !== 201) {
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
                        name="firstName"
                        placeholder="First Name"
                      />

                      <FormControl
                        control="input"
                        type="text"
                        name="username"
                        placeholder="username"
                      />

                      <FormControl
                        control="input"
                        type="string"
                        name="phoneNumber"
                        placeholder="+1 (617) 397-8483"
                      />
                    </div>
                    <div className="create-user-main-inner-fields-second">
                      <FormControl
                        control="input"
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                      />
                      <FormControl
                        control="input"
                        type="text"
                        name="email"
                        placeholder="Email Address"
                      />
                      <FormControl
                        control="password"
                        type="text"
                        name="password"
                        placeholder="Enter Password"
                      />
                      <div className="create-user-main-btn">
                        <Button
                          bkColor={PrimaryColor}
                          color="white"
                          padding="8px"
                          width="100%"
                          type="submit"
                          title="Submit"
                          form="basic"
                          key="submit"
                        />
                      </div>
                      {/* <FormControl
                        control="password"
                        type="text"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                      />
                      <FormControl
                        control="password"
                        type="text"
                        name="pin"
                        placeholder="4 digit Pin"
                      /> */}
                      {/* <FormControl
                        control="select"
                        placeholder="Select Status"
                        options={selectOptions}
                        name="role"
                      /> */}
                    </div>
                    <div className="create-user-main-inner-fields-third">
                      {/* <h1>Third</h1> */}
                    </div>
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
