import styled from "styled-components";

export const Container = styled.div`

display:flex;
flex-direction:column;
align-items: center;
gap:40px;
padding: 45px;
border-radius:8px;
background-color: #ffffff;
cursor: grab;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px ;
position: relative;

div{
    width:100%;
    height: 80px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    gap: 10px;


    p{
        font-size: 18px;
        color:#ff8c05;
        line-height: 20px;
        font-weight: 700;
        margin-top:40px;
       
        strong{
            font-size:22px;
            color: #363636;
            font-weight: 800;
            line-height:20px;
            
        }

    }
    
}
`;


export const CardImage = styled.img`
  height: 100px;
 
  top: -30px; /* diminua de -50px para -30px */
  left: 50%;   /* centraliza horizontalmente */
  transform: translateX(-50%);
  cursor: pointer;
`;


