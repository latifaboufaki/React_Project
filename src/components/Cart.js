import React from "react";
import styled from "styled-components";

const CartContainer = styled.div`
  padding: 20px;
  background-color: #fff;
  color: black;
`;

const CartTitle = styled.h2`
  text-align: center;
`;

const ProductList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const ProductItem = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid #ddd;
`;

const RemoveButton = styled.button`
  background-color: red;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
`;

const Cart = ({ products, removeFromCart }) => {
  return (
    <CartContainer>
      <CartTitle>Votre Panier</CartTitle>
      {products.length === 0 ? (
        <p>Votre panier est vide.</p>
      ) : (
        <ProductList>
          {products.map((product, index) => (
            <ProductItem key={index}>
              {product}
              <RemoveButton onClick={() => removeFromCart(index)}>Retirer</RemoveButton>
            </ProductItem>
          ))}
        </ProductList>
      )}
    </CartContainer>
  );
};

export default Cart;
