import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
.carousel-item{
    padding-right: 40px;
    
   
}
padding-left: 40px;
.react-multiple-carousel__arrow--left {
   
    left: 15px;
    top: 10px;
}
.react-multiple-carousel__arrow--right {
   
    
    top: 10px;
}
padding-left: 40px;

`;

export const Title = styled.h2`
font-size: 32px;
font-weight: 800;
color: ${(props) => props.theme.purple};
padding-bottom: 12px;
position: relative;
text-align: center;
margin-bottom: 40px;
margin-top:20px;

&::after{
    content:'';
    position: absolute;
    bottom: 0;
    width:56px;
    height: 4px;
    background-color:${(props) => props.theme.purple};
    left: calc(50% - 28px);
}
`;

export const ContainerItems = styled.div`
  background:${({ $imageUrl }) => `url(${ $imageUrl })no-repeat center center`};
    background-size: cover;
    width: 100%;
    height: 300px;
  
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    margin-right: 20px;
    margin-bottom: 20px;
    position: relative;
    cursor: pointer;

    &::before{
        content:'';
        position: absolute;
        top: 0;
        left: 0;
        width: 50%;
        height: 50%;
        border-radius: 50px;
       
      
    }
`;

export const CategoryButton = styled(Link)`
color:${(props) => props.theme.white};
background-color:rgba(0, 0, 0, 0.5 );
padding: 10px 18px;
border-radius:30px;
font-size: 18px;
font-weight: 500;
margin-top: 45px;
text-decoration: none;

max-width: 100%;
white-space: normal;
word-break: break-word;
overflow: hidden;


text-align: center;



&:hover {
    background-color:${(props) => props.theme.AzulDelft};
}
`;



