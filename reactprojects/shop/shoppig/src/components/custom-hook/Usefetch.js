import { useEffect,useState } from "react";
import axios from "axios";

function useFetch(url) {
  let [products, setProducts] = useState([]);
  let [error, setError] = useState("");
  let [isloading, setIsloading] = useState(true);

  useEffect(() => {
    let fetchApi = async () => {
      try {
    // let response = await fetch(url);
         let response = await axios.get(url)
         setProducts(response.data)

        // if (response.ok) {
        //   let data = await response.json();
        //   setProducts(data);
        // } else {
        //   throw new Error("Data not found");
        // }
      } catch (error) {
        setError(error.message);
      } finally {
        setIsloading(false);
      }
    };
    fetchApi();
  },[]);

  return {products,error,isloading}
}
export default useFetch;
