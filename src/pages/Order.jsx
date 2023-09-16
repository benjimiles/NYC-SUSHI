import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import Link from 'next/link';
import 'tailwindcss/tailwind.css';
import Footer from '../components/Footer';
import jsonData from '../../FoodItem_data.json';
const Order = () => {
  const [foodItems, setFoodItems] = useState([]);
  
//useEffect(() => {
//  setFoodItems(jsonData);
//}, []);
  // Fetch Food Items from Django API
   useEffect(() => {
     fetch('http://localhost:8000/food-items/')
       .then(response => response.json())
       .then(data => setFoodItems(data.items))

       .catch(error => console.error('Error fetching food items:', error));
   }, []);
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <div className="flex-1 w-full bg-zinc-800/70 relative">
        <img
          src="https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          className="w-full h-full object-cover absolute -z-10"
        ></img>

        <div className="w-full h-[30%] text-center flex flex-col items-center justify-center text-white">
          <div className="text-3xl lg:text-4xl mt-4">Our Menu</div>
          <p className="pt-5 text-xl">
            Order your favorite Sushi, Sashimi, and all the other Japanese Foods you desire here. <span className="cursor-pointer text-blue-500"><Link href='Admin'>Add more items</Link></span>
          </p>
        </div>
        <div className="my-8 max-w-full h-full mx-auto px-40 py-100 grid sm:grid-cols-3 md:grid-cols-5 gap-10">
          {foodItems &&foodItems.map(item => (
            <div className="drop-shadow-2xl relative" key={item.pk}>
              <div className="absolute border-solid border-2 border-white-500 bg-black/40 h-full rounded text-white text-center w-full">
                <p className="font-bold text-2xl px-2 pt-10">{item.name}</p>
                <p className="font-bold text-[15px] px-2">
                  Price: ${Number(item.price).toFixed(2)}
                </p>
                <button className="border hover:bg-white hover:text-black duration-300 text-white bg-black mx-2 bottom-4 rounded px-4 py-2 mt-5">
                  Order
                </button>
              </div>
              <img
                className="h-screen md:max-h-[150px] sm:max-h-[150px] w-screen object-cover rounded"
                src={item.image_url}
                alt={item.name}
              ></img>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Order;
