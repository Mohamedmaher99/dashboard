function AuthorsTable() {
    return (
        <div className="authors px-4">
            <div className="container-fluid">
                <div className="row">
                    {/*authors table*/}
                    <div className="col-12 bg-white rounded-3xl overflow-auto mb-5  ">
                        <div className="authors-table  p-3">
                            <div className="mb-3">
                                <h3>authors table</h3>
                            </div>
                            {/* table*/}
                            <table className="w-100 min-w-[800px] table-auto w-full divide-y divide-gray-400">
                                {/*head*/}
                                <thead  >
                                    <tr >
                                        <th className="py-2">
                                            Author
                                        </th>

                                        <th>
                                            Function
                                        </th>

                                        <th>
                                            Status

                                        </th>

                                        <th>
                                            Employed

                                        </th>
                                    </tr>
                                </thead>

                                {/*body*/}

                                <tbody className="table-auto w-full divide-y divide-gray-400" >

                                    {/*person 1*/}
                                    <tr  >
                                        <td className="flex py-2">
                                            {/*person img*/}
                                            <div className="mr-3">
                                                <img src="assest\img\team-2.jpg" alt="" />
                                            </div>
                                            {/*person info*/}
                                            <div className="pers-inf">
                                                <h4 >John Michael</h4>
                                                <span>john@creative-tim.com</span>
                                            </div>
                                        </td>
                                        {/*function*/}
                                        <td>
                                            <div className="functio-n">
                                                <h5>
                                                    Manager
                                                </h5>

                                                <span>
                                                    Organization
                                                </span>

                                            </div>
                                        </td>
                                        {/*stauts*/}
                                        <td>
                                            <div className=" rounded-full w-20 text-center status text-white bg-gradient-to-r from-green-500 via-green-600 to-green-500">
                                                online
                                            </div>
                                        </td>

                                        {/*date*/}
                                        <td className="date">
                                            23/04/18
                                        </td>

                                        {/*edit*/}
                                        <td className="edit">
                                            edit
                                        </td>
                                    </tr>

                                    {/*person 2*/}
                                    <tr  >
                                        <td className="flex py-2">
                                            {/*person img*/}
                                            <div className="mr-3">
                                                <img src="assest\img\team-3.jpg" alt="" />
                                            </div>
                                            {/*person info*/}
                                            <div className="pers-inf">
                                                <h4 >Alexa Liras</h4>
                                                <span>alexa@creative-tim.com</span>
                                            </div>
                                        </td>
                                        {/*function*/}
                                        <td>
                                            <div className="functio-n">
                                                <h5>
                                                    Programator
                                                </h5>

                                                <span>
                                                    Developer
                                                </span>

                                            </div>
                                        </td>
                                        {/*stauts*/}
                                        <td>
                                            <div className=" rounded-full w-20 text-center status text-white bg-gradient-to-r from-gray-600 via-gray-500 to-gray-600">
                                                offline
                                            </div>
                                        </td>

                                        {/*date*/}
                                        <td className="date">
                                            11/01/19
                                        </td>

                                        {/*edit*/}
                                        <td className="edit">
                                            edit
                                        </td>
                                    </tr>

                                    {/*person 3*/}
                                    <tr  >
                                        <td className="flex py-2">
                                            {/*person img*/}
                                            <div className="mr-3">
                                                <img src="assest\img\team-4.jpg" alt="" />
                                            </div>
                                            {/*person info*/}
                                            <div className="pers-inf">
                                                <h4 >Laurent Perrier</h4>
                                                <span>laurent@creative-tim.com</span>
                                            </div>
                                        </td>
                                        {/*function*/}
                                        <td>
                                            <div className="functio-n">
                                                <h5>
                                                    Executive
                                                </h5>

                                                <span>
                                                    Projects
                                                </span>

                                            </div>
                                        </td>
                                        {/*stauts*/}
                                        <td>
                                            <div className=" rounded-full w-20 text-center status text-white bg-gradient-to-r from-green-500 via-green-600 to-green-500">
                                                online
                                            </div>
                                        </td>

                                        {/*date*/}
                                        <td className="date">
                                            19/09/17
                                        </td>

                                        {/*edit*/}
                                        <td className="edit">
                                            edit
                                        </td>
                                    </tr>

                                    {/*person 4*/}
                                    <tr  >
                                        <td className="flex py-2">
                                            {/*person img*/}
                                            <div className="mr-3">
                                                <img src="assest\img\team-3.jpg" alt="" />
                                            </div>
                                            {/*person info*/}
                                            <div className="pers-inf">
                                                <h4 >Michael Levi</h4>
                                                <span>michael@creative-tim.com</span>
                                            </div>
                                        </td>
                                        {/*function*/}
                                        <td>
                                            <div className="functio-n">
                                                <h5>
                                                    Programator
                                                </h5>

                                                <span>
                                                    Developer
                                                </span>

                                            </div>
                                        </td>
                                        {/*stauts*/}
                                        <td>
                                            <div className=" rounded-full w-20 text-center status text-white bg-gradient-to-r from-green-500 via-green-600 to-green-500">
                                                online
                                            </div>
                                        </td>

                                        {/*date*/}
                                        <td className="date">
                                            24/12/08
                                        </td>
                                        {/*edit*/}
                                        <td className="edit">
                                            edit
                                        </td>
                                    </tr>
                                    {/*person 5*/}
                                    <tr  >
                                        <td className="flex py-2">
                                            {/*person img*/}
                                            <div className="mr-3">
                                                <img src="assest\img\team-4.jpg" alt="" />
                                            </div>
                                            {/*person info*/}
                                            <div className="pers-inf">
                                                <h4 >Richard Gran</h4>
                                                <span>richard@creative-tim.com</span>
                                            </div>
                                        </td>
                                        {/*function*/}
                                        <td>
                                            <div className="functio-n">
                                                <h5>
                                                    Manager
                                                </h5>

                                                <span>
                                                    Executive
                                                </span>

                                            </div>
                                        </td>
                                        {/*stauts*/}
                                        <td>
                                            <div className=" rounded-full w-20 text-center status text-white bg-gradient-to-r from-gray-600 via-gray-500 to-gray-600">
                                                Offline
                                            </div>
                                        </td>

                                        {/*date*/}
                                        <td className="date">
                                            04/10/21
                                        </td>

                                        {/*edit*/}
                                        <td className="edit">
                                            edit
                                        </td>
                                    </tr>
                                    {/*person 6*/}
                                    <tr  >
                                        <td className="flex py-2">
                                            {/*person img*/}
                                            <div className="mr-3">
                                                <img src="assest\img\team-2.jpg" alt="" />
                                            </div>
                                            {/*person info*/}
                                            <div className="pers-inf">
                                                <h4 >Miriam Eric</h4>
                                                <span>miriam@creative-tim.com</span>
                                            </div>
                                        </td>
                                        {/*function*/}
                                        <td>
                                            <div className="functio-n">
                                                <h5>
                                                    Programtor

                                                </h5>

                                                <span>
                                                    Developer
                                                </span>

                                            </div>
                                        </td>
                                        {/*stauts*/}
                                        <td>
                                            <div className=" rounded-full w-20 text-center status text-white bg-gradient-to-r from-gray-600 via-gray-500 to-gray-600">
                                                Offline
                                            </div>
                                        </td>

                                        {/*date*/}
                                        <td className="date">
                                            14/09/20
                                        </td>

                                        {/*edit*/}
                                        <td className="edit">
                                            edit
                                        </td>
                                    </tr>




                                </tbody>
                            </table>


                        </div>

                    </div>
                    
                    {/*project table*/}
                    <div className="col-12  bg-white rounded-3xl overflow-auto mb-5">
                        <div className="project-table p-3">
                            <div className="mb-3">
                                <h3>Projects table</h3>
                            </div>

                            {/*table*/}
                            <table className="w-100 min-w-[800px]  table-auto w-full divide-y divide-gray-700">
                                {/*header*/}
                                <thead  >
                                    <tr  >
                                        <th className=" py-2 ">
                                            Project
                                        </th>

                                        <th >
                                            Budget
                                        </th>

                                        <th >
                                            Status
                                        </th>

                                        <th >
                                            Completion
                                        </th>
                                    </tr>
                                </thead>

                                {/*body*/}
                                <tbody className="table-auto w-full divide-y divide-gray-700">
                                    {/*spotify*/}
                                    <tr  >
                                        {/*project*/}
                                        <td className="flex items-center py-2">
                                            {/*project img*/}
                                            <div className="mr-3">
                                                <img src="assest\img\small-logos\logo-spotify.svg" alt="" />
                                            </div>
                                            {/*project name*/}
                                            <div className="project-name">
                                                <h4 >Spotify</h4>
                                            </div>
                                        </td>

                                        {/*Budget*/}
                                        <td>
                                            <div className="budget">
                                                <h5>
                                                    $2,500
                                                </h5>
                                            </div>
                                        </td>

                                        {/*	Status*/}
                                        <td className="stauts">
                                            <h6>working</h6>
                                        </td>
                                        {/*Completion*/}
                                        <td >
                                            <div className="flex items-center">
                                                <div className="comp-txt mr-3" >
                                                    <span class="txt-bar opacity-90 text-blue-700 text-dark">60%</span>
                                                </div>
                                                <div className=" bg-gray-200 rounded-full w-[30%] h-1.5 dark:bg-gray-700">
                                                    <div className="bg-cyan-300  h-1.5 rounded-full w-[60%] "></div>
                                                </div>

                                            </div>
                                        </td>
                                    </tr>
                                    {/*Invision*/}
                                    <tr  >
                                        {/*project*/}
                                        <td className="flex items-center py-2">
                                            {/*project img*/}
                                            <div className="mr-3">
                                                <img src="assest\img\small-logos\logo-invision.svg" alt="" />
                                            </div>
                                            {/*project name*/}
                                            <div className="project-name">
                                                <h4 >Invision</h4>
                                            </div>
                                        </td>

                                        {/*Budget*/}
                                        <td>
                                            <div className="budget">
                                                <h5>
                                                   $5,000
                                                </h5>
                                            </div>
                                        </td>

                                        {/*	Status*/}
                                        <td className="stauts">
                                            <h6>done</h6>
                                        </td>
                                        {/*Completion*/}
                                        <td >
                                            <div className="flex items-center">
                                                <div className="comp-txt mr-3" >
                                                    <span class="txt-bar opacity-90 text-blue-700 text-dark">100%</span>
                                                </div>
                                                <div className=" bg-gray-200 rounded-full w-[30%] h-1.5 dark:bg-gray-700">
                                                    <div className="bg-green-300  h-1.5 rounded-full w-[100%] "></div>
                                                </div>

                                            </div>
                                        </td>
                                    </tr>
                                    {/*Jira*/}
                                    <tr  >
                                        {/*project*/}
                                        <td className="flex items-center py-2">
                                            {/*project img*/}
                                            <div className="mr-3">
                                                <img src="assest\img\small-logos\logo-jira.svg" alt="" />
                                            </div>
                                            {/*project name*/}
                                            <div className="project-name">
                                                <h4 >Jira</h4>
                                            </div>
                                        </td>

                                        {/*Budget*/}
                                        <td>
                                            <div className="budget">
                                                <h5>
                                                   $3,400
                                                </h5>
                                            </div>
                                        </td>

                                        {/*	Status*/}
                                        <td className="stauts">
                                            <h6>canceled</h6>
                                        </td>
                                        {/*Completion*/}
                                        <td >
                                            <div className="flex items-center">
                                                <div className="comp-txt mr-3" >
                                                    <span class="txt-bar opacity-90 text-blue-700 text-dark">30%</span>
                                                </div>
                                                <div className=" bg-gray-200 rounded-full w-[30%] h-1.5 dark:bg-gray-700">
                                                    <div className="bg-pink-400  h-1.5 rounded-full w-[30%] "></div>
                                                </div>

                                            </div>
                                        </td>
                                    </tr>
                                    {/*Slack*/}
                                    <tr  >
                                        {/*project*/}
                                        <td className="flex items-center py-2">
                                            {/*project img*/}
                                            <div className="mr-3">
                                                <img src="assest\img\small-logos\logo-slack.svg" alt="" />
                                            </div>
                                            {/*project name*/}
                                            <div className="project-name">
                                                <h4 >Slack</h4>
                                            </div>
                                        </td>

                                        {/*Budget*/}
                                        <td>
                                            <div className="budget">
                                                <h5>
                                                   $1,000
                                                </h5>
                                            </div>
                                        </td>

                                        {/*	Status*/}
                                        <td className="stauts">
                                            <h6>canceled</h6>
                                        </td>
                                        {/*Completion*/}
                                        <td >
                                            <div className="flex items-center">
                                                <div className="comp-txt mr-3" >
                                                    <span class="txt-bar opacity-90 text-blue-700 text-dark">0%</span>
                                                </div>
                                                <div className=" bg-gray-200 rounded-full w-[30%] h-1.5 dark:bg-gray-700">
                                                    <div className="bg-pink-400  h-1.5 rounded-full w-[0%] "></div>
                                                </div>

                                            </div>
                                        </td>
                                    </tr>
                                    {/*Adobe XD*/}
                                    <tr  >
                                        {/*project*/}
                                        <td className="flex items-center py-2">
                                            {/*project img*/}
                                            <div className="mr-3">
                                                <img src="assest\img\small-logos\logo-xd.svg" alt="" />
                                            </div>
                                            {/*project name*/}
                                            <div className="project-name">
                                                <h4 >Adobe XD</h4>
                                            </div>
                                        </td>

                                        {/*Budget*/}
                                        <td>
                                            <div className="budget">
                                                <h5>
                                                   $2,300
                                                </h5>
                                            </div>
                                        </td>

                                        {/*	Status*/}
                                        <td className="stauts">
                                            <h6>done</h6>
                                        </td>
                                        {/*Completion*/}
                                        <td >
                                            <div className="flex items-center">
                                                <div className="comp-txt mr-3" >
                                                    <span class="txt-bar opacity-90 text-blue-700 text-dark">100%</span>
                                                </div>
                                                <div className=" bg-gray-200 rounded-full w-[30%] h-1.5 dark:bg-gray-700">
                                                    <div className="bg-green-300  h-1.5 rounded-full w-[100%] "></div>
                                                </div>

                                            </div>
                                        </td>
                                    </tr>
                                    {/*Webdev*/}
                                    <tr  >
                                        {/*project*/}
                                        <td className="flex items-center py-2">
                                            {/*project img*/}
                                            <div className="mr-3">
                                                <img src="assest\img\small-logos\logo-webdev.svg" alt="" />
                                            </div>
                                            {/*project name*/}
                                            <div className="project-name">
                                                <h4 >ebdev</h4>
                                            </div>
                                        </td>

                                        {/*Budget*/}
                                        <td>
                                            <div className="budget">
                                                <h5>
                                                   $14,000
                                                </h5>
                                            </div>
                                        </td>

                                        {/*	Status*/}
                                        <td className="stauts">
                                            <h6>working</h6>
                                        </td>
                                        {/*Completion*/}
                                        <td >
                                            <div className="flex items-center">
                                                <div className="comp-txt mr-3" >
                                                    <span class="txt-bar opacity-90 text-blue-700 text-dark">80%</span>
                                                </div>
                                                <div className=" bg-gray-200 rounded-full w-[30%] h-1.5 dark:bg-gray-700">
                                                    <div className="bg-cyan-300  h-1.5 rounded-full w-[80%] "></div>
                                                </div>

                                            </div>
                                        </td>
                                    </tr>


                                </tbody>
                            </table>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}
export default AuthorsTable;