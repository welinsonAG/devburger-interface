import { useCart } from '../../hooks/CartContext';
import PropTypes from 'prop-types';
import { CartButton } from '../CartButton';
import { CardImage, Container } from './styles';
import { formatPrice } from '../../utils/formatPrice';
import { Placeholder } from 'phosphor-react';
import { memo } from 'react';

export const CardProduct = memo( function CardProduct({ product }) {



  const { putProductInCart } = useCart();


const imageUrl =
  product?.image ||
  product?.images?.[0]?.full ||
  product?.images?.[0]?.medium ||
  product?.images?.[0]?.thumb ||
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