import React from 'react'
import MainButton from '../molecules/MainButton'
import Image from 'next/image';
import Logo from '../../components/atom/assets/img/logo.svg'
import { FooterLink, WidgetTitle } from '../templates';
import Link from 'next/link';
import {FaEnvelope, FaFacebookF,FaTwitter,FaLinkedinIn ,FaYoutube ,FaSkype,FaLocationDot,FaPhone  } from "react-icons/fa6";


export default function Footer() {
  return (
    <footer className=' bg-[#0F1B31] text-[white] mt-[100px]'>

        <div className="top h-full lg:h-[196px]  border-b border-[#283752] py-[65px] px-[15px] lg:py-0">
          <div className="container mx-auto h-full lg:border-l border-[#283752] flex flex-col lg:flex-row items-center">
            <div className="logo w-full lg:w-[22%] lg:mr-[20px]">
                <Image src={Logo} className='lg:hidden w-full mb-[30px] lg:mb-[0px]' width={100} height={100} alt=''/>
            </div>
            <div className="form flex flex-col lg:flex-row w-full lg:grow gap-[20px]">
              <h3 className=' mb-[20px] lg:mb-0 font-[700] lg:font-normal text-[18px] lg:text-[24px] text-center lg:text-left text-white lg:max-w-[280px]'>
              Subscribe Our Newsletter For Latest Updates
              </h3>
              <form action="" className=' w-full lg:grow flex flex-col lg:flex-row gap-4  lg:h-[55px]'>
                <div className="input w-full relative">
                  <input placeholder='Enter your Email' type="text" name="" id="" className=' min-h-[55px] placeholder:text-white focus:bg-[#0d5ef43f] focus:border-[#0D5EF4] bg-transparent border border-[#283752] w-full pr-[45px] pl-[25px] h-full  rounded-[5px] outline-none '/>
                  <span className=' absolute right-[10px] top-1/2 -translate-y-1/2 text-[20px] text-[#0D5EF4]'><FaEnvelope /></span>
                </div>
                <MainButton href='' text='Subscribe Now' />
              </form>
            </div>
          </div>
        </div>
        <div className="center mt-[80px] mb-[40px] px-[15px]">
          <div className="container mx-auto flex flex-col  sm:flex-row flex-wrap gap-6">
            <div className='box sm:w-[50%] lg:w-[25%]'>
              <WidgetTitle title='About Company' />
              <p className="about-text mb-[25px] text-[#b3c1d3]">
              Continually optimize backward manufactured products whereas communities negotiate life compelling alignments
              </p>
              <div className="social">
                <h6 className='mb-[15px] text-[18px] font-[600] uppercase'>Follow Us On:</h6>
                  <div className='flex gap-2'>
                    <Link href='' className='w-[45px] text-[18px] h-[45px] flex justify-center items-center bg-[#1e2c46] text-[#b3c1d3] rounded-full' >
                      <FaFacebookF />
                    </Link>
                    <Link href='' className='w-[45px] text-[18px] h-[45px] flex justify-center items-center bg-[#1e2c46] text-[#b3c1d3] rounded-full' >
                      <FaTwitter />
                    </Link>
                    <Link href='' className='w-[45px] text-[18px] h-[45px] flex justify-center items-center bg-[#1e2c46] text-[#b3c1d3] rounded-full' >
                      <FaLinkedinIn />
                    </Link>
                    <Link href='' className='w-[45px] text-[18px] h-[45px] flex justify-center items-center bg-[#1e2c46] text-[#b3c1d3] rounded-full' >
                      <FaYoutube />
                    </Link>
                    <Link href='' className='w-[45px] text-[18px] h-[45px] flex justify-center items-center bg-[#1e2c46] text-[#b3c1d3] rounded-full' >
                      <FaSkype />
                    </Link>
                  </div>
              </div>
            </div>
            <div className='box grow'>
              <WidgetTitle title='Quick Links' />
              <ul className='flex flex-col'>
                <FooterLink href=''>Life Coach </FooterLink>
                <FooterLink href=''>Business Coach </FooterLink>
                <FooterLink href=''>Health Coach </FooterLink>
                <FooterLink href=''>Development</FooterLink>
                <FooterLink href=''>Web Design</FooterLink>
                <FooterLink href=''>SEO Optimize</FooterLink>
              </ul>

            </div>
            <div className='box grow'>
              <WidgetTitle title='Our Courses' />
              <ul className='flex flex-col'>
                <FooterLink href=''>Health Course</FooterLink>
                <FooterLink href=''>Web Development</FooterLink>
                <FooterLink href=''>UI/UX Design </FooterLink>
                <FooterLink href=''>Life Style Course</FooterLink>
                <FooterLink href=''>Digital Marketing</FooterLink>
                <FooterLink href=''>Graphic Design</FooterLink>
              </ul>
            </div>
            <div className='box grow'>
              <WidgetTitle title='Resources' />
              <ul className='flex flex-col'>
                <FooterLink href=''>Life Coach </FooterLink>
                <FooterLink href=''>Business Coach </FooterLink>
                <FooterLink href=''>Health Coach </FooterLink>
                <FooterLink href=''>Development</FooterLink>
                <FooterLink href=''>Web Design</FooterLink>
                <FooterLink href=''>SEO Optimize</FooterLink>
              </ul>
            </div>
            <div className='box  sm:w-[50%] lg:w-[25%]'>
              <WidgetTitle title='Get in touch!' />
              <p className="about-text mb-[25px] text-[#b3c1d3] w-full">
                Fusce varius, dolor tempor interdum tristiquei bibendum service life.
              </p>
              <div className='flex gap-3 mb-[20px]'>
                <span className='text-[20px] text-[#0D5EF4]'><FaLocationDot /></span>
                <p className='text-[#b3c1d3]'>147/I, Green Road, Gulshan Avenue, Panthapath, Dhaka</p>
              </div>
              <div className='flex gap-3 mb-[20px]'>
                <span className='text-[20px] text-[#0D5EF4]'><FaEnvelope/></span>
                <Link href='' className='text-[#b3c1d3]'>info@edura.com</Link>
              </div>
              <div className='flex gap-3 mb-[20px]'>
                <span className='text-[20px] text-[#0D5EF4]'><FaPhone /></span>
                <Link href='' className='text-[#b3c1d3]'>+256 214 203 215</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom bg-[#283752] px-[15px]">
          <div className="container mx-auto py-[16px] text-[#B3c1d3] flex gap-3">
            <p className=''>Copyright © 2023 Edura All Rights Reserved.</p>
            <ul className=' grow  justify-end gap-5 hidden lg:flex'>
              <Link href='' >
                Privacy Policy
              </Link>
              <Link href='' >
                Terms & Condition
              </Link>
            </ul>
          </div>
        </div>
    </footer>
  )
}
