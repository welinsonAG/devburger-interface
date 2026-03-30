import styled from "styled-components";

export const ProductImage = styled.img`
height: 80px;
width: 80px;
border-radius:16px;
 object-fit: cover;
`;
export const CardImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 12px;
`;
export const Container = styled.div`
  width: 250px;
  min-height: 250px;
  display: flex;
  flex-direction: column;
  gap: 10px;

`;
export const  ButtonGroup= styled.div`
display: flex;
align-items: center;
gap: 12px;

button{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 30px;
    width: 30px;
    color:  ${(props) => props.theme.white};
    border-radius: 4px;
    background-color: ${(props) => props.theme.purple};
    transition: all 0.4s;
    border: none;

    &:hover{
        background-color: ${(props) => props.theme.secondDarkPurple};
    }
}
`;

export const EmptyCart = styled.td`
font-size: 20px;
text-align: center;
font-weight: bold;
padding:20px;
width: 100%;

`;

export const ProducTotalPrice = styled.span`
font-weight: bold;
  
`;

export const TrashImage= styled.img`
height: 20px;
width: 20px;
cursor: pointer;
`;