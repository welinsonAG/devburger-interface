import { useCart } from '../../hooks/CartContext';
import PropTypes from 'prop-types';
import { CartButton } from '../CartButton';
import { CardImage, Container } from './styles';
import { formatPrice } from '../../utils/formatPrice';

export function CardProduct({ product }) {
console.log(product)
  const { putProductInCart } = useCart();

  

  const images = Array.isArray(product.images)
  ? product.images
  : [];

const imageUrl = product.images?.[0] || "/placeholder.png";

  return (
    <Container>

      <CardImage
        src={imageUrl || "/placeholder.png"}
        alt={product.name}
      />

      <div>
        <p>{product.name}</p>
        <strong>{formatPrice(product.price)}</strong>
      </div>

      <CartButton onClick={() => putProductInCart(product)} />

    </Container>
  );
}

