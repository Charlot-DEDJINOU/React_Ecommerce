import { createContext } from "react";
import { useState } from "react";
const user=JSON.parse(localStorage.getItem('user'))

export const UserContext=createContext()
export const UserProvider=({children})=>{
    const [isLogin,setLogin]=useState(user!=null)
    const toggleLogin=()=>{
        setLogin(!isLogin)
    }
 
    const [showCheck,SetShowingCheck]=useState(false)
    const handleCloseCheck = () => SetShowingCheck(false);
    const handleShowCheck = () => SetShowingCheck(true);

    const [page,setpage]=useState(false)
    const togglepage=(etat)=>setpage(etat) ;

    const [isbuy,setisbuy]=useState(false) ;
    const togglebuy=(etat)=>setisbuy(etat) ;


    return (
        <UserContext.Provider value={{ isLogin, toggleLogin,showCheck,handleCloseCheck,handleShowCheck,togglepage,page,togglebuy,isbuy}}>
            {children}
        </UserContext.Provider>
    )
}
