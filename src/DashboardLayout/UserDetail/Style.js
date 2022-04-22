import styled from "styled-components";

export const UserDetailContainer = styled.div`
  .userDetail-fields {
    display: grid;
    grid-template-columns: 1fr 1fr 200px;
    gap: 50px;

    &-one,
    &-two,
    &-three {
      display: flex;
      flex-direction: column;
      gap: 20px;

      label {
        color: #1b283f;
        font-weight: 600;
      }

      p {
        border-bottom: 1px solid #1b283f;
      }
    }
  }
`;
