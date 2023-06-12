import {NavLink} from "react-router-dom"
import styled from "styled-components"
import {useCart} from "react-use-cart"
import { useEffect, useState } from "react"
import Modal from "react-bootstrap/Modal"
import Badge from "react-bootstrap/Badge"
import Cart from "./Cart"
import BuyForm from "./BuyForm"
import logo from "../assets/logo.jpg"
import { useContext } from "react"
import { UserContext } from "./ContextUser"
import { useNavigate } from "react-router-dom"
import { FaCheck } from "react-icons/fa";


const Span=styled.span`
     text-decoration: none;
     color:black ;
     font-size:20px ;
     font-weight:bold ;
     &:hover{
        color :#ffc107;
        cursor: pointer;
     }
`

const Button=styled.button`
padding : 5px 8px ;
background-color: rgb(6, 198, 6) ;
color:white;
font-weight:600 ;
border :none ;
border-radius:5px ;
&:hover{
    opacity : 0.8 ;
}
`

export default  function Header(){

    const navigate=useNavigate()
    
    const {isLogin,toggleLogin}=useContext(UserContext)

    const user=JSON.parse(localStorage.getItem('user'))

    const {totalUniqueItems,isEmpty}=useCart()

    const [showCart,SetShowingCart]=useState(false)
    
    const handleCloseCart = () => SetShowingCart(false);
    const handleShowCart = () => SetShowingCart(true);
   
    const {handleCloseCheck,handleShowCheck,showCheck,togglepage,isbuy,togglebuy}=useContext(UserContext)
   
   
    function payer(){
            if(isEmpty)
               navigate("/Products")
            else if(isLogin){
                handleShowCheck()
            }else{
                navigate("/Login")
                togglepage(true)
            }
            handleCloseCart()
    }

  
    useEffect(() => {
        if (isbuy) {
          setTimeout(() => {
            togglebuy(false);
          }, 3000);
        }
      }, [isbuy, togglebuy]);
      

    return(
        <header>
               <div className="Logo">
                    <img src={logo} alt=""/>
                    <h5>Art<br />Charlot</h5>
               </div>
               <nav>
                    <ul>
                        <li><NavLink to="/"  className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Home</NavLink></li>
                        <li><NavLink to="/Products" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>All Products</NavLink></li>
                        <li className="Basket">
                            <Badge bg="light" className="Badge">{totalUniqueItems}</Badge>
                            <button onClick={handleShowCart}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart3" viewBox="0 0 16 16"><path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/></svg></button>
                        </li>
                        <li><NavLink to="/Contact" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Contact</NavLink></li>
                         <li>{isLogin ? 
                           <span className="user" to="/">{"Welcome "+user.firstName}</span> :
                           <NavLink to={isLogin ? "/" : "/Login"} className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Login</NavLink>}
                        </li>
                        <li>{isLogin ? 
                           <Span  onClick={()=>{
                            localStorage.clear()
                            toggleLogin()
                             navigate("/")}}>Logaout</Span> : 
                            <NavLink to="/Register" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Register</NavLink>}
                        </li>
                    </ul>
               </nav>

            <Modal show={showCart} onHide={handleCloseCart} backdrop="static" size="lg"  centered>
                 <Modal.Header closeButton>
                      <Modal.Title>  My products cart</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                      <Cart/>
                  </Modal.Body>
                  <Modal.Footer>
                      <Button style={{backgroundColor:"rgba(0,0,0,0.6"}} onClick={handleCloseCart}> Close </Button>
                        <Button variant="primary" onClick={payer}>Buy</Button>
                  </Modal.Footer>
             </Modal> 
             <Modal show={showCheck} onHide={handleCloseCheck} backdrop="static" size="lg"  centered>
                 <Modal.Header closeButton>
                      <Modal.Title>Paiement</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                     <BuyForm />
                  </Modal.Body>
             </Modal> 
             <Modal show={isbuy}  onHide={()=>togglebuy(false)} backdrop="static" size="sm"  centered closeButton>
                     <Modal.Body>
                                <div className="effectue">
                                    <p className="icone"><span><FaCheck /></span></p>
                                    <p className="texte">Paiement effectué avec succès</p>
                               </div>
                     </Modal.Body>
              </Modal> 
        </header>
    )
}
