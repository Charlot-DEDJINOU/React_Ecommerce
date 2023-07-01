import HomeProducts from "./HomeProducts"
import Welcome from "./welcome"
import Testomonies from "./Testomonies"
import Newsletter from "./Newsletter"
import ImportanceArt from "./ImportanceArt"
import Static from "./Static"
import "../styles/Loading.css"
import { useEffect, useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home(){

    useEffect(() => {
        AOS.init();
      }, [])
      
    const [load,setload]=useState(false)
    useEffect(()=>{
        setTimeout(()=>{setload(true)},2000)
    },[load])

   if(load)
        return(
            <>
                <Welcome />
                <ImportanceArt />
                <HomeProducts />
                <Testomonies />
                <Newsletter />
                <Static />
            </> 
        )
        return(
            <section className="loading">
                <div className="loadingio-spinner-spin-cqnwsirw4xu">
                    <div className="ldio-f2b35q19ty">
                            <div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div>
                    </div>
                </div>
            </section>
        )
}
