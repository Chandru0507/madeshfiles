import React from 'react'
import useFetch from './custom-hook/Usefetch'

const Home = () => {
  let { products } = useFetch("https://fakestoreapi.com/products");
  return (
    <div>Home-Total products= {products.length}</div>
  )
}

export default Home