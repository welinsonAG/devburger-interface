import styled from 'styled-components';
import Background from '../../assets/background.png';
import Texture from '../../assets/texture.svg';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background:
    linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)),
    url('${Background}');
  background-size: cover;       /* cobre toda a tela */
  background-repeat: no-repeat; /* evita repetição */
  background-position: center;  /* centraliza */
display: flex;
  flex-direction: column;

`;

export const Banner = styled.div`
  background: url('${Texture}');
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
  margin: 0 auto;
  gap: 40px;
`;
