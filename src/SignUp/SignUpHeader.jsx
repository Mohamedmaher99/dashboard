import SignUpForm from "./SignUpForm";

function SignUpHeader(){
    return(
        <header className="p-3">
            <div className="signup-header relative flex justify-center items-center  ">
                <div className="container flex  justify-center items-center  ">
                    <div className="row mb-10 text-center ">
                        <div className="col-md-12 flex justify-center items-center flex-col">
                            <h1>Welcome!</h1>
                            <span >Use these awesome forms to login or create new account in your project for free.</span>
                        </div>
                    </div>
                    <div className="row absolute top-[70%]   ">
                        <div className="col-md-12">
                            <SignUpForm/>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
export default SignUpHeader;