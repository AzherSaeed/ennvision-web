import React from "react";
import TopHeader from "../../Components/TopHeader/Index";
import { ArrowLeftOutlined } from "@ant-design/icons";
import FormControl from "../../Components/FormControl";
import CustomButton from "../../Components/CustomButton/Index";
import {
  BasicColor,
  FlexContainer,
  PrimaryColor,
} from "../../Components/GlobalStyle";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Container } from "./style";
import { useNavigate } from "react-router-dom";

const selectOptions = [
  { key: "user", value: "User" },
  { key: "user", value: "User" },
  { key: "user", value: "User" },
];

const initialValues = {
  interviewBy: "",
  caseSouce: "",
  interviewDate: "",
  dateOfLose: "",
  time: "",
  caseType: "",
  tripPurpose: "",
  address: "",
};
const validationSchema = Yup.object({
  interviewDate: Yup.string().required("Interview date is required"),
  interviewBy: Yup.string().required("Interview name is required"),
  caseSouce: Yup.string().required("Case source is required"),
  dateOfLose: Yup.string().required("Date of lose is required"),
  time: Yup.string().required("Time required"),
  caseType: Yup.string().required("Case type is required"),
  tripPurpose: Yup.string().required("Purpose of trip is required"),
  address: Yup.string().required("Address is required"),
});

const Index = ({userDetailForm , setuserDetailForm}) => {
  const navigate = useNavigate();

  const onSubmit = (values, { resetForm }) => {
    setuserDetailForm({...userDetailForm , clientIntakeInterviewEntity : values })
    resetForm()
    navigate('/client-info')
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <>
      <TopHeader name="Client Intake Interview" icon={<ArrowLeftOutlined />} />
      <Container>
        <Formik
          initialValues={initialValues}
          // validationSchema={validationSchema}
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
                    <FormControl
                      control="date"
                      type="text"
                      name="interviewDate"
                      placeholder="Interview Date"
                      label="Interview Date"
                    />
                    <FormControl
                      control="input"
                      type="text"
                      name="interviewBy"
                      placeholder="Interview Name"
                      label="Interview By"
                    />
                    <FormControl
                      control="input"
                      type="text"
                      name="caseSouce"
                      placeholder="1124ER"
                      label="Case Source"
                    />
                    <FlexContainer>
                      <FormControl
                        control="date"
                        type="text"
                        name="dateOfLose"
                        placeholder="Interview Date"
                        label="Date Of Lose"
                      />
                      <FormControl
                        control="date"
                        type="text"
                        name="time"
                        placeholder="09:30AM"
                        label="Time"
                      />
                    </FlexContainer>
                    <FormControl
                      control="select"
                      placeholder="Select One"
                      options={selectOptions}
                      name="caseType"
                      label="Case Type"
                    />
                    <FormControl
                      control="input"
                      type="text"
                      name="tripPurpose"
                      placeholder="1124ER"
                      label="Purpose of your trip"
                    />
                    <FormControl
                      control="textarea"
                      type="text"
                      name="address"
                      placeholder="Address and city"
                      label="Where are you coming from"
                    />
                  </div>
                  <FlexContainer>
                    <CustomButton
                      bgcolor={PrimaryColor}
                      color="white"
                      padding="5px 0"
                      type="button"
                      title="Skip"
                      // form="basic"
                      // key="submit"
                    />
                    <CustomButton
                      bgcolor={BasicColor}
                      color="white"
                      padding="5px 0"
                      type="submit"
                      title="Submit"
                      // form="basic"
                      // key="submit"
                    />
                  </FlexContainer>
                </div>
              </Form>
            );
          }}
        </Formik>
      </Container>
    </>
  );
};

export default Index;
