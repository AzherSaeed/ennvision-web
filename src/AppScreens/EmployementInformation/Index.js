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


const lostofEarning = [
  { key: "yes", value: "Yes" },
  { key: "no", value: "No" },
]
const initialValues = {
  fullName: "",
  cellPhoneNumber: "",
  state: "",
  city: "",
  address: "",
  lossOfEarnings: "",
  salary: "",
  daysLost: "",
  supervisor: "",
};
const validationSchema = Yup.object({
  fullName: Yup.string().required("fullName is required"),
  address: Yup.string().required("Address is required"),
  state: Yup.string().required("State is required"),
  city: Yup.string().required("City is required"),

  cellPhoneNumber: Yup.string().required("Phone is required"),
  lossOfEarnings: Yup.string().required("Lose of Earnings is required"),
  salary: Yup.string().required("Salary is required"),
  daysLost: Yup.string().required("Days Lost date is required"),
  supervisor: Yup.string().required("Supervisor is required"),
});

const Index = ({userDetailForm , setuserDetailForm}) => {
  const navigate = useNavigate();



  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])


  const onSubmit = (values, { resetForm }) => {
    console.log(values, 'values');
    setuserDetailForm({...userDetailForm , employmentInformationEntity : {...values , salary : !values.salary ? '' : `$ ${values.salary}` } })
    // resetForm()
    navigate('/injury-info')
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <>
      <TopHeader  heading="Employment Information" name="/client-info" icon={<ArrowLeftOutlined />} />
      <Container>
        <Formik
          initialValues={userDetailForm.employmentInformationEntity ? userDetailForm.employmentInformationEntity : initialValues }
          // validationSchema={validationSchema}
          enableReinitialize = {true}
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
                      control="input"
                      type="text"
                      name="fullName"
                      placeholder="FuLL Name"
                      label="Employer"
                    />
                    <FormControl
                      control="input"
                      type="text"
                      name="cellPhoneNumber"
                      placeholder="(617) 397 - 8483"
                      label="Cell Phone"
                    />
                    <FlexContainer>
                      <FormControl
                        control="input"
                        placeholder="Type here..."
                        // options={selectOptions}
                        name="state"
                        label="State"
                      />
                      <FormControl
                        control="input"
                        placeholder="Type here..."
                        // options={selectOptions}
                        name="city"
                        label="City"
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
                        control="select"
                        placeholder="Select One"
                        options={lostofEarning}
                        name="lossOfEarnings"
                        label="Loss of Earnings"
                        defaultvalue={userDetailForm?.employmentInformationEntity?.lossOfEarnings}
                      />
                      <FormControl
                        control="input"
                        type="text"
                        name="salary"
                        placeholder="Type here..."
                        label="Hourly Rate/ Salary"
                      />
                    </FlexContainer>
                    <FlexContainer>
                      <FormControl
                        control="input"
                        type="text"
                        name="daysLost"
                        placeholder="Type here..."
                        label="Hourly/Days Lost"
                      />
                      <FormControl
                        control="input"
                        type="text"
                        name="supervisor"
                        placeholder="Type here..."
                        label="Supervisor"
                      />
                    </FlexContainer>
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
