import React from "react";

const Profile = () => {
  return (
    <div className="flex items-center justify-center py-4 bg-gray-100 text-gray-900">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96 text-center">
        <img
          src="https://i.pinimg.com/736x/10/c3/01/10c301af3f882e15bdff2c03e550d4b0.jpg"
          alt="Sara"
          className="w-24 h-24 rounded-full mx-auto border-4 border-blue-500"
        />
        <h2 className="text-2xl font-bold mt-3">Sara Emilys</h2>
        <p className="text-gray-500">Emilys@example.com</p>
        <p className="text-gray-700 font-semibold mt-2">Software Engineer</p>

        

        <p className="text-gray-600 text-sm mt-3">
          Passionate about coding and technology. Love building web apps.
        </p>

        <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition">
          Edit Profile
        </button>
      </div>
    </div>
  );
};

export default Profile;