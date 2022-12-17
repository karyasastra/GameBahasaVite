import styled from '@emotion/styled';

const TextArea = styled.textarea`
    background: #7C4BDD;
    color: white;
    border: 0px #dddddd solid;
    border-radius: 8px;
    padding: 0.5rem 1rem;
    font-family: 'Comic Neue', cursive;
    font-size: 1.4rem;
    width: calc(100% - 2rem);
    ${ props => 
      /// @ts-ignore
      props.css ?? {} }
`;

export default TextArea;
