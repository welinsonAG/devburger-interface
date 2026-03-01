import React, { useEffect, useMemo, useState } from "react";
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

  const navigate = useNavigate();
  const { search } = useLocation();

  // 🔥 URL é a única fonte da verdade
  const queryParams = new URLSearchParams(search);
  const activeCategory = Number(queryParams.get("category")) || 0;

  // 🔹 Carregar dados
  useEffect(() => {
    async function loadData() {
      try {
        const [{ data: categoriesData }, { data: productsData }] =
          await Promise.all([
            api.get("/categories"),
            api.get("/products"),
          ]);

        setCategories([{ id: 0, name: "Todas" }, ...categoriesData]);

        const formattedProducts = productsData.map(product => ({
          ...product,
          currencyValue: formatPrice(product.price),
        }));

        setProducts(formattedProducts);

      } catch (error) {
        console.error("Erro ao carregar dados:", error);
        if (error.response?.status === 401) {
          navigate("/login");
        }
      }
    }

    loadData();
  }, [navigate]);

  // 🔥 Filtro derivado (sem useEffect, sem setState)
  const filteredProducts = useMemo(() => {
    if (activeCategory === 0) return products;

    return products.filter(
      product => +product.category_id === activeCategory
    );
  }, [products, activeCategory]);

  return (
    <Container>
      <Banner>
        <h1>
          O MELHOR <br /> HAMBURGER <br /> ESTÁ AQUI{" "}
          <span>Esse cardápio está irresistível!</span>
        </h1>
      </Banner>

      <CategoryMenu>
        {categories.map(category => (
          <CategoryButton
            key={category.id}
            $isActiveCategory={category.id === activeCategory}
            onClick={() =>
              navigate(`/cardapio?category=${category.id}`)
            }
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