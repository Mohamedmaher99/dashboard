import { useEffect, useState } from "react";
function ArticalProfile() {
    const [chang, setchang] = useState({
        toggel1: false,
        toggel2: false,
        toggel3: false,
        toggel4: false,
        toggel5: false,
        toggel6: false,

    });
    const changeBox = (e) => {
        setchang((butt) => {
            return {
               ...butt,[e]:!butt[e]
            };
        })
        
    }
    console.log(chang)
    return (
        <article className="artical-pro-section mt-4">
            <div className="container">
                <div className="row">
                    {/*Platform Settings*/}
                    <div className="col-lg-4 col-12 mb-3">
                        {/*Platform Settings content*/}
                        <div className="bg-white platform p-3">
                            {/*title*/}
                            <h3 className="mb-4" >Platform Settings</h3>

                            {/*Account*/}
                            <div className="Account">
                                {/*account text*/}
                                <h4 className="my-3">Account</h4>
                                {/*emails*/}
                                <ul type="none">

                                    <li className="relative flex items-center my-3">
                                        <label className=" ml-14 label-text" for="check1-on-off"> Email me when someone follows me
                                            <input checked={chang.toggel1}  id="check1-on-off" name="check1" onChange={() => changeBox("toggel1")} className="d-none  toggel2" type="checkbox" />
                                            <span className={`${chang.toggel1 ? "on" : "off"}`}></span>
                                        </label>
                                    </li>
                                    <li className="relative flex items-center my-3">
                                        <label className=" ml-14 label-text" for="check2-on-off"> Email me when someone answers on my post
                                            <input checked={chang.toggel2}  id="check2-on-off" name="check2" onChange={() => changeBox("toggel2")} className="d-none toggel2" type="checkbox" />
                                            <span className={`${chang.toggel2 ? "on" : "off"}`}></span>
                                        </label>
                                    </li>
                                    <li className="relative flex  items-center my-3">
                                        <label className=" ml-14 label-text" for="check3-on-off"> Email me when someone mentions me
                                            <input checked={chang.toggel3} id="check3-on-off" name="check3" onChange={() => changeBox("toggel3")} className="d-none toggel3" type="checkbox" />
                                            <span className={`${chang.toggel3 ? "on" : "off"}`}></span>
                                        </label>
                                    </li>
                                </ul>
                            </div>
                            {/*Application*/}
                            <div className="Account">
                                {/*application text*/}
                                <h4 className="my-3">Application</h4>
                                {/*emails*/}
                                <ul type="none">
                                    <li className="relative flex bg-s  items-center my-3">
                                        <label className=" ml-14 label-text" for="check4-on-off"> New launches and projects
                                            <input checked={chang.toggel4} id="check4-on-off" name="check4" onChange={() => changeBox("toggel4")} className="d-none  toggel4" type="checkbox" />
                                            <span className={`${chang.toggel4 ? "on" : "off"}`}></span>
                                        </label>
                                    </li>
                                    <li className="relative flex  items-center my-3">
                                        <label className=" ml-14 label-text" for="check5-on-off"> Monthly product updates
                                            <input checked={chang.toggel5} id="check5-on-off" name="check5" onChange={() => changeBox("toggel5")} className="d-none toggel5" type="checkbox" />
                                            <span className={`${chang.toggel5 ? "on" : "off"}`}></span>
                                        </label>
                                    </li>
                                    <li className="relative flex  items-center my-3">
                                        <label className=" ml-14 label-text" for="check6-on-off"> Subscribe to newsletter
                                            <input checked={chang.toggel6} id="check6-on-off" name="check6" onChange={() => changeBox("toggel6")} className="d-none  toggel6" type="checkbox" />
                                            <span className={`${chang.toggel6 ? "on" : "off"}`}></span>
                                        </label>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/*Profile Information*/}
                    <div className="col-lg-4 col-12 mb-3">
                        <div className="infoo bg-white p-3">
                            {/*title*/}
                            <h3 className="mb-4" >Profile Information</h3>

                            {/*description*/}
                            <div>
                                <p>Hi, I’m Alec Thompson, Decisions: If you can’t decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality).</p>
                            </div>
                            {/*personal data*/}
                            <div className="pesonal-dat my-10">
                                {/*name*/}
                                <div className="flex items-center mb-3" >
                                    <h3 className="mr-3">Full Name:</h3>
                                    <h4>Alec M. Thompson</h4>
                                </div>
                                {/*Mobile*/}
                                <div className="flex items-center mb-3" >
                                    <h3 className="mr-3">Mobile:</h3>
                                    <h4>(44) 123 1234 123</h4>
                                </div>
                                {/*Email*/}
                                <div className="flex items-center mb-3" >
                                    <h3 className="mr-3">Email:</h3>
                                    <h4>alecthompson@mail.com</h4>
                                </div>
                                {/*Location*/}
                                <div className="flex items-center mb-3" >
                                    <h3 className="mr-3">Location:</h3>
                                    <h4>usa</h4>
                                </div>
                                {/*social*/}
                                <div className="flex items-center mb-3" >
                                    <h3 className="mr-3">social:</h3>

                                </div>

                            </div>


                        </div>
                    </div>
                    {/*Conversations*/}
                    <div className="col-lg-4 col-12 mb-3">
                        <div className="infoo bg-white p-3">
                            {/*title*/}
                            <h3 className="mb-4" >Conversations</h3>

                            {/*messeages*/}
                            <div className="users">
                                <ul type="none">
                                    <li className="flex justify-between items-center mb-3">
                                        <div className="flex items-center">
                                            {/*user image*/}
                                            <img className="w-[45px] h-[45px] rounded-xl mr-3" src="assest\img\kal-visuals-square.jpg" alt="" />
                                            <div>
                                                {/*user name*/}
                                                <h4>
                                                    Sophie B.
                                                </h4>
                                                {/*user message*/}
                                                <span>
                                                    Hi! I need more information..
                                                </span>
                                            </div>
                                        </div>
                                        {/*reply buuton*/}
                                        <div>
                                            <button>reply</button>
                                        </div>
                                    </li>
                                    <li className="flex justify-between items-center mb-3">
                                        <div className="flex items-center">
                                            {/*user image*/}
                                            <img className="w-[45px] h-[45px] rounded-xl mr-3" src="assest\img\marie.jpg" alt="" />
                                            <div>
                                                {/*user name*/}
                                                <h4>
                                                    Anne Marie
                                                </h4>
                                                {/*user message*/}
                                                <span>
                                                    Awesome work, can you..
                                                </span>
                                            </div>
                                        </div>
                                        {/*reply buuton*/}
                                        <div>
                                            <button>reply</button>
                                        </div>
                                    </li>
                                    <li className="flex justify-between items-center mb-3">
                                        <div className="flex items-center">
                                            {/*user image*/}
                                            <img className="w-[45px] h-[45px] rounded-xl mr-3" src="assest\img\ivana-square.jpg" alt="" />
                                            <div>
                                                {/*user name*/}
                                                <h4>
                                                    Ivanna
                                                </h4>
                                                {/*user message*/}
                                                <span>
                                                    About files I can..
                                                </span>
                                            </div>
                                        </div>
                                        {/*reply buuton*/}
                                        <div>
                                            <button>reply</button>
                                        </div>
                                    </li>
                                    <li className="flex justify-between items-center mb-3">
                                        <div className="flex items-center">
                                            {/*user image*/}
                                            <img className="w-[45px] h-[45px] rounded-xl mr-3" src="assest\img\team-4.jpg" alt="" />
                                            <div>
                                                {/*user name*/}
                                                <h4>
                                                    Peterson
                                                </h4>
                                                {/*user message*/}
                                                <span>
                                                    Have a great afternoon..
                                                </span>
                                            </div>
                                        </div>
                                        {/*reply buuton*/}
                                        <div>
                                            <button>reply</button>
                                        </div>
                                    </li>
                                    <li className="flex justify-between items-center mb-3">
                                        <div className="flex items-center">
                                            {/*user image*/}
                                            <img className="w-[45px] h-[45px] rounded-xl mr-3" src="assest\img\team-3.jpg" alt="" />
                                            <div>
                                                {/*user name*/}
                                                <h4>
                                                    Nick Daniel

                                                </h4>
                                                {/*user message*/}
                                                <span>
                                                    Hi! I need more information..
                                                </span>
                                            </div>
                                        </div>
                                        {/*reply buuton*/}
                                        <div>
                                            <button>reply</button>
                                        </div>
                                    </li>
                                </ul>

                            </div>


                        </div>
                    </div>
                </div>
            </div>

        </article>
    )
}
export default ArticalProfile;