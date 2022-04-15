import { Layout, Menu } from "antd";
import { UserOutlined } from "@ant-design/icons";
import ic_logo from "../../Assets/ic_header_logo.svg";
import ic_notification from "../../Assets/ic_notification.svg";
import ic_search from "../../Assets/ic_search.svg";
import ic_us_flag from "../../Assets/ic_us_flag.svg";
import { SideBarContainerMain } from "./style";
import {Link} from 'react-router-dom';

const { Header, Content, Sider } = Layout;
const { SubMenu } = Menu;

function Index({ children }) {
  return (
    <SideBarContainerMain>
      <Layout className="main-sidebar-container">
        <Sider
          style={{
            left: 0,
            zIndex: 1,
          }}
          className="sidebar-menu-logo-background"
          breakpoint="lg"
          collapsedWidth="0"
        >
          <div className="main-sidebar-container-logo">
            <img src={ic_logo} alt="ic_logo" />
          </div>
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["/createuser"]}
            selectedKeys={[window.location.pathname]}
            defaultOpenKeys={["/createuser"]}
            style={{ height: "100%", borderRight: 0 }}
          >
            <SubMenu key="/createuser" icon={<UserOutlined />} title="User Manage">
              <Menu.Item key="/createuser">
              <Link to="/createuser" />
                Create New
              </Menu.Item>
              <Menu.Item key="/UserTable">   <Link to="/UserTable" /> List</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout>
          <Header
            className="site-layout-sub-header-background"
            style={{ padding: 0 }}
          >
            <div className="main-sidebar-container-main-header">
              <div className="main-sidebar-container-main-header-icons">
                <img src={ic_search} alt="ic_search" />
                <img src={ic_notification} alt="ic_notification" />
                <img src={ic_us_flag} alt="ic_us_flag" />
                <p>Log out</p>
              </div>
            </div>
          </Header>
          <Content style={{ margin: "24px 16px 0" }}>
            <div className="site-layout-background">{children}</div>
          </Content>
        </Layout>
      </Layout>
    </SideBarContainerMain>
  );
}

export default Index;
