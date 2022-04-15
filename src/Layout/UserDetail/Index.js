import React from "react";
import SideBar from "../SideBar/Index";
import { UserDetailContainer } from "./Style";
import profile from "../../Assets/card-profile.png";

const Index = () => {
  return (
    <SideBar>
      <UserDetailContainer>
        <div className="userDetail-fields">
          <div className="userDetail-fields-one">
            <div>
              <label>First Name</label>
              <p>Adnan Bhatti</p>
            </div>
            <div>
              <label>Email</label>
              <p>info@pizzahunt.com</p>
            </div>
            <div>
              <label>User Status</label>
              <p>Active</p>
            </div>
          </div>
          <div className="userDetail-fields-two">
            <div>
              <label>username</label>
              <p>adnan123</p>
            </div>
            <div>
              <label>Phone</label>
              <p>+1 (617) 397 - 8483</p>
            </div>
            <div>
              <label>Created At</label>
              <p>13-August-2020</p>
            </div>
          </div>
          <div className="userDetail-fields-three">
            <img src={profile} alt="profile" />
          </div>
        </div>
      </UserDetailContainer>
    </SideBar>
  );
};

export default Index;
