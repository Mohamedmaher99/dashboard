
function MainDashboard() {
    return (

            <div className="container main-dashboard mb-10 px-10 ">
                <div className="row m-auto flex justify-evenly  ">
                    {/*rigt*/}
                    <div className="col-lg-6 ">
                        <div className="row">
                            <div className="col-md-6 mb-4 lins ">
                            {/*user active*/}
                                <div className="user-active  p-3 ">
                                    <div className="icon d-flex justify-content-center align-items-center">
                                        <i className='fa fa-stop '></i>
                                    </div>

                                    <div >
                                        <div className="d-flx-txt ">
                                            <h3>
                                                1600
                                            </h3>
                                            <h4>
                                                +55%

                                            </h4>
                                        </div>

                                        <div>
                                            <span> user active</span>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            {/*click event*/}
                            <div className="col-md-6 mb-4 ">
                                <div className="click-event  p-3 ">
                                    <div className="icon d-flex justify-content-center align-items-center">
                                        <i className='fa fa-stop '></i>
                                    </div>

                                    <div >
                                        <div className="d-flx-txt ">
                                            <h3>
                                                357
                                            </h3>
                                            <h4>
                                                +124%

                                            </h4>
                                        </div>

                                        <div>
                                            <span> click-event</span>
                                        </div>
                                    </div>

                                </div>
                            </div>
                           
                            {/*purchases*/}
                            <div className="col-md-6 mb-4 ">
                                <div className="purchases p-3">
                                    <div className="icon d-flex justify-content-center align-items-center">
                                        <i className='fas fa-stop  '></i>
                                    </div>

                                    <div >
                                        <div className="d-flx-txt ">
                                            <h3>
                                                1300
                                            </h3>
                                            <h4>
                                                +15%

                                            </h4>
                                        </div>

                                        <div>
                                            <span> purchases</span>
                                        </div>
                                    </div>


                                </div>
                            </div>
                            {/*likes*/}
                            <div className="col-md-6 mb-4 ">
                                <div className="likes p-3">
                                    <div className="icon d-flex justify-content-center align-items-center">
                                        <i className='fas fa-stop  '></i>
                                    </div>

                                    <div >
                                        <div className="d-flx-txt ">
                                            <h3>
                                                940
                                            </h3>
                                            <h4>
                                                +90%

                                            </h4>
                                        </div>

                                        <div>
                                            <span> likes</span>
                                        </div>
                                    </div>


                                </div>
                            </div>
                            

                        </div>
                    </div>

                    {/*left*/}

                    <div className="col-lg-6 ">
                        <div className="reviews p-3">
                            {/*review text*/}
                            <div>
                                <h3  >reviews </h3>
                            </div>

                            <div  >
                                {/*Positive Reviews*/}
                                <div className="mb-3" >
                                    <div className="flex justify-between mb-1">
                                        <span className="txt-bar text-blue-700 text-dark">Positive Reviews</span>
                                        <span class="txt-bar opacity-90 text-blue-700 text-dark">90%</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-700">
                                        <div className="bg-orange-500 h-1.5 rounded-full w-[90%] "></div>
                                    </div>

                                </div>
                                {/*Neutral Reviews*/}
                                <div className="mb-3">
                                    <div className="flex justify-between mb-1">
                                        <span className=" txt-bar text-blue-700 text-dark">Neutral Reviews</span>
                                        <span class="txt-bar opacity-90 text-blue-700 text-dark">17%</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-700">
                                        <div className="bg-orange-500 h-1.5 rounded-full w-[17%] "></div>
                                    </div>
                                </div>
                                {/*Negative Reviews*/}
                                <div className="mb-3">
                                    <div className="flex justify-between mb-1">
                                        <span className="txt-bar text-blue-700 text-dark">Negative Reviews</span>
                                        <span class="txt-bar opacity-90 text-blue-700 text-dark">3%</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-700">
                                        <div className="bg-orange-500 h-1.5 rounded-full w-[3%] "></div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-between items-center ">
                                <div className="w-[70%]" >
                                <p className="opacity-90">More than <b className="opacity-95">1,500,000</b> developers used Creative Tim's products and over <b className="opacity-95">700,000</b>  projects were created.</p>
                                </div>

                                <div  ><button className="btn btn-dark">view all reviews</button></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        
    )
}
export default MainDashboard;