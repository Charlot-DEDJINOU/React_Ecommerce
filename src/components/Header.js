import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink, useNavigate } from "react-router-dom"
import styled from "styled-components"
import { useCart } from "react-use-cart"
import { useEffect, useState } from "react"
import { useContext } from "react"
import { UserContext } from "./ContextUser"
import Modal from "react-bootstrap/Modal"
import Badge from "react-bootstrap/Badge"
import Cart from "./Cart"
import BuyForm from "./BuyForm"
import { FaCheck } from "react-icons/fa";
import logo from "../assets/logo.png"

const Span = styled.span`
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
}`

function BasicExample() {

    const navigate = useNavigate()

    const { isLogin, toggleLogin } = useContext(UserContext)

    const user = JSON.parse(localStorage.getItem('user'))

    const { totalUniqueItems, isEmpty } = useCart()

    const [showCart, SetShowingCart] = useState(false)

    const handleCloseCart = () => SetShowingCart(false);
    const handleShowCart = () => SetShowingCart(true);

    const { handleCloseCheck, handleShowCheck, showCheck, togglepage, isbuy, togglebuy } = useContext(UserContext)

    function payer() {
        if (isEmpty)
            navigate("/Products")
        else if (isLogin) {
            handleShowCheck()
        } else {
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

    return (
        <Navbar expand="lg" className="bg-dark-tertiary p-0 fixed-top">
            <Container>
                <Navbar.Brand>
                    <img src={logo} alt="" width="150px" height="60px" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Item className="mx-3 my-2">
                            <NavLink to="/" className="text-black text-decoration-none fw-bold" style={{ fontSize: "1.3em" }}>Home</NavLink>
                        </Nav.Item>
                        <Nav.Item className="mx-3 my-2">
                            <NavLink to="/Products" className="text-black text-decoration-none fw-bold" style={{ fontSize: "1.3em" }}>All Products</NavLink>
                        </Nav.Item>
                        <Nav.Item className="mx-3 my-2 d-flex">
                            <Badge bg="light" style={{ height: "20px", marginTop: "-1px", marginRight: "-16px", color: "rgb(6, 198, 6)" }}>{totalUniqueItems}</Badge>
                            <button onClick={handleShowCart} style={{ background: "none", border: "none" }}><svg xmlns="http://www.w3.org/2000/svg" width="50" height="30" fill="white" className="bi bi-cart3" viewBox="0 0 16 16"><path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" /></svg></button>
                        </Nav.Item>
                        <Nav.Item className="mx-3 my-2">
                            <NavLink to="/Contact" className="text-black text-decoration-none fw-bold" style={{ fontSize: "1.3em" }}>Contact</NavLink>
                        </Nav.Item>
                        <Nav.Item className="mx-3 my-2">{isLogin ?
                            <span className="text-black text-decoration-none fw-bold" style={{ fontSize: "1.3em" }} to="/">{"Welcome " + user.firstName}</span> :
                            <NavLink to={isLogin ? "/" : "/Login"} className="text-black text-decoration-none fw-bold" style={{ fontSize: "1.3em" }}>Login</NavLink>}
                        </Nav.Item>
                        <Nav.Item className="mx-3 my-2">{isLogin ?
                            <Span onClick={() => {
                                localStorage.clear()
                                toggleLogin()
                                navigate("/")
                            }}>Logaout</Span> :
                            <NavLink to="/Register" className="text-black text-decoration-none fw-bold" style={{ fontSize: "1.3em" }}>Register</NavLink>}
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
            <Modal show={showCart} onHide={handleCloseCart} backdrop="static" size="lg" centered>
                <Modal.Header closeButton>
                    <Modal.Title>  My products cart</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Cart />
                </Modal.Body>
                <Modal.Footer>
                    <Button style={{ backgroundColor: "rgba(0,0,0,0.6" }} onClick={handleCloseCart}> Close </Button>
                    <Button variant="primary" onClick={payer}>Buy</Button>
                </Modal.Footer>
            </Modal>
            <Modal show={showCheck} onHide={handleCloseCheck} backdrop="static" size="lg" centered>
                <Modal.Header closeButton>
                    <Modal.Title>Paiement</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <BuyForm />
                </Modal.Body>
            </Modal>
            <Modal show={isbuy} onHide={() => togglebuy(false)} backdrop="static" size="sm" centered closeButton>
                <Modal.Body>
                    <div className="effectue">
                        <p className="icone"><span><FaCheck /></span></p>
                        <p className="texte">Paiement effectué avec succès</p>
                    </div>
                </Modal.Body>
            </Modal>
        </Navbar>
    );
}

export default BasicExample;