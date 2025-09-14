import { AllData ,apiValue } from "../Data/AllData";
import { useState,useContext,useEffect } from "react";
function ControlContent() {
    const [viewControl,setViewControl]=useState(false)
    const {setSideBarColor,setSideBarbg,navFixed,setNavFixed}=useContext(apiValue)
    const changColor=(butt)=>{
        setSideBarColor(butt);
    }

    useEffect(()=>{
        const body=document.querySelector("body");
        const hideMenu=(e)=>{
            if(e.target.closest(".control-content")){
                return setViewControl(true);
            }
            else{
                return setViewControl(false);
            }

        }
        body.addEventListener("click",hideMenu);
        return()=>{
            body.removeEventListener("click",hideMenu)
        }

    },[])
    
    
    return (
        <div className="control-content">
            {/*control button*/}
            <div onClick={(e)=>{
                e.stopPropagation();
                setViewControl(true)
            }} className="control-button">
                <button >
                </button>
            </div>

            {/*menu content*/}
            <div className={`control-content animate-animated animate-backinRight py-5 px-4 ${viewControl? "d-block":"d-none"}`}>
                <div>
                    {/*title*/}
                    <div className="control-title ">
                        <h2>Soft UI Configurator</h2>
                        <h4>See our dashboard options.</h4>
                    </div>

                    <hr className="my-4"></hr>

                    {/*sidebar color*/}
                    <div className="side-color">
                        <h4 className="mb-2">side bar color</h4>
                        {/*color button*/}
                        <div className="color-button">
                            {/*black*/}
                            <button onClick={()=>changColor("black")} className="w-[25px] h-[25px] bg-black rounded-full mr-2">
                            </button>
                            {/*orange*/}
                            <button onClick={()=>changColor("orange")} className="w-[25px] h-[25px] bg-orange-500 rounded-full mr-2">
                            </button>
                            {/*blue*/}
                            <button onClick={()=>changColor("blue")} className="w-[25px] h-[25px] bg-blue-400 rounded-full mr-2">
                            </button>
                            {/*green*/}
                            <button onClick={()=>changColor("green")} className="w-[25px] h-[25px] bg-green-500 rounded-full mr-2">
                            </button>
                            {/*orange gradiante*/}
                            <button onClick={()=>changColor("orange2")} className="w-[25px] h-[25px] bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400 rounded-full mr-2">
                            </button>
                            {/*pink*/}
                            <button onClick={()=>changColor("pink")} className="w-[25px] h-[25px]  bg-gradient-to-r from-pink-600 via-pink-500 to-pink-400 rounded-full mr-2">
                            </button>
                        </div>
                    </div>

                    {/*sidenav type*/}
                    <div className="side-nav my-3">
                        <div className="mb-2">
                            <h4>
                                Sidenav Type
                            </h4>
                            <span>
                                Choose between 2 different sidenav types.
                            </span>
                        </div>

                        {/*button*/}
                        <div>
                            {/*transparent*/}
                            <button onClick={()=>{
                                setSideBarbg(false)
                            }} className="bg-orange-600 w-[110px] px-3 py-2 rounded-lg mr-3">transparent</button>
                            {/*white*/}
                            <button onClick={()=>{
                                setSideBarbg(true)
                            }} className="bg-orange-600 px-3 w-[110px] py-2 rounded-lg">white</button>
                        </div>

                    </div>

                    {/*navbar fixed*/}
                    <div>
                        <h4 className="navbar-fixed-txt">Navbar Fixed</h4>
                    </div>
                    <div className="nav-fixed my-3 flex relative ">
                        <label className="flex items-center  " htmlFor="nav-fixed">
                            <input onClick={()=>{
                                setNavFixed(!navFixed);
                            }} className="d-none  " id="nav-fixed" type="checkbox" name="navfixed" />
                            <span className={`${navFixed?"on":"off"}`}></span>
                        </label>
                    </div>

                    <hr className="my-4"></hr>

                    {/*free download*/}
                    <div className="freedownload">
                        <button className="bg-black text-white w-full h-[40px] rounded-xl">Free Download</button>
                    </div>
                    {/*view doucumentation*/}
                    <div className="freedownload">
                        <button className="bg-transparent text-black border mt-3 w-full h-[40px] rounded-xl">View Doucumentation</button>
                    </div>

                    {/*star */}
                    <div className="star mt-3 ">
                        <button className="flex justify-center w-full">
                            Star
                        </button>
                    </div>

                    {/*thank you*/}
                    <div className="thank-you mt-3 flex flex-col items-center justify-center">
                        <h4>
                            Thank you for sharing!
                        </h4>
                        {/*tweet & share*/}
                        <div className="mt-2">
                            <button className="bg-black rounded-xl mr-2 text-white h-[30px] w-[80px]">Tweet</button>
                            <button className="bg-black rounded-xl text-white h-[30px] w-[80px]">Share</button>
                        </div>
                    </div>





                </div>
            </div>
        </div>
    )
}
export default ControlContent;