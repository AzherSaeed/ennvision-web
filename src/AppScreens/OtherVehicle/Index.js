import React, { useEffect } from "react";
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
import GenericService from "../../services/GenericService";
import { API_URL } from "../../services/config";

const selectOptions = [
    { key: "user", value: "User" },
    { key: "user", value: "User" },
    { key: "user", value: "User" },
];


const towedOptions = [
    { key: "yes", value: "Yes" },
    { key: "no", value: "No" },
]

const initialValues = {
    id:"0",
    firstVehicleNumber: "",
    firstVehicleLicensePlate: "",
    firstVehicleState: "",
    firstVehicleDriver: "",
    firstVehicleDriverLicenseNo: "",
    firstVehicleDriverState: "",
    firstVehicleNoOfPassengers: "",
    firstVehicleAddress: "",
    firstVehiclePhoneNo: "",
    firstVehicleInsuranceCo: "",
    firstVehiclePolicyNo: "",
    firstVehicleYear: "",
    firstVehicleMake: "",
    firstVehicleModel: "",
    firstVehicleColor: "",
    secondVehicleNumber: "",
    adjsecondVehicleLicensePlateuster: "",
    secondVehicleDriver: "",
    secondVehicleDriverLicenseNo: "",
    secondVehicleDriverState: "",
    secondVehicleNoOfPassengers:"",
    secondVehicleAddress:"",
    secondVehiclePhoneNo:"",
    secondVehicleInsuranceCo:"",
    secondVehiclePolicyNo:"",
    secondVehicleYear:"",
    secondVehicleMake:"",
    secondVehicleModel:"",
    secondVehicleColor:""
};
const validationSchema = Yup.object({
    firstVehicleNumber: Yup.string().required("First Vehicle Number is required"),
    firstVehicleLicensePlate: Yup.string().required("First Vehicle LicensePlate is required"),
    firstVehicleState: Yup.string().required("First Vehicle State is required"),
    firstVehicleDriver: Yup.string().required("First Vehicle Driver is required"),
    firstVehicleDriverLicenseNo: Yup.string().required("First Vehicle Driver LicenseNo is required"),
    firstVehicleDriverState: Yup.string().required("First Vehicle Driver State is required"),
    firstVehicleNoOfPassengers: Yup.string().required("First VehicleNo Of Passengers is required"),
    firstVehicleAddress: Yup.string().required("First Vehicle Address is required"),
    firstVehiclePhoneNo: Yup.string().required("First Vehicle PhoneNo is required"),
    firstVehicleInsuranceCo: Yup.string().required("First Vehicle InsuranceCo is required"),
    firstVehiclePolicyNo: Yup.string().required("First Vehicle PolicyNo is required"),
    firstVehicleYear: Yup.string().required("First Vehicle Year is required"),
    firstVehicleMake: Yup.string().required("First Vehicle Make is required"),
    firstVehicleModel: Yup.string().required("First Vehicle Model is required"),
    firstVehicleColor: Yup.string().required("First Vehicle Color is required"),
    secondVehicleNumber: Yup.string().required("Second Vehicle Number is required"),
    adjsecondVehicleLicensePlateuster: Yup.string().required("Adjsecond Vehicle License Plateuste is required"),
    secondVehicleDriver: Yup.string().required("Second Vehicle Driver is required"),
    secondVehicleDriverLicenseNo: Yup.string().required("Second Vehicle Driver LicenseNo is required"),
    secondVehicleDriverState: Yup.string().required("Second Vehicle Driver State is required"),
    secondVehicleNoOfPassengers:Yup.string().required("second Vehicle No Of Passengers is required"),
    secondVehicleAddress:Yup.string().required("Second Vehicle Address is required"),
    secondVehiclePhoneNo:Yup.string().required("Second Vehicle PhoneNo is required"),
    secondVehicleInsuranceCo:Yup.string().required("Second Vehicle InsuranceCo is required"),
    secondVehiclePolicyNo:Yup.string().required("Second Vehicle PolicyNo is required"),
    secondVehicleYear:Yup.string().required("Second Vehicle Year is required"),
    secondVehicleMake:Yup.string().required("Second Vehicle Make is required"),
    secondVehicleModel:Yup.string().required("Second Vehicle Model is required"),
    secondVehicleColor:Yup.string().required("Second Vehicle Color is required"),
});

const Index = ({ userDetailForm, setuserDetailForm }) => {
    const navigate = useNavigate();
    const genericService = new GenericService();
    

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const onSubmit = (values, { resetForm }) => {
        console.log(values, 'values');
       const data= { ...userDetailForm, otherVehiclesInvolvedEntity: values };
       console.log(data,"data of form")
        resetForm();
    genericService.post(`${API_URL}admin/submitform`,data).then((msg) => {
        const result = msg.data;
        
        console.log(result,"result full Form");
      })
      .catch((error) => {
        console.log(error);
      });
        navigate('/confirmation');
    };
    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };
    return (
        <>
            <TopHeader name="/defendant-info" heading="Other Vehicle Involved" icon={<ArrowLeftOutlined />} />
            <Container>
                <Formik
                    initialValues={userDetailForm.propertyDamageEntity ? userDetailForm.propertyDamageEntity : initialValues}
                    // validationSchema={validationSchema}
                    enableReinitialize={true}
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
                                            placeholder="Select One"                                       name="firstVehicleNumber"
                                            label="First Vehicle Number"
                                        />
                                    <FormControl
                                            control="input"
                                            placeholder="Select One"                                       name="firstVehicleLicensePlate"
                                            label="First Vehicle LicensePlate"
                                        />
                                    <FormControl
                                            control="input"
                                            placeholder="Select One"                                       name="firstVehicleState"
                                            label="First Vehicle State"
                                        />
                                    <FormControl
                                            control="input"
                                            placeholder="Select One"                                       name="firstVehicleDriver"
                                            label="First Vehicle Driver"
                                        />
                                    <FormControl
                                            control="input"
                                            placeholder="Select One"                                       name="firstVehicleDriverLicenseNo"
                                            label=""
                                        />
                                    <FormControl
                                            control="input"
                                            placeholder="Select One"                                       name="firstVehicleDriverLicenseNo"
                                            label="First Vehicle Driver LicenseNo"
                                        />
                                    <FormControl
                                            control="input"
                                            placeholder="Select One"                                       name="firstVehicleDriverState"
                                            label="First Vehicle Driver State"
                                        />
                                    <FormControl
                                            control="input"
                                            placeholder="Select One"                                       name="firstVehicleNoOfPassengers"
                                            label="First VehicleNo Of Passengers"
                                        />
                                    <FormControl
                                            control="input"
                                            placeholder="Select One"                                       name="firstVehicleAddress"
                                            label="First Vehicle Address"
                                        />
                                    <FormControl
                                            control="input"
                                            placeholder="Select One"                                       name="firstVehiclePhoneNo"
                                            label="First Vehicle PhoneNo"
                                        />
                                    <FormControl
                                            control="input"
                                            placeholder="Select One"                                       name="firstVehicleInsuranceCo"
                                            label="First Vehicle InsuranceCo"
                                        />
                                    <FormControl
                                            control="input"
                                            placeholder="Select One"                                       name="firstVehiclePolicyNo"
                                            label="First Vehicle PolicyNo"
                                        />
                                    <FormControl
                                            control="input"
                                            placeholder="Select One"                                       name="firstVehicleYear"
                                            label="First Vehicle Year"
                                        />
                                        <FormControl
                                            control="input"
                                            placeholder="Select One"                                       name="firstVehicleMake"
                                            label="First Vehicle Make"
                                        />
                                        <FormControl
                                            control="input"
                                            placeholder="Select One"                                       name="firstVehicleModel"
                                            label="First Vehicle Model"
                                        />
                                        <FormControl
                                            control="input"
                                            placeholder="Select One"                                       name="firstVehicleColor"
                                            label="First Vehicle Color"
                                        />
                                        <FormControl
                                            control="input"
                                            placeholder="Select One"                                       name="secondVehicleNumber"
                                            label="Second Vehicle Number"
                                        />
                                        <FormControl
                                            control="input"
                                            placeholder="Select One"                                       name="adjsecondVehicleLicensePlateuster"
                                            label="Adjsecond Vehicle License Plateuster"
                                        />
                                        <FormControl
                                            control="input"
                                            placeholder="Select One"                                       name="secondVehicleDriver"
                                            label="Second Vehicle Driver"
                                        />
                                        <FormControl
                                            control="input"
                                            placeholder="Select One"                                       name="secondVehicleDriverLicenseNo"
                                            label="Second Vehicle Driver LicenseNo"
                                        />
                                        <FormControl
                                            control="input"
                                            placeholder="Select One"                                       name="secondVehicleDriverState"
                                            label="Second Vehicle Driver State"
                                        />
                                        <FormControl
                                            control="input"
                                            placeholder="Select One"                                       name="secondVehicleNoOfPassengers"
                                            label="second Vehicle No Of Passengers"
                                        />
                                        <FormControl
                                            control="input"
                                            placeholder="Select One"                                       name="secondVehicleAddress"
                                            label="Second Vehicle Address"
                                        />
                                        <FormControl
                                            control="input"
                                            placeholder="Select One"                                       name="secondVehiclePhoneNo"
                                            label="Second Vehicle PhoneNo"
                                        />
                                        <FormControl
                                            control="input"
                                            placeholder="Select One"                                       name="secondVehicleInsuranceCo"
                                            label="Second Vehicle InsuranceCo"
                                        />
                                        <FormControl
                                            control="input"
                                            placeholder="Select One"                                       name="secondVehiclePolicyNo"
                                            label="Second Vehicle PolicyNo"
                                        />
                                        <FormControl
                                            control="input"
                                            placeholder="Select One"                                       name="secondVehicleYear"
                                            label="Second Vehicle Year"
                                        />
                                        <FormControl
                                            control="input"
                                            placeholder="Select One"                                       name="secondVehicleMake"
                                            label="Second Vehicle Make"
                                        />
                                        <FormControl
                                            control="input"
                                            placeholder="Select One"                                       name="secondVehicleModel"
                                            label="Second Vehicle Model"
                                        />
                                        <FormControl
                                            control="input"
                                            placeholder="Select One"                                       name="secondVehicleColor"
                                            label="Second Vehicle Color"
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
