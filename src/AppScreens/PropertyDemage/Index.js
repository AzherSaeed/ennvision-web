import React , {useEffect} from "react";
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


const towedOptions= [
  { key: "yes", value: "Yes" },
  { key: "no", value: "No" },
]

const initialValues = {
  id:"0",
  year: "",
  make: "",
  model: "",
  color: "",
  licensePlate: "",
  status: "",
  registerOwner: "",
  address: "",
  relationshipToDriver: "",
  phoneNumber: "",
  locationOfVechile: "",
  towed: "",
  towingName: "",
  towingAddress: "",
  // towingType: "",
  descriptionOfDamage: "",
  priorDamage: "",
  mechanicalFailure: "",
  towingPhone : "",
};
const validationSchema = Yup.object({
  year: Yup.string().required("Year is required"),
  make: Yup.string().required("make is required"),
  model: Yup.string().required("Model is required"),
  color: Yup.string().required("Color is required"),
  licensePlate: Yup.string().required("License Plate is required"),
  status: Yup.string().required("Status is required"),
  registerOwner: Yup.string().required("Register Owner is required"),
  address: Yup.string().required("Address is required"),
  relationshipToDriver: Yup.string().required(
    "Relationship to driver is required"
  ),
  phoneNumber: Yup.string().required("Phone Number is required"),
  locationOfVechile: Yup.string().required("Location of vahicle is required"),
  towed: Yup.string().required("Towed is required"),
  towingName: Yup.string().required("Towing Name is required"),
  towingAddress: Yup.string().required("Towing Address is required"),
  towingType: Yup.string().required("Towing Type is required"),
  descriptionOfDamage: Yup.string().required(
    "Description of demage is required"
  ),
  priorDamage: Yup.string().required("Prior demage is required"),
  mechanicalFailure: Yup.string().required("Machanical Failure is required"),
});

const Index = ({userDetailForm , setuserDetailForm}) => {
  const navigate = useNavigate();


  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const onSubmit = (values, { resetForm }) => {
    console.log(values , 'values');
    setuserDetailForm({...userDetailForm , propertyDamageEntity : values })
    // resetForm()
    navigate('/insurance-info')
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <>
      <TopHeader name='/injury-info' heading="Property Damage" icon={<ArrowLeftOutlined />} />
      <Container>
        <Formik
          initialValues={userDetailForm.propertyDamageEntity ? userDetailForm.propertyDamageEntity : initialValues }
          // validationSchema={validationSchema}
          enableReinitialize = {true}
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
                        control="input"
                        type="text"
                        name="year"
                        placeholder="So Far"
                        label="Year"
                      />
                      <FormControl
                        control="input"
                        type="text"
                        name="make"
                        placeholder="So Far"
                        label="Make"
                      />
                    </FlexContainer>
                    <FlexContainer>
                      <FormControl
                        control="input"
                        type="text"
                        name="model"
                        placeholder="So Far"
                        label="Model"
                      />
                      <FormControl
                        control="input"
                        type="text"
                        name="color"
                        placeholder="So Far"
                        label="Color"
                      />
                    </FlexContainer>
                    <FormControl
                      control="input"
                      type="text"
                      name="licensePlate"
                      placeholder="Type here..."
                      label="License Plate"
                    />
                    <FormControl
                      control="input"
                      placeholder="Type here..."
                      // options={selectOptions}
                      name="status"
                      label="Status"
                    />

                    <FormControl
                      control="input"
                      type="text"
                      name="registerOwner"
                      placeholder="Type here..."
                      label="Register Owner"
                    />

                    <FormControl
                      control="input"
                      type="text"
                      name="address"
                      placeholder="Street Address"
                      label="Address"
                    />

                   

                    <FormControl
                      control="input"
                      type="text"
                      name="relationshipToDriver"
                      placeholder="Type here"
                      label="Relationship to the Driver"
                    />

                     <FormControl
                      control="input"
                      type="text"
                      name="phoneNumber"
                      placeholder="+1 234 45 67"
                      label="Phone Number"
                    />
                     <FormControl
                      control="input"
                      type="text"
                      name="locationOfVechile"
                      placeholder="Type here..."
                      label="Locations of the Vehicle"
                    />
                    <FormControl
                      control="select"
                      placeholder="Select One"
                      options={towedOptions}
                      name="towed"
                      label="Towed"
                      defaultvalue={userDetailForm?.propertyDamageEntity?.towed}
                    />

                    <FormControl
                      control="input"
                      type="text"
                      name="towingName"
                      placeholder="Type here..."
                      label="Towing Name"
                    />
                    <FormControl
                      control="input"
                      type="text"
                      name="towingPhone"
                      placeholder="Type here..."
                      label="Towing Phone"
                    />

                    <FormControl
                      control="input"
                      type="text"
                      name="towingAddress"
                      placeholder="Type here..."
                      label="Towing Address"
                    />
                    {/* <FormControl
                      control="input"
                      type="text"
                      name="towingType"
                      placeholder="+1 234 45 67"
                      label="Towing Phone"
                    /> */}

                    <FormControl
                      control="input"
                      type="text"
                      name="descriptionOfDamage"
                      placeholder="Type here..."
                      label="Description of Demages"
                    />

                    <FormControl
                      control="input"
                      type="text"
                      name="priorDamage"
                      placeholder="Type here..."
                      label="Prior Damage"
                    />

                    <FormControl
                      control="input"
                      type="text"
                      name="mechanicalFailure"
                      placeholder="Type here..."
                      label="Mechanical Failure"
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
