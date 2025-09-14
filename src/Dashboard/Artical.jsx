function Artical() {
    return (
        <article className="Artical-section container mb-10">
            
                <div className="row m-auto  flex justify-evenly">
                    {/*rigth*/}
                    <div className="col-lg-6 flex justify-between mb-4 built p-4">
                        <div className="col-lg-6 flex flex-col justify-between ">
                            {/*title*/}
                            <div className="flex flex-col justify-evenly">
                                {/*built by dev text*/}
                                <h4 className="opacity-70">Built by developers</h4>
                                <h2 className="my-3">
                                    Soft UI Dashboard
                                </h2>

                                <p className="opacity-70 ">
                                    From colors, cards, typography  to complex elements, you will  find the full documentation.
                                </p>

                            </div>
                            <div>
                                <a href="">read more</a>

                            </div>

                        </div>

                        {/*rocket image*/}
                        <div className="col-lg-6 im-bg-color py-3 flex justify-center items-center ">
                            <img src="assest\img\illustrations\rocket-white.png" alt="" />
                        </div>
                    </div>
                    
                    {/*left*/}
                    <div className="col-lg-5 work p-4 w-100  ">
                        {/*bg image*/}
                        <div className="work-bg p-3 flex flex-col justify-evenly">
                            <h3>
                                Work with the rockets
                            </h3>

                            <p>
                                Wealth creation is an evolutionarily recent positive-sum game. It is all about who take the opportunity first.
                            </p>

                            <a href="">read more</a>

                        </div>

                    </div>
                </div>
            

        </article>
    )
}
export default Artical;