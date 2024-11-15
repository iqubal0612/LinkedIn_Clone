// src/components/MainContent.js
import React from "react";

function MainContent() {
  return (
    <section className="w-2/3 mx-14 bg-white p-4 rounded-lg shadow-xl mx-8 ">
      {/* User Post Section */}
      <div className="bg-white p-4 rounded-lg shadow-xl ">
        <div className="flex items-center">
          <img
            src="https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001882.png"
            alt="User Profile"
            className="h-10 w-10 rounded-full"
          />
          <input
            type="text"
            placeholder="Start a post, try writing with AI"
            className="ml-2 p-2 w-full border rounded-full"
          />
        </div>
        <div className="flex justify-between mt-2">
          <button className="flex items-center text-gray-600">
            <i className="fas fa-image text-blue-600"></i>
            <span className="ml-1">Media</span>
          </button>
          <button className="flex items-center text-gray-600">
            <i className="fas fa-calendar-alt text-orange-600"></i>
            <span className="ml-1">Event</span>
          </button>
          <button className="flex items-center text-gray-600">
            <i className="fas fa-file-alt text-yellow-600"></i>
            <span className="ml-1">Write article</span>
          </button>
        </div>
      </div>

      {/* User Post Example 1 */}
      <div className="bg-white p-4 rounded-lg shadow-xl mt-4">
        {/* <div className="bg-white p-4 rounded-lg shadow-sm mt-4"> */}
        <div className="flex items-center">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQanlasPgQjfGGU6anray6qKVVH-ZlTqmuTHw&s"
            alt="User Profile"
            className="h-10 w-10 rounded-full"
          />
          <div className="ml-2">
            <h4 className="text-sm font-semibold">Md Asif Iqubal</h4>
            <p className="text-xs text-gray-600">
              Frontend Developer | React.js | Java
            </p>
            <p className="text-xs text-gray-600">
              1w <i className="fas fa-globe"></i>
            </p>
          </div>
        </div>
        <p className="mt-2 text-sm">
          I’m happy to share that I’ve obtained a new certification
        </p>
        <img
          src="https://marketplace.canva.com/EAFGv9WhSmc/1/0/1600w/canva-blue-and-yellow-minimalist-employee-of-the-month-certificate-jaIc19nYjY4.jpg"
          alt="Celebration Image"
          className="mt-2 w-full rounded"
        />
        &nbsp;
        {/* </div> */}
        {/* User Post Example  */}
        {/* <div className="bg-white p-4 rounded-lg shadow-sm mt-4 border-t border-gray-300"> */}
        <div className="flex items-center space-x-4 mb-4">
          <button className="flex items-center space-x-1 text-gray-600">
            <i className="fas fa-thumbs-up"></i>
            <span>Like</span>
          </button>
          <button className="flex items-center space-x-1 text-gray-600">
            <i className="fas fa-comment-alt"></i>
            <span>Comment</span>
          </button>
          <button className="flex items-center space-x-1 text-gray-600">
            <i className="fas fa-retweet"></i>
            <span>Repost</span>
          </button>
          <button className="flex items-center space-x-1 text-gray-600">
            <i className="fas fa-paper-plane"></i>
            <span>Send</span>
          </button>
        </div>
        {/* <div className="flex space-x-2 mb-4">
          <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-600 bg-white hover:bg-gray-100 transition duration-200 ease-in-out shadow-sm">
            Congrats Md Tauqueer! 🎉
          </button>
          <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-600 bg-white hover:bg-gray-100 transition duration-200 ease-in-out shadow-sm">
            Best of luck
          </button>
          <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-600 bg-white hover:bg-gray-100 transition duration-200 ease-in-out shadow-sm">
            🎉🎉🎉
          </button>
          <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-600 bg-white hover:bg-gray-100 transition duration-200 ease-in-out shadow-sm">
            🎉🎉🎉
          </button>
         </div> */}
        <div className="flex items-center space-x-2">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQanlasPgQjfGGU6anray6qKVVH-ZlTqmuTHw&s"
            alt="Profile picture of a person"
            className="w-10 h-10 rounded-full"
          />
          <input
            type="text"
            placeholder="Add a comment..."
            className="flex-1 border rounded-full px-4 py-2"
          />
          <button className="text-gray-600">
            <i className="fas fa-smile"></i>
          </button>
          <button className="text-gray-600">
            <i className="fas fa-image"></i>
          </button>
        </div>
        {/* </div> */}
      </div>

      {/* User Post Example 2 */}
      <div className="bg-white p-4 rounded-lg shadow-xl mt-4">
        {/* <div className="bg-white p-4 rounded-lg shadow-sm mt-4"> */}
        <div className="flex items-center">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQanlasPgQjfGGU6anray6qKVVH-ZlTqmuTHw&s"
            alt="User Profile"
            className="h-10 w-10 rounded-full"
          />
          <div className="ml-2">
            <h4 className="text-sm font-semibold">Md Tauqueer Rehan</h4>
            <p className="text-xs text-gray-600">
              Machine Learning | Java | Python | Sql
            </p>
            <p className="text-xs text-gray-600">
              1w <i className="fas fa-globe"></i>
            </p>
          </div>
        </div>
        <p className="mt-2 text-sm">
          I’m happy to share that I’ve obtained a new certification
        </p>
        <img
          src="https://image.freepik.com/free-vector/certificate_12454-2195.jpg"
          alt="Celebration Image"
          className="mt-2 w-full rounded"
        />
        &nbsp;
        {/* </div> */}
        {/* Interaction Section (Like, Comment, etc.) */}
        {/* <div className="bg-white p-4 rounded-lg shadow-sm mt-4 border-t border-gray-300"> */}
        <div className="flex items-center space-x-4 mb-4">
          <button className="flex items-center space-x-1 text-gray-600">
            <i className="fas fa-thumbs-up"></i>
            <span>Like</span>
          </button>
          <button className="flex items-center space-x-1 text-gray-600">
            <i className="fas fa-comment-alt"></i>
            <span>Comment</span>
          </button>
          <button className="flex items-center space-x-1 text-gray-600">
            <i className="fas fa-retweet"></i>
            <span>Repost</span>
          </button>
          <button className="flex items-center space-x-1 text-gray-600">
            <i className="fas fa-paper-plane"></i>
            <span>Send</span>
          </button>
        </div>
        {/* <div className="flex space-x-2 mb-4">
          <button className="px-4 py-2 border rounded-full text-gray-600">
            Congrats Md Tauqueer! 🎉
          </button>
          <button className="px-4 py-2 border rounded-full text-gray-600">
            Best of luck
          </button>
          <button className="px-4 py-2 border rounded-full text-gray-600">
            🎉🎉🎉
          </button>
          <button className="px-4 py-2 border rounded-full text-gray-600">
            🎉🎉🎉
          </button>
         </div> */}
        <div className="flex items-center space-x-2">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQanlasPgQjfGGU6anray6qKVVH-ZlTqmuTHw&s"
            alt="Profile picture of a person"
            className="w-10 h-10 rounded-full"
          />
          <input
            type="text"
            placeholder="Add a comment..."
            className="flex-1 border rounded-full px-4 py-2"
          />
          <button className="text-gray-600">
            <i className="fas fa-smile"></i>
          </button>
          <button className="text-gray-600">
            <i className="fas fa-image"></i>
          </button>
        </div>
        {/* </div> */}
      </div>
    </section>
  );
}

export default MainContent;
