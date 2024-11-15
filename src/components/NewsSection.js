import React from "react";

// NewsItem Component to display each news item
const NewsItem = ({ title, time, readers }) => (
  <div>
    <h3 className="font-semibold">{title}</h3>
    <p className="text-gray-500 text-sm">
      {time} • {readers} readers
    </p>
  </div>
);

// PuzzleItem Component to display each puzzle item
const PuzzleItem = ({ image, title, description }) => (
  <div className="flex items-center justify-between">
    <div className="flex items-center space-x-4">
      <img src={image} alt={`${title} puzzle icon`} className="w-10 h-10" />
      <div>
        <div className="font-semibold">{title}</div>
        <div className="text-gray-500">{description}</div>
      </div>
    </div>
    <i className="fas fa-chevron-right text-gray-400"></i>
  </div>
);

// Tip Component to display a tip message
const Tip = () => (
  <div className="mt-6 p-4 bg-gray-100 rounded-lg flex items-center space-x-2">
    <div className="bg-yellow-200 text-yellow-800 font-semibold px-2 py-1 rounded">
      TIP
    </div>
    <div>Try LinkedIn on the Windows App</div>
  </div>
);

// Footer Component to display footer links
const Footer = () => (
  <div className="mt-6 text-sm text-gray-600">
    <div className="flex flex-wrap justify-center space-x-4">
      <a href="#" className="hover:underline">
        About
      </a>
      <a href="#" className="hover:underline">
        Accessibility
      </a>
      <a href="#" className="hover:underline">
        Help Center
      </a>
      <a href="#" className="hover:underline">
        Privacy & Terms
      </a>
      <a href="#" className="hover:underline">
        Ad Choices
      </a>
      <a href="#" className="hover:underline">
        Advertising
      </a>
      <a href="#" className="hover:underline">
        Business Services
      </a>
      <a href="#" className="hover:underline">
        Get the Portal app
      </a>
      <a href="#" className="hover:underline">
        More
      </a>
    </div>
  </div>
);

// NewsSection Component to display the entire news and puzzle section
const NewsSection = () => {
  return (
    <div className=" p-10 max-w-md mx-6 bg-grey rounded-lg shadow-xl ">
      {/* Header Section */}
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-xl font-bold"> News</h1>
        <i className="fas fa-info-circle text-gray-500"></i>
      </div>

      {/* Subheader */}
      <h2 className="text-gray-500 mb-4">Top stories</h2>

      {/* News Items */}
      <div className="space-y-4">
        <NewsItem
          title="Semiconductor industry"
          time="2d ago"
          readers="4,943"
        />
        <NewsItem title="COP29" time="3d ago" readers="3,252" />
        <NewsItem title="Indian banks" time="2d ago" readers="2,818" />
        <NewsItem title="Retail inflation" time="2d ago" readers="1,992" />
        <NewsItem
          title="Patent applications in India"
          time="2d ago"
          readers="1,342"
        />
      </div>

      {/* Show more link */}
      <div className="mt-4 text-blue-600 font-semibold">
        <a href="#" className="flex items-center">
          Show more <i className="fas fa-chevron-down ml-1"></i>
        </a>
      </div>

      {/* Puzzle Section */}
      <h2 className="text-gray-500 mt-6 mb-4">Today's puzzles</h2>
      <div className="space-y-4">
        <PuzzleItem
          image="https://static.vecteezy.com/system/resources/previews/000/494/240/original/square-puzzle-vector-illustration.jpg"
          title="Tango"
          description="Harmonize the grid"
        />
        <PuzzleItem
          image="https://thumbs.dreamstime.com/z/queens-icon-monarch-265219610.jpg"
          title="Queens"
          description="Crown each region"
        />
        <PuzzleItem
          image="https://thumbs.dreamstime.com/z/pinpoint-icon-flat-vector-template-design-trendy-simple-isolated-illustration-signage-180041547.jpg"
          title="Pinpoint"
          description="Guess the category"
        />
        <PuzzleItem
          image="https://static.vecteezy.com/system/resources/previews/000/494/240/original/square-puzzle-vector-illustration.jpg"
          title="Crossclimb"
          description="Unlock a trivia ladder"
        />
      </div>

      {/* Tip */}
      {/* <Tip /> */}

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default NewsSection;
