import styled from 'styled-components';
import Texture from '../../assets/texture.svg';
import Background from "../../assets/background.png";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  background: 
    linear-gradient(rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)),
    url(${Background});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
 
`;


export const Banner = styled.div`
  background: url(${Texture});
  background-color: ${(props) => props.theme.mainBlack};
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const Title = styled.div`
  font-size: 32px;
  font-weight: 800;
  padding-bottom: 12px;
  color: ${(props) => props.theme.gren};
  text-align: center;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    left: calc(50% + -28px);
    bottom: 0;
    width: 56px;
    height: 4px;
    background-color: ${(props) => props.theme.gren};
  }
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 30%;
  width: 100%;
  max-width: 1280px;
  padding: 40px;
  margin: 0px auto;
  gap: 40px;
`;
