import React from 'react';
import logo from '../assets/google-logo.png';
import Header from './Header';
import SearchInput from './SearchInput';
import Footer from "./Footer";

function Home() {
  return (
    <div className="h-[100vh] flex flex-col ">
      <Header />
      <main className="grow flex justify-center">
        <div className="w-full px-5 flex flex-col items-center mt-44">
          <img className="w-[11rem] md:w-[17rem] mb-8" src={logo} alt="logo" />

          <SearchInput />
          <div className="flex gap-2 text-[#3c4043] mt-8">
            <button className="h-9 px-4 bg-[#f8f9fa] text-sm rounded-md border border-[#f8f9fa] hover:border-[#dadce0]  hover:shadow-c2">
              Google Search
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
