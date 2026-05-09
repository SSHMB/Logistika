import React, { useState } from "react";
import Header from "../components/Header";
import axios from "axios";

export default function ContactPage() {
  const [firstName, setFirstName] = useState('')
  const [email, setEmail] = useState('')
  const [LastName, setLastName] = useState('')
  const [massage, setMassage] = useState('')
  const [emilAddres, setEmailAdress] = useState('')

  const postEmail = async () => {
    if (!emilAddres) return alert('Email kiriting')

    await axios.post('https://api.brevo.com/v3/smtp/email', {
      sender: {
        email: import.meta.env.VITE_SENDER_EMAIL,
        name: 'MIB'
      },
      to: [{ email: emilAddres }],
      subject: "Obunangiz tasdiqlandi!",
      htmlContent: `<h2>Rahmat!</h2><p><b>${emilAddres}</b> manzili bilan muvaffaqiyatli obuna bo'ldingiz.</p>`
    }, {
      headers: {
        'api-key': import.meta.env.VITE_BREVO_API_KEY,
        'content-type': 'application/json'
      }
    })

    setEmailAdress('')
  }


  const postBot = async () => {
    const token = import.meta.env.VITE_EMIR_TOKEN
    const chatId = import.meta.env.VITE_CHAT_ID
    const text = `📩 Yangi xabar!\n👤 Ism: ${firstName} ${LastName}\n📧 Email: ${email}\n💬 Xabar: ${massage}`

    if (firstName.length > 0 && email.length > 0 && LastName.length > 0 && massage.length > 0) {
      await axios.post(`https://api.telegram.org/bot${token}/sendMessage`, {
        chat_id: chatId,
        text: text,
      })

      setFirstName('')
      setLastName('')
      setEmail('')
      setMassage('')

    } else {
      alert('xabarnomani toldring')
    }

  }

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
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              type="text"
              placeholder="Firstname"
              className="w-full border border-gray-300 rounded-[10px] p-[18px] outline-none mb-5"
            />

            <input
              value={LastName}
              onChange={(e) => setLastName(e.target.value)}
              type="text"
              placeholder="Lastname"
              className="w-full border border-gray-300 rounded-[10px] p-[18px] outline-none mb-5"
            />
          </div>

          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
            className="w-full border border-gray-300 rounded-[10px] p-[18px] outline-none mb-5"
          />

          <textarea
            value={massage}
            onChange={(e) => setMassage(e.target.value)}
            placeholder="Message..."
            className="w-full h-[180px] border border-gray-300 rounded-[10px] p-[18px] outline-none resize-none mb-5"
          ></textarea>

          <button onClick={postBot} className="w-[180px] h-[50px] bg-sky-400 text-white rounded-xl font-bold">
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
              value={emilAddres}
              onChange={(e) => setEmailAdress(e.target.value)}
              type="email"
              placeholder="Email Address"
              className="flex-1 p-4 outline-none"
            />

            <button onClick={postEmail} className="w-[50px] bg-sky-400"></button>
          </div>

        </div>

      </footer>
    </div>
  );
}