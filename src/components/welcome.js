import { TypeAnimation } from "react-type-animation";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Button=styled.button`
padding : 8px 15px ;
background-color: rgb(6, 198, 6) ;
color:white;
font-weight:600 ;
border-radius:5px ;
border :none ;
&:hover{
    background:none ;
    border:1px solid white ;
}
`
export default function Welcome(){

    const Navigate=useNavigate()
    return(
       <section className="welcome">
            <h1>Welcome to Art Charlot</h1>
                <div>
                    <TypeAnimation
                            sequence={['We present to you the paintings',200,'We present to you the imaginations',200,'We present to you the paintings, imaginations and the works of art',300,'Discover these works and you will not be disappointed',300,'Place your order and delivery will be made the same day',300,'Click on the green button at the bottom 👇 to discover the paintings',300]}
                            wrapper="span"
                            cursor={false}
                            repeat={Infinity} />
                </div>
            <Button onClick={()=>{Navigate("/Products")}}><span className="shop">SHOP NOW</span></Button>
         </section> 
    )
}

