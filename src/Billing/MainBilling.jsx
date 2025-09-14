function MainBilling() {
    return (
        <div className="main-billing container ">
            <div className="row   ">
                {/*left*/}
                <div className="col-lg-8 flex justify-between flex-wrap">
                    {/*visa*/}
                    <div className="col-lg-6 col-12 ">
                        <div className="visa p-3">
                            {/*number*/}
                            <div className="my-5">
                                <h3>4562   1122   4594   7852</h3>
                            </div>
                            {/*visa info*/}
                            <div className="info flex justify-between items-center ">
                                <div className="flex">
                                    <div className="mr-4">
                                        <span>Card Holder</span>
                                        <h4>Jack Peterson</h4>
                                    </div>
                                    <div>
                                        <span>Expires</span>
                                        <h4>11/22</h4>
                                    </div>
                                </div>
                                {/*visa img*/}
                                <div>
                                    <img src="assest/img/logos/mastercard.png" alt="" />
                                </div>
                            </div>
                        </div>

                    </div>
                    {/*salar & paypal*/}
                    <div className="col-lg-3 col-md-6  ">
                        <div className="salary bg-white w-100   p-3">
                            {/*shape*/}
                            <div>
                                <div className="shape">
                                </div>

                                {/*salary*/}
                                <div className="flex flex-col slary-txt items-center  mt-3">
                                    <h4>Salary</h4>
                                    <span>Belong Interactive</span>
                                    <hr className="h-[20px] text-dark " />
                                    <h3>
                                        +$2000
                                    </h3>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 ">
                        <div className="paypal w-100 bg-white p-3">
                            {/*shape*/}
                            <div>
                                <div className="shape">

                                </div>

                                {/*papal*/}
                                <div className="flex flex-col pal-txt items-center  mt-3">
                                    <h4>Paypal</h4>
                                    <span>Freelance Payment</span>
                                    <hr className="h-[20px] text-dark " />
                                    <h3>
                                        $455.00
                                    </h3>
                                </div>

                            </div>

                        </div>

                    </div>

                    {/*payment*/}
                    <div className="col-md-12 payment  ">
                        <div className=" bg-white content p-3 ">
                            {/*payment text*/}
                            <div className="flex justify-between">
                                <div>
                                    <h3>Payment Method</h3>
                                </div>
                                {/*add to card */}
                                <div className="cardd">
                                    <button className="btn btn-dark">add new card</button>
                                </div>

                            </div>
                            {/*card &visa*/}
                            <div className="flex card-visa justify-around mt-4">
                                {/*master card*/}
                                <div className="mast-card flex items-center w-[45%] border-2 rounded-2xl p-3">
                                    <img className="mr-3" src="assest/img/logos/mastercard.png" alt="" />
                                    <h4>****   ****   ****   7852</h4>
                                </div>
                                {/*master card*/}
                                <div className="visa-card flex items-center w-[45%] rounded-2xl border-2 p-3">
                                    <img className="mr-3" src="assest\img\logos\visa.png" alt="" />
                                    <h4>****   ****   ****   5248</h4>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>  
        
                {/*right*/}
                <div className="col-lg-4 invoic   ">
                    <div className="col-12">
                    <div className=" m-auto bg-white  invoice p-3">
                        <div className="flex justify-between items-center">
                            <h4>Invoices</h4>
                            <div className="inv-btn" >
                                <button>view all</button>
                            </div>
                        </div>
                        <div className="months">
                            <ul type="none">
                                {/*itm1*/}
                                <li className="my-4 flex justify-between items-center">
                                    {/*month text*/}
                                    <div className="month">
                                        <h3 className="mb-1">March, 01, 2020</h3>
                                        <span>#MS-415646</span>
                                    </div>

                                    {/*price*/}
                                    <div className="number flex items-center">
                                        <h4 className="mr-3">$180</h4>
                                        <a href="">Pdf</a>
                                    </div>
                                </li>
                                {/*itm2*/}
                                <li className="my-4 flex justify-between items-center">
                                    {/*month text*/}
                                    <div className="month">
                                        <h3 className="mb-1">February, 10, 2021</h3>
                                        <span>#RV-126749</span>
                                    </div>

                                    {/*price*/}
                                    <div className="number flex items-center">
                                        <h4 className="mr-3">$250</h4>
                                        <a href="">Pdf</a>
                                    </div>
                                </li>
                                {/*itm3*/}
                                <li className="my-4 flex justify-between items-center">
                                    {/*month text*/}
                                    <div className="month">
                                        <h3 className="mb-1">April, 05, 2020</h3>
                                        <span>April, 05, 2020</span>
                                    </div>

                                    {/*price*/}
                                    <div className="number flex items-center">
                                        <h4 className="mr-3">$560</h4>
                                        <a href="">Pdf</a>
                                    </div>
                                </li>
                                {/*itm4*/}
                                <li className="my-4 flex justify-between items-center">
                                    {/*month text*/}
                                    <div className="month">
                                        <h3 className="mb-1">June, 25, 2019</h3>
                                        <span>#QW-103578</span>
                                    </div>

                                    {/*price*/}
                                    <div className="number flex items-center">
                                        <h4 className="mr-3">$120</h4>
                                        <a href="">Pdf</a>
                                    </div>
                                </li>
                                {/*itm5*/}
                                <li className="my-4 flex justify-between items-center">
                                    {/*month text*/}
                                    <div className="month">
                                        <h3 className="mb-1">March, 01, 2019</h3>
                                        <span>#AR-803481</span>
                                    </div>

                                    {/*price*/}
                                    <div className="number flex items-center">
                                        <h4 className="mr-3">$500</h4>
                                        <a href="">Pdf</a>
                                    </div>
                                </li>
                            </ul>

                        </div>
                    </div>

                    </div>

                </div>
            </div>

        </div>
    )
}
export default MainBilling;