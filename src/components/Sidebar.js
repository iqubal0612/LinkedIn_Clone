// src/components/Sidebar.js
import React from "react";

function Sidebar() {
  return (
    <aside className="w-2/3 bg-white p-4 rounded-lg shadow-sm mx-14">
      <div className="p-4 border rounded-lg shadow-md w-64">
        <div className="flex flex-col items-center">
          <img
            src="https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001882.png"
            alt="User Profile"
            className="h-20 w-20 rounded-full"
          />
          <h2 className="mt-2 text-lg font-semibold">Md Faizur Rahman</h2>
          <p className="text-center text-sm text-gray-600">
            B.tech 4th year student || React.js || Node.js || Express.js ||
            ReactNative || SQL || HTML || CSS || JavaScript || Java || DSA
          </p>
        </div>
        &nbsp;
        <hr></hr>
        <div className="mt-4">
          <div className="flex justify-between text-sm text-gray-600">
            <span>Profile viewers</span>
            <span className="text-blue-600">12</span>
          </div>
          <div className="flex justify-between text-sm text-gray-600 mt-2">
            <span>Post impressions</span>
            <span className="text-blue-600">6</span>
          </div>
          &nbsp;
          <hr></hr>
        </div>
        <div className="mt-4">
          <h3 className="text-sm font-semibold">Achieve your career goals</h3>
          <button className="mt-2 w-full bg-yellow-500 text-white py-1 rounded">
            Try Premium for ₹0
          </button>
        </div>
        <hr></hr>
        <div className="mt-4 flex items-center">
          <h3 className="text-sm font-semibold">Saved items</h3>
        </div>
      </div>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <div className="p-4 border rounded-lg shadow-md w-64">
        {/* Recent Section */}
        <div className="mb-4">
          <h2 className="text-gray-800 font-semibold">Recent</h2>
          <div className="flex items-center mt-2">
            <i className="fas fa-users text-gray-600 mr-2"></i>
            <span className="text-gray-800">The Sparks Foundation Network</span>
          </div>
        </div>

        {/* Groups Section */}
        <div className="mb-4">
          <h2 className="text-blue-600 font-semibold">Groups</h2>
          <div className="flex items-center mt-2">
            <i className="fas fa-users text-gray-600 mr-2"></i>
            <span className="text-gray-800">The Sparks Foundation Network</span>
          </div>
          <div className="mt-2">
            <span className="text-gray-600">See all</span>
          </div>
        </div>

        {/* Events Section */}
        <div className="mb-4">
          <div>
            <h2 className="text-blue-600 font-semibold">
              Events
              <span>
                <i className="fas fa-plus text-gray-600 mr-2"></i>
              </span>
            </h2>
          </div>
        </div>

        {/* Followed Hashtags Section */}
        <div className="mb-4">
          <h2 className="text-blue-600 font-semibold">Followed Hashtags</h2>
        </div>

        {/* Discover More Section */}
        <div className="border-t pt-4">
          <h2 className="text-gray-800 font-semibold">Discover more</h2>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
