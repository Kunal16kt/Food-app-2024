
import React, { useState, useEffect } from "react";
import { Button, Table } from "react-bootstrap";
import { Navigate } from "react-router-dom";

const CartPage = () => {
  const [cart, setCart] = useState([]);
  const deliveryFee = 100;

  useEffect(() => {
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(existingCart);
  }, []);

  const calculateSubtotal = () => {
    return cart.reduce((total, item) => {
      return total + item.product.price * item.quantity;
    }, 0);
  };

  const handleQuantityChange = (index, newQuantity) => {
    const updatedCart = [...cart];
    updatedCart[index].quantity = newQuantity;
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const handleRemoveItem = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const handleAddToCart = (product) => {
    const existingProductIndex = cart.findIndex(
      (item) => item.product.id === product.id
    );

    if (existingProductIndex !== -1) {
      // If the product is already in the cart, update the quantity
      handleQuantityChange(
        existingProductIndex,
        cart[existingProductIndex].quantity + 1
      );
    } else {
      // If the product is not in the cart, add it to the cart
      const updatedCart = [...cart, { product, quantity: 1 }];
      setCart(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    }
  };

  const handleOrderNow = () => {
    if (cart.length > 0) {
      // Redirect to CheckoutPage
      return <Navigate to="/checkout" />;
    }
  };

  const handleReturnToMenu = () => {
    // Redirect to MenuPage
    return <Navigate to="/menu" />;
  };

  return (
    <div className="container mt-5">
      {cart.length > 0 ? (
        <>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Product Name</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.product.name}</td>
                  <td>
                    <Button
                      variant="outline-secondary"
                      size="sm"
                      onClick={() =>
                        handleQuantityChange(index, item.quantity - 1)
                      }
                    >
                      -
                    </Button>{" "}
                    {item.quantity}{" "}
                    <Button
                      variant="outline-secondary"
                      size="sm"
                      onClick={() =>
                        handleQuantityChange(index, item.quantity + 1)
                      }
                    >
                      +
                    </Button>
                  </td>
                  <td>₹{item.product.price * item.quantity}</td>
                  <td>
                    <Button
                      variant="outline-danger"
                      size="sm"
                      onClick={() => handleRemoveItem(index)}
                    >
                      Remove
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>

          <div className="mt-3">
            <strong>Subtotal:</strong> ₹{calculateSubtotal()}
          </div>
          <div className="mt-2">
            <strong>Delivery Fee:</strong> ₹{deliveryFee}
          </div>
          <div className="mt-3">
            <strong>Total Price:</strong> ₹{calculateSubtotal() + deliveryFee}
          </div>

          <div className="mt-4">
            <Button variant="outline-primary" onClick={handleReturnToMenu}>
              Return to Menu
            </Button>{" "}
            <Button variant="primary" onClick={handleOrderNow}>
              Order Now
            </Button>
          </div>
        </>
      ) : (
        <p>Your cart is empty. Add products to order!</p>
      )}
    </div>
  );
};

export default CartPage;
