import React, { useEffect, useState } from "react";
import SideBar from "../SideBar/Index";
import { UserTableContainer } from "./style";
import { Table } from "antd";
import ic_delete from "../../Assets/ic_delete.svg";
import ic_edit from "../../Assets/ic_edit.svg";
import { Link } from "react-router-dom";
import GenerecService from "../../services/GenericService";
import { API_URL } from "../../services/config";

const dataSource = [];

for (let i = 0; i < 11; i++) {
  dataSource.push({});
}

const columns = [
  {
    title: "Id",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Full Name",
    dataIndex: "fullname",
    key: "fullname",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Phone",
    dataIndex: "phone",
    key: "phone",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
  },
  {
    title: "Created At",
    dataIndex: "createdat",
    key: "createdat",
  },
  {
    title: "Action",
    dataIndex: "action",
    key: "action",
  },
];

const Index = () => {
  const genericService = new GenerecService();

  const [userData, setuserData] = useState([]);

  useEffect(() => {
    console.log("msgmsg");
    genericService
      .get(`${API_URL}admin/users`)
      .then((msg) => {
        setuserData(msg?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const myUsers = userData?.map((user) => {
    return {
      id: user.id,
      fullname: (
        <Link className="userTableLink" to={`/userDetail/${user.id}`}>
          {user.username}
        </Link>
      ),
      email: user.email,
      phone: user.phoneNumber,
      status: "Active",
      createdat: "13-August-2020",
      action: (
        <div className="userTableIcons">
          <img className="userTableIcons-one" src={ic_delete} alt="ic-delete" />
          <img className="userTableIcons-two" src={ic_edit} alt="ic-ic_edit" />
        </div>
      ),
    };
  });

  console.log(userData, "userData");

  return (
    <SideBar>
      <UserTableContainer>
        <Table
          className="registerTableDetail"
          dataSource={myUsers}
          columns={columns}
          pagination={false}
        />
      </UserTableContainer>
    </SideBar>
  );
};

export default Index;
