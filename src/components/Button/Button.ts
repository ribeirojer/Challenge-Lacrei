import styled from "styled-components";

export const Wrapper = styled.button`
    width: 192px;
    height: 48px;
    font-weight: 700;
    font-size: 18px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    cursor: pointer;

    border: 2px solid #018762;
    color: ${(props) => props.color};
    background-color: ${(props) => props.theme};
`;