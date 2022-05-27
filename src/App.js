import React, { useState, useEffect } from "react";
import UserTable from "./DashboardLayout/UserTable/Index";
import "./App.css";
import CreateUser from "./DashboardLayout/CreateUser/Index";
import Login from "./DashboardLayout/Login/Index";
import LastConfirmation from "./DashboardLayout/ConfirmationScreen/LastConfirmation";
import SecondConfirmation from "./DashboardLayout/ConfirmationScreen/SecondConfirmation";
// import ConfirmationScreen from "./DashboardLayout/ConfirmationScreen/Index";
import UserDetail from "./DashboardLayout/UserDetail/Index";
import ClientInformation from "./AppScreens/ClientInformation/Index";
import ClientIntakeInterview from "./AppScreens/ClientIntakeInterview/Index";
import EmployementInformation from "./AppScreens/EmployementInformation/Index";
import InjuryInformation from "./AppScreens/InjuryInformation/Index";
import InsurenceInformation from "./AppScreens/InsurenceInformation/Index";
import PropertyDemage from "./AppScreens/PropertyDemage/Index";
import AccidentFacts from './AppScreens/FactOfAccident/Index';
import DefendantInfo from './AppScreens/DefendantInformation/Index';
import OtherVehicle from './AppScreens/OtherVehicle/Index';
import { Routes, Route , useLocation } from "react-router-dom";
import GenericService from "./services/GenericService";
import { API_URL } from "./services/config";
import { Base64 } from 'js-base64';


function App() {
  const location = useLocation();
  const genericService = new GenericService();
  const urlId = location.pathname.split('/')[2]



  const base64ToStringNew = urlId ? Base64?.decode(urlId) : '';
  const stringToNumber = parseInt(base64ToStringNew);
  console.log("id in app",stringToNumber)

  const path = location.pathname.split('/')[1]


  const [userDetailForm, setuserDetailForm] = useState({ 	
  });
  console.log(userDetailForm,"userDetails")

  useEffect(() => {
    if(path === 'clientIntakeInterview'){
      genericService
      .get(`${API_URL}admin/getusersbyid/${stringToNumber}`)
      .then((msg) => {
        const data = msg.data;
        setuserDetailForm({...userDetailForm , ...data})
      })
      .catch((error) => {
        console.log(error);
      });
    }
  }, []);


  console.log(userDetailForm , 'userDetailForm');

  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="UserTable" element={<UserTable />} />
        <Route path="createuser" element={<CreateUser />} />
        <Route path="confirmation" element={<LastConfirmation />} />
        <Route path="dashboard-confirmation" element={<SecondConfirmation />} />
        <Route path="userDetail/:id" element={<UserDetail />} />
      </Routes>
      <div className="userapp-main-container">
        <Routes>
          <Route
            path="/clientIntakeInterview/:id"
            element={
              <ClientIntakeInterview
                userDetailForm={userDetailForm}
                setuserDetailForm={setuserDetailForm}
              />
            }
          />
          <Route
            path="/client-info"
            element={
              <ClientInformation
                userDetailForm={userDetailForm}
                setuserDetailForm={setuserDetailForm}
              />
            }
          />
          <Route
            path="/employement-info"
            element={
              <EmployementInformation
                userDetailForm={userDetailForm}
                setuserDetailForm={setuserDetailForm}
              />
            }
          />
          <Route
            path="/injury-info"
            element={
              <InjuryInformation
                userDetailForm={userDetailForm}
                setuserDetailForm={setuserDetailForm}
              />
            }
          />
          <Route
            path="/property-demage"
            element={
              <PropertyDemage
                userDetailForm={userDetailForm}
                setuserDetailForm={setuserDetailForm}
              />
            }
          />
          <Route
            path="/insurance-info"
            element={
              <InsurenceInformation
                userDetailForm={userDetailForm}
                setuserDetailForm={setuserDetailForm}
              />
            }
          />
          <Route
            path="/accident-fact"
            element={
              <AccidentFacts
                userDetailForm={userDetailForm}
                setuserDetailForm={setuserDetailForm}
              />
            }
          />
          <Route
            path="/defendant-info"
            element={
              <DefendantInfo
                userDetailForm={userDetailForm}
                setuserDetailForm={setuserDetailForm}
              />
            }
          />
          <Route
            path="/other-vehicle"
            element={
              <OtherVehicle
                userDetailForm={userDetailForm}
                setuserDetailForm={setuserDetailForm}
              />
            }
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
