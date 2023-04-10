import React, { useEffect,useState } from "react"
import Product from "./product"
import Productdata from "./productdata"
import styled from "styled-components"
import AOS from 'aos';
import 'aos/dist/aos.css';

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
const products=Productdata().map(item=>{
    return <Product {...item} />
})

export default function Products(){

    useEffect(() => {
        AOS.init();
      }, [])

    const [print,Setprint]=useState([products,"all"])

    function search(e){
       var texte=e.target.value.toLowerCase()
       var newproducts
       if(print[1]==="all"){
            var array=Productdata().filter((item)=>{return item.name.includes(texte)===true})
            newproducts=array.map(item=>{
                return <Product {...item} />
            })
       }
       else{
            array=Productdata().filter((item)=>{return item.name.includes(texte)===true && item.categorie===print[1]})
             newproducts=array.map(item=>{
                return <Product {...item} />
            })
       }

    Setprint([newproducts,print[1]])
   }

   function refresh(categorie){
      document.getElementById(print[1]).removeAttribute("style")
      document.getElementById(categorie).style.color="black"
       if(categorie==="all"){
          const  newproducts=Productdata().map(item=>{
                return <Product {...item} />
            })
         Setprint([newproducts,"all"])
       }else{
            var array=Productdata().filter((item)=>{return item.categorie===categorie})
            const newproducts=array.map(item=>{
                return <Product {...item} />
            })
         Setprint([newproducts,categorie])
        }  
        document.getElementById("text").value=""
        document.getElementById("text").placeholder=categorie
   }


    return(
        <section className="homeproducts secour" >
                <div className="title-allproducts">
                    Search
                    <input type="text" id="text" onChange={search}/>
                </div>
                <div className="categories">
                     <Button onClick={()=>refresh("all")} id="all" style={{color:"black"}}>All products</Button>
                     <Button onClick={()=>refresh("symbolique")} id="symbolique">Art symbolique</Button>
                     <Button onClick={()=>refresh("classique")} id="classique">Art classique</Button>
                     <Button onClick={()=>refresh("romantique")} id="romantique">Art romantique</Button>
                </div>
                <div className="products">
                    {print[0]}
                </div>
       </section>
    )
}
