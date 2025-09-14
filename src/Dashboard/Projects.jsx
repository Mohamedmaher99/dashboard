
function Projects() {

    return (
            <div className="container projects mb-10">
                <div className="row flex m-auto justify-evenly  ">
                   
                        {/*project*/}
                        <div className="col-lg-7 col-12 col-md-6 overflow-auto   mb-6 project flex justify-evenly py-15 px-9 w-100 flex-col">
                            <div>
                                {/*projects text*/}
                                <h3>projects</h3>
                                <span className="opacity-80"><b className="opacity-90">30 done</b> this month</span>
                            </div>

                            {/*table*/}
                            <div className="ta-ble">
                                <table className="w-100  table-auto max-lg:min-w-[800px] w-full divide-y divide-gray-600">
                                    {/*header*/}
                                    <thead  >
                                        <tr >
                                            <th className="opacity-70 th-txt py-3 ">
                                                Companies
                                            </th>

                                            <th className="opacity-70 th-txt">
                                                Members
                                            </th>

                                            <th className="opacity-70 th-txt d-fle-x">
                                                Budget
                                            </th>

                                            <th className="opacity-70 th-txt d-fle-x">
                                                Completion
                                            </th>
                                        </tr>
                                    </thead>

                                    {/*body*/}
                                    <tbody className="table-auto w-full divide-y divide-gray-600">
                                        <tr >
                                            {/*title*/}
                                            <td className="py-2" >
                                                <div className="tit-le flex items-center">
                                                    <img className="mr-3" src="assest\img\small-logos\logo-xd.svg" alt="" />
                                                    <h4>Soft UI XD Version</h4>
                                                </div>
                                            </td>
                                            {/*member*/}
                                            <td>
                                                <div className="flex -space-x-3 ">
                                                    {/*person1*/}
                                                    <div className="relative group">
                                                        <img className="w-7 h-7 rounded-full border-2 border-white hover:z-10 transition-all" src="assest\img\team-1.jpg">
                                                        </img>

                                                        <div className="absolute bottom-full mb-1 hidden group-hover:block bg-gray-800 text-white text-xs rounded px-2 py-1 whitespace-nowrap z-20">
                                                            yaren
                                                        </div>

                                                    </div>
                                                    {/*person2*/}
                                                    <div className="relative group">
                                                        <img className="w-7 h-7 rounded-full border-2 border-white hover:z-10 transition-all" src="assest\img\team-2.jpg">
                                                        </img>

                                                        <div className="absolute bottom-full mb-1 hidden group-hover:block bg-gray-800 text-white text-xs rounded px-2 py-1 whitespace-nowrap z-20">
                                                            hadid
                                                        </div>

                                                    </div>
                                                    {/*person3*/}
                                                    <div className="relative group">
                                                        <img className="w-7 h-7 rounded-full border-2 border-white hover:z-10 transition-all" src="assest\img\team-3.jpg">
                                                        </img>

                                                        <div className="absolute bottom-full mb-1 hidden group-hover:block bg-gray-800 text-white text-xs rounded px-2 py-1 whitespace-nowrap z-20">
                                                            smith
                                                        </div>

                                                    </div>
                                                    {/*person4*/}
                                                    <div className="relative group">
                                                        <img className="w-7 h-7 rounded-full border-2 border-white hover:z-10 transition-all" src="assest\img\team-4.jpg">
                                                        </img>

                                                        <div className="absolute bottom-full mb-1 hidden group-hover:block bg-gray-800 text-white text-xs rounded px-2 py-1 whitespace-nowrap z-20">
                                                            doy
                                                        </div>

                                                    </div>
                                                </div>
                                            </td>

                                            <td className="d-fle-x">
                                                <h5>$14,000</h5>
                                            </td>
                                            {/*progress*/}
                                            <td className="d-fle-x">
                                                <div className="flex justify-between ">
                                                    <span class="txt-bar opacity-90 text-blue-700 text-dark">60%</span>
                                                </div>
                                                <div className="w-full bg-gray-200 rounded-full h-1 dark:bg-gray-700">
                                                    <div className="bg-cyan-400 h-1 rounded-full w-[60%] "></div>
                                                </div>
                                            </td>
                                        </tr>

                                        <tr >
                                            {/*title*/}
                                            <td className="py-2" >

                                                <div className="tit-le flex items-center">
                                                    <img className="mr-3" src="assest\img\small-logos\logo-atlassian.svg" alt="" />
                                                    <h4>Add Progress Track</h4>
                                                </div>
                                            </td>

                                            {/*member*/}
                                            <td>
                                                <div className="flex -space-x-3">
                                                    {/*person1*/}
                                                    <div className="relative group">
                                                        <img className="w-7 h-7 rounded-full border-2 border-white hover:z-10 transition-all" src="assest\img\team-1.jpg">
                                                        </img>

                                                        <div className="absolute bottom-full mb-1 hidden group-hover:block bg-gray-800 text-white text-xs rounded px-2 py-1 whitespace-nowrap z-20">
                                                            yaren
                                                        </div>

                                                    </div>
                                                    {/*person2*/}
                                                    <div className="relative group">
                                                        <img className="w-7 h-7 rounded-full border-2 border-white hover:z-10 transition-all" src="assest\img\team-2.jpg">
                                                        </img>

                                                        <div className="absolute bottom-full mb-1 hidden group-hover:block bg-gray-800 text-white text-xs rounded px-2 py-1 whitespace-nowrap z-20">
                                                            hadid
                                                        </div>

                                                    </div>
                                                </div>
                                            </td>

                                            <td className="d-fle-x">
                                                <h5>$3,000</h5>
                                            </td>

                                            {/*progress*/}
                                            <td className="d-fle-x">
                                                <div className="flex justify-between  ">
                                                    <span class="txt-bar opacity-90 text-blue-700 text-dark">10%</span>
                                                </div>
                                                <div className="w-full bg-gray-200 rounded-full h-1 dark:bg-gray-700">
                                                    <div className="bg-cyan-400 h-1 rounded-full w-[10%] "></div>
                                                </div>
                                            </td>
                                        </tr>

                                        <tr >
                                            {/*title*/}
                                            <td className="py-2"  >

                                                <div className="tit-le flex items-center">
                                                    <img className="mr-3" src="assest\img\small-logos\logo-slack.svg" alt="" />
                                                    <h4>Fix Platform Errors</h4>
                                                </div>
                                            </td>
                                            {/*member*/}
                                            <td>
                                                <div className="flex -space-x-3">

                                                    {/*person3*/}
                                                    <div className="relative group">
                                                        <img className="w-7 h-7 rounded-full border-2 border-white hover:z-10 transition-all" src="assest\img\team-3.jpg">
                                                        </img>

                                                        <div className="absolute bottom-full mb-1 hidden group-hover:block bg-gray-800 text-white text-xs rounded px-2 py-1 whitespace-nowrap z-20">
                                                            smith
                                                        </div>

                                                    </div>
                                                    {/*person4*/}
                                                    <div className="relative group">
                                                        <img className="w-7 h-7 rounded-full border-2 border-white hover:z-10 transition-all" src="assest\img\team-4.jpg">
                                                        </img>

                                                        <div className="absolute bottom-full mb-1 hidden group-hover:block bg-gray-800 text-white text-xs rounded px-2 py-1 whitespace-nowrap z-20">
                                                            doy
                                                        </div>

                                                    </div>
                                                </div>
                                            </td>

                                            <td className="d-fle-x">
                                                <h5>no set</h5>
                                            </td>
                                            {/*progress*/}
                                            <td className="d-fle-x">
                                                <div className="flex justify-between  ">
                                                    <span class="txt-bar opacity-90 text-blue-700 text-dark">100%</span>
                                                </div>
                                                <div className="w-full bg-gray-200 rounded-full h-1 dark:bg-gray-700">
                                                    <div className="bg-emerald-500 h-1 rounded-full w-[100%] "></div>
                                                </div>
                                            </td>
                                        </tr>

                                        <tr >
                                            {/*title*/}
                                            <td className="py-2">

                                                <div className="tit-le flex items-center">
                                                    <img className="mr-3" src="assest\img\small-logos\logo-jira.svg" alt="" />
                                                    <h4>Add the New Pricing Page</h4>
                                                </div>
                                            </td>

                                            {/*member*/}
                                            <td>
                                                <div className="flex -space-x-3">
                                                    {/*person4*/}
                                                    <div className="relative group">
                                                        <img className="w-7 h-7 rounded-full border-2 border-white hover:z-10 transition-all" src="assest\img\team-4.jpg">
                                                        </img>

                                                        <div className="absolute bottom-full mb-1 hidden group-hover:block bg-gray-800 text-white text-xs rounded px-2 py-1 whitespace-nowrap z-20">
                                                            doy
                                                        </div>

                                                    </div>
                                                </div>
                                            </td>

                                            <td className="d-fle-x">
                                                <h5>$500</h5>
                                            </td>

                                            {/*progress*/}
                                            <td className="d-fle-x">
                                                <div className="flex justify-between  ">
                                                    <span class="txt-bar opacity-90 text-blue-700 text-dark">25%</span>
                                                </div>
                                                <div className="w-full bg-gray-200 rounded-full h-1 dark:bg-gray-700">
                                                    <div className="bg-cyan-400 h-1 rounded-full w-[25%] "></div>
                                                </div>
                                            </td>
                                        </tr>

                                        <tr >
                                            {/*title*/}
                                            <td className="py-2">

                                                <div className="tit-le flex items-center">
                                                    <img className="mr-3" src="assest\img\small-logos\logo-spotify.svg" alt="" />
                                                    <h4>Launch our Mobile App</h4>
                                                </div>
                                            </td>

                                            {/*member*/}
                                            <td>
                                                <div className="flex -space-x-3">
                                                    {/*person1*/}
                                                    <div className="relative group">
                                                        <img className="w-7 h-7 rounded-full border-2 border-white hover:z-10 transition-all" src="assest\img\team-1.jpg">
                                                        </img>

                                                        <div className="absolute bottom-full mb-1 hidden group-hover:block bg-gray-800 text-white text-xs rounded px-2 py-1 whitespace-nowrap z-20">
                                                            yaren
                                                        </div>

                                                    </div>
                                                    {/*person2*/}
                                                    <div className="relative group">
                                                        <img className="w-7 h-7 rounded-full border-2 border-white hover:z-10 transition-all" src="assest\img\team-2.jpg">
                                                        </img>

                                                        <div className="absolute bottom-full mb-1 hidden group-hover:block bg-gray-800 text-white text-xs rounded px-2 py-1 whitespace-nowrap z-20">
                                                            hadid
                                                        </div>

                                                    </div>
                                                    {/*person3*/}
                                                    <div className="relative group">
                                                        <img className="w-7 h-7 rounded-full border-2 border-white hover:z-10 transition-all" src="assest\img\team-3.jpg">
                                                        </img>

                                                        <div className="absolute bottom-full mb-1 hidden group-hover:block bg-gray-800 text-white text-xs rounded px-2 py-1 whitespace-nowrap z-20">
                                                            smith
                                                        </div>

                                                    </div>
                                                    {/*person4*/}
                                                    <div className="relative group">
                                                        <img className="w-7 h-7 rounded-full border-2 border-white hover:z-10 transition-all" src="assest\img\team-4.jpg">
                                                        </img>

                                                        <div className="absolute bottom-full mb-1 hidden group-hover:block bg-gray-800 text-white text-xs rounded px-2 py-1 whitespace-nowrap z-20">
                                                            doy
                                                        </div>

                                                    </div>
                                                </div>
                                            </td>

                                            <td className="d-fle-x">
                                                <h5>$20,500</h5>
                                            </td>

                                            {/*progress*/}
                                            <td className="d-fle-x">
                                                <div className="flex justify-between  ">
                                                    <span class="txt-bar opacity-90 text-blue-700 text-dark">100%</span>
                                                </div>
                                                <div className="w-full bg-gray-200 rounded-full h-1 dark:bg-gray-700">
                                                    <div className="bg-emerald-500 h-1 rounded-full w-[100%] "></div>
                                                </div>
                                            </td>
                                        </tr>

                                        <tr >
                                            {/*title*/}
                                            <td className="py-2">

                                                <div className="tit-le flex items-center">
                                                    <img className="mr-3" src="assest\img\small-logos\logo-invision.svg" alt="" />
                                                    <h4>Redesign New Online Shop</h4>
                                                </div>
                                            </td>

                                            {/*member*/}
                                            <td>
                                                <div className="flex -space-x-3">
                                                    {/*person1*/}
                                                    <div className="relative group">
                                                        <img className="w-7 h-7 rounded-full border-2 border-white hover:z-10 transition-all" src="assest\img\team-1.jpg">
                                                        </img>

                                                        <div className="absolute bottom-full mb-1 hidden group-hover:block bg-gray-800 text-white text-xs rounded px-2 py-1 whitespace-nowrap z-20">
                                                            yaren
                                                        </div>

                                                    </div>

                                                    {/*person4*/}
                                                    <div className="relative group">
                                                        <img className="w-7 h-7 rounded-full border-2 border-white hover:z-10 transition-all" src="assest\img\team-4.jpg">
                                                        </img>

                                                        <div className="absolute bottom-full mb-1 hidden group-hover:block bg-gray-800 text-white text-xs rounded px-2 py-1 whitespace-nowrap z-20">
                                                            doy
                                                        </div>

                                                    </div>
                                                </div>
                                            </td>

                                            <td className="d-fle-x">
                                                <h5>$2000</h5>
                                            </td>

                                            {/*progress*/}
                                            <td className="d-fle-x">
                                                <div className="flex justify-between ">
                                                    <span class="txt-bar opacity-90 text-blue-700 text-dark">40%</span>
                                                </div>
                                                <div className="w-full bg-gray-200 rounded-full h-1 dark:bg-gray-700">
                                                    <div className="bg-cyan-400 h-1 rounded-full w-[40%] "></div>
                                                </div>
                                            </td>

                                        </tr>
                                    </tbody>
                                </table>

                            </div>

                        </div>

                        {/*list*/}
                        <div className="col-lg-4 col-md-5 col-12  orde-r py-15 px-9  flex justify-evenly flex-col ">
                            {/*over view text*/}
                            <div>
                                <h3>Orders overview</h3>
                                <span className="opacity-80"><b className="opacity-90">24%</b> this month</span>
                            </div>

                            {/*item list*/}
                            <div className="lis-t">
                                <ul type="none">
                                    
                                    <li className="py-3" >
                                        <h5 className="mb-2">$2400, Design changes</h5>
                                        <h6 className="opacity-70">22 DEC 7:20 PM</h6>
                                    </li>

                                    <hr className="w-full divide-y divide-gray-600"></hr>
                                    <li className="py-3">
                                        <h5 className="mb-2">New order #1832412</h5>
                                        <h6 className="opacity-70">21 DEC 11 PM</h6>
                                    </li>

                                    <hr className="w-full divide-y divide-gray-600"></hr>
                                    <li className="py-3">
                                        <h5 className="mb-2">Server payments for April</h5>
                                        <h6 className="opacity-70">21 DEC 9:34 PM</h6>
                                    </li>

                                    <hr className="w-full divide-y divide-gray-600"></hr>
                                    <li className="py-3">
                                        <h5 className="mb-2">New card added for order #4395133</h5>
                                        <h6 className="opacity-70">20 DEC 2:20 AM</h6>
                                    </li>

                                    <hr className="w-full divide-y divide-gray-600"></hr>
                                    <li className="py-3">
                                        <h5 className="mb-2">Unlock packages for development</h5>
                                        <h6 className="opacity-70">18 DEC 4:54 AM</h6>
                                    </li>

                                    <hr className="w-full divide-y divide-gray-600"></hr>
                                    <li className="py-3">
                                        <h5 className="mb-2">New order #9583120</h5>
                                        <h6 className="opacity-70">17 DEC</h6>
                                    </li>

                                </ul>

                            </div>
                        </div>
                </div>
            </div>
        
    )
}
export default Projects;