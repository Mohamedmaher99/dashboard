import { Card, CardContent, Typography } from "@mui/material";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer, LineChart, Line, area, Area } from "recharts";
function Chart() {
    const data = [
        {
            name: "apr", sales: 450
        },
        {
            name: "may", sales: 200
        },
        {
            name: "jan", sales: 100
        },
        {
            name: "jul", sales: 220
        },
        {
            name: "aug", sales: 500
        },
        {
            name: "sep", sales: 100
        },
        {
            name: "oct", sales: 400
        },
        {
            name: "nov", sales: 230
        },
        {
            name: "dec", sales: 500
        },

    ]
    const dataLine = [
        { name: "apr", mobile_app: 50, web_site: 30 },
        { name: "may", mobile_app: 40, web_site: 90 },
        { name: "jun", mobile_app: 300, web_site: 40 },
        { name: "jul", mobile_app: 120, web_site: 140 },
        { name: "aug", mobile_app: 500, web_site: 290 },
        { name: "sep", mobile_app: 250, web_site: 290 },
        { name: "oct", mobile_app: 440, web_site: 340 },
        { name: "nov", mobile_app: 230, web_site: 230 },
        { name: "dec", mobile_app: 500, web_site: 400 },
    ]
    return (
        <div className="chart-section container mb-10 ">
            <div className="row flex m-auto  justify-evenly">
                {/*bar chart*/}
                <div className="col-lg-5 bar-chart mb-10 p-3 flex justify-evenly flex-col">
                    {/*chart*/}
                    <Card sx={{ backgroundColor: "rgb(39, 39, 42)", color: "white", borderRadius: 3, boxShadow: 3 }}>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>
                            </Typography>
                            <ResponsiveContainer height={150}>
                                <BarChart data={data}>
                                    <XAxis className="opacity-0" tick={{ fill: "white" }} tickLine={false} axisLine={false} dataKey="name" />
                                    <YAxis axisLine={false} tickLine={false} tickMargin={15} tick={{ fill: "white" }} dataKey="sales" domain={[0, 400]} ticks={[0, 200, 400]} />
                                    <Tooltip cursor={{ fill: "transparent" }} contentStyle={{ backgroundColor: "black", width: "fit-content", height: "fit-content", border: "none", borderRadius: "6px", padding: "1px 2px" }} />
                                    <Bar barSize={9} dataKey="sales" fill="white" radius={[4, 4, 4, 4]} />
                                </BarChart>
                            </ResponsiveContainer>
                        </CardContent>

                    </Card>

                    {/*active user*/}
                    <div className="my-10">
                        {/*active user text*/}
                        <h3>
                            Active Users
                        </h3>

                        {/*last week text*/}
                        <span className="opacity-70">
                            <b className="opacity-90">(+23%)</b> than last week
                        </span>
                    </div>

                    {/*progress*/}
                    <div className="flex justify-between">
                        {/*user*/}
                        <div >
                            {/*user text*/}
                            <div className="flex  items-center">
                                <div className="mr-2 bg-orange-500 rounded text-white px-1"> <i className='fa-solid fa-sign-in ico-n '></i></div>
                                <h5>Users</h5>
                            </div>
                            {/*user progress*/}
                            <div className="mt-2" >
                                <div className="flex justify-between mb-1">
                                    <span class="txt-chart  text-dark">36k</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                                    <div className="bg-black h-2 rounded-full w-[50%] "></div>
                                </div>
                            </div>
                        </div>

                        {/*click*/}
                        <div>
                            {/*click text*/}
                            <div className="flex  items-center">
                                <div className="mr-2 bg-sky-400 rounded text-white px-1"> <i className='fa-solid fa-stop'></i></div>
                                <h5>Clicks</h5>
                            </div>
                            <div className="mt-2" >
                                <div className="flex justify-between mb-1">
                                    <span class="txt-chart  text-dark">2m</span>
                                </div>
                                {/*click progress*/}
                                <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                                    <div className="bg-black h-2 rounded-full w-[98%] "></div>
                                </div>
                            </div>
                        </div>

                        {/*sales*/}
                        <div>
                            {/*sales text*/}
                            <div className="flex  items-center">
                                <div className="mr-2 bg-amber-500 rounded text-white px-1"> <i className='fa-solid fa-file-invoice-dollar ico-n '></i></div>
                                <h5>Sales</h5>

                            </div>
                            {/*sales progress*/}
                            <div className="mt-2" >
                                <div className="flex justify-between mb-1">
                                    <span class="txt-chart  text-dark">435$</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                                    <div className="bg-black h-2 rounded-full w-[20%] "></div>
                                </div>
                            </div>
                        </div>

                        {/*items*/}
                        <div>
                            {/*items texr*/}
                            <div className="flex  items-center">
                                <div className="mr-2 bg-fuchsia-600 rounded text-white px-1"> <i className='fa-solid fa-sitemap ico-n '></i></div>
                                <h5>Items</h5>
                            </div>
                            {/*items progress*/}
                            <div className="mt-2" >
                                <div className="flex justify-between mb-1">
                                    <span class="txt-chart  text-dark">43</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                                    <div className="bg-black h-2 rounded-full w-[43%] "></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/*line chart*/}
                <div className="col-lg-6 p-3 flex justify-evenly flex-col line-chart">

                    <div>
                        {/*overview text*/}
                        <h3>
                            Sales overview
                        </h3>
                        {/*2021 text*/}
                        <span className="opacity-70">
                            <b className="opacity-90">4% more</b> in 2021
                        </span>
                    </div>

                    {/*chart*/}
                    <CardContent>
                        <Typography variant="h6" gutterBottom>
                        </Typography>
                        <ResponsiveContainer height={250}>
                            <LineChart data={dataLine}>
                                <CartesianGrid vertical={false} />
                                    <XAxis className="opacity-50" tick={{ fill: "black" }} tickLine={false} dataKey="name" />
                                    <YAxis className="opacity-50" tickSize={5} tickLine={false} tickMargin={15} tick={{ fill: "black" }} dataKey="mobile_app" ticks={[0, 100, 200, 300, 400, 500]} />
                                    <Tooltip cursor={false} contentStyle={{ backgroundColor: "black", width: "fit-content", height: "fit-content", border: "none", borderRadius: "6px", padding: "1px 2px" }} />
                                    
                                    <Line dot={false} type="monotone" strokeWidth={4} dataKey="mobile_app" stroke="#cb0c9f" />
                                    
                                    <Line dot={false} type="monotone" strokeWidth={4} dataKey="web_site" stroke="#453e76" />
                            </LineChart>
                        </ResponsiveContainer>
                    </CardContent>



                </div>

            </div>





        </div>
    )
}
export default Chart;