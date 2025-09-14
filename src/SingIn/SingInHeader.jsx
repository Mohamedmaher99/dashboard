import { use, useState } from "react";
import { Link } from "react-router";
function SignInHeader() {
    const [change, setchang] = useState(true);
    const toggel =()=>{
        console.log(122)

        return change ? setchang(false) : setchang(true);
    }
    return (
        <header className="signin-header mb-4">
            <div className="container">
                <div className="row ">
                    {/*form*/}
                    <div className="col-md-6 col-12 mt-14 flex justify-center items-center">
                        <div className="for-m w-[50%]">
                            {/*welcome text*/}
                            <div className="welcome-txt">
                                {/*welcome*/}
                                <h3 className="mb-2"  >Welcome back</h3>
                                {/*enter your email*/}
                                <span className="mb-2">Enter your email and password to sign in</span>
                            </div>

                            {/*form*/}
                            <div className="signIn-form">
                                <form action="">
                                    {/*email*/}
                                    <div className="flex flex-col mb-3 mt-4">
                                        <span className="mb-2 email-txt">email</span>
                                        <input className="input-style px-3" type="email" name="email" placeholder="email" />
                                    </div>
                                    {/*Password*/}
                                    <div className="flex flex-col mb-3">
                                        <span className="mb-2 pass-txt">Password</span>
                                        <input className="input-style px-3" type="text" name="Password" placeholder="Password" />
                                    </div>
                                    {/*remember me*/}
                                    <div className="relative">
                                        <label className="flex items-center" htmlFor="rember-me">
                                            <input onChange={toggel} className="d-none " id="rember-me" type="checkbox" name="rememberme" />
                                            <span className={`${change ? "on" : "off"}`}></span>
                                            <h4 className="ml-12"> remember me</h4>
                                        </label>
                                    </div>
                                    {/*sign in*/}
                                    <div className="my-4">
                                        <input className="sumbit-style flex justify-center items-center mt-3" type="submit" value="sign in" />
                                    </div>
                                    
                                    {/*sign up*/}
                                    <div className="signup-txt flex justify-center items-center mt-3">
                                        <span>Don't have an account?</span>
                                        <Link to="">sign up</Link>

                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                    {/*image*/}
                    <div className="col-md-6 d-xs-style flex justify-end">
                        <div className="bg-header w-[700px]  ">

                        </div>
                    </div>
                </div>
            </div>


        </header>
    )
}
export default SignInHeader;