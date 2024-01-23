import React from "react";
import { Card, Button } from "react-bootstrap";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CustomCard = ({ product, addToCart }) => {
  console.log("Product:", product);
  const handleAddToCart = () => {
    addToCart({ product });
    addItem({ product }); // Call the addItem function here
    toast.success("Item added to cart", {
      position: "top-right",
      autoClose: 2000, // Auto close the toast after 2000 milliseconds (2 seconds)
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });

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
    // SetCart(stringCart);
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
        src={product.img || ""}
        alt={product.name || ""}
        className="reorder-img"
        style={{ objectFit: "cover", height: "300px", width: "100%" }}
      />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>{product.category}</Card.Text>
        <Card.Text>₹{product.price}</Card.Text>
        <hr></hr>
        <Button variant="outline-success" onClick={handleAddToCart}>
          Add to Cart
        </Button>
      </Card.Body>
    </Card>
  );
};

export default CustomCard;




// const Card =({data}) =>{
//   const foodData = Array.isArray(data) ? data : [];

//   const addItem =(item)=>{

//     let exixtingCart = [];
//     if(localStorage.getItem("cart") && JSON.parse(localStorage.getItem("cart"))){
//       exixtingCart = JSON.parse(localStorage.getItem("cart"));
//     }
//     let cartCopy = [...exixtingCart];
//     let itemCopy = {...item};
//     let {id} = itemCopy;
//     let existingItem = cartCopy.find(cartItem => cartItem.id === id);
//     if(existingItem){
//       existingItem.quantity += 1;
//     }else{
//       itemCopy.quantity = 1;
//       cartCopy.push(itemCopy);
//     }
//     let stringCart = JSON.stringify(cartCopy);
//     localStorage.setItem("cart",stringCart);
//   };
//   const handleAddFood = (item)=>{
//     addItem(item);
    
//   };
//   return(
//   <div className="food-list">
//     {foodData.map((item) => {
//       return (
//         <div key={item.id} className="food">
//         <img src={item.img} width="15%" alt="" />
//         <p className="food-name">{item.name}</p>
//         <div className="food-footer">
//           <span className="food-price">Rs. {item.price}</span>
//           <span>Delivery free</span>
//         </div>

//         <button className="add-food" onClick={() => handleAddFood(item)}>
//           Add
//         </button>
//       </div>
//       );
//     })}
//     </div>
//   );
// }

// export default Card;