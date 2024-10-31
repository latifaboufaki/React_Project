import styled from "styled-components";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import About from "./components/About";
import Shop from "./components/shop";
import { useState } from "react"; // Importer useState

// Styles globaux pour le Header et le Main
const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #efe9e9;
`;

const Logo = styled.div`
  font-size: 45px;
  font-weight: bold;
`;


const Nav = styled.nav`
  display: flex;
  gap: 20px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #84888c;
`;

const Cart = styled.button`
  background: none;
  border: none;
  border-radius: 2px;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const CartImage = styled.img`
  width: 20px;
  height: auto;
  margin-right: 5px;
`;

const Circle = styled.div`
  height: 20px; 
  width: 20px; 
  border-radius: 50%; 
  display: flex; 
  align-items: center; 
  justify-content: center;
  background-color: red; 
  color: white; 
  font-size: 14px; 
  margin-left: 5px;
`;

const Main = styled.main`
  color: #fff;
  background-color: black;
  padding: 100px 20px;
  text-align: center;
`;

const Footer = styled.footer`
  background-color: #efe9e9;
  padding: 20px;
  text-align: center;
  margin-top: 40px;
  color: black;
`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
`;

const Card = styled.div`
  width: 18rem;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const CardImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;

const CardBody = styled.div`
  padding: 1rem;
`;

const CardTitle = styled.h5`
  font-size: 1.25rem;
`;

const CardText = styled.p`
  color: #6c757d;
`;

const CardButton = styled.button`
  background-color: #e3b5a4;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 15px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #d19e8e;
  }
`;

const Home = ({ addToCart }) => (
  <div>
    <h1>Shop with Latifa</h1>
    <p>With this shop homepage template</p>
    <CardContainer>
      <Card>
        <CardImage src="img1.jpeg" alt="Product 1" />
        <CardBody>
          <CardTitle>Product 1</CardTitle>
          <CardText>Short description of product 1.</CardText>
          <CardButton onClick={() => addToCart("Product 1")}>Ajouter au panier</CardButton>
        </CardBody>
      </Card>
      <Card>
        <CardImage src="img2.jpeg" alt="Product 2" />
        <CardBody>
          <CardTitle>Product 2</CardTitle>
          <CardText>Short description of product 2.</CardText>
          <CardButton onClick={() => addToCart("Product 2")}>Ajouter au panier</CardButton>
        </CardBody>
      </Card>
      <Card>
        <CardImage src="img3.jpg" alt="Product 3" />
        <CardBody>
          <CardTitle>Product 3</CardTitle>
          <CardText>Short description of product 3.</CardText>
          <CardButton onClick={() => addToCart("Product 3")}>Ajouter au panier</CardButton>
        </CardBody>
      </Card>
      <Card>
        <CardImage src="img4.jpg" alt="Product 4" />
        <CardBody>
          <CardTitle>Product 4</CardTitle>
          <CardText>Short description of product 4.</CardText>
          <CardButton onClick={() => addToCart("Product 4")}>Ajouter au panier</CardButton>
        </CardBody>
      </Card>
    </CardContainer>
  </div>
);

function App() {
  const [cartCount, setCartCount] = useState(0); // État pour le nombre d'articles dans le panier

  const addToCart = (product) => {
    alert(`${product} ajouté au panier`); // Afficher un message dans la console
    setCartCount(cartCount + 1); // Incrémenter le compteur de panier
  };

  return (
    <Router>
      <Header>
        <Logo>Start Bootstrap</Logo>
        <Nav>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/about">About</StyledLink>
          <StyledLink to="/shop">Shop</StyledLink>
        </Nav>
        <Cart>
          <CartImage src="cart.png" alt="Shopping Cart" />
          Cart
          <Circle>{cartCount}</Circle> {/* Afficher le nombre d'articles dans le panier */}
        </Cart>
      </Header>
      <Main>
        <Routes>
          <Route path="/" element={<Home addToCart={addToCart} />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </Main>
      <Footer>
        <p>&copy; 2024 StartBootstrap. All rights reserved.</p>
      </Footer>
    </Router>
  );
}

export default App;
