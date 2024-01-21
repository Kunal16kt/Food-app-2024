import React from "react";
import { Card, Button } from "react-bootstrap";

const CustomCard = ({ id, img, name, category, price, addToCart }) => {
  const handleAddToCart = () => {
    addToCart({ id, img, name, category, price });
    addItem({ id, img, name, category, price }); // Call the addItem function here
  };

  const addItem = (item) => {
    // Your existing addItem logic here
    let existingCart = [];
    if (
      localStorage.getItem("cart") &&
      JSON.parse(localStorage.getItem("cart"))
    ) {
      existingCart = JSON.parse(localStorage.getItem("cart"));
    }
    let cartCopy = [...existingCart];
    let itemCopy = { ...item };

    let { id } = itemCopy;
    let existingItem = cartCopy.find((cartItem) => cartItem.id === id);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      itemCopy.quantity = 1;
      cartCopy.push(itemCopy);
    }

    let stringCart = JSON.stringify(cartCopy);
    localStorage.setItem("cart", stringCart);
  };

  return (
    <Card
      style={{
        width: "22rem",
        marginRight: "26px",
        marginLeft: "20px",
        bg: "light",
      }}
    >
      <Card.Img
        variant="top"
        src={img}
        alt={name}
        className="reorder-img"
        style={{ objectFit: "cover", height: "300px", width: "100%" }}
      />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{category}</Card.Text>
        <Card.Text>₹{price}</Card.Text>
        <Button variant="outline-success" onClick={handleAddToCart}>
          Add to Cart
        </Button>
      </Card.Body>
    </Card>
  );
};

export default CustomCard;
