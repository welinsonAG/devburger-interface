import styled from 'styled-components';

export const Container = styled.div``;

export const ProductImage = styled.img`

  height: 80px;
  background: #eee;
  border-radius: 15px;
  padding: 12px;
   
`;

export const EditButton = styled.button`
border: 0;
background-color: ${({ theme }) => theme.darkWhite};
cursor: pointer; 
height: 30px;
width: 30px;
border-radius: 8px;
margin: 0 auto;

display: flex;
align-items: center;
justify-content: center;

svg{
    width: 20px;
    height: 20px;
}

&:hover{
    background-color: ${({ theme }) => theme.purple};

    svg{ 
        fill: ${({ theme }) => theme.white};
    }
}

`;
