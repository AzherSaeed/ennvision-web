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
import HeadingBar from "../../Components/HeadingBar/Index";

const selectOptions = [
  { key: "user", value: "User" },
  { key: "user", value: "User" },
  { key: "user", value: "User" },
];
const language = [
  {key : 'english' , value : 'English'},
  {key : 'spanish' , value : 'Spanish'}
]
const martialStatus = [
  {key : 'married' , value : 'Married'},
  {key : 'single' , value : 'Single'}
]
const gender = [
  {key : 'male' , value : 'Male'},
  {key : 'female' , value : 'Female'},
  {key : 'other' , value : 'Other'}
]
const status = [
  {key : 'driver' , value : 'Driver'},
  {key : 'passenger' , value : 'Passenger'},
  {key : 'pedestrain' , value : 'Padestrain'},
  {key : 'other' , value : 'Other'},
]

const initialValues = {
  language: "",
  status: "",
  martialStatus: "",
  gender: "",
  fullName: "",
  dataOfBirth: "",
  age: "",
  address: "",
  state: "",
  city: "",
  homePhoneNumber: "",
  cellPhoneNumber: "",
  ecFullName: "",
  ecContact: "",
  ecRelation: "",
  acDriverLicense: "",
  acState: "",
  acExpires: "",
  acSSH: "",
  acPriorInjures: "",
  zip : '',
  email : ''
};
const validationSchema = Yup.object({
  language: Yup.string().required("Language is required"),
  status: Yup.string().required("Status is required"),
  martialStatus: Yup.string().required("Martial Status is required"),
  gender: Yup.string().required("Gender is required"),
  fullName: Yup.string().required("Full Name required"),
  dataOfBirth: Yup.string().required("Date of birth is required"),
  age: Yup.string().required("Age is required"),
  address: Yup.string().required("Address is required"),
  state: Yup.string().required("State is required"),
  city: Yup.string().required("City is required"),
  homePhoneNumber: Yup.string().required("Phone is required"),
  cellPhoneNumber: Yup.string().required("Phone is required"),
  ecFullName: Yup.string().required("Name is required"),
  ecContact: Yup.string().required("Phone is required"),
  ecRelation: Yup.string().required("Relation is required"),
  acDriverLicense: Yup.string().required("License is required"),
  acState: Yup.string().required("State is required"),
  acExpires: Yup.string().required("Expire date is required"),
  acSSH: Yup.string().required("SSH is required"),
  acPriorInjures: Yup.string().required("Injuries is required"),
});

const Index = ({userDetailForm , setuserDetailForm}) => {
  const navigate = useNavigate();

  const onSubmit = (values, { resetForm }) => {
    console.log(values , 'values');
    setuserDetailForm({...userDetailForm , clientInformationEntity : values })
    resetForm()
    navigate('/employement-info')
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };


 
  return (
    <>
      <TopHeader heading="Client Information" name="/clientIntakeInterview/MTI=" icon={<ArrowLeftOutlined />} />
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
                    <FlexContainer>
                      <FormControl
                        control="select"
                        placeholder="Select One"
                        options={language}
                        name="language"
                        label="Language"
                      />
                      <FormControl
                        control="select"
                        placeholder="Select One"
                        options={status}
                        name="status"
                        label="Status"
                      />
                    </FlexContainer>
                    <FlexContainer>
                      <FormControl
                        control="select"
                        placeholder="Select One"
                        options={martialStatus}
                        name="martialStatus"
                        label="Marital Status"
                      />
                      <FormControl
                        control="select"
                        placeholder="Select One"
                        options={gender}
                        name="gender"
                        label="Gender"
                      />
                    </FlexContainer>
                    <FormControl
                      control="input"
                      type="text"
                      name="fullName"
                      placeholder="FuLL Name"
                      label="FuLL Name"
                    />

                    <FlexContainer>
                      <FormControl
                        control="date"
                        type="text"
                        name="dataOfBirth"
                        placeholder="April 23, 2000"
                        label="Date of Birth"
                      />
                      <FormControl
                        control="input"
                        type="number"
                        name="age"
                        placeholder="22 Year"
                        label="Age"
                      />
                    </FlexContainer>
                    <FormControl
                      control="input"
                      type="text"
                      name="address"
                      placeholder="Street Address"
                      label="Address"
                    />

                    <FlexContainer>
                      <FormControl
                        control="input"
                        placeholder="Select One"
                        // options={selectOptions}
                        name="state"
                        label="State"
                      />
                      <FormControl
                        control="input"
                        placeholder="Select One"
                        // options={selectOptions}
                        name="city"
                        label="City"
                      />
                    </FlexContainer>

                    <FormControl
                      control="input"
                      type="text"
                      name="zip"
                      placeholder="Type here..."
                      label="Zip"
                    />
                    <FormControl
                      control="input"
                      type="text"
                      name="email"
                      placeholder="Type here..."
                      label="Email"
                    />
                    <FormControl
                      control="input"
                      type="text"
                      name="homePhoneNumber"
                      placeholder="(617) 397 - 8483"
                      label="Home Phone"
                    />
                    <FormControl
                      control="input"
                      type="text"
                      name="cellPhoneNumber"
                      placeholder="(617) 397 - 8483"
                      label="Cell Phone"
                    />

                    <HeadingBar title="Emergency Contact" />
                    <FormControl
                      control="input"
                      type="text"
                      name="ecFullName"
                      placeholder="Full Name"
                      label="FullName"
                    />
                    <FormControl
                      control="input"
                      type="text"
                      name="ecContact"
                      placeholder="(617) 397 - 8483"
                      label="Cell Phone"
                    />
                    <FormControl
                      control="input"
                      placeholder="Select One"
                      // options={selectOptions}
                      name="ecRelation"
                      label="Relation"
                    />
                    <HeadingBar title="Agent Contact" />
                    <FlexContainer>
                      <FormControl
                        control="input"
                        type="text"
                        name="acDriverLicense"
                        placeholder="Type Here..."
                        label="Driver License"
                      />
                      <FormControl
                        control="input"
                        placeholder="Select One"
                        // options={selectOptions}
                        name="acState"
                        label="State"
                      />
                    </FlexContainer>
                    <FlexContainer>
                      <FormControl
                        control="date"
                        type="text"
                        name="acExpires"
                        placeholder="MM.DD.YYYY"
                        label="Expire"
                      />
                      <FormControl
                        control="input"
                        type="text"
                        name="acSSH"
                        placeholder="Type here..."
                        label="SSH"
                      />
                    </FlexContainer>
                    <FormControl
                      control="textarea"
                      type="text"
                      name="acPriorInjures"
                      placeholder="Type here..."
                      label="Prior Injuries (PI or Worker's Comp)"
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
