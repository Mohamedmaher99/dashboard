import { NavLink } from "react-router";
import { useLocation } from "react-router";
import { useState } from "react";
function SignNav() {
    const [showNav, setShowNav] = useState(false)
    const location = useLocation()
    const signupNav = location.pathname === "/signup";
    return (
        <nav className="sign-nav">
            <div className="container">
                <div className="row flex justify-center items-center ">
                    <div className={`col-md-11 col-10 flex ${showNav?" max-lg:h-[220px]":" "} overflow-hidden  justify-between items-center py-3 ${signupNav ? "signup-nav": "all-nav"} w-[100%]`}>
                        {/*soft dashboard */}
                        < div className="soft-txt ">
                            <NavLink to="/">Soft UI Dashboard 3</NavLink>
                            <button onClick={() => {
                                setShowNav(!showNav)
                            }} ><i className="fas fa-bars text-2xl d-block d-lg-none "></i></button>
                        </div>
                        {/*links*/}
                        <div className={`links flex items-center `} >
                            {/*pages links*/}
                            <div className={`pages-links flex justify-evenly mr-10  `}>
                                <NavLink className={`mx-3`} to="/">Dashboard</NavLink>
                                <NavLink className={`mx-3`} to="/profile">Profile</NavLink>
                                <NavLink className={`mx-3`} to="/signin">Sign in</NavLink>
                                <NavLink className={`mx-3`} to="/signup">Sign up</NavLink>
                            </div>
                            {/*button*/}
                            <div className="nav-buuton ml-10 flex items-center d-none d-lg-block ">
                                <button className="mx-3 builder py-1 px-3 ">Online builder</button>
                                <button className="download py-1 px-3">Free download</button>
                            </div>

                        </div>
                    </div>

                </div>
            </div>

        </nav>
    )
}
export default SignNav;