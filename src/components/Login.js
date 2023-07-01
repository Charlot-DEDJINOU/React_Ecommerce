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
            ele.className="alert alert-info resize"
            ele.innerText="User does not exist.Please Go register"
        }
        else if(password.value===user.password && email.value===user.email){
            toggleLogin()
            navigate("/")
                if(page)
                     handleShowCheck()
            
       }else {
        const ele=document.getElementById("passwordHelp")
        ele.className="alert alert-danger resize"
        ele.innerText="Email or password is incorrect"
       }
    }
    return(
        <section className="login">
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" required />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" name="password" required /><br />
                    <div id="passwordHelp" className="form-text"></div>
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" name="check" required/>
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <Button type="submit">Login</Button>
                <p>Vous n'avez pas un compte <Span onClick={()=>{navigate("/Register")}}>Enregistrer vous</Span></p>
            </form>
        </section>
    )
}