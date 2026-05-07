import { useCart } from '../../hooks/CartContext';
import PropTypes from 'prop-types';
import { CartButton } from '../CartButton';
import { CardImage, Container } from './styles';
import { formatPrice } from '../../utils/formatPrice';
import { Placeholder } from 'phosphor-react';
import { memo } from 'react';

export const CardProduct = memo( function CardProduct({ product }) {

console.log(product.images);
console.log(typeof product.images);

  const { putProductInCart } = useCart();


  let parsedImages = [];

try {
  parsedImages =
    typeof product.images === 'string'
      ? JSON.parse(product.images)
      : product.images || [];
} catch {
  parsedImages = [];
}
const imageUrl =
  product?.image ||
  parsedImages?.[0]?.full ||
  parsedImages?.[0]?.medium ||
  parsedImages?.[0]?.thumb ||
  "/placeholder.png";
  
console.log(imageUrl);


  return (
    <Container>

      <CardImage
      
        src={imageUrl} 
        alt={product.name}
        onError={(e) =>{
          e.target.onerro = null;
          e.target.src = '/placeholder.png'
        }}
      />

      <div>
        <p>{product.name}</p>
        <strong>{formatPrice(product.price)}</strong>
      </div>

      <CartButton onClick={() => putProductInCart(product)} />

    </Container>
  );
}

);