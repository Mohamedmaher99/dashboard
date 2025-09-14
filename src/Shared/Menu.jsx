import { Link, NavLink } from "react-router";
import { useContext, useState } from "react";
import { AllData, apiValue } from "../Data/AllData";
import { useLocation } from "react-router";

function Menu() {
    const location = useLocation();
    const isSpecial = location.pathname === "/virtual"
    const { nav, setNav,showSide,sideBarColor,sideBarbg,setSideBarbg } = useContext(apiValue)
    const changeNav = (itm) => {
        setNav(itm);
    }
    
    return (
        <div className={` ${isSpecial ? "change-menu" : "menu"} ${showSide?"d-block":"d-none"} ${sideBarbg? "bg-white rounded-xl":"bg-transparent"}  d-none d-lg-block pl-4 py-3 mt-2`}>
            <div className="overflow-auto ">
                {/*title*/}
                <Link className="flex  items-center" to="">
                    <img className="titl-img" src="assest\img\logo-ct-dark.png" alt="" />
                    <span className="ml-2 title-txt">soft ui dashboard 3</span>
                </Link>

                <hr className="my-4"></hr>

                <div>
                    {/*page links*/}
                    <ul type="none" className="menu-links mt-4">
                        {/*dashboard*/}
                        <li className={`mb-4 ${sideBarColor==="black" &&location.pathname==="/" ?"bg-black": sideBarColor==="orange"&&location.pathname==="/"?"bg-orange-500": sideBarColor==="blue"&&location.pathname==="/"?" bg-blue-400":sideBarColor==="green"&&location.pathname==="/"?"bg-green-500":sideBarColor==="pink"&&location.pathname==="/"?"bg-gradient-to-r from-pink-600 via-pink-500 to-pink-400":sideBarColor==="orange2"&&location.pathname==="/"?"bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400":""} ${location.pathname==="/" ? "bg-w-hite" : "bg-transparent"} `} >

                            < NavLink onClick={() => { changeNav('dashboard') }} to="/" className=" d-flex ">
                                <div className={` ${location.pathname==="/" ? "bg-o-range" : "link-icon"} d-flex justify-content-center align-items-center `}>
                                    <i className={`fa-solid fa-chart-line ${ location.pathname==="/" ? "text-white" : "text-black"}`}></i>
                                </div>
                                <div className="link-txt d-flex justify-content-center align-items-center">
                                    <span className="link-txt ml-3">dashboard</span>
                                </div>
                            </NavLink>
                        </li>


                         {/*table*/}
                        <li className={`mb-4 ${sideBarColor==="black" &&location.pathname==="/table" ?"bg-black": sideBarColor==="orange"&&location.pathname==="/table"?"bg-orange-500": sideBarColor==="blue"&&location.pathname==="/table"?" bg-blue-400":sideBarColor==="green"&&location.pathname==="/table"?"bg-green-500":sideBarColor==="pink"&&location.pathname==="/table"?"bg-gradient-to-r from-pink-600 via-pink-500 to-pink-400":sideBarColor==="orange2"&&location.pathname==="/table"?"bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400":""} ${location.pathname==="/table" ? "bg-w-hite" : "bg-transparent"} `} >
                            <NavLink onClick={() => { changeNav('table') }} to="/table" className=" d-flex ">
                                <div className={` ${location.pathname==="/table" ? "bg-o-range" : "link-icon"} d-flex justify-content-center align-items-center `}>
                                    <i className={`fa-solid fa-table ${ location.pathname==="/table" ? "text-white" : "text-black"}  `}></i>
                                </div>
                                <div className="link-txt d-flex justify-content-center align-items-center">
                                    <span className="link-txt ml-3">table</span>
                                </div>
                            </NavLink>
                        </li>
                        {/*billing*/}
                        <li className={`mb-4 ${sideBarColor==="black" &&location.pathname==="/billing" ?"bg-black": sideBarColor==="orange"&&location.pathname==="/billing"?"bg-orange-500": sideBarColor==="blue"&&location.pathname==="/billing"?" bg-blue-400":sideBarColor==="green"&&location.pathname==="/billing"?"bg-green-500":sideBarColor==="pink"&&location.pathname==="/billing"?"bg-gradient-to-r from-pink-600 via-pink-500 to-pink-400":sideBarColor==="orange2"&&location.pathname==="/billing"?"bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400":""} ${location.pathname==="/billing" ? "bg-w-hite" : "bg-transparent"} `} >
                            <NavLink onClick={() => { changeNav('billing') }} to="/billing" className=" d-flex ">
                                <div className={` ${location.pathname==="/billing" ? "bg-o-range" : "link-icon"} d-flex justify-content-center align-items-center `}>
                                    <i className={`fa-solid fa-file-invoice-dollar ${ location.pathname==="/billing" ? "text-white" : "text-black"}  `}></i>
                                </div>
                                <div className="link-txt d-flex justify-content-center align-items-center">
                                    <span className="link-txt ml-3">billing</span>
                                </div>
                            </NavLink>
                        </li>
                        {/*vr*/}
                        <li className={`mb-4 ${sideBarColor==="black" &&location.pathname==="/virtual" ?"bg-black": sideBarColor==="orange"&&location.pathname==="/virtual"?"bg-orange-500": sideBarColor==="blue"&&location.pathname==="/virtual"?" bg-blue-400":sideBarColor==="green"&&location.pathname==="/virtual"?"bg-green-500":sideBarColor==="pink"&&location.pathname==="/virtual"?"bg-gradient-to-r from-pink-600 via-pink-500 to-pink-400":sideBarColor==="orange2"&&location.pathname==="/virtual"?"bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400":""} ${location.pathname==="/virtual" ? "bg-w-hite" : "bg-transparent"} `} >
                            <NavLink onClick={() => { changeNav('virtual reality') }} to="/virtual" className=" d-flex ">
                                <div className={` ${location.pathname==="/virtual" ? "bg-o-range" : "link-icon"} d-flex justify-content-center align-items-center `}>
                                    <i className={`fa-solid fa-vr-cardboard ${ location.pathname==="/virtual" ? "text-white" : "text-black"} ` }></i>
                                </div>
                                <div className="link-txt d-flex justify-content-center align-items-center">
                                    <span className="link-txt ml-3">virtual reality</span>
                                </div>
                            </NavLink>
                        </li>
                    </ul>

                    {/*account page*/}
                    <div className="account-page">
                        <div className="mb-4">
                            <h3> account page </h3>
                        </div>

                        <ul type="none" className="menu-links">
                            {/*profile*/}
                            <li className={`mb-4 ${sideBarColor==="black" &&location.pathname==="/profile" ?"bg-black": sideBarColor==="orange"&&location.pathname==="/profile"?"bg-orange-500": sideBarColor==="blue"&&location.pathname==="/profile"?" bg-blue-400":sideBarColor==="green"&&location.pathname==="/profile"?"bg-green-500":sideBarColor==="pink"&&location.pathname==="/profile"?"bg-gradient-to-r from-pink-600 via-pink-500 to-pink-400":sideBarColor==="orange2"&&location.pathname==="/profile"?"bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400":""}  ${location.pathname==="/profile" ? "bg-w-hite" : "bg-transparent"} `} >
                                <NavLink onClick={() => { changeNav('profile') }} to="/profile" className=" d-flex ">
                                    <div className={` ${location.pathname==="/profile" ? "bg-o-range" : "link-icon"} d-flex justify-content-center align-items-center `}>
                                        <i className={`fa-solid fa-user ${ location.pathname==="/profile" ? "text-white" : "text-black"}  `}></i>
                                    </div>
                                    <div className="link-txt d-flex justify-content-center align-items-center">
                                        <span className="link-txt ml-3">profile</span>
                                    </div>
                                </NavLink>
                            </li>
                            {/*signin*/}
                            <li className={`mb-4 ${sideBarColor==="black" &&location.pathname==="/signin" ?"bg-black": sideBarColor==="orange"&&location.pathname==="/signin"?"bg-orange-500": sideBarColor==="blue"&&location.pathname==="/signin"?" bg-blue-400":sideBarColor==="green"&&location.pathname==="signin"?"bg-green-500":sideBarColor==="pink"&&location.pathname==="/signin"?"bg-gradient-to-r from-pink-600 via-pink-500 to-pink-400":sideBarColor==="orange2"&&location.pathname==="/signin"?"bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400":""} ${location.pathname==="/signin" ? "bg-w-hite" : "bg-transparent"} `} >
                                <NavLink to="/signin" className=" d-flex ">
                                    <div className={` ${location.pathname==="/signin" ? "bg-o-range" : "link-icon"} d-flex justify-content-center align-items-center `}>
                                        <i className={`fa-solid fa-sign-in ${ location.pathname==="/signin" ? "text-white" : "text-black"} `}></i>
                                    </div>
                                    <div className="link-txt d-flex justify-content-center align-items-center">
                                        <span className="link-txt ml-3">sign in</span>
                                    </div>
                                </NavLink>
                            </li>

                        </ul>
                    </div>

                    {/*documentation*/}
                    <div className="margin-md">
                        <div className="documentation d-flex align-items-center mb-3 ">
                            <div className="doc-icon d-flex justify-content-center align-items-center">
                                <i className='fa-solid fa-credit-card ico-n '></i>
                            </div>

                            <div className="doc-txt">
                                <h3>need help ?</h3>
                                <span>please check our docs</span>
                            </div>

                            <div className=" w-100  d-flex justify-content-center align-items-center" >
                                <NavLink to="">
                                    <button className="btn btn-light btn1">
                                        documentation
                                    </button>
                                </NavLink>

                            </div>


                        </div>

                        <div className="  d-flex justify-content-center align-items-center">
                            <button className="btn2 d-flex justify-content-center align-items-center">
                                upgrade to pro
                            </button>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}
export default Menu;