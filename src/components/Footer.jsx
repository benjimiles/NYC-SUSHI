'use client';
import React, { useState } from 'react';
import Link from 'next/link';

const Hero = () => {
  return (
    <div className="border-t-2 w-[100%] h-[20%]  flex flex-col  text-white bg-[#001C30] p-5">
      <div className="flex text-center items-center m-auto">
        <div>
          <h1 className="font-bold text-3xl">New York City Sushi</h1>
          <p>Open From 8AM-6PM Monday-Friday</p>
        </div>
        <div>
          <img src="https://cdn-icons-png.flaticon.com/128/2252/2252076.png" className="w-14 h-14 ml-5"></img>
        </div>
      </div>

      <div class="py-10 flex mx-30">
        <div class="w-full md:w-2/7 md:flex sm:mx-auto sm:text-center">
          <ul class="text-left">
            <li>Building Number: 74025</li>
            <li>Street Name: Walsh Throughway</li>
            <li>Street Address: 7229 Graham Plain Apt. 652</li>
            <li>State: Washington</li>
            <li>City: East Nash</li>
            <li>Post Code: 09548-9288</li>
          </ul>
        </div>
        <div class="w-full md:w-1/7 sm:mx-auto sm:text-center">
          <ul class="">
            <li>
              <a href="/Menu">Menu</a>
            </li>
            <li>
              <a href="/Careers">Careers</a>
            </li>
            <li>
              <a href="/Terms">Terms</a>
            </li>
            <li>
              <a href="/About">About</a>
            </li>
          </ul>
        </div>
        <div class="w-full md:w-1/7 sm:mx-auto sm:text-center">
          <ul class="">
            <li>
              <a href="/Menu">Menu</a>
            </li>
            <li>
              <a href="/Careers">Careers</a>
            </li>
            <li>
              <a href="/Terms">Terms</a>
            </li>
            <li>
              <a href="/About">About</a>
            </li>
          </ul>
        </div>
        <div class="w-full  md:w-1/7 sm:mx-auto sm:text-center">
          <ul class="">
            <li>
              <a href="/Menu">Menu</a>
            </li>
            <li>
              <a href="/Careers">Careers</a>
            </li>
            <li>
              <a href="/Terms">Terms</a>
            </li>
            <li>
              <a href="/About">About</a>
            </li>
          </ul>
        </div>
        <div class="w-full md:w-2/7 md:flex sm:mx-auto sm:text-center">
          <ul class="text-left">
            <li>
              <p class="text-2xl">Contact Us</p>
            </li>
            <li>support@nycsushi.com</li>
            <li>Tel: 212-555-555</li>
          </ul>
        </div>
      </div>
      <div>
        <p className="text-center">Copyright &copy; 2023. Website made with ♥ </p>
      </div>
    </div>
  );
};

export default Hero;
