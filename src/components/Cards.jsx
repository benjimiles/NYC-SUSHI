'use client'
import React, {useState} from 'react'
import Link from 'next/link'

const Cards = () => {
  return (
    <div className="bg-neutral-700 max-w-full mx-auto p-4 py-12 grid md:grid-cols-3 gap-6">
        <div className="relative border-2 border-white">
            <div className="absolute w-full h-full bg-black/40 text-white text-center">
                <p className="text-2xl px-2 pt-14 mb-4">Want Delivery?</p>
                <button className="border active:bg-blue-400 hover:bg-black hover:text-white duration-300 text-white mx-2 bottom-4 rounded px-2 py-1"><Link href="/Delivery">Deliver Food</Link></button>
            </div>
            <img className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded" src="https://plus.unsplash.com/premium_photo-1682130100826-913b21060e4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="/"></img>
        </div>

        <div className="border-2 border-white relative">
            <div className="absolute w-full h-full bg-black/40 text-white text-center">
                <p className="text-2xl px-2 pt-14 mb-4">Write a Review</p>
                <button className="border active:bg-blue-400 hover:text-white hover:bg-black duration-300 text-white mx-2 bottom-4 rounded px-2 py-1"><Link href="/Store">Write Review</Link></button>
            </div>
            <img className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded" src="https://images.unsplash.com/photo-1617196035154-1e7e6e28b0db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="/"></img>
        </div>

        <div className="border-2 border-white relative">
            <div className="absolute w-full h-full bg-black/40 text-white text-center">
                <p className="text-2xl px-2 pt-14 mb-4">Want a personal chef?</p>
                <button className="border active:bg-blue-400 hover:text-white hover:bg-black duration-300 text-white mx-2 bottom-4 rounded px-2 py-1"><Link href="/Chef">Find Chefs</Link></button>
            </div>
            <img className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded" src="https://plus.unsplash.com/premium_photo-1679862070813-bc69894ba97c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80" alt="/"></img>
        </div>
    </div>
  )
}

export default Cards