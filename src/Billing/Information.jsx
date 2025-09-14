function Information() {
    return (
        <div className="info-section container my-10 ">
            <div className="row m-auto">
                {/*left*/}
                <div className="col-md-7 ">
                    {/*billing info*/}
                    <div className="billing-info  bg-white p-3">
                        {/*billing text*/}
                        <div className="billing-txt mb-5">
                            <h3>
                                Billing Information
                            </h3>
                        </div>

                        {/*members*/}
                        <div className="billing-member">
                            <ul type="none ">
                                {/*member1*/}
                                <li className="member justify-between p-4 flex mb-4">
                                    <div>
                                        {/*name*/}
                                        <div className="name-txt mb-2">
                                            <h4>
                                                Oliver Liam
                                            </h4>
                                        </div>
                                        {/*company*/}
                                        <div className="flex items-center">
                                            <span className="mr-3 nam-spac ">Company Name:</span>
                                            <h5>Viking Burrito</h5>
                                        </div>
                                        {/*Email Address*/}
                                        <div className="flex items-center">
                                            <span className="mr-3 nam-spac ">Email Address:</span>
                                            <h5>oliver@burrito.com</h5>
                                        </div>
                                        {/*VAT Number*/}
                                        <div className="flex items-center">
                                            <span className="mr-3 nam-spac">VAT Number:</span>
                                            <h5>FRB1235476</h5>
                                        </div>

                                    </div>

                                    <div >
                                        <button className="mr-5 text-red-500">delet</button>
                                        <button>edit</button>
                                    </div>
                                </li>
                                {/*member2*/}
                                <li className="member justify-between p-4 flex mb-4">
                                    <div>
                                        {/*name*/}
                                        <div className="name-txt mb-2">
                                            <h4>
                                                Lucas Harper
                                            </h4>
                                        </div>
                                        {/*company*/}
                                        <div className="flex items-center">
                                            <span className="mr-3 nam-spac">Company Name:</span>
                                            <h5>Stone Tech Zone</h5>
                                        </div>
                                        {/*Email Address*/}
                                        <div className="flex items-center">
                                            <span className="mr-3 nam-spac">Email Address:</span>
                                            <h5>lucas@stone-tech.com</h5>
                                        </div>
                                        {/*VAT Number*/}
                                        <div className="flex items-center">
                                            <span className="mr-3 nam-spac">VAT Number:</span>
                                            <h5>FRB1235476</h5>
                                        </div>

                                    </div>

                                    <div >
                                        <button className="mr-5 text-red-500">delet</button>
                                        <button>edit</button>
                                    </div>
                                </li>
                                {/*member3*/}
                                <li className="member justify-between p-4 flex ">
                                    <div>
                                        {/*name*/}
                                        <div className="name-txt mb-2">
                                            <h4>
                                                Ethan James
                                            </h4>
                                        </div>
                                        {/*company*/}
                                        <div className="flex items-center">
                                            <span className="mr-3 nam-spac">Company Name:</span>
                                            <h5>Fiber Notion</h5>
                                        </div>
                                        {/*Email Address*/}
                                        <div className="flex items-center">
                                            <span className="mr-3 nam-spac">Email Address:</span>
                                            <h5>ethan@fiber.com</h5>
                                        </div>
                                        {/*VAT Number*/}
                                        <div className="flex items-center">
                                            <span className="mr-3 nam-spac">VAT Number:</span>
                                            <h5>FRB1235476</h5>
                                        </div>

                                    </div>

                                    <div >
                                        <button className="mr-5 text-red-500">delet</button>
                                        <button>edit</button>
                                    </div>
                                </li>

                            </ul>

                        </div>

                    </div>

                </div>

                {/*right*/}

                <div className="col-md-5">
                    {/*Transaction*/}
                    <div className="Transaction bg-white p-3">
                        {/*Transaction text*/}
                        <div className="trans-txt flex justify-between">
                            <h3>
                                Your Transaction's
                            </h3>

                            <span>
                                23 - 30 March 2020
                            </span>

                        </div>
                         {/*newest text*/}
                        <div className="my-4">
                            <h4>Newest</h4>
                        </div>

                        {/*list*/}

                        <ul className="lis-tt" type="none">
                            {/*Netflix*/}
                            <li className="flex justify-between mb-3">
                                {/*name*/}
                                <div className="name-trans flex items-center">
                                    <button className="trans-btn-red mr-3"></button>
                                    <div>
                                        <h4>Netflix</h4>
                                        <span>27 March 2020, at 12:30 PM</span>
                                    </div>
                                </div>
                                  {/*value*/}
                                <div className="value-trans">
                                    <h5 className="text-red-500">-$2,500</h5>
                                </div>
                            </li>
                            {/*Apple*/ }
                            <li className="flex justify-between mb-3">
                                {/*name*/}
                                <div className="name-trans flex items-center">
                                    <button className="trans-btn-gren mr-3"></button>
                                    <div>
                                        <h4>Apple</h4>
                                        <span>27 March 2020, at 04:30 AM</span>
                                    </div>
                                </div>
                                  {/*value*/}
                                <div className="value-trans">
                                    <h5 className="text-green-500">+$2,000</h5>
                                </div>
                            </li>
                        </ul>
                         {/*Yesterday*/}
                         <div className="my-4">
                            <h4>Yesterday</h4>
                        </div>

                        <ul className="lis-tt" type="none"> 
                            {/*Stripe*/}
                             <li className="flex justify-between mb-3">
                                {/*name*/}
                                <div className="name-trans flex items-center">
                                    <button className="trans-btn-gren mr-3"></button>
                                    <div>
                                        <h4>Stripe</h4>
                                        <span>26 March 2020, at 13:45 PM</span>
                                    </div>
                                </div>
                                  {/*value*/}
                                <div className="value-trans">
                                    <h5 className="text-green-500">+$750</h5>
                                </div>
                            </li>
                            {/*HubSpot*/ }
                             <li className="flex justify-between mb-3">
                                {/*name*/}
                                <div className="name-trans flex items-center">
                                    <button className="trans-btn-gren mr-3"></button>
                                    <div>
                                        <h4>HubSpot</h4>
                                        <span>26 March 2020, at 12:30 PM</span>
                                    </div>
                                </div>
                                  {/*value*/}
                                <div className="value-trans">
                                    <h5 className="text-green-500">+$1,000</h5>
                                </div>
                            </li>
                            {/*Creative Tim*/ }
                             <li className="flex justify-between mb-3">
                                {/*name*/}
                                <div className="name-trans flex items-center">
                                    <button className="trans-btn-gren mr-3"></button>
                                    <div>
                                        <h4>Creative Tim</h4>
                                        <span>26 March 2020, at 08:30 AM</span>
                                    </div>
                                </div>
                                  {/*value*/}
                                <div className="value-trans">
                                    <h5 className="text-green-500">+$2,500</h5>
                                </div>
                            </li>
                            {/*Webflow*/ }
                             <li className="flex justify-between mb-3">
                                {/*name*/}
                                <div className="name-trans flex items-center">
                                    <button className="trans-btn-black mr-3"></button>
                                    <div>
                                        <h4>Webflow</h4>
                                        <span>26 March 2020, at 05:00 AM</span>
                                    </div>
                                </div>
                                  {/*value*/}
                                <div className="value-trans">
                                    <h5>Pending</h5>
                                </div>
                            </li>


                        </ul>
                        
                    </div>
                </div>
            </div>

        </div>

    )
}
export default Information;