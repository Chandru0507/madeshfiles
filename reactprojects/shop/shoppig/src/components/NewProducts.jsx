import React, { useState } from "react";
import { Paper, TextField, Typography, Grid, Button } from "@mui/material";

const NewProducts = () => {
  let paperStyle = { padding: "20px", width: 400, margin: "20px auto" };
  let [newProduct, setnewProduct] = useState({
    title: "",
    price: "500",
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    rating: {
      rate: 0,
      count: 0,
    },
  });
  let handleChange = (e) => {
    let { value, name } = e.target;
    let feildname = name.split("rating.")[1]
    console.log(feildname)
    if(name.includes("rating.")){
      setnewProduct({
      ...newProduct,
      rating:{
        ...newProduct.rating,
        [feildname]:value
      }
    })
    }
    else{

      setnewProduct({
        ...newProduct,
        [name]:value
      })
    }
  };

  let handleAdd =()=>{
    e.preventDefault()

    fetch("http://localhost:4000/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    }).then(() => {
      alert("Data added Successfully");
    });
  }
  console.log(newProduct);

  return (
    <Paper elevation={20} style={paperStyle}>
      <Typography variant="h5" textAlign={"center"}>
        Create new product
      </Typography>
      <Grid component="form" style={{ display: "grid", gap: "20px" }} onSubmit={handleAdd}>
        <TextField
          value={newProduct.title}
          name="title"
          label="Title"
          variant="outlined"
          fullWidth
          onChange={handleChange}
        />
        <TextField
          value={newProduct.category}
          name="category"
          label="category"
          variant="outlined"
          fullWidth
          onChange={handleChange}
        />
        <Grid container spacing={2}>
          <Grid size={6}>
            <TextField
              value={newProduct.rating.rate}
              name="rating.rate"
              type="number"
              label="Title"
              variant="outlined"
              onChange={handleChange}
            />
          </Grid>
          <Grid size={6}>
            <TextField
              value={newProduct.rating.count}
              name="rating.count"
              type="number"
              label="Title"
              variant="outlined"
              onChange={handleChange}
            />
          </Grid>
        </Grid>
        <Button type="submit"  variant="contained" fullWidth>
          Add
        </Button>
      </Grid>
    </Paper>
  );
};

export default NewProducts;
