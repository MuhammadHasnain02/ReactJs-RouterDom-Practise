// import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useGlobal from "../context/useGlobal";
// import { MyContext } from "../context/MyContext";

function About() {

  const navigate = useNavigate()
  const location = useLocation()
  console.log(location);

  // const data = useContext(MyContext)
  const data = useGlobal()
  
  return (
    <div>
      <h1>About Page</h1>
      <p>{data}</p>

      <button className='border p-2 cursor-pointer' onClick={ () => navigate('/') }>Go To Home Page</button>
      <button className='border p-2 cursor-pointer' onClick={ () => navigate('/products') }>Go To Collection Page</button>
      <button className='border p-2 cursor-pointer' onClick={ () => navigate('/cart') }>Go To Cart Page</button>
    </div>
  );
}

export default About;