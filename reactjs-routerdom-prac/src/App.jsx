import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import ProductDetail from './pages/ProductDetail'
import NotFound from './pages/NotFound'
import Collection from './pages/collection'
import About from './pages/About'
import Cart from './pages/Cart'

function App() {

    return (
        <>
        <Routes>
            <Route index element={<Home />} />
            <Route path="/products" element={<Collection />} />
            <Route path='/products/:id' element={<ProductDetail />} />
            <Route path='/about' element={<About />} />
            <Route path='/cart' element={<Cart />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
        </>
    )
}

export default App