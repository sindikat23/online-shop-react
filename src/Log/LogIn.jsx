import App from '../App';
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate(); 

  const handleLogin = async () => {
    setMessage("Yuklanmoqda...");

    try {
      const response = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username,
          password,
          expiresInMins: 30,
        }),
      });


      if (response.ok) {
        setMessage(`Muvaffaqiyatli! Token: Successfull`);
        navigate('/about')
    } else {
        setMessage(`Xatolik: login yoki parolingiz xato`);
      }
    } catch (error) {
      setMessage("Server bilan bog‘lanishda xatolik yuz berdi.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
        <h1 className='text-green-500 text-2xl font-bold my-5'><span className='text-red-500'>Stop</span> Shop</h1>
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
        
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-2 mb-3 rounded bg-gray-700 border border-gray-600 text-white"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 mb-4 rounded bg-gray-700 border border-gray-600 text-white"
        />

        <button
          onClick={handleLogin}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded transition"
        >
          Login
        </button>

        {message && <p className="mt-4 text-center text-sm">{message}</p>}
      </div>
    </div>
  );
}