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
import GenericService from "../../services/GenericService";
import { API_URL } from "../../services/config";

const selectOptions = [
  { key: "user", value: "User" },
  { key: "user", value: "User" },
  { key: "user", value: "User" },
];

const dummayOptions = [
  { key: "dummy1", value: "Dummy 1" },
  { key: "dummy2", value: "Dummy 2" },
  { key: "dummy3", value: "Dummy 3" },
]

const initialValues = {
  id:"0",
  carrier: "",
  phoneNumber: "",
  policyNo: "",
  validFrom: "",
  validTo: "",
  claim: "",
  adjuster: "",
  agentAddress: "",
  agentPhoneNumber: "",
  coverage: "",
  liabilityBI: "",
  pd: "",
  rentail: "",
};
const validationSchema = Yup.object({
  carrier: Yup.string().required("Career is required"),
  phoneNumber: Yup.string().required("Phone Number is required"),
  policyNo: Yup.string().required("Policy No is required"),
  validFrom: Yup.string().required("Valid From date is required"),
  validTo: Yup.string().required("Valid to date is required"),
  claim: Yup.string().required("Claim is required"),
  adjuster: Yup.string().required("Adjuster is required"),
  agentAddress: Yup.string().required("Agent Address is required"),
  agentPhoneNumber: Yup.string().required("Agent Phone Number is required"),
  coverage: Yup.string().required("Coverage is required"),
  liabilityBI: Yup.string().required("Liability BI is required"),
  PD: Yup.string().required("PD is required"),
  rentail: Yup.string().required("Rentail is required"),
});

const Index = ({ userDetailForm, setuserDetailForm }) => {
  const navigate = useNavigate();


  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])




  const onSubmit = (values, { resetForm }) => {
    setuserDetailForm({...userDetailForm , insuranceInformationEntity : values })
    navigate("/accident-fact")
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <>
      <TopHeader name='/property-demage' heading="Insurance Information" icon={<ArrowLeftOutlined />} />
      <Container>
        <Formik
              initialValues={userDetailForm.insuranceInformationEntity ? userDetailForm.insuranceInformationEntity : initialValues }
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
                      control="input"
                      type="text"
                      name="carrier"
                      placeholder="Type here..."
                      label="Ins: Carrier"
                    />

                    <FormControl
                      control="input"
                      type="text"
                      name="phoneNumber"
                      placeholder="(617) 397 - 8483"
                      label="Phone Number"
                    />

                    <FormControl
                      control="input"
                      type="text"
                      name="policyNo"
                      placeholder="Type here..."
                      label="Policy No"
                    />

                    <FlexContainer>
                      <FormControl
                        control="date"
                        type="text"
                        name="validFrom"
                        placeholder="Type here..."
                        label="Valid From"
                        defaultvalue={userDetailForm?.insuranceInformationEntity?.validFrom}
                        
                      />
                      <FormControl
                        control="date"
                        type="text"
                        name="validTo"
                        placeholder="Type here..."
                        label="Valid To"
                        defaultvalue={userDetailForm?.insuranceInformationEntity?.validTo}
                      />
                    </FlexContainer>

                    <FormControl
                      control="input"
                      type="text"
                      name="claim"
                      placeholder="Type here..."
                      label="Claim"
                    />

                    
                    <FormControl
                      control="input"
                      type="text"
                      name="adjuster"
                      placeholder="Type here..."
                      label="Adjuster Phone Number"
                    />
                    <FormControl
                      control="input"
                      type="text"
                      name="agentAddress"
                      placeholder="Type here..."
                      label="Agent"
                    />
                    <FormControl
                      control="input"
                      type="text"
                      name="agentPhoneNumber"
                      placeholder="(617) 397 - 8483"
                      label="Agent Phone Number"
                    />
                    <FlexContainer>
                      <FormControl
                        control="select"
                        placeholder="Select One"
                        options={dummayOptions}
                        name="coverage"
                        label="Coverage"
                        defaultvalue={userDetailForm?.insuranceInformationEntity?.coverage}
                      />
                      <FormControl
                        control="select"
                        placeholder="Select One"
                        options={dummayOptions}
                        name="liabilityBI"
                        label="Liability Bi"
                        defaultvalue={userDetailForm?.insuranceInformationEntity?.liabilityBI}
                      />
                    </FlexContainer>
                    <FlexContainer>
                      <FormControl
                        control="input"
                        type="text"
                        name="pd"
                        placeholder="Type here..."
                        label="PD"
                      />
                      <FormControl
                        control="input"
                        type="text"
                        name="rentail"
                        placeholder="Type here..."
                        label="Rentail"
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
