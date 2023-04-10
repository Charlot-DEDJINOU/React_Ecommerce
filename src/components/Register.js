import styled from "styled-components"
import { useNavigate } from "react-router-dom"
import {useState,useContext} from "react"
import { UserContext } from "./ContextUser"
import Toast from "react-bootstrap/Toast"
import ToastContainer from 'react-bootstrap/ToastContainer';

const Button=styled.button`
padding : 5px 8px ;
background-color: rgb(6, 198, 6) ;
color:white;
font-weight:600 ;
border :none ;
border-radius:5px ;
margin-bottom:10px ;
&:hover{
    opacity : 0.8 ;
}
`

const Span=styled.span`
font-style: italic;
text-decoration: underline;
&:hover{
    cursor: pointer;
}
`
export default function Register(){

    const {toogleNombre_visiteurs}=useContext(UserContext)

    const navigate=useNavigate()

    const [show, setShow] = useState(false);

    function submit(event){
        event.preventDefault()
        const {nom,prenom,email,password,confirmpassword}=event.target.elements
        if(password.value===confirmpassword.value){
            const user = { firstName:  prenom.value, 
                             lastName: nom.value,
                             email: email.value,
                             password: password.value
                            }
            setShow(true) ;
            localStorage.setItem('user', JSON.stringify(user))
            toogleNombre_visiteurs() ;
            setTimeout(()=>{navigate("/Login")},1500)
        }else{
            const ele=document.getElementById("passwordHelp")
            ele.innerText="No consistency between passwords"
            ele.className="alert alert-danger"
        }
    }

    return(
        <section className="register">
            <form onSubmit={submit}>
               <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Last Name</label>
                    <input type="text" class="form-control"  id="exampleInputPassword1" name="nom" minLength="3" required/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">First Name</label>
                    <input type="text" class="form-control" id="exampleInputPassword1" name="prenom" minLength="3" required/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" name="email" required/>
                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" aria-describedby="emailHelp" name="password" minLength="8" required />
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Confirm Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword2" name="confirmpassword" required/><br />
                    <div id="passwordHelp" class="form-text"></div>
                </div>
                <div class="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1" name="check" required/>
                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <Button type="submit">Register</Button>
                <p>Vous avez un compte <Span onClick={()=>{navigate("/Login")}}>Connectez vous</Span></p>
            </form>
            <ToastContainer  position="top-end">
                <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide animation={true}>
                    <Toast.Header closeButton={false}>
                        <span style={{color:"rgb(6,198,6)",fontWeight:"bold"}}>Art Charlot</span>
                    </Toast.Header>
                    <Toast.Body>You have successfully registered</Toast.Body>
                </Toast>
           </ToastContainer>
        </section>
    )
}