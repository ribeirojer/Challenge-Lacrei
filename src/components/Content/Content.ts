import styled from "styled-components";

export const Wrapper = styled.p`
    font-weight: 400;
    font-size: 24px;
    line-height: 33px;
    color: #515151;
    max-width: ${(props) => props.itemProp};

    @media (max-width: 1040px) {
        line-height: 1.5rem;
        margin-top: 1rem;
        font-size: 1rem;
    }
    @media (max-width: 520px) {
        line-height: 1.25rem;
        margin-top: 0.875rem;
        font-size: 0.875rem;    
        max-width: 434px;
    }
`;