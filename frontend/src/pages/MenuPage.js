import React from "react";
import { Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import { data } from "../Data/Products.js";
import axios from "axios";
import CustomCard from "../components/Card.js";
import NewNavbar from "../components/NewNavbar.js";
// import SearchBar from './Search.js';

function ProductsDetails() {
  const [products, setProducts] = useState();
  const [loading, setLoading] = useState(true);
  const [foodOnly, setFoodOnly] = useState();
  const [beveragesOnly, setBeveragesOnly] = useState();
  const [bestseller, setBestseller] = useState();
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // call a backend api, get the result and store it in variable
    async function getProducts() {
      try {
        const response = await axios.get("https://food-app-2024.vercel.app/api/dishes");
        setProducts(response.data);
        setLoading(false);
        console.log(response.data);
        setFoodOnly(data.filter((item) => item.category === "food"));
        setBeveragesOnly(data.filter((item) => item.category === "beverages"));
        setBestseller(data.filter((item) => item.category === "bestseller"));
      } catch (error) {
        console.error(error);
      }
    }
    getProducts();
    console.log("Inside useEffect");
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);
  // handletabclick is for filtering data based on category of food
  const handleTabClick = (tab) => {
    switch (tab) {
      case "all":
        setProducts(foodOnly.concat(beveragesOnly));
        break;
      case "foods":
        setProducts(foodOnly);
        break;
      case "drinks":
        setProducts(beveragesOnly);
        break;
      case "bestseller":
        setProducts(bestseller);
      default:
        break;
    }
  };

  const addToCart = (product) => {
    const updatedCart = [...cart, { ...product, quantity: 1 }];
    setCart(updatedCart);

    // Save updated cart to localStorage
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return loading ? (
    <p>Loading ......</p>
  ) : (
    <>
      <div style={{ marginTop: "50px" }}>
        {/* <SearchBar onSearch={handleSearch}/> */}
        {/* <NewNavbar handleTabClick={handleTabClick}/> is for filtering data based on category of food */}
        <NewNavbar handleTabClick={handleTabClick} />
      </div>
      <div className="container mt-4 py-4 mb-4">
        <Row className="d-flex  justify-content-around">
          {/* map through the products */}
          {products.map((product) => (
            <Col key={product.id} className="mb-4 mt-4">
              {/*  using custom card  from component card*/}
              <CustomCard
                img={product.img}
                name={product.name}
                category={product.category}
                price={product.price}
                addToCart={() => addToCart(product)}
              />
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
}

export default ProductsDetails;
