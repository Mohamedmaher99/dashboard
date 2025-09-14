function Cloud() {
    return (
        <div className="cloud-section flex flex-col  ">
            <div className="container">
                <div className="row  ">
                    <div className="col-1 mr-4 flex ">
                        {/*pesron and buttons*/}
                        <div>
                            {/*person*/}
                            <div className="relative group">
                                <img className="w-[40px] h-[40px] rounded-xl border-white hover:z-10 transition-all" src="assest\img\team-1.jpg">
                                </img>

                                <div className="absolute bottom-full mb-1 hidden group-hover:block bg-gray-800 text-white text-xs rounded px-2 py-1 whitespace-nowrap z-20">
                                    yaren
                                </div>
                            </div>

                            {/*buutons*/}
                            <div className="flex justify-center flex-col items-center">
                                <div className="flex">
                                    {/*home*/}
                                    <div className="relative group mr-2 mt-2">
                                        <button className="w-[30px] h-[30px] rounded-xl bg-white hover:z-10 transition-all">
                                        </button>

                                        <div className="absolute bottom-full mb-1 hidden group-hover:block bg-gray-800 text-white text-xs rounded px-2 py-1 whitespace-nowrap z-20">
                                            Home
                                        </div>
                                    </div>

                                    {/*search*/}
                                    <div className="relative group">
                                        <button className="w-[30px] h-[30px] rounded-xl bg-white hover:z-10 transition-all">
                                        </button>
                                        <div className="absolute bottom-full mb-1 hidden group-hover:block bg-gray-800 text-white text-xs rounded px-2 py-1 whitespace-nowrap z-20">
                                            Search
                                        </div>
                                    </div>

                                </div>
                                {/*minmize*/}
                                <div className="relative group">

                                    <button className="w-[30px] h-[30px] rounded-xl bg-white hover:z-10 transition-all">
                                    </button>

                                    <div className="absolute bottom-full mb-1 hidden group-hover:block bg-gray-800 text-white text-xs rounded px-2 py-1 whitespace-nowrap z-20">
                                        Minmize
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" flex col-md-10 col-xs-12 items-center">
                        {/*temprutre and tabels*/}
                        <div className="tem-wid row">
                            {/*temprutre*/}
                            <div className="temprutre col-lg-12 mb-3">
                                <h2 className="temp">
                                    28°C
                                </h2>
                                <span>Cloudy</span>
                            </div>
                            {/*works*/}
                            <div className=" col-md-4 works">
                                <div className=" bg-white p-3 rounded-xl">
                                    {/*Synk up*/}
                                    <div className="flex">
                                        {/*time*/}
                                        <div className="time mr-2">
                                            <h4>08:00</h4>
                                        </div>
                                        {/*work*/}
                                        <div>
                                            <h3 className="name">Synk up with Mark</h3>
                                            <span className="work"> Hangouts</span>
                                        </div>
                                    </div>
                                    <hr className="my-2"></hr>
                                    {/*gym*/}
                                    <div className="flex">
                                        {/*time*/}
                                        <div className="time mr-2">
                                            <h4>09:30</h4>
                                        </div>
                                        {/*work*/}
                                        <div>
                                            <h3 className="name">Gym</h3>
                                            <span className="work"> World Class</span>
                                        </div>
                                    </div>
                                    <hr className="my-2"></hr>
                                    {/*Design Review*/}
                                    <div className="flex">
                                        {/*time*/}
                                        <div className="time mr-2">
                                            <h4>11:00</h4>
                                        </div>
                                        {/*work*/}
                                        <div>
                                            <h3 className="name">Design Review</h3>
                                            <span className="work"> Zoom</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*to do*/}
                            <div className=" col-md-4 todo ">
                                <div className="bg-black flex flex-col justify-evenly rounded-xl p-3">
                                    {/*todo text*/}
                                    <div className="flex justify-between items-center">
                                        <h3 className="to-do-txt">to do</h3>
                                        <div className="items text-center">
                                            <h2>7</h2>
                                            <span>items</span>
                                        </div>

                                    </div>
                                    {/*Shopping Meeting*/}
                                    <div className="shop-mett mb-4 mt-4">
                                        <h4>Shopping Meeting</h4>
                                    </div>

                                </div>
                                {/*emails*/}
                                <div className="bg-white rounded-xl p-2 mt-3 flex justify-between items-center">
                                    <div className="emails">
                                        <h4>Emails (21)</h4>
                                    </div>
                                    <div className="check">
                                        <div className="relative group">
                                            <button className="rounded-xl border-white hover:z-10 transition-all" >
                                                check
                                            </button>

                                            <div className="absolute bottom-full mb-1 hidden group-hover:block bg-gray-800 text-white text-xs rounded px-2 py-1 whitespace-nowrap z-20">
                                                Check Your Emails
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>

                            {/*some kind*/}
                            <div className=" col-md-4 kind ">
                                <div className="some-kind flex flex-col justify-evenly rounded-xl p-3">
                                    {/*some og kind text */}
                                    <div>
                                        <h3 >Some Kind Of Blues</h3>
                                        <span>Deftones</span>
                                    </div>
                                    {/*buttons*/}
                                    <div className=" flex mb-4 mt-4">
                                        {/*prev*/}
                                        <div className="relative group mr-2">
                                            <button className="w-[30px] h-[30px]  border-white hover:z-10 transition-all" >
                                            </button>
                                            <div className="absolute bottom-full mb-1 hidden group-hover:block bg-gray-800 text-white text-xs rounded px-2 py-1 whitespace-nowrap z-20">
                                                prev
                                            </div>
                                        </div>
                                        {/*pause*/}
                                        <div className="relative group mr-2">
                                            <button className="w-[30px] h-[30px]  border-white hover:z-10 transition-all" >
                                            </button>
                                            <div className="absolute bottom-full mb-1 hidden group-hover:block bg-gray-800 text-white text-xs rounded px-2 py-1 whitespace-nowrap z-20">
                                                pause
                                            </div>
                                        </div>
                                        {/*next*/}
                                        <div className="relative group">
                                            <button className="w-[30px] h-[30px]  border-white hover:z-10 transition-all" >
                                            </button>
                                            <div className="absolute bottom-full mb-1 hidden group-hover:block bg-gray-800 text-white text-xs rounded px-2 py-1 whitespace-nowrap z-20">
                                                next
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/*messagges*/}
                                <div className="bg-white rounded-xl p-2 mt-3 flex justify-evenly items-center">
                                    <div className="messagges">
                                        <h4>messagges</h4>
                                    </div>
                                    {/*persons*/}
                                    <div className="persons">
                                        <div className="flex -space-x-3 ">
                                            {/*person1*/}
                                            <div className="relative group">
                                                <img className="w-7 h-7 rounded-full border-2 border-white hover:z-10 transition-all" src="assest\img\team-1.jpg">
                                                </img>

                                                <div className="absolute bottom-full mb-1 hidden group-hover:block bg-gray-800 text-white text-xs rounded px-2 py-1 whitespace-nowrap z-20">
                                                    13 new messages
                                                </div>

                                            </div>
                                            {/*person2*/}
                                            <div className="relative group">
                                                <img className="w-7 h-7 rounded-full border-2 border-white hover:z-10 transition-all" src="assest\img\team-2.jpg">
                                                </img>

                                                <div className="absolute bottom-full mb-1 hidden group-hover:block bg-gray-800 text-white text-xs rounded px-2 py-1 whitespace-nowrap z-20">
                                                    1 new messages
                                                </div>

                                            </div>
                                            {/*person3*/}
                                            <div className="relative group">
                                                <img className="w-7 h-7 rounded-full border-2 border-white hover:z-10 transition-all" src="assest\img\team-3.jpg">
                                                </img>

                                                <div className="absolute bottom-full mb-1 hidden group-hover:block bg-gray-800 text-white text-xs rounded px-2 py-1 whitespace-nowrap z-20">
                                                    15 new messages
                                                </div>

                                            </div>
                                            {/*person4*/}
                                            <div className="relative group">
                                                <img className="w-7 h-7 rounded-full border-2 border-white hover:z-10 transition-all" src="assest\img\team-4.jpg">
                                                </img>

                                                <div className="absolute bottom-full mb-1 hidden group-hover:block bg-gray-800 text-white text-xs rounded px-2 py-1 whitespace-nowrap z-20">
                                                    10 new messages
                                                </div>

                                            </div>
                                        </div>

                                    </div>

                                </div>

                            </div>



                        </div>

                    </div>

                </div>
            </div>
        </div>

    )
}
export default Cloud;
