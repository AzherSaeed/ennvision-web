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
    id:"0",
    passengerVsDriver: "",
    driverName: "",
    licensePlate: "",
    driverLicenseNo: "",
    address: "",
    state: "",
    driverPhoneNo: "",
    registeredOwnerName: "",
    ownerAddress: "",
    ownerPhone: "",
    vehicleYear: "",
    vehicleModel: "",
    vehicleMake: "",
    vehicleColor: "",
    insuranceCo: "",
    insurancePhoneNo: "",
    policyNo: "",
    insuredName: "",
    claimNo: "",
    adjuster: "",
    adjusterPhoneNo: "",
    agentName: "",
    agentPhoneNo: "",
    malePassengersInTheVehicle: "",
    femalePassengersInTheVehicle: "",
    minorPassengersInTheVehicle: "",
    comments: "",

};
const validationSchema = Yup.object({

    passengerVsDriver: Yup.string().required("Passenger is required"),
    driverName: Yup.string().required("Driver Name is required"),
    driverLicenseNo: Yup.string().required("Driver License No is required"),
    state: Yup.string().required(" required"),
    address: Yup.string().required(
        "Address is required"
    ),
    driverPhoneNo: Yup.string().required(
        "Drive Phone No required"
    ),
    registeredOwnerName: Yup.string().required(
        "Registered Owner Name required"
    ),
    ownerAddress: Yup.string().required(
        "Registered Owner Name required"
    ),
    ownerPhone: Yup.string().required(
        "Registered Owner Name required"
    ),


    vehicleYear: Yup.string().required("Vehicle Year is required"),
    vehicleMake: Yup.string().required("Vehicle Make is required"),
    vehicleModel: Yup.string().required("Vehicle Model is required"),
    vehicleColor: Yup.string().required("Vehicle Color is required"),
    licensePlate: Yup.string().required("License Plate is required"),
    insuranceCo: Yup.string().required("Insurance Co is required"),
    insurancePhoneNo: Yup.string().required("Insurance PhoneNo is required"),
    policyNo: Yup.string().required("Policy Name is required"),
    insuredName: Yup.string().required("Insured Name is required"),
    claimNo: Yup.string().required("Claim No is required"),
    adjuster: Yup.string().required("Adjuster is required"),
    adjusterPhoneNo: Yup.string().required("Adjuster PhoneNo is required"),
    agentName: Yup.string().required("Agent Name is required"),
    agentPhoneNo: Yup.string().required("Agent PhoneNo is required"),
    malePassengersInTheVehicle: Yup.string().required("Male Passengers In Vehicle is required"),
    femalePassengersInTheVehicle: Yup.string().required("Female Passengers In Vehicle is required"),
    minorPassengersInTheVehicle: Yup.string().required("Male Passengers In Vehicle is required"),
    comments: Yup.string().required("Comments is required"),
});

const Index = ({ userDetailForm, setuserDetailForm }) => {
    const navigate = useNavigate();


    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const onSubmit = (values, { resetForm }) => {
        console.log(values, 'values');
        setuserDetailForm({ ...userDetailForm, defendantInformationEntity: values })
        // resetForm()
        navigate('/other-vehicle')
    };
    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };
    return (
        <>
            <TopHeader name="/accident-fact" heading="Defendant's Information" icon={<ArrowLeftOutlined />} />
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
                                            name="passengerVsDriver"
                                            placeholder="Full Name"
                                            label="Passenger Vs Driver"
                                        />

                                        <FormControl
                                            name="driverName"
                                            label="Driver Name"
                                            control="input"
                                            type="text"
                                            placeholder="Type here.."
                                        />

                                        <FormControl
                                            control="input"
                                            type="text"
                                            name="driverLicenseNo"
                                            placeholder="Type here.."
                                            label="Driver License No"
                                        />
                                        <FormControl
                                            control="input"
                                            placeholder="Select"
                                            name="address"
                                            label="Address"
                                            type="text"

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
                                            control="input"
                                            placeholder="Type here.."
                                            name="driverPhoneNo"
                                            label="Driver Phone No"

                                            type="text"

                                        />
                                    </FlexContainer>
                                    <FlexContainer>
                                    
                                        <FormControl
                                            control="input"
                                            placeholder="Type here.."
                                            name="registeredOwnerName"
                                            label="Registered Owner Name"

                                            type="text"

                                        />
                                        <FormControl
                                            control="input"
                                            placeholder="Type here.."
                                            name="ownerAddress"
                                            label="Owner Address"

                                            type="text"

                                        />
                                    </FlexContainer>

                                        <FormControl
                                            control="input"
                                            placeholder="Type here.."
                                            name="ownerPhone"
                                            label="Owner Phone"

                                            type="text"

                                        />


                                        <FlexContainer>                          
                                            <FormControl
                                                control="input"
                                                type="text"
                                                name="vehicleYear"
                                                placeholder="Type here.."
                                                label="Vehicle Year"
                                            />
                                             

                                            <FormControl
                                                lable="Vehicle Color"
                                                name="vehicleColor"
                                                control="input"
                                                type="text"
                                                placeholder="Type here.."
                                            />



                                        </FlexContainer>
                                        <FlexContainer>
                                             <FormControl
                                                name="vehicleMake"
                                                label="Vehicle Make"
                                                control="input"
                                                type="text"
                                                placeholder="Type here.."
                                            />
                                            <FormControl
                                                control="input"
                                                type="text"
                                                name="vehicleModel"
                                                placeholder="Type here..."
                                                label="Vehicle Model"
                                            />
                                    </FlexContainer>


                                        <FormControl
                                            name="insuranceCo"
                                            label="Insurance Co."
                                            control="input"
                                            type="text"
                                            placeholder="Type here.."
                                        />
                                        <FormControl
                                            name="licensePlate"
                                            label="License Plate"
                                            control="input"
                                            type="text"
                                            placeholder="Type here.."
                                        />
                                        <FormControl
                                            name="insurancePhoneNo"
                                            label="Insurance PhoneNo"
                                            control="input"
                                            type="text"
                                            placeholder="Type here.."
                                        />
                                        <FormControl
                                            name="policyNo"
                                            label="Policy No"
                                            control="input"
                                            type="text"
                                            placeholder="Type here.."
                                        />
                                        <FormControl
                                            name="insuredName"
                                            label="Insured Name"
                                            control="input"
                                            type="text"
                                            placeholder="Type here.."
                                        />
                                        <FormControl
                                            name="claimNo"
                                            label="Claim No."
                                            control="input"
                                            type="text"
                                            placeholder="Type here.."
                                        />

                                        <FormControl
                                            name="adjuster"
                                            label="Adjuster"
                                            control="input"
                                            type="text"
                                            placeholder="Type here.."
                                        />

                                        <FormControl
                                            name="adjusterPhoneNo"
                                            label="Adjuster PhoneNo"
                                            control="input"
                                            type="text"
                                            placeholder="Type here.."
                                        />
                                        <FormControl
                                            name="agentName"
                                            label="Agent Name"
                                            control="input"
                                            type="text"
                                            placeholder="Type here.."
                                        />


                                        <FormControl
                                            name="agentPhoneNo"
                                            label="Agent Name"
                                            control="input"
                                            type="text"
                                            placeholder="Type here.."
                                        />

                                        <FormControl
                                            name="malePassengersInTheVehicle"
                                            label="Male Passengers The Vehicle"
                                            control="input"
                                            type="text"
                                            placeholder="Type here.."
                                        />
                                        <FormControl
                                            name="femalePassengersInTheVehicle"
                                            label="Female Passengers In Vehicle"
                                            control="input"
                                            type="text"
                                            placeholder="Type here.."
                                        />
                                        <FormControl
                                            name="minorPassengersInTheVehicle"
                                            label="Minor Passengers In Vehicle"
                                            control="input"
                                            type="text"
                                            placeholder="Type here.."
                                        />

                                        <FormControl
                                            control="textarea"
                                            type="text"
                                            name="comments"
                                            placeholder="Type here..."
                                            label="Comments"
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
                                            title="Next"
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
