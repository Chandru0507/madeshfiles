import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import{Commet} from "react-loading-indicators"
import useFetch from "./custom-hook/Usefetch";

const Productlist = () => {
  
  let{products,error,isloading}=useFetch("http://localhost:5000/products")
      
  if(isloading){
   return (
     <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
       <Commet
         color="#7ee6ed"
         size="large"
         text="Loading.."
         textColor="#000000"
       />
     </div>
   );
  }
  else{

    return (
      <div>
        <h1>Product List</h1>
        {products.length !==0 &&(
        <section className="product">
          {products.map((product) => (
            <Card
              key={product.id}
              style={{ width: "18rem" }}
              className="products"
            >
              <center>
                <Card.Img
                  variant="top"
                  src={product.image}
                  style={{ width: "9rem", height: "12rem" }}
                />
              </center>
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text style={{ overflow: "scroll", height: "200px" }}>
                  {product.description}
                </Card.Text>
              </Card.Body>
              <Card.Footer
                style={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                }}
              >
                <Card.Text>${product.price}</Card.Text>
                <Button variant="primary">Add to Cart</Button>
              </Card.Footer>
            </Card>
          ))}
        </section>
        )}
        {
          error &&<p>{error}</p>
        }
      </div>
    );
  }



};

export default Productlist;
