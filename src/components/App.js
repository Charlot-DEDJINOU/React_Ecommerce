import "../styles/App.css"
import "../styles/style.css"
import React from "react"
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Header from "./Header"
import Home from "./Home"
import Products from "./Products"
import Login from "./Login"
import Register from "./Register"
import Notfound from "./Notfound"
import { CartProvider } from "react-use-cart"
import { UserProvider } from "./ContextUser"
import Contact from "./Conrtact"
import Footer from "./Footer"



function App() {
  return (
     <React.StrictMode>
        <Router>
            <UserProvider>
               <CartProvider>
                        <Header />
                        <Routes>
                                 <Route path="/" element={<Home />} />
                                 <Route path="/Products" element={<Products />} />
                                 <Route path="/Contact" element={<Contact />} />
                                 <Route path="/Login" element={<Login />} />
                                 <Route path="/Register" element={<Register />} />
                                 <Route path="*" element={<Notfound />} />  
                        </Routes> 
                        <Footer />
               </CartProvider>
            </UserProvider> 
        </Router>
     </React.StrictMode>
  )
}

export default App;
