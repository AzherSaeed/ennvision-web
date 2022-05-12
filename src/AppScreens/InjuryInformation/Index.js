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


const ambulanceOptions = [
  { key: "yes", value: "Yes" },
  { key: "no", value: "No" },
]

const initialValues = {
  description: "",
  ambulance: "",
  companyName: "",
  companyPhone: "",
  hospital: "",
  hospitalName : '',
  hospitalPhone: "",
  firstDoctorAddress: "",
  firstDoctorPhone: "",
  secondDoctorAddress: "",
  secondDoctorPhone: "",
  comments: "",
};
const validationSchema = Yup.object({
  description: Yup.string().required("Description is required"),
  ambulance: Yup.string().required("Ambulance is required"),
  companyName: Yup.string().required("Company Name is required"),
  companyPhone: Yup.string().required("Company Phone is required"),
  hospital: Yup.string().required("Hospital Name is required"),
  hospitalPhone: Yup.string().required("Hospital Phone is required"),
  firstDoctorAddress: Yup.string().required("First doctor address is required"),
  firstDoctorPhone: Yup.string().required("First doctor phone is required"),
  secondDoctorAddress: Yup.string().required("Second doctor address is required"),
  secondDoctorPhone: Yup.string().required("Second doctor phone is required"),
  comments: Yup.string().required("Comments is required"),
});

const Index = ({userDetailForm , setuserDetailForm}) => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const onSubmit = (values, { resetForm }) => {
    console.log(values , 'values');
    setuserDetailForm({...userDetailForm , injuryInformationEntity : values })
    // resetForm()
    navigate('/property-demage')
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <>
      <TopHeader name="/employement-info" heading="Injury Information" icon={<ArrowLeftOutlined />} />
      <Container>
        <Formik
           initialValues={userDetailForm.injuryInformationEntity ? userDetailForm.injuryInformationEntity : initialValues }
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
                    <FormControl
                      control="textarea"
                      type="text"
                      name="description"
                      placeholder="Type here..."
                      label="Description"
                    />

                    <FormControl
                      control="select"
                      placeholder="Select One"
                      options={ambulanceOptions}
                      name="ambulance"
                      label="Ambulance"
                      defaultvalue={userDetailForm?.injuryInformationEntity?.ambulance}
                    />

                    <FormControl
                      control="input"
                      type="text"
                      name="companyName"
                      placeholder="Compnay Name"
                      label="Compnay Name"
                    />

                    <FormControl
                      control="input"
                      type="text"
                      name="companyPhone"
                      placeholder="(617) 397 - 8483"
                      label="Company Phone"
                    />



                    <FormControl
                      control="input"
                      type="text"
                      name="hospital"
                      placeholder="Type here..."
                      label="Hospital"
                    />

                    <FormControl
                      control="input"
                      type="text"
                      name="hospitalName"
                      placeholder="Type here..."
                      label="Hospital Name"
                    />

                    <FormControl
                      control="input"
                      type="text"
                      name="hospitalPhone"
                      placeholder="(617) 397 - 8483"
                      label="Hospital Phone"
                    />


                    <FormControl
                      control="input"
                      type="text"
                      name="firstDoctorAddress"
                      placeholder="Type here..."
                      label="Doctor 1"
                    />
                    <FormControl
                      control="input"
                      type="text"
                      name="firstDoctorPhone"
                      placeholder="(617) 397 - 8483"
                      label="Doctor 1 Phone"
                    />
                    <FormControl
                      control="input"
                      type="text"
                      name="secondDoctorAddress"
                      placeholder="Type here..."
                      label="Doctor 2"
                    />
                    <FormControl
                      control="input"
                      type="text"
                      name="secondDoctorPhone"
                      placeholder="(617) 397 - 8483"
                      label="Doctor 2 Phone"
                    />

                    <FormControl
                      control="textarea"
                      type="text"
                      name="comments"
                      placeholder="Type here..."
                      label="Comment"
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
