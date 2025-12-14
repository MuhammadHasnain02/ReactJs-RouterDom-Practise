import { useLocation, useNavigate } from "react-router-dom"

function NotFound() {

  const navigate = useNavigate()
  const location = useLocation()
  console.log(location);

  return (
    <div>
      <h1> Sorry, Page Not Found :)</h1>;
      <button className='border p-2 cursor-pointer' onClick={ () => navigate('/') }>Go To Home Page</button>
      <button className='border p-2 cursor-pointer' onClick={ () => navigate('/products') }>Go To Collection Page</button>
      <button className='border p-2 cursor-pointer' onClick={ () => navigate('/cart') }>Go To Cart Page</button>
      <button className='border p-2 cursor-pointer' onClick={ () => navigate('/about') }>Go To About Page</button>
    </div>
  )
}

export default NotFound