import styled from "styled-components"
import { useContext} from "react"
import { UserContext } from "./ContextUser"
import { useNavigate } from "react-router-dom"


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

export default function Login(){

    const {toggleLogin,page,handleShowCheck}=useContext(UserContext)

    const navigate=useNavigate()

    function submit(event){
        event.preventDefault()

        const {email,password}=event.target.elements
        const user=JSON.parse(localStorage.getItem('user'))
        
        if(user===null){
            const ele=document.getElementById("passwordHelp")
            ele.className="alert alert-info"
            ele.innerText="User does not exist.Please Go register"
        }
        else if(password.value===user.password && email.value===user.email){
            toggleLogin()
            navigate("/")
                if(page)
                     handleShowCheck()
            
       }else {
        const ele=document.getElementById("passwordHelp")
        ele.className="alert alert-danger"
        ele.innerText="Email or password is incorrect"
       }
    }
    return(
        <section className="login">
            <form onSubmit={submit}>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" required />
                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" name="password" required /><br />
                    <div id="passwordHelp" class="form-text"></div>
                </div>
                <div class="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1" name="check" required/>
                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <Button type="submit">Login</Button>
                <p>Vous n'avez pas un compte <Span onClick={()=>{navigate("/Register")}}>Enregistrer vous</Span></p>
            </form>
        </section>
    )
}