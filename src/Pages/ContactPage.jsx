import React from "react";
import Header from "../components/Header";

export default function ContactPage() {
  return (
    <div className="w-full min-h-screen bg-[#f8f8f8] font-sans">
      <Header />

   
   
      <section className="h-[300px] bg-linear-to-r from-[#5ca9ff] to-[#7ab8ff] flex items-center justify-between px-[70px] overflow-hidden">

        <div>
          <h1 className="text-white text-[60px] font-bold mb-5">
            Contact us
          </h1>

          <p className="text-white text-[20px] leading-[1.8]">
            We provide a complete service for the sale,
            <br />
            purchase or rental of real estate.
          </p>
        </div>

        <img
          src="/building.png"
          alt="building"
          className="w-[300px]"
        />
      </section>

      
      <section className="bg-white flex justify-center gap-[100px] px-[70px] py-20">

        
        <div className="w-[500px]">

          <div className="flex gap-5">
            <input
              type="text"
              placeholder="Firstname"
              className="w-full border border-gray-300 rounded-[10px] p-[18px] outline-none mb-5"
            />

            <input
              type="text"
              placeholder="Lastname"
              className="w-full border border-gray-300 rounded-[10px] p-[18px] outline-none mb-5"
            />
          </div>

          <input
            type="email"
            placeholder="Email"
            className="w-full border border-gray-300 rounded-[10px] p-[18px] outline-none mb-5"
          />

          <textarea
            placeholder="Message..."
            className="w-full h-[180px] border border-gray-300 rounded-[10px] p-[18px] outline-none resize-none mb-5"
          ></textarea>

          <button className="w-[180px] h-[50px] bg-sky-400 text-white rounded-xl font-bold">
            SEND
          </button>
        </div>

    
        <div className="w-[350px]">

          <h2 className="text-[40px] font-bold mb-4">
            Contact Information
          </h2>

          <p className="text-gray-500 mb-8">
            Say something to start a live chat!
          </p>

          <div className="flex gap-4 mb-8">
            <span>📞</span>
            <p className="text-gray-600">+1012 3456 789</p>
          </div>

          <div className="flex gap-4 mb-8">
            <span>✉</span>
            <p className="text-gray-600">demo@gmail.com</p>
          </div>

          <div className="flex gap-4 mb-8">
            <span>📍</span>

            <p className="text-gray-600 leading-7">
              132 Dartmouth Street Boston,
              Massachusetts 02156 United States
            </p>
          </div>

          <div className="flex gap-5 text-[22px]">
            <span>📘</span>
            <span>🐦</span>
            <span>📸</span>
            <span>💼</span>
          </div>

        </div>
      </section>


      <footer className="bg-white flex justify-between flex-wrap px-[70px] py-[100px]">

     
     
        <div className="w-[300px]">

          <h2 className="text-2xl font-bold">
            logoipsum
          </h2>

          <p className="text-gray-500 leading-8 my-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <div className="flex gap-4 text-[20px] mb-5">
            <span>📘</span>
            <span>🐦</span>
            <span>📸</span>
            <span>💼</span>
          </div>

          <small className="text-gray-400">
            © 2021 . All rights reserved.
          </small>
        </div>

       
       
        <div className="flex flex-col gap-5">
          <h4 className="font-bold text-lg">Take a tour</h4>

          <a href="#">Features</a>
          <a href="#">Partners</a>
          <a href="#">Pricing</a>
          <a href="#">Product</a>
          <a href="#">Support</a>
        </div>

        <div className="flex flex-col gap-5">
          <h4 className="font-bold text-lg">Our Company</h4>

          <a href="#">About Us</a>
          <a href="#">Agents</a>
          <a href="#">Blog</a>
          <a href="#">Media</a>
          <a href="#">Contact Us</a>
        </div>

       
       
        <div className="w-[280px]">

          <h4 className="font-bold text-lg mb-5">
            Subscribe
          </h4>

          <p className="text-gray-500 leading-8 mb-5">
            Subscribe to get latest property,
            blog news from us
          </p>

          <div className="flex border border-gray-300 rounded-xl overflow-hidden">

            <input
              type="email"
              placeholder="Email Address"
              className="flex-1 p-4 outline-none"
            />

            <button className="w-[50px] bg-sky-400"></button>
          </div>

        </div>

      </footer>
    </div>
  );
}