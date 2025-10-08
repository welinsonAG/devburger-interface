import styled from "styled-components";
import ReactSelect from "react-select";

import {Button} from "../../../components";

export  const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  
  `;

export const Form = styled.form`
border-radius: 20px;
background-color: ${({ theme }) => theme.black};
padding: 32px;
width: 100%;
max-width: 380px;
display: flex;
flex-direction: column; 
gap: 12px;
`;

export const InputGroup = styled.div`
display: flex;
flex-direction: column;
gap: 4px;


`;

export const Label = styled.label`
color: ${({ theme }) => theme.white};
font-size: 14px;

`;

export const Input = styled.input`
width: 100%;
height: 48px;
border-radius: 5px;
padding: 0 12px;
border: none;


`;

export const LabelUpload = styled.label`
cursor: pointer;
border: 1px dashed ${({ theme }) => theme.white};
//border: 1px dashed ${(theme ) => theme.white};
border-radius: 5px;
padding: 10px;
display: flex;
color: ${({ theme }) => theme.white};
margin: 20px 0;

> svg {
    width: 20px;
    height: 20px;
    fill: ${({ theme }) => theme.white};
    margin-right: 4px;
}
    input {
        display: none;
  }
`;

export const Select = styled(ReactSelect)``;  

export const SubmitButton = styled(Button)`
margin-top: 40px;

`;

export const ErrorMessage = styled.span`
  color: ${({ theme }) => theme.darkRed};
  font-size: 14px;
  line-height: 80%;
  font-weight: 600;

  `;
export const ContainerCheck = styled.div`
display: flex;
gap: 8px;
cursor: pointer;
margin-top: 12px;

input {
  cursor: pointer;
}
`;


