import styled from "styled-components";

export const CreateUserMainContainer = styled.div`
  .create-user-main {
    display: flex;
    flex-direction: column;
    height: 83vh;
    justify-content: space-between;

    &-inner-fields {
      display: grid;
      grid-template-columns: 1fr 1fr 200px;
      gap: 30px;

      &-first,
      &-second,
      &-third {
        display: flex;
        flex-direction: column;
        gap: 20px;
      }
    }

    &-btn{
        margin-bottom: 30px;
    }
  }
`;
