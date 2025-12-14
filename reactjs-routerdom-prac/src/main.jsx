import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import MyProvider from './context/MyContext.jsx'
import GlobalProvider from './context/MyContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>

    {/* <MyProvider> */}
      <GlobalProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </GlobalProvider>
    {/* </MyProvider> */}

  </StrictMode>,
)