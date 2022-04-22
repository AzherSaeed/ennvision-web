import React , {useEffect , useState } from "react";
import SideBar from "../SideBar/Index";
import { UserDetailContainer } from "./Style";
import profile from "../../Assets/card-profile.png";
import {useParams} from 'react-router-dom';
import GenericService from '../../services/GenericService';
import {API_URL} from '../../services/config';

const Index = () => {
  const {id} = useParams()
  const genericService = new GenericService();


  const [userDetail, setuserDetail] = useState({})



  useEffect(() => {
    genericService
      .get(`${API_URL}admin/users/${id}`)
      .then((msg) => {
        console.log(msg, "msgmsg");
        setuserDetail(msg?.data)
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id])


  
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
              <p>{userDetail.email}</p>
            </div>
            <div>
              <label>User Status</label>
              <p>Active</p>
            </div>
          </div>
          <div className="userDetail-fields-two">
            <div>
              <label>username</label>
              <p>{userDetail.username}</p>
            </div>
            <div>
              <label>Phone</label>
              <p>{userDetail.phoneNumber}</p>
            </div>
            <div>
              <label>Created At</label>
              <p>13-August-2020</p>
            </div>
          </div>
          <div className="userDetail-fields-three">
            {/* <img src={profile} alt="profile" /> */}
          </div>
        </div>
      </UserDetailContainer>
    </SideBar>
  );
};

export default Index;
