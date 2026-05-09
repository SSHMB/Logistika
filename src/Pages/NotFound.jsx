import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FaTruck,
  FaShieldAlt,
  FaGlobe,
  FaHeadset,
} from "react-icons/fa";
import { MdOutlineArrowBackIosNew } from "react-icons/md";

const Error = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white overflow-hidden relative">
      {/* Background blur */}
      <div className="absolute top-[-100px] left-[-100px] w-[350px] h-[350px] bg-blue-500/20 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-[-100px] right-[-100px] w-[400px] h-[400px] bg-cyan-500/10 blur-[140px] rounded-full"></div>

      {/* Container */}
      <div className="container mx-auto px-6 py-10 relative z-10">
        {/* Logo */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-blue-400">
            Mirafzal
            <span className="text-white ml-2 tracking-[4px] text-lg">
              LOGISTICS
            </span>
          </h1>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* LEFT */}
          <div>
            <div className="flex items-center">
              <h1 className="text-[180px] md:text-[260px] font-black text-white drop-shadow-[0_0_30px_rgba(59,130,246,0.5)]">
                4
              </h1>

              <div className="relative mx-2">
                <div className="w-[180px] h-[180px] md:w-[220px] md:h-[220px] rounded-full border-[22px] border-blue-500 flex items-center justify-center shadow-[0_0_40px_rgba(59,130,246,0.5)]">
                  <div className="text-center">
                    <h2 className="text-4xl font-bold">
                      Mirafzal
                    </h2>
                    <p className="text-blue-400 tracking-[5px] text-sm">
                      LOGISTICS
                    </p>
                  </div>
                </div>
              </div>

              <h1 className="text-[180px] md:text-[260px] font-black text-white drop-shadow-[0_0_30px_rgba(59,130,246,0.5)]">
                4
              </h1>
            </div>

         
          </div>

          {/* RIGHT */}
          <div className="bg-white/10 backdrop-blur-2xl border border-white/10 rounded-[40px] p-8 md:p-12 shadow-[0_0_40px_rgba(0,0,0,0.4)]">
            <h2 className="text-5xl font-bold mb-5">
              Sahifa topilmadi
            </h2>

            <div className="w-24 h-1 bg-blue-500 rounded-full mb-8"></div>

            <p className="text-slate-300 text-xl leading-9 mb-10">
              Kechirasiz, siz qidirayotgan sahifa mavjud emas
              yoki ko‘chirib yuborilgan.
            </p>

            <button
              onClick={() => navigate("/")}
              className="flex items-center gap-3 bg-blue-600 hover:bg-blue-700 duration-300 px-8 py-5 rounded-2xl text-xl font-semibold shadow-lg"
            >
              <MdOutlineArrowBackIosNew />
              Bosh sahifaga qaytish
            </button>
          </div>
        </div>

    
      </div>
    </div>
  );
};

export default Error;