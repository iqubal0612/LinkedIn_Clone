// src/components/Header.js
import React from "react";

function Header() {
  return (
    <div className="flex items-center justify-between bg-white border-b border-gray-300 p-2">
      <div className="flex items-center">
        <img
          src="https://www.shutterstock.com/image-vector/job-portal-lettering-logo-design-260nw-1939068118.jpg"
          alt="LinkedIn logo"
          className="w-20 h-20"
        />
        <div className="flex items-center bg-white rounded-full shadow-md p-2 w-[300px] ">
          <i className="fas fa-search text-gray-400"></i>
          <input
            type="text"
            placeholder="Search"
            className="ml-2 bg-transparent outline-none flex-1 py-2 px-3 text-sm text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 rounded-full"
          />
        </div>
      </div>
      <div className="flex items-center space-x-9">
        <div className="flex flex-col items-center">
          <i className="fa-solid fa-house text-black"></i>{" "}
          <span className="text-black text-sm">Home</span>
        </div>

        <div className="flex flex-col items-center">
          <i className="fas fa-users text-gray-500"></i>
          <span className="text-black text-sm">My Network</span>
        </div>
        <div className="flex flex-col items-center">
          <i className="fas fa-briefcase text-gray-500"></i>
          <span className="text-black text-sm">Jobs</span>
        </div>
        <div className="flex flex-col items-center">
          <i className="fas fa-comment-dots text-gray-500"></i>
          <span className="text-black text-sm">Messaging</span>
        </div>
        <div className="flex flex-col items-center relative">
          <i className="fas fa-bell text-gray-500"></i>
          <span className="text-black text-sm">Notifications</span>
        </div>
        <div className="flex flex-col items-center">
          <img
            src="https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001882.png"
            alt="User profile"
            className="w-6 h-6 rounded-full"
          />
          <span className="text-gray-500 text-sm">
            Me <i className="fas fa-caret-down"></i>
          </span>
        </div>
        <div className="flex flex-col items-center">
          <i className="fas fa-th text-gray-500"></i>
          <span className="text-black text-sm">
            For Business <i className="fas fa-caret-down"></i>
          </span>
        </div>
        <div className="flex flex-col items-center">
          <i className="fas fa-gem text-yellow-500"></i>
          <span className="text-black text-sm">Try Premium for ₹0</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
