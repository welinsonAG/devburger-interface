import { useCart } from '../../hooks/CartContext';
import PropTypes from 'prop-types';
import { CartButton } from '../CartButton';
import { CardImage, Container } from './styles';
import { formatPrice } from '../../utils/formatPrice';

export function CardProduct({ product }) {

  console.log(product);
  const { putProductInCart } = useCart();

  return (
    <Container>
      
      
      <CardImage src={product.images?.[0] || "/placeholder.png"}  alt={product.name}/>
      
      <div>
        <p>{product.name}</p>
        <strong>{formatPrice(product.price)}</strong>
      </div>
      <CartButton onClick={() => putProductInCart(product)}></CartButton>
    </Container>
  );
}
CardProduct.propTypes = {
  product: PropTypes.object.isRequired,
};
