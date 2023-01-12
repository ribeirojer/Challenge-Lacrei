import styled from "styled-components";

export const Wrapper = styled.div`
display: flex;
flex-direction: column;
.container {
  margin: 4rem 4rem 0 4rem;
  gap: 230px;
  display: flex;
}
.wrapper {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 453px;
}
.wrapper div {
  margin-top: 1rem;
  display: flex;
  gap: 69px;
}

@media (max-width: 1040px) {
  .container {
    margin: 2rem 2rem 0 2rem;
    flex-direction: column;
    gap: 0;
  }
  .wrapper {
    gap: 0;
  }
  .wrapper div {
    margin: 3rem 0 2rem;
  }
}
@media (max-width: 520px) {
  .welcome div {
    margin-top: 0rem;
    display: flex;
    flex-direction: column;
  }
  .container {
    margin: 1rem 2rem 0 2rem;
  }
  .wrapper div {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
}
`;