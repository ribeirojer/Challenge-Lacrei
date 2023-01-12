import styled from "styled-components";

export const Wrapper = styled.footer`
display: flex;
flex-direction: column;
margin: 0 4rem 0.5rem 4rem;
border-top: 1px solid #b0e0d3;
.navbar {
  display: flex;
  margin-top: 2rem;
  gap: 40px;
}
div span {
  color: #1f1f1f;
  cursor: pointer;
}
.logos svg {
  margin: 23px 30px 23px 0;
  color: #018762;
}
p {
  font-size: 12px;
  line-height: 16px;
  color: #515151;
}
.bold {
  font-weight: 700;
}

@media (max-width: 1040px) {
  margin: 1rem 2rem 0.5rem 2rem;
}
@media (max-width: 520px) {
  font-size: 0.875rem;
  margin: 2rem 1rem 0.5rem 1rem;
  .navbar {
    flex-direction: column;
    margin-top: 1rem;
    gap: 0.25rem;
  }
  .logos svg {
    margin: 0.5rem 2rem 0.5rem 0;
  }
  div span {
    height: 19px;
  }
}
`;