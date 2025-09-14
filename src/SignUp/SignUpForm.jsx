import { NavLink } from "react-router";
function SignUpForm() {
    return (
        <div className="signup-form">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card px-5 py-4 rounded-2xl">
                            <form className="flex flex-col justify-center  ">
                                {/*register text*/}
                                <div className="text-center">
                                    <h3>Register with</h3>
                                </div>

                                {/*sochial*/}
                                <div className="flex justify-center items-center my-4">
                                    {/*facebook*/}
                                    <div className="facebook px-3 py-2">
                                        <NavLink className="text-2xl" to="">
                                            <i className='fa-brands fa-facebook text-blue-700'></i>
                                        </NavLink>
                                    </div>
                                    {/*apple*/}
                                    <div className="apple px-3 py-2  mx-3">
                                        <NavLink className="text-2xl" to="">
                                            <i className='fa-brands fa-apple'></i>
                                        </NavLink>
                                    </div>
                                    {/*google*/}
                                    <div className="google px-3 py-2 ">
                                        <NavLink className="text-2xl  text-blue-700" to="">
                                            <i className='fa-brands fa-google'></i>
                                        </NavLink>
                                    </div>
                                </div>
                                {/*or*/}
                                <div className="text-center">
                                    <h4>or</h4>
                                </div>

                                {/*name*/}
                                <div className="mt-3">
                                    <input className="h-[40px] px-3" type="text" name="name" placeholder="name" />
                                </div>
                                {/*email*/}
                                <div className="mt-3">
                                    <input className="h-[40px] px-3" type="email" name="email" placeholder="email" />
                                </div>
                                {/*password*/}
                                <div className="mt-3">
                                    <input className="h-[40px] px-3" type="text" name="pass" placeholder="password" />
                                </div>

                                {/*i agree*/}
                                <div className="mt-3 agree" >
                                    <NavLink className="flex  items-center" to="">
                                        <i className="fa-regular fa-square text-white bg-black p-1 rounded-md"></i>
                                        <span className="ml-2">I agree The <b>Terms and Conditions</b> </span> 
                                    </NavLink>
                                </div>

                                {/*sign up*/}
                                <div className="my-4">
                                    <input className="h-[40px] bg-black text-white text-center " type="sumbit" value="sign up" />
                                </div>

                                <div className="already">
                                    <span>Already have an account?</span> <NavLink to="">sign in</NavLink>
                                </div>

                            </form>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default SignUpForm;