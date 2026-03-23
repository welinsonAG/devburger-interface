import styled from 'styled-components';
import { Link } from 'react-router-dom';
import BannerHamburger from '../../assets/banner-hamburger.svg';
import Background from '../../assets/background.png';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${(props) => props.theme.secondWhite};
  background:
    linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)),
    url('${Background}') ;
   

`;

export const Banner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 480px;
  width: 100%;
  position: relative;

  background: url('${BannerHamburger}') no-repeat;
  background-color: ${(props) => props.theme.mainBlack};
  background-position: center;
  background-size: cover;

  h1 {
    font-family: 'Road Rage', sans-serif;
    font-size: 80px;
    line-height: 60px;
    color: ${(props) => props.theme.white};
    position: absolute;

    height: 20%;
    top: 30%;

    span {
      display: block;
      color: ${(props) => props.theme.white};
      font-size: 20px;
    }
  }
`;

export const CategoryMenu = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  margin-top: 30px;
`;

export const CategoryButton = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  background: none;
  color: ${(props) =>
    props.$isActiveCategory ? props.theme.purple : '#696969'};
  font-size: 24px;
  font-weight: 500;
  padding-bottom: 5px;
  line-height: 20px;
  border: none;
  border-bottom: ${(props) =>
    props.$isActiveCategory ? ` 3px solid ${props.theme.purple}` : 'none'};

  &:hover {
    color: #ff2fd1;
    border-bottom-color: #00ff00;
  }
`;

export const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  padding: 40px;
  gap: 60px;
  max-width: 1280px;
  margin: 50px auto;
`;
