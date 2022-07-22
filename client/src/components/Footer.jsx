import React from "react";

import logo3 from "../../images/logo3.png";
import { IoMailSharp } from "react-icons/io5";
const Footer = () => (
  <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer">
    <div className="w-full flex sm:flex-row flex-col justify-between items-center my-4">
      
    </div>

    <div className="flex justify-center items-center flex-col mt-5">
      <p className="text-white text-3xl text-center ">I am pretty sure you will like this!</p>
      <p className="text-white text-sm text-center font-medium mt-2">copyright &copy; Crypto Dapp</p>
      
    </div>

    

    <div className="sm:w-[90%] w-full flex md:flex-row flex-col justify-between items-center mt-6">
   <img src={logo3} alt="logo" className="w-32" />
   <p className="text-white flex flex-row text-right text-2xs my-5 hover: cursor-pointer"  >< IoMailSharp fontsize ={50} className='text-white text-2xl cursor-pointer mr-1'/>ronakkgupta5487@gmail.com</p>
        
      <p className="text-white text-right text-2xs">All rights reserved</p>
    </div>
    </div>

);

export default Footer;

