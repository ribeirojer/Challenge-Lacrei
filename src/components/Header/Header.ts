import styled from "styled-components";

export const Wrapper = styled.header`
display: flex;
justify-content: space-between;
align-items: center;
min-height: 60px;
padding: 0 4rem;
background-color: #eeeeee;

h1 {
  font-weight: 700;
  font-size: 32px;
  line-height: 44px;
  color: #018762;
}
ul {
  display: flex;
  gap: 2.5rem;
}
ul li {
  list-style-type: none;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  color: #1f1f1f;
  cursor: pointer;
}
.cor a {
  color: #018762;
}

@media (max-width: 1040px) {
  padding: 0.5rem 2rem;
  ul {
    gap: 2rem;
  }
}
@media (max-width: 520px) {
  flex-direction: column;
  height: 78px;
  ul {
    gap: 1rem;
  }
  ul li {
    font-size: 0.875rem;
  }
}
`;