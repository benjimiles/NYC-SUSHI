import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import Link from 'next/link';
import 'tailwindcss/tailwind.css';
import Footer from '../components/Footer';
import jsonData from '../../FoodItem_data.json';
const Order = () => {
  const [foodItems, setFoodItems] = useState([]);
  
useEffect(() => {
  setFoodItems(jsonData);
}, []);
  // Fetch Food Items from Django API
  // useEffect(() => {
  //   fetch('http://localhost:8000/food-items/')
  //     .then(response => response.json())
  //     .then(data => setFoodItems(data.items))

  //     .catch(error => console.error('Error fetching food items:', error));
  // }, []);
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <div className="flex-1 w-full bg-zinc-800/80 relative">
        <img
          src="https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          className="w-full h-full object-fill absolute -z-10"
        ></img>

        <div className="w-full h-[20%] text-center flex flex-col items-center justify-center text-white">
          <div className="text-8xl lg:text-4xl">Our Menu</div>
          <p className="pt-5 text-xl">
            Order your favorite Sushi, Sashimi, and all the other Japanese Foods you desire here.
          </p>
        </div>
        <div className="max-w-full mx-auto px-40 py-100 grid md:grid-cols-5 gap-10">
          {foodItems &&foodItems.map(item => (
            <div className="drop-shadow-2xl relative" key={item.pk}>
              <div className="absolute border-solid border-2 border-white-500 bg-black/40 h-full rounded text-white text-center w-full">
                <p className="font-bold text-2xl px-2 pt-10">{item.fields.name}</p>
                <p className="font-bold text-[15px] px-2">
                  Price: ${Number(item.fields.price).toFixed(2)}
                </p>
                <button className="border hover:bg-white hover:text-black duration-300 text-white bg-black mx-2 bottom-4 rounded px-4 py-2 mt-5">
                  Place Order
                </button>
              </div>
              <img
                className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded"
                src={item.fields.image_url}
                alt={item.fields.name}
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
