import React from 'react';
import NavBar from '../components/NavBar';
import Link from 'next/link';
import 'tailwindcss/tailwind.css';
import Footer from '../components/Footer';

const Order = () => {
  return (
    <div>
      <NavBar />
      <div className="w-full h-screen top-[10px] bg-zinc-800/80">
        <img
          src="https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          className="w-full h-full object-cover absolute -z-10"
        ></img>

        <div className="w-full h-[20%] text-center flex flex-col items-center justify-center text-white">
          <h1 className="">Our Menu</h1>
          <p className="">
            Order your favorite Sushi, Sashimi, <br></br> and all the other Japanese Foods you desire here
          </p>
        </div>

        <div className="max-w-full mx-auto px-20 py-0 grid md:grid-cols-5 gap-10">
          <div className="drop-shadow-2xl relative">
            <div className="absolute border-solid border-2 border-white-500 bg-black/40 h-full rounded text-white text-center w-full">
              <p className="font-bold text-2xl px-2 pt-10">California roll</p>
              <p className="font-bold text-[15px] px-2">Price: $2.50</p>
              <button className="border hover:bg-white hover:text-black duration-300 text-white bg-black mx-2 bottom-4 rounded px-4 py-2 mt-5">
                Place Order
              </button>
            </div>
            <img
              className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded"
              src="https://norecipes.com/wp-content/uploads/2012/07/california-roll-012.jpg"
              alt="/"
            ></img>
          </div>

          <div className="drop-shadow-2xl relative">
            <div className="absolute border-solid border-2 border-white-500 bg-black/40 h-full rounded text-white text-center w-full">
              <p className="font-bold text-2xl px-2 pt-10">rainbow roll</p>
              <p className="font-bold text-[15px] px-2">Price: $3.50</p>
              <button className="border hover:bg-white hover:text-black duration-300 text-white bg-black mx-2 bottom-4 rounded px-4 py-2 mt-5">
                Place Order
              </button>
            </div>
            <img
              className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded"
              src="https://mysushikitchen.com/wp-content/uploads/2021/10/Rainbow-Roll.jpg"
              alt="/"
            ></img>
          </div>

          <div className="drop-shadow-2xl relative">
            <div className="absolute border-solid border-2 border-white-500 bg-black/40 h-full rounded text-white text-center w-full">
              <p className="font-bold text-2xl px-2 pt-10">dragon roll</p>
              <p className="font-bold text-[15px] px-2">Price: $4.00</p>
              <button className="border hover:bg-white hover:text-black duration-300 text-white bg-black mx-2 bottom-4 rounded px-4 py-2 mt-5">
                Place Order
              </button>
            </div>
            <img
              className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded"
              src="https://popmenucloud.com/cdn-cgi/image/width=1920,height=1920,format=auto,fit=scale-down/bqynrcpd/51cc88b2-57da-419f-accb-2c4883d53e25.JPG"
              alt="/"
            ></img>
          </div>

          <div className="drop-shadow-2xl relative">
            <div className="absolute border-solid border-2 border-white-500 bg-black/40 h-full rounded text-white text-center w-full">
              <p className="font-bold text-2xl px-2 pt-10">Salmon Sashimi</p>
              <p className="font-bold text-[15px] px-2">Price: $2.00</p>
              <button className="border hover:bg-white hover:text-black duration-300 text-white bg-black mx-2 bottom-4 rounded px-4 py-2 mt-5">
                Place Order
              </button>
            </div>
            <img
              className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded"
              src="https://www.manusmenu.com/wp-content/uploads/2016/05/1-Salmon-Sashimi-with-Ponzu-3-1-of-1.jpg"
              alt="/"
            ></img>
          </div>

          <div className="drop-shadow-2xl relative">
            <div className="absolute border-solid border-2 border-white-500 bg-black/40 h-full rounded text-white text-center w-full">
              <p className="font-bold text-2xl px-2 pt-10">YellowTail Sashimi</p>
              <p className="font-bold text-[15px] px-2">Price: $2.00</p>
              <button className="border hover:bg-white hover:text-black duration-300 text-white bg-black mx-2 bottom-4 rounded px-4 py-2 mt-5">
                Place Order
              </button>
            </div>
            <img
              className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded"
              src="https://honest-food.net/wp-content/uploads/2022/08/hamachi-sashimi-recipe.jpg"
              alt="/"
            ></img>
          </div>

          <div className="drop-shadow-2xl relative">
            <div className="absolute border-solid border-2 border-white-500 bg-black/40 h-full rounded text-white text-center w-full">
              <p className="font-bold text-2xl px-2 pt-10">White Tuna Sashimi</p>
              <p className="font-bold text-[15px] px-2">Price: $2.00</p>
              <button className="border hover:bg-white hover:text-black duration-300 text-white bg-black mx-2 bottom-4 rounded px-4 py-2 mt-5">
                Place Order
              </button>
            </div>
            <img
              className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded"
              src="https://onefork.nyc/uploads/foods/6704.jpg?t=1694235216"
              alt="/"
            ></img>
          </div>
          <div className="drop-shadow-2xl relative">
            <div className="absolute border-solid border-2 border-white-500 bg-black/40 h-full rounded text-white text-center w-full">
              <p className="font-bold text-2xl px-2 pt-10">Red Tuna sashimi</p>
              <p className="font-bold text-[15px] px-2">Price: $2.00</p>
              <button className="border hover:bg-white hover:text-black duration-300 text-white bg-black mx-2 bottom-4 rounded px-4 py-2 mt-5">
                Place Order
              </button>
            </div>
            <img
              className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded"
              src="https://dinkoseafoods.com.au/wp-content/uploads/2021/05/Dinko-Tuna-Simple-Bluefin-Tuna-Sashimi.jpg"
              alt="/"
            ></img>
          </div>

          <div className="drop-shadow-2xl relative">
            <div className="absolute border-solid border-2 border-white-500 bg-black/40 h-full rounded text-white text-center w-full">
              <p className="font-bold text-2xl px-2 pt-10">Spider Roll</p>
              <p className="font-bold text-[15px] px-2">Price: $5.00</p>
              <button className="border hover:bg-white hover:text-black duration-300 text-white bg-black mx-2 bottom-4 rounded px-4 py-2 mt-5">
                Place Order
              </button>
            </div>
            <img
              className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded"
              src="https://mysushikitchen.com/wp-content/uploads/2022/02/Spider-Roll.jpg"
              alt="/"
            ></img>
          </div>

          <div className="drop-shadow-2xl relative">
            <div className="absolute border-solid border-2 border-white-500 bg-black/40 h-full rounded text-white text-center w-full">
              <p className="font-bold text-2xl px-2 pt-10">Eel avocado roll</p>
              <p className="font-bold text-[15px] px-2">Price: $4.50</p>
              <button className="border hover:bg-white hover:text-black duration-300 text-white bg-black mx-2 bottom-4 rounded px-4 py-2 mt-5">
                Place Order
              </button>
            </div>
            <img
              className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded"
              src="https://eatthisct.com/wp-content/uploads/2021/02/Eel-avocado-roll-Ginza-1.jpg"
              alt="/"
            ></img>
          </div>

          <div className="drop-shadow-2xl relative">
            <div className="absolute border-solid border-2 border-white-500 bg-black/40 h-full rounded text-white text-center w-full">
              <p className="font-bold text-2xl px-2 pt-10">Alaska Roll</p>
              <p className="font-bold text-[15px] px-2">Price: $4.00</p>
              <button className="border hover:bg-white hover:text-black duration-300 text-white bg-black mx-2 bottom-4 rounded px-4 py-2 mt-5">
                Place Order
              </button>
            </div>
            <img
              className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded"
              src="https://rusticfamilyrecipes.com/wp-content/uploads/2022/09/Alaska-roll-21_1.jpg"
              alt="/"
            ></img>
          </div>

          <div className="drop-shadow-2xl relative">
            <div className="absolute border-solid border-2 border-white-500 bg-black/40 h-full rounded text-white text-center w-full">
              <p className="font-bold text-2xl px-2 pt-10">Tuna Tataki sashimi</p>
              <p className="font-bold text-[15px] px-2">Price: $2.50</p>
              <button className="border hover:bg-white hover:text-black duration-300 text-white bg-black mx-2 bottom-4 rounded px-4 py-2 mt-5">
                Place Order
              </button>
            </div>
            <img
              className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded"
              src="https://www.carolinescooking.com/wp-content/uploads/2020/10/Japanese-recipes-square.jpg"
              alt="/"
            ></img>
          </div>

          <div className="drop-shadow-2xl relative">
            <div className="absolute border-solid border-2 border-white-500 bg-black/40 h-full rounded text-white text-center w-full">
              <p className="font-bold text-2xl px-2 pt-10">Spicy Tuna Roll</p>
              <p className="font-bold text-[15px] px-2">Price: $4.75</p>
              <button className="border hover:bg-white hover:text-black duration-300 text-white bg-black mx-2 bottom-4 rounded px-4 py-2 mt-5">
                Place Order
              </button>
            </div>
            <img
              className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded"
              src="https://www.rachelphipps.com/wp-content/uploads/2020/12/Spicy-Tinned-Tuna-Rolls.jpg"
              alt="/"
            ></img>
          </div>
          <div className="drop-shadow-2xl relative">
            <div className="absolute border-solid border-2 border-white-500 bg-black/40 h-full rounded text-white text-center w-full">
              <p className="font-bold text-2xl px-2 pt-10">Shrimp Tempura Roll</p>
              <p className="font-bold text-[15px] px-2">Price: 6.40</p>
              <button className="border hover:bg-white hover:text-black duration-300 text-white bg-black mx-2 bottom-4 rounded px-4 py-2 mt-5">
                Place Order
              </button>
            </div>
            <img
              className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded"
              src="https://norecipes.com/wp-content/uploads/2022/02/shrimp-tempura-roll-004.jpg"
              alt="/"
            ></img>
          </div>

          <div className="drop-shadow-2xl relative">
            <div className="absolute border-solid border-2 border-white-500 bg-black/40 h-full rounded text-white text-center w-full">
              <p className="font-bold text-2xl px-2 pt-10">Ahi Sashimi</p>
              <p className="font-bold text-[15px] px-2">Price: 2.00</p>
              <button className="border hover:bg-white hover:text-black duration-300 text-white bg-black mx-2 bottom-4 rounded px-4 py-2 mt-5">
                Place Order
              </button>
            </div>
            <img
              className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded"
              src="https://ocwildseafood.com/cdn/shop/articles/Ahi_Tuna_Sashimi_Seafood_Recipe_1024x.jpg?v=1591853624"
              alt="/"
            ></img>
          </div>

          <div className="drop-shadow-2xl relative">
            <div className="absolute border-solid border-2 border-white-500 bg-black/40 h-full rounded text-white text-center w-full">
              <p className="font-bold text-2xl px-2 pt-10">Ikura Sushi</p>
              <p className="font-bold text-[15px] px-2">Price: 8.00</p>
              <button className="border hover:bg-white hover:text-black duration-300 text-white bg-black mx-2 bottom-4 rounded px-4 py-2 mt-5">
                Place Order
              </button>
            </div>
            <img
              className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded"
              src="https://www.sushi-pedia.com/static/59cc5443d7eaaf02d61bff50a2597469/91adb/ikura-salmon-roe-sushi-opener.jpg"
              alt="/"
            ></img>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Order;
