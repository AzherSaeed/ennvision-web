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
import { useNavigate  } from "react-router-dom";


const caseTypeOptions = [
  { key: "realend", value: "Rear-End" },
  { key: "leftchange", value: "Left Change" },
  { key: "leftturn", value: "Left Turn" },
  { key: "leftdispute", value: "Light Dispute" },
  { key: "bicycle", value: "Bicycle" },
  { key: "dogbite", value: "Dog Bite" },
  { key: "medmal", value: "Med Mal" },
  { key: "slipFall", value: "Slip & Fall" },
]

const initialValues = {
  interviewBy: "",
  caseSource: "",
  interviewDate: "",
  dataOfLoss: "",
  time: "",
  caseType: "",
  purposeOfYourTrip: "",
  photos : '' ,
  comingFrom : '',
  drivingTo : '',
  accidentLocation : '',
  city : ''
};
const validationSchema = Yup.object({
  interviewDate: Yup.string().required("Interview date is required"),
  interviewBy: Yup.string().required("Interview name is required"),
  caseSource: Yup.string().required("Case source is required"),
  dataOfLoss: Yup.string().required("Date of lose is required"),
  time: Yup.string().required("Time required"),
  caseType: Yup.string().required("Case type is required"),
  purposeOfYourTrip: Yup.string().required("Purpose of trip is required"),
  comingFrom: Yup.string().required("Purpose of trip is required"),
  drivingTo: Yup.string().required("Purpose of trip is required"),
  photos: Yup.string().required("Please select photo"),
});

const Index = ({ userDetailForm, setuserDetailForm }) => {
  const navigate = useNavigate();
  const path = window.location.pathname.split('/')[1]


  const onSubmit = (values, { resetForm }) => {
    console.log(values , 'values')
    setuserDetailForm({
      ...userDetailForm,
      clientIntakeInterviewEntity: {...values , photos : !values.photos ? 'No' : 'Yes'},
    });
    resetForm();
    navigate("/client-info");
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

 
  return (
    <>
      <TopHeader heading='Client Intake Interview'  name="/insurance-info" icon={path === 'clientIntakeInterview' ? null : <ArrowLeftOutlined />}  />
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
                      name="caseSource"
                      placeholder="1124ER"
                      label="Case Source"
                    />
                    <FlexContainer>
                      <FormControl
                        control="date"
                        type="text"
                        name="dataOfLoss"
                        placeholder="Interview Date"
                        label="Date Of Lose"
                      />
                      <FormControl
                        control="time"
                        type="text"
                        name="time"
                        placeholder="09:30AM"
                        label="Time"
                      />
                    </FlexContainer>
                    <FormControl
                      control="select"
                      placeholder="Select One"
                      options={caseTypeOptions}
                      name="caseType"
                      label="Case Type"
                    />
                    <FormControl
                      control="input"
                      type="text"
                      name="purposeOfYourTrip"
                      placeholder="1124ER"
                      label="Purpose of your trip"
                    />
                    <FormControl
                      control="imgselector"
                      type="text"
                      name="photos"
                      label="Select Photo"
                    />
                    <FormControl
                      control="input"
                      type="text"
                      name="comingFrom"
                      placeholder="Address and city"
                      label="Where are you coming from"
                    />
                    <FormControl
                      control="input"
                      type="text"
                      name="drivingTo"
                      placeholder="Address and city"
                      label="Where are you driving to"
                    />
                    <FormControl
                      control="input"
                      type="text"
                      name="accidentLocation"
                      placeholder="Type here..."
                      label="Accident Location"
                    />
                    <FormControl
                      control="input"
                      type="text"
                      name="city"
                      placeholder="Type here..."
                      label="City"
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
