import Logo from '../../assets/logo.png';
import { CartItems, CartResume } from '../../components';
import { Banner, Container, Title, Content } from './styles';

export function Cart() {
  return (
    <Container>
      <Banner>
        <img src={Logo} alt="logo devburger" />
      </Banner>

      <Title>Checkout - Pedido</Title>

      <Content>
        <CartItems />
         <CartResume /> 
      </Content>
    
    </Container>
  );
}
