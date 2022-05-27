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
import { Input } from "antd";

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
  noOfTheVehicles: "",
  noOfThePersonsInjured: "",
  noOfThePersonsKilled: "",
  policeReport: "",
  reportNo: "",
  noOfTheOfficers: "",
  noOfThePoliceCars: "",
  department: "",
  witness: "",
  name: "",
  phoneNo: "",
  weatherCondition:"",
  roadCondition: "",
  anyCriminalConduct: "",
  speedOfTheVehicles: "",
  pCClient:"",
  dDDefendant:"",
  descriptionOfTheAccident: "",

};
const validationSchema = Yup.object({
    noOfTheVehicles: Yup.string().required("No Of vehicles required"),
    noOfThePersonsInjured: Yup.string().required("Person Injured is required"),
    noOfThePersonsKilled: Yup.string().required("Person Killed is required"),
    policeReport: Yup.string().required("Police Report is required"),
    reportNo: Yup.string().required("Report No is required"),
    noOfTheOfficers: Yup.string().required("No of Officers required"),
    noOfThePoliceCars: Yup.string().required("No of Police Cars is required"),
    department: Yup.string().required("Department is required"),
    witness: Yup.string().required("Witness is required"),
  name: Yup.string().required("Witness Name is required"),
  phoneNo: Yup.string().required("Witness Name is required"),
  weatherCondition:Yup.string().required("Weather Condition is required"),
  roadCondition: Yup.string().required("Road Condition is required"),
  anyCriminalConduct: Yup.string().required("Any Criminal Condition is required"),
  speedOfTheVehicles: Yup.string().required("Speed Of Vehicle is required"),
  pCClient: Yup.string().required("pCClient is required"),
  dDDefendant: Yup.string().required("dDDefendant is required"),
  descriptionOfTheAccident: Yup.string().required("Description of Condition is required"),
});

const Index = ({userDetailForm , setuserDetailForm}) => {
  const navigate = useNavigate();


  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const onSubmit = (values, { resetForm }) => {
    console.table(values , 'values in fact of accident');
    setuserDetailForm({...userDetailForm , factsOfTheAccidentEntity : values })
    // resetForm()
    navigate('/defendant-info')
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <>
      <TopHeader name="/insurance-info" heading="Facts of The Accident" icon={<ArrowLeftOutlined />} />
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
                        name="noOfTheVehicles"
                        placeholder="Type here.."
                        label="No, of the Vehicles"
                      />
                      <FormControl
                        control="input"
                        type="text"
                        name="noOfThePersonsInjured"
                        placeholder="Type here.."
                        label="No. of the Persons Injured"
                      />
                    </FlexContainer>
                    <FlexContainer>
                      <FormControl
                        control="input"
                        type="text"
                        name="noOfThePersonsKilled"
                        placeholder="Type here.."
                        label="Model"
                      />
                      <FormControl
                      control="select"
                      placeholder="Select One"
                      options={towedOptions}
                        type="text"
                        name="policeReport"
                        label="Police Report"
                      />
                     
                    </FlexContainer>
                    <FlexContainer>

                    <FormControl
                      control="input"
                      name="reportNo"
                      placeholder="Type here..."
                      label="Report No"
                      />
                    <FormControl
                      control="input"
                      placeholder="Type here..."
                      // options={selectOptions}
                      name="noOfTheOfficers"
                      label="No. of the Officers"
                      />

                      </FlexContainer>
                    <FormControl
                      control="input"
                      type="text"
                      name="noOfThePoliceCars"
                      placeholder="Type here..."
                      label="No. of the police Cars"
                    />

                    <FormControl
                      control="input"
                      type="text"
                      name="department"
                      placeholder="Type here.."
                      label="Department"
                    />

                    <FormControl
                    control="select"
                    placeholder="Select One"
                    options={towedOptions}
                      name="witness"
                      label="Witness"
                    />

                     <FormControl
                      control="input"
                      type="text"
                      name="name"
                      placeholder="Type here.."
                      label="Witness Name"
                    />
                     <FormControl
                      control="input"
                      type="text"
                      name="phoneNo"
                      placeholder="+1 234 45 67"
                      label="Witness Phone"
                    />
                     
                     <FormControl
                         name="weatherCondition"
                         label="Weather Condition"
                      control="input"
                      type="text"
                      placeholder="Type here.."
                    />

                    <FormControl
                      control="input"
                      type="text"
                      name="roadCondition"
                      placeholder="Type here..."
                      label="Road Condition"
                    />
                
                    <FormControl
                      control="textarea"
                      type="text"
                      name="anyCriminalConduct"
                      placeholder="Type here..."
                      label="Any Criminal Conduct"
                    />
                    <FormControl
                      control="input"
                      type="text"
                      name="speedOfTheVehicles"
                      placeholder="Type here..."
                      label="Speed Of Vehicles"
                    />

                    <FormControl
                      control="textarea"
                      type="text"
                      name="descriptionOfTheAccident"
                      placeholder="Type here..."
                      label="Description Of Accident"
                    />
                   <label htmlFor="">Speed Of the Vehicles</label>
                   <div className="speed-of-vehicle">
                    <FlexContainer>
                     <div className="input-section">
                     <label htmlFor="">PC (Client)</label>
                    <Input name="pCClient" value={formik.values.pCClient}  onChange={formik.handleChange} onBlur={formik.handleBlur}  addonAfter='MPH' defaultValue="" />       
                     </div>
                     <div className="input-section">
                     <label htmlFor="">DD (Defendant)</label>
                    <Input name="dDDefendant" value={formik.values.dDDefendant}  onChange={formik.handleChange} onBlur={formik.handleBlur}  addonAfter='MPH' defaultValue="Type here.." />       
                     </div>
                    </FlexContainer>     
                   </div>
                  </div>
                  <div className="form-buttons">
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
                      title="Next"
                      // form="basic"
                      // key="submit"
                    />
                  </FlexContainer>
                  </div>
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
