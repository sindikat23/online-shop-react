import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa6";
import { IoLogoTwitter } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        <div>
          <h3 className="text-lg font-semibold mb-4 cursor-pointer">KATEGORIYALAR</h3>
          <ul className="space-y-2 text-gray-400">
            <li className="hover:underline"><a href="#">Smartfon</a></li>
            <li className="hover:underline"><a href="#">Soatlar</a></li>
            <li className="hover:underline"><a href="#">Aksesuarlar</a></li>
            <li className="hover:underline"><a href="#">Uy uchun texnika</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4 cursor-pointer">MA'LUMOTLAR</h3>
          <ul className="space-y-2 text-gray-400">
            <li className="hover:underline"><a href="#">Yetkazib berish</a></li>
            <li className="hover:underline"><a href="#">To'lov</a></li>
            <li className="hover:underline"><a href="#">Qaytarish</a></li>
            <li className="hover:underline"><a href="#">FAQ</a></li>
          </ul>
        </div>

        {/* Kontakt */}
        <div>
          <h3 className="text-lg font-semibold mb-4 cursor-pointer">KONTAKTLAR</h3>
          <p className="text-gray-400 cursor-pointer hover:underline">info@stop-shop.uz</p>
          <p className="text-gray-400 cursor-pointer hover:underline">+998 90 000 00 00</p>
          <div className="mt-4 flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">
              <h1>Biz bilan bog'lanish:</h1>
            <div className="flex justify-evenly py-4 text-xl">
            <FaFacebook />
            <FaInstagram />
            <FaTelegram />
            <IoLogoTwitter />
            </div>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4 cursor-pointer">YANGILIKLARGA OBUNA BO‘LING</h3>
          <input 
            type="email" 
            placeholder="Email manzilingiz" 
            className="w-full px-3 py-2 text-gray-900 rounded-md focus:outline-none bg-white"
          />
          <button className="mt-2 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
            Obuna bo‘lish
          </button>
          <p className="text-xs text-gray-500 mt-2">
            Siz bizning yangiliklarimiz va maxsus takliflarimizni olasiz.
          </p>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-400 cursor-pointer">
        <p>© 2025 Stop Shop. Arzon va sifatli.</p>
      </div>
    </footer>
  );
};
export default Footer