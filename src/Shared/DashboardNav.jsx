import { NavLink } from "react-router";
import { useContext } from "react";
import { AllData, apiValue } from "../Data/AllData";
function DashboardNav() {
    const {  nav,showSide,setShowSide,navFixed } = useContext(apiValue);
    return (
        <nav className="nav-bar mb-4 ">
            <div className="container">
                <div className="row">
                    <div className={`col-md-12  nav-content ${navFixed?" p-3 rounded-xl navfixed":" nav-content"} `}>
                        <div>
                            <NavLink className="page-txt" to="">
                                pages
                            </NavLink>
                            <span className="mx-2">/</span>
                            <span className="das-txt">{nav}</span>
                            <div>
                                <h6 className="das2-txt">{nav}</h6>
                            </div>

                        </div>
                        <div className="flex justify-evenly items-center">
                            <form action="">
                                <input  type="text" placeholder="type here.."></input>
                                <button className="mx-4 on-builder">online builder</button>
                                <NavLink className="sgn-in-txt" to="">sign in</NavLink>
                            </form>
                            <div className="mx-3 d-lg-none d-block">
                                <button onClick={()=>{
                                    setShowSide(!showSide)
                                }} className="menu-button "><i className="fas fa-bars text-2xl "></i></button>
                            </div>
                        </div>
                    </div>


                </div>
            </div>

        </nav>
    )
}
export default DashboardNav;