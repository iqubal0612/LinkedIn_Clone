// src/App.js
import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import NewsSection from "./components/NewsSection";

function App() {
  return (
    <div className="min-h-screen bg-grey-100">
      <Header />
      <main className="flex w-full max-w-6xl mt-4">
        <Sidebar />
        <MainContent />
        <NewsSection />
      </main>
    </div>
  );
}

export default App;
