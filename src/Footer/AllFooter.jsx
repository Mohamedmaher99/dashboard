import { NavLink } from "react-router";
function AllFooter(){
    return(
        <footer className="mb-3 all-footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-10 m-auto flex justify-evenly items-center">
                        <NavLink to="">Company </NavLink>
                        <NavLink to="">About Us </NavLink>
                        <NavLink to="">Team </NavLink>
                        <NavLink to="">Products </NavLink>
                        <NavLink to="">Blog </NavLink>
                    </div>
                </div>
            </div>

        </footer>

    )
}
export default AllFooter;