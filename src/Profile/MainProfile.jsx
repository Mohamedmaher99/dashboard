function MainProfile() {
    return (
        <main className="main-profile container">
            <div className="row">
                <div className="col-md-12">
                    {/*profile*/}
                    <div className="profile flex justify-between items-end p-4">
                        {/*profile image*/}
                        <div className="flex items-center">
                            <img className="w-[90px] h-[90px] rounded-2xl mr-3" src="assest\img\bruce-mars.jpg" alt="" />
                            <div>
                                {/*name*/}
                                <h3>
                                    Alec Thompson
                                </h3>
                                {/*postion*/}
                                <span>CEO / Co-Founder</span>
                            </div>
                        </div>
                         {/*billing and payment*/}
                        <div className="flex justify-center items-center">
                            {/*billing button*/}
                            <button className="py-1 px-3 rounded-xl mr-2">billing</button>
                            {/*payments*/}
                            <button className="py-1 px-3 rounded-xl mr-2">paymente</button>
                        </div>

                    </div>
                </div>
            </div>

        </main>
    )
}
export default MainProfile;