import styled from "@emotion/styled";

const Button = styled.button`
    background: #5328A8;
    border: 4px solid white;
    border-radius: 8px;
    padding: 12px 22px;
    color: white;
    font-family: 'Comic Neue', cursive;
    font-weight: bold;
    font-size: 24px;
    cursor: pointer;
    &:hover {
        filter: brightness(.9);
    }
`;

export default Button;
