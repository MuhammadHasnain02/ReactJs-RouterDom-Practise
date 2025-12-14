import { useLocation, useNavigate, useParams } from "react-router-dom";
// import { useContext } from "react";
// import { MyContext } from "../context/MyContext";
import useGlobal from "../context/useGlobal";

function Home() {

  const navigate = useNavigate()
  const location = useLocation()
  console.log(location);

  // const data = useContext(MyContext)
  const data = useGlobal()

  return (
    <div>
      <h1>Home Page</h1>
      <p>{data}</p>

      <button className='border p-2 cursor-pointer' onClick={ () => navigate('/products') }>Go To Collection Page</button>
      <button className='border p-2 cursor-pointer' onClick={ () => navigate('/about') }>Go To About Page</button>
      <button className='border p-2 cursor-pointer' onClick={ () => navigate('/cart') }>Go To Cart Page</button>
    </div>
  );
}

export default Home;