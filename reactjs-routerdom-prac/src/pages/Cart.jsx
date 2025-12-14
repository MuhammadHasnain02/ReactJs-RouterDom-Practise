// import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useGlobal from "../context/useGlobal";
// import { MyContext } from "../context/MyContext";

function Cart() {

  const navigate = useNavigate()
  const location = useLocation()
  console.log(location);

  // const data = useContext(MyContext)
  const data = useGlobal()

  return (
    <div>
      <h1>Cart Page</h1>
      <p>{data}</p>

      <button className='border p-2 cursor-pointer' onClick={ () => navigate('/') }>Go To Home Page</button>
      <button className='border p-2 cursor-pointer' onClick={ () => navigate('/about') }>Go To About Page</button>
      <button className='border p-2 cursor-pointer' onClick={ () => navigate('/products') }>Go To Collection Page</button>
    </div>
  );
}

export default Cart;