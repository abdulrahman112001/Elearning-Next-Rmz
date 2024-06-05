import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {FaCartShopping ,FaRegHeart ,FaEnvelope,FaPhone,FaClock, FaFacebookF,FaTwitter,FaLinkedinIn ,FaYoutube ,FaSkype,FaRegUser ,FaAngleDown    } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";

import {MainButton} from '../molecules';
import { MainDrawer } from '../templates';

const Navbar: React.FC = () => {
  return (
    <header className='w-full relative'>
      <div className="header-top px-[50px] md:pl-[50px] xl:pl-[150px]  relative  h-[50px]  bg-[#0F2239]  w-full text-white flex items-center justify-between">
        <div className='left hidden lg:flex items-center gap-2 z-[2]'>
          <div className='flex gap-3 pr-2 border-r-2 border-r-[#ffffff33]'>
            <span className='text-[20px] '><FaPhone /></span>
            <Link href='' className=''>+256 214 203 215</Link>
          </div>
          <div className='hidden  xl:flex gap-3 pr-2 border-r-2 border-r-[#ffffff33]'>
            <span className='text-[20px] '><FaEnvelope/></span>
            <Link href='' className=''>info@edura.com</Link>
          </div>
          
          <div className='flex gap-3 '>
            <span className='text-[20px] '><FaClock /></span>
            <p className=''>Mon - Sat: 8:00 - 15:00</p>
          </div>
        </div>

        <div className="right flex items-center  justify-center md:justify-between w-full lg:w-auto gap-[50px] z-[2]">
          <div className="social flex gap-2 ">
            <h6 className='text-[18px]'>Follow Us:</h6>
            <ul className='flex gap-3 items-center'>
              <Link href='' className='' >
                <FaFacebookF />
              </Link>
              <Link href='' className='' >
                <FaTwitter />
              </Link>
              <Link href='' className='' >
                <FaLinkedinIn />
              </Link>
              <Link href='' className='' >
                <FaYoutube />
              </Link>
              <Link href='' className='' >
                <FaSkype />
              </Link>
            </ul>
          </div>
          <div className="login md:flex items-center gap-2 hidden">
            <span>
              <FaRegUser />
            </span>
            <Link href=''>
              Login / Register
            </Link>
          </div>
        </div>
        <span className=' absolute  bg-[#0D5EF4] left-0 top-0 h-full w-[100%] xl:w-[85%] z-[1] rounded-br-[0px] xl:rounded-br-[50px]  '></span>
      </div>
      
      <div className="sticky-wrapper container mx-auto  bg-[#fff] shadow-sm flex items-center justify-end gap-[30px]">
        <div className='block md:hidden'>
          <MainDrawer />
        </div>
        <ul className='hidden md:flex gap-4 '>
          <li className='py-[31.5px] text-[#0F2239] font-[600] text-[18px] flex items-center gap-2'>HOME <FaAngleDown/> </li>
          <li className='py-[31.5px] text-[#0F2239] font-[600] text-[18px]'>ABOUT US</li>
          <li className='py-[31.5px] text-[#0F2239] font-[600] text-[18px]'>COURSE</li>
          <li className='py-[31.5px] text-[#0F2239] font-[600] text-[18px]'>INSTRUCTOR</li>
          <li className='py-[31.5px] text-[#0F2239] font-[600] text-[18px]'>BLOG</li>
          <li className='py-[31.5px] text-[#0F2239] font-[600] text-[18px]'>CONTACT US</li>
        </ul>
        <div className='flex items-center gap-5 text-white'>
          <div className="adding hidden xl:flex gap-3">
            <div className="search cursor-pointer text-black group transition-all relative w-[45px] h-[45px] rounded-full border flex justify-center items-center hover:bg-[#0D5EF4]">
                <FaSearch   className=' group-hover:text-white'/>
            </div>
            <div className="wish cursor-pointer text-black group transition-all relative w-[45px] h-[45px] rounded-full border flex justify-center items-center hover:bg-[#0D5EF4]">
                <span className=' absolute w-[20px] h-[20px] bg-[red] -top-[5px] -right-[5px] flex justify-center text-white rounded-full'>5</span>
                <FaRegHeart   className=' group-hover:text-white'/>
            </div>
            <div className="cart cursor-pointer group text-black transition-all relative w-[45px] h-[45px] rounded-full border flex justify-center items-center hover:bg-[#0D5EF4]">
                <span className=' absolute w-[20px] h-[20px] bg-[red] -top-[5px] -right-[5px] flex justify-center text-white rounded-full'>3</span>
                <FaCartShopping   className=' group-hover:text-white'/>
            </div>
            
          </div>
          <div className='hidden lg:flex'>
          <MainButton href='' text='Contact Us' />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
