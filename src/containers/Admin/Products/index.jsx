import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { CheckCircle, Function, Pencil, XCircle } from 'phosphor-react';
import { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';
import { api } from '../../../services/api';
import { formatPrice } from '../../../utils/formatPrice';
import { Container, ProductImage, EditButton } from './styles';



export function Products() {
 
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProducts() {
      try {
      const { data } = await api.get('/products');
console.log('API RESPONSE:', data);
if (!Array.isArray(data)) {
  console.error('Expected an array of products but got:', data);
  setProducts([]);
  return;
}
      setProducts(data);
       }catch (err) {
  console.error('Error fetching products:', err);
  setProducts([]);
    } finally {
      setLoading(false);
    }
    }
  
 console.log('products:', products);
    loadProducts();
  }, []);


  function isOffer(offer) {
    if (offer) {
      return <CheckCircle color="#61A120" size="26" />;
    } else {
      return <XCircle color="#ff3205" size="26" />;
    }
  }
  function editProduct(product, navigate) {
    navigate('/admin/editar-produtos', { state: { product } });
  }
if (loading) {
    return  <p>Carregando produtos...</p>
  }
  return (
    <Container>
    

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Nome</TableCell>
              <TableCell align="center">Preço</TableCell>
              <TableCell align="center">Produto em Oferta</TableCell>
              <TableCell align="center">Image do Produto</TableCell>
              <TableCell align="center">Editar Produto</TableCell>
            </TableRow>
          </TableHead>
         
          <TableBody>
            {products?.length > 0 && products.map((product) => {
              console.log('PRODUCT:', product);
              console.log('IMAGES:', typeof product.images, product.images);

              return (
                <TableRow
                  key={product.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {product.name}
                  </TableCell>
                  <TableCell align="center">
                    {formatPrice(product.price)}
                  </TableCell>
                  <TableCell align="center">{isOffer(product.offer)}</TableCell>
                  <TableCell align="center">
                    <ProductImage
                   src={product.image || 'https://picsum.photos/300/300'}
                   onError={(e) => {
                    e.target.src = 'https://picsum.photos/300/300'; 
                   }}
                   />
                  </TableCell>tods
                  <TableCell align="center">
                    <EditButton className="loaded" onClick={() => editProduct(product, navigate)}>
                      <Pencil />
                    </EditButton>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}




