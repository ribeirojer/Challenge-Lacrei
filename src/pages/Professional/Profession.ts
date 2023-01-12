import styled from "styled-components";

export const Wrapper = styled.div`
display: flex;
flex-direction: column;
.container {
  margin: 4rem 4rem 0 4rem;
  display: flex;
  justify-content: space-between;
}
.wrapper {
  max-width: 550px;
}
.wrapper p {
  margin-top: 2rem;
  padding-left: 24px;
  border-left: 5px solid #018762;
}

@media (max-width: 1040px) {
  .container {
    margin: 2rem 2rem 0 2rem;
    flex-direction: column;
    gap: 0;
  }
  .wrapper p {
    margin: 1rem 0 0.5rem;
    padding-left: 1rem;
  }
}
@media (max-width: 520px) {
  .welcome div {
    margin-top: 0rem;
    display: flex;
    flex-direction: column;
  }
  .container {
    margin: 1rem 1rem 0 1rem;
  }
  .wrapper p {
    margin: 1rem 0 2rem;
  }
}
`;
