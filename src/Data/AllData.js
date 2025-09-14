
import { createContext,useState,useEffect } from "react";
const apiValue=createContext();
function AllData({children}){
    const[api,setApi]=useState([]);
    const [nav,setNav]=useState("dashboard");
    const [showSide,setShowSide]=useState(false);
    const [sideBarColor,setSideBarColor]=useState("");
    const [sideBarbg,setSideBarbg]=useState(false);
    const [navFixed,setNavFixed]=useState(false);

    useEffect(()=>{
       

    })
    return(
        <apiValue.Provider value={{api,nav,setNav,showSide,setShowSide,sideBarColor,setSideBarColor,sideBarbg,setSideBarbg,navFixed,setNavFixed}}>
            {children}
        </apiValue.Provider>
    )
}
export {AllData,apiValue};