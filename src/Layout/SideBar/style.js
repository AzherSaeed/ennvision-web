import styled from "styled-components";

export const SideBarContainerMain = styled.div`
  .main-sidebar-container {
    &-logo {
        text-align: center;
      background-color: white;
      padding: 15px;

      img{
          width: 100%;
          height: 100%;
      }
    }

    &-main-header{
        height: 100%;

        &-icons{
            height: 100%;
            padding-right: 7%;
            display: flex;
            align-items: center;
            justify-content: flex-end;
            gap: 10px;

            p{
                margin: 0;
                color: #C7112B;
                font-size: 14px;
                font-weight: 600;
            }
        }
    }
  }
`;
