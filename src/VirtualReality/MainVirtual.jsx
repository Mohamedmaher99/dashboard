import Menu from "../Shared/Menu";
import Cloud from "./Cloud";
function MainVirtual() {
    return (
        <div className=" Main-virtual mb-4   flex justify-center    ">
            <div className="container flex justify-center py-10 ">
                <div className="row ">
                    <div className="col-lg-3 flex justify-center">
                        <Menu />
                    </div>
                    <div className="col-lg-9 flex items-center  ">
                        <Cloud />
                    </div>

                </div>
            </div>
        </div>






    )
}
export default MainVirtual;