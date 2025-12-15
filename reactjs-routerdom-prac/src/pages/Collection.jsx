// import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom"
// import { MyContext } from "../context/MyContext";
import { products } from '../data/product'
import useGlobal from "../context/useGlobal";

function Collection() {

  const navigate = useNavigate()
  const location = useLocation()
  console.log(location);

  const firstProductId = products[0].id;

  // const data = useContext(MyContext)
  const data = useGlobal()


  return (
    <div>
      <h1>Collection Page</h1>;
      <p>{data}</p>

      <button className='border p-2 cursor-pointer' onClick={ () => navigate('/') }>Go To Home Page</button>
      <button className='border p-2 cursor-pointer' onClick={ () => navigate(`/products/${firstProductId}`) }>Go To Product Details</button>
      <button className='border p-2 cursor-pointer' onClick={ () => navigate('/cart') }>Go To Cart Page</button>
      <button className='border p-2 cursor-pointer' onClick={ () => navigate('/about') }>Go To About Page</button>
    </div>
  )
}

export default Collection