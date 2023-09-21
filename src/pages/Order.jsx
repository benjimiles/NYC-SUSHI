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
      .then((response) => response.json())
      .then((data) => setFoodItems(data.items))

      .catch((error) => console.error('Error fetching food items:', error));
  }, []);
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <div className="flex-1 w-full bg-[#9DB2BF]">
        <div className="w-full h-[30%] text-center flex flex-col items-center justify-center text-white">
          <div className="text-6xl text-black mt-4 font-bold">Our Menu</div>
          <p className="pt-5 text-xl">
            Order your favorite Sushi, Sashimi, and all the other Japanese Foods you desire here.{' '}
            <span className="cursor-pointer text-black font-bold active:text-blue-800">
              <Link href="Admin">Add more items</Link>
            </span>
          </p>
        </div>
        <div className="my-8 max-w-full h-full mx-auto px-40 py-100 grid sm:grid-cols-3 md:grid-cols-5 gap-10">
          {foodItems &&
            foodItems.map((item) => (
              <div className="drop-shadow-lg" key={item.pk}>
                <div className="absolute border-solid border-2 border-black bg-black/40 h-full rounded-xl  text-white text-center w-full">
                  <p className="font-bold text-2xl px-2 pt-2">{item.name}</p>
                  <p className="font-bold text-[15px] px-2">Price: ${Number(item.price).toFixed(2)}</p>
                  <button className="border active:bg-blue-400 hover:bg-white hover:text-black duration-300 text-white bg-black mx-2 bottom-4 rounded px-4 py-2">
                    Order
                  </button>
                </div>
                <img
                  className="h-screen md:max-h-[150px] sm:max-h-[150px] w-screen object-cover rounded-xl"
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
