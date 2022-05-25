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
    driverName: "",
    driverLicenseNo: "",
    state: "",
    address:"",
    phoneNo: "",
    registeredOwnerPhone: "",
    registeredOwnerName: "",
    registeredOwnerAddress: "",
    vehicleYear:"",
    vehicleModel:"",
    vehicleMake:"",
    vehicleColor:"",
    licensePlate: "",
    insuranceCo: "",
    policyNo:"",
    insuredName:"",
    claimNo: "",
    adjuster: "",
    agentName: "",
    passengerInVehicle:"",
    comments: "",
    // lossOfEarnings: "",
    // hourlyRate: "",
    // hourlyLost: "",
    // Supervisor: "",
    // vehicleYour: "",
    // vehicleMake: "",
    // phone: ""
};
const validationSchema = Yup.object({

    driverName: Yup.string().required("Driver Name is required"),
    driverLicenseNo: Yup.string().required("Driver License No is required"),
    state: Yup.string().required(" required"),
    address: Yup.string().required(
    "Address is required"
    ),
    phoneNo: Yup.string().required(
    "Phone No is required"
    ),
    registeredOwnerName: Yup.string().required(" Owner Name is required"),
    registeredOwnerAddress:Yup.string().required("Owner Address is required"),
    registeredOwnerPhone: Yup.string().required("Owner Phone is required"),
    vehicleYear:Yup.string().required("Vehicle Year is required"),
    vehicleModel:Yup.string().required("Vehicle Model is required"),
    vehicleMake:Yup.string().required("Vehicle is Make required"),
    vehicleColor:Yup.string().required("Vehicle Color is required"),
    vehicleYour: Yup.string().required("Person Killed is required"),
    licensePlate: Yup.string().required("No of Police Cars is required"),
    insuranceCo: Yup.string().required("Insurance Co is required"),
    policyNo: Yup.string().required("InsuredName  required"),
    insuredName: Yup.string().required("Insured Name is required"),
    claimNo: Yup.string().required("Claim No is required"),
    adjuster: Yup.string().required("Adjuster is required"),
    passengerInVehicle:Yup.string().required("Passenger In Vehicle is required"),
    agentName: Yup.string().required("Agent Name is required"),
    comments: Yup.string().required("Comments is required"),
});

const Index = ({ userDetailForm, setuserDetailForm }) => {
    const navigate = useNavigate();


    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const onSubmit = (values, { resetForm }) => {
        console.log(values, 'values');
        setuserDetailForm({ ...userDetailForm, propertyDamageEntity: values })
        // resetForm()
        navigate('/confirmation')
    };
    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };
    return (
        <>
            <TopHeader name="/defendant-info" heading="Defendant's Information" icon={<ArrowLeftOutlined />} />
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
                                                type="text"
                                                name="driverName"
                                                placeholder="Full Name"
                                                label="Driver Name"
                                            />
                                            <FormControl
                                                control="input"
                                                type="text"
                                                name="driverLicenseNo"
                                                placeholder="Type here.."
                                                label="Driver License No"
                                            />
                                        
                                        <FlexContainer>
                                           
                                            <FormControl
                                                control="select"
                                                placeholder="Select "
                                                name="state"
                                                label="State"
                                                options={towedOptions}
                                                type="text"
                                               
                                            />
                                            <FormControl
                                                control="select"
                                                placeholder="Select"
                                                name="address"
                                                label="Address"
                                                options={towedOptions}
                                                type="text"
                                                
                                                />

                                        </FlexContainer>
                                       

                                            <FormControl
                                                control="input"
                                                type="text"
                                                name="Phone No"
                                                placeholder="(617) 397 - 8483"
                                                label="Phone No"
                                            />
                                          
                                            <FormControl
                                                control="input"
                                                placeholder="Type here..."
                                                // options={selectOptions}
                                                name="registeredOwnerName"
                                                label="Registered Owner Name"
                                            />
                                            <FormControl
                                            control="input"
                                            type="text"
                                            name="registeredOwnerAddress"
                                            placeholder="Type here..."
                                            label="Registered Owner Address"
                                        />

                                        
                                     

                                        <FormControl
                                            control="input"
                                            type="text"
                                            name="registeredOwnerPhone"
                                            placeholder="Type here.."
                                            label="Registered Owner Phone"
                                        />
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
                                        <FlexContainer>
                                             <FormControl
                                            control="input"
                                            type="text"
                                            name="vehicleYear"
                                            placeholder="Type here.."
                                            label="Vehicle Year"
                                        />
                                        <FormControl
                                            control="input"
                                            type="text"
                                            name="VehicleModel"
                                            placeholder="Type here..."
                                            label="Vehicle Model"
                                        />
 </FlexContainer>

                                      <FlexContainer>
                                      <FormControl
                                            name="vehicleMake
                         "
                                            label="Vehicle Make"
                                            control="input"
                                            type="text"
                                            placeholder="Type here.."
                                        />
                                        <FormControl
                                            name="Vehicle Color
                         "
                                            label="vehicleColor"
                                            control="input"
                                            type="text"
                                            placeholder="Type here.."
                                        />

                                      </FlexContainer>
                                       
                                        
                                        <FormControl
                                            name="licensePlate
                         "
                                            label="License Plate"
                                            control="input"
                                            type="text"
                                            placeholder="Type here.."
                                        />
                                        <FormControl
                                            name="insuranceCo
                         "
                                            label="Insurance Co."
                                            control="input"
                                            type="text"
                                            placeholder="Type here.."
                                        />
                                        <FormControl
                                            name="policyNo
                         "
                                            label="Policy No"
                                            control="input"
                                            type="text"
                                            placeholder="Type here.."
                                        />
                                        <FormControl
                                            name="insuredName
                         "
                                            label="Insured Name"
                                            control="input"
                                            type="text"
                                            placeholder="Type here.."
                                        />
                                        <FormControl
                                            name="claimNo
                         "
                                            label="Claim No."
                                            control="input"
                                            type="text"
                                            placeholder="Type here.."
                                        />
                                        <FormControl
                                            name="adjuster
                         "
                                            label="Adjuster"
                                            control="input"
                                            type="text"
                                            placeholder="Type here.."
                                        />
                                        <FormControl
                                            name="agentName
                         "
                                            label="Agent Name"
                                            control="input"
                                            type="text"
                                            placeholder="Type here.."
                                        />
                                          <FormControl
                                            control="select"
                                            placeholder="Select One"
                                            options={towedOptions}
                                            name="passengerInVehicle"
                                            label="Passenger In Vehicle"
                                        />
                   

                                        <FormControl
                                            control="textarea"
                                            type="text"
                                            name="Comments"
                                            placeholder="Type here..."
                                            label="Comments"
                                        />
                                        
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
