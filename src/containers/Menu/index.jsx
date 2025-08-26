import React, { useEffect, useState } from "react";
import { api } from "../../services/api";
import { CardProduct } from "../../components/CardProduct";
import { useLocation, useNavigate } from "react-router-dom";
import { formatPrice } from "../../utils/formatPrice";
import {
  Container,
  Banner,
  CategoryMenu,
  ProductsContainer,
  CategoryButton,
} from "./styles";

export function Menu() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const navigate = useNavigate();
  const { search } = useLocation();

  // Pegando categoria da URL de forma segura
  const queryParams = new URLSearchParams(search);
  const categoryIdParam = queryParams.get("categoria");

  const initialCategory = categoryIdParam && !isNaN(categoryIdParam)
    ? parseInt(categoryIdParam, 10)
    : 0;

  const [activeCategory, setActiveCategory] = useState(initialCategory);

  // Carregar categorias e produtos
  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get("/categories");
      console.log("Categoria inicial:", initialCategory);
      console.log("Categorias recebidas:", data);
      const newCategories = [{ id: 0, name: "Todas" }, ...data];
      setCategories(newCategories);
    }

    async function loadProducts() {
      const { data } = await api.get("/products");
      console.log("Produtos recebidos ", data); // Verifique os dados aqui
      const newProducts = data.map((product) => ({
        currencyValue: formatPrice(product.price),
        ...product,
      }));

      setProducts(newProducts);
    }

    loadCategories();
    loadProducts();
  }, []);

  // Atualizar produtos filtrados quando muda categoria ou produtos
  useEffect(() => {
    if (activeCategory === 0) {
      setFilteredProducts(products);
 
      console.log("Categoria ativa:", activeCategory); // Verifique a categoria ativa
    } else {
     console.log("Estrutura dos produtos:", products.map(product => product.category_id));

      const newFilteredProducts = products.filter(
        (product) => +product.category_id === activeCategory
      );
      setFilteredProducts(newFilteredProducts);
    }
  }, [products, activeCategory]);

  // Render
  return (
    <Container>
      <Banner>
        <h1>
          O MELHOR <br /> HAMBURGER <br /> ESTÁ AQUI{" "}
          <span>Esse cardápio está irresistível!</span>
        </h1>
      </Banner>

      <CategoryMenu>
        {categories.map((category) => (
          <CategoryButton
            key={category.id}
            $isActiveCategory={category.id === activeCategory}
            onClick={() => {
              navigate(
                {
                  pathname: "/cardapio",
                  search: `?categoria=${category.id}`,
                },
                { replace: true }
              );
              setActiveCategory(category.id);
            }}
          >
            {category.name}
          </CategoryButton>
        ))}
      </CategoryMenu>

      <ProductsContainer>
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            <CardProduct key={product.id} product={product} />
          ))
        ) : (
          <p>Nenhum produto encontrado para esta categoria.</p>
        )}
      </ProductsContainer>
    </Container>
  );
}