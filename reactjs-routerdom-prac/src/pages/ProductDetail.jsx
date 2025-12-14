// import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useGlobal from "../context/useGlobal";
// import { MyContext } from "../context/MyContext";

function ProductDetail() {
  
  const { id } = useParams()
  const navigate = useNavigate()

  // const data = useContext(MyContext)
  const data = useGlobal()

  console.log(id);

  return (
    <div>
      <h1>Product Detail Page</h1>
      <p>{data}</p>

      <button className='border p-2 cursor-pointer' onClick={ () => navigate('/') }>Go To Home Page</button>
      <button className='border p-2 cursor-pointer' onClick={ () => navigate('/products') }>Go To Collection Page</button>
      <button className='border p-2 cursor-pointer' onClick={ () => navigate('/cart') }>Go To Cart Page</button>
    </div>
  );
}

export default ProductDetail;