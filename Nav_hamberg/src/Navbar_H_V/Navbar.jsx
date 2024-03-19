import React, { useState } from "react";
// import ""


function Navbar() {
    let [content, setcontent] = useState(false);
    function content_handler() {
        if (content == false) {
            setcontent(true);
        }
        else {
            setcontent(false)
        }
    }
    return (
        <>
        <div className="sticky top-0 ">
                <div className="flex justify-between items-center h-[6rem]  bg-[#390255] relative" >
                    <div className="">
                        <button className="text-white ml-[40px]"><p className="text-[24px] " >Nikhil</p></button>
                    </div>

                    <div className="hidden sm:flex justify-around items-center  ">
                        <div className="">
                            <button type="button" class="text-black bg-[#ffff0c]  focus:outline-none focus:ring-4  font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-[##ffff0c] md:py-[8px] lg:py-[12px] sm:text-sm  sm:pt-[7px] sm:pb-[8px] sm:pl-[9px] sm:pr-[9px] lg:px-[15px]"><strong>HOME</strong></button>

                        </div>

                        <div className="">
                            <button className="text-white relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium hover:bg-[#ffff0c] hover:text-black hover:font-medium rounded-full hover:text-sm px-5 py-2.5 focus:ring-4 focus:outline-none md:py-[8px] lg:py-[12px] sm:text-sm  sm:pt-[7px] sm:pb-[8px] sm:pl-[9px] sm:pr-[9px]">
                                <strong >RESIDENTIAL</strong>
                            </button>

                        </div>
                        <div className="">
                            <button class="text-white relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium hover:bg-[#ffff0c] hover:text-black hover:font-medium rounded-full hover:text-sm px-5 py-2.5 focus:ring-4 focus:outline-none md:py-[8px] lg:py-[12px] sm:text-sm  sm:pt-[7px] sm:pb-[8px] sm:pl-[9px] sm:pr-[9px]">
                                <strong >COMMERCIAL</strong>
                            </button>

                        </div>
                        <div className="">
                            <button className="text-white relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium hover:bg-[#ffff0c] hover:text-black hover:font-medium rounded-full hover:text-sm px-5 py-2.5 focus:ring-4 focus:outline-none md:py-[8px] lg:py-[12px] sm:text-sm  sm:pt-[7px] sm:pb-[8px] sm:pl-[9px] sm:pr-[9px]">
                                <strong >INVESTMENT</strong>
                            </button>
                        </div>
                    </div>
                    <div>
                        {
                            content ? (<div><button className="text-white" onClick={content_handler} ><span className="material-symbols-outlined mr-[20px]">close</span></button></div>) : (<button onClick={content_handler} className="mr-[20px]"><span className="material-symbols-outlined text-white">menu</span></button>)
                        }

                    </div>


                </div>
                <div className="bg-opacity-0 flex justify-center items-center h-[100vh]  sm:bg-[#390255] absolute right-0">
                    <div className="   sm:bg-[#390255] h-[100vh]  pr-[5px] sm:pr-[0px]  ml-auto flex flex-col justify-center items-center sm:w-[25vw] lg:w-[20vw] xl:w-[16vw]  sm:p-[0px] " style={{ display: content == false ? "none" : "" }} >

                        {
                            content ? (<div className="  text-white h-[350px] sm:h-[100vh]  flex flex-col justify-center items-center gap-[2rem] bg-[#390255] px-[20px] sm:px-[0px] rounded-lg sm:rounded-[0px]">


                                <div>
                                    <div><button className="hidden sm:block"><strong>HOME</strong></button></div>
                                    <div>
                                        <button className={`sm:hidden hover:${true ? 'bg-red-700' :''} `}><strong><i class="fa-solid fa-house"></i></strong></button>
                                    </div>


                                </div>

                                <div>
                                    <button className="hidden sm:block"><strong>ABOUT US</strong></button>
                                    <button className="sm:hidden"><strong><i class="fa-solid fa-circle-exclamation"></i></strong></button>

                                </div>

                                <div>
                                    <button className="hidden sm:block"><strong>BLOG</strong></button>
                                    <button className="sm:hidden"><strong><i class="fa-solid fa-blog"></i></strong></button>

                                </div>

                                <div>
                                    <button className="hidden sm:block"><strong>CAREERS</strong></button>
                                    <button className="sm:hidden"><strong><i class="fa-solid fa-book-open-reader"></i></strong></button>

                                </div>
                                <div>
                                    <button className="hidden sm:block"><strong>CONTACT US</strong></button>
                                    <button className="sm:hidden"><strong><i class="fa-solid fa-phone"></i></strong></button>

                                </div>

                            </div>) :
                                (<div className="text-white"></div>)
                        }

                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar;