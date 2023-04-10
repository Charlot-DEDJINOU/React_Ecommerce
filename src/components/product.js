import React, { useState} from "react"
import {useCart} from "react-use-cart"
import styled from "styled-components"
import Badge from "react-bootstrap/esm/Badge"

const I=styled.i`
     text-decoration: none;
     color:#ffc107 ;
     &:hover{
        color:rgb(6, 198, 6) ;
        cursor:pointer ;
     }
`
const Button=styled.button`
padding : 5px 8px ;
height:35px ;
background-color: rgb(6, 198, 6) ;
color:white;
font-weight:600 ;
border :none ;
border-radius:5px ;
&:hover{
    opacity : 0.8 ;
}
`

export default function Product(props){

     function Page(n){
      var ele=document.getElementById(n)
      ele.style.transform="rotate3d(0, 1, 0, 360deg)" ;
      setTimeout(()=>setpage(!page),800)
      setTimeout(()=>{ele.removeAttribute("style")},1000)
    }

     const {addItem,getItem} = useCart()

     const [page,setpage]=useState(true)

    return( 
            <div className="product" id={props.id} onMouseLeave={()=>!page ? Page(props.id) : null} data-aos={!(props.id>4 && props.id<9) ? "fade-down" : ""} data-aos-duration="1500" data-aos-easinf="linear">
                {
                    page ?
                    <React.StrictMode>
                        <img src={props.img} alt=""/>
                        <span><b>Name</b> : {props.name[0].toUpperCase()+props.name.slice(1)}</span>
                        <div className="infoaction">
                            <sapn><b>Price </b>: {props.price+" $"}</sapn>
                            <Badge bg="warning">{getItem(props.id)===undefined ? 0 : getItem(props.id).quantity}</Badge>
                        </div>
                        <div className="infoClick">
                            <Button onClick={()=>{
                            addItem(props)
                            }} style={{backgroundColor:"rgb(6, 198, 6)",color:"white"}}>ADD </Button>
                            <div>
                                <span>{props.detail}</span>
                                <I><i onClick={()=>Page(props.id)}>view more ...</i></I>
                            </div>
                        </div>      
                    </React.StrictMode> :
                    <React.StrictMode>
                            <h5>Details</h5>
                            <p className="detail">{props.detail}</p>
                            <I style={{fontSize:"18px"}} onClick={()=>Page(props.id)} className="retour"><i>Return</i></I>
                    </React.StrictMode>
                }
            </div>
    )
}