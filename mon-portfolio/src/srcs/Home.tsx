import React from "react";
import { Link } from "react-router-dom";
import { SiNextdotjs, SiReact, SiDocker, SiGrafana, SiVagrant, SiOwasp, SiNginx } from "react-icons/si";

export default function Home() {
  return(
    <div className="min-h-screen bg-[#131527] text-white font-sans flex flex-col relative overflow-hidden">

      <div className="pt-6 w-full flex justify-center z-10">
        <nav className="flex items-center justify-between bg-[#ffc5d9] text-[#131527] rounded-full px-6 py-2 w-full max-w-4xl shadow-lg">
          <div className="font-extrabold text-pink-600 tracking-widest text-lg ml-2">LALAINA</div>
          <ul className="flex space-x-6 text-xs font-bold uppercase tracking-wide">
            <li>
                <Link to="/" className="hover:text-pink-500 cursor-pointer pb-1">Home</Link>
            </li>
            <li>
                <Link to="/AboutMe" className="hover:text-pink-500 cursor-pointer pb-1">About</Link>
            </li>
            <li>
                <Link to="/Projects" className="hover:text-pink-500 cursor-pointer pb-1">Projects</Link>
            </li>
            <li>
                <Link to="/Skills" className="hover:text-pink-500 cursor-pointer pb-1">Skills</Link>
            </li>
            <li>
                <Link to="/Cert&School" className="hover:text-pink-500 cursor-pointer pb-1">Cert.&School</Link>
            </li>
            <li>
                <Link to="/Contacts" className="hover:text-pink-500 cursor-pointer pb-1">Contacts</Link>
            </li>
          </ul>
          <button
            // onClick={()=>window.open('')} mail  
            className="bg-[#ff3b80] hover:bg-pink-600 text-white px-6 py-2 rounded-full font-bold text-sm shadow-md transition-colors">
            Hire Me
          </button>
        </nav>
      </div>

      <main className="flex-1 flex items-center justify-between w-full max-w-5xl mx-auto mt-8 px-6 z-10">
        
        <div className="max-w-lg space-y-5">
          <h1 className="text-5xl font-bold text-white tracking-wide">
             Welcome  ☺️​
          </h1>

          <p className="tracking-[0.15em] text-xs text-gray-300 font-semibold uppercase">ANDRIANARIVONY Miarintsoa Tokilalaina</p>
          
          <h2 className="text-3xl font-semibold text-[#ff3b80] animate-[pulse_10s_cubic-bezier(0.4,0,0.6,1)_infinite]">
          Full-stack developer & DevSecOps profile
          </h2>
          
          <p className="text-gray-400 text-sm leading-relaxed max-w-md">
          I engineer secure, scalable, and high-performance web solutions.
          My goal is to transform complex technical challenges into robust, high-impact systems.
          </p>

        </div>

        <div className="relative flex justify-center mt-8">
          <img 
            src="/laila-portrait.png" 
            alt="picture" 
            className="h-[450px] object-contain drop-shadow-[0_0_35px_rgba(255,59,128,0.7)]"
          />
        </div>
      </main>

      {/* Bottom Tech Stack Bar */}
      <div className="w-full bg-gradient-to-r from-[#171a2b] via-[#521b36] to-[#b12154] mt-auto py-5 z-10 border-t border-white/5">
      <div className="w-full max-w-6xl mx-auto flex justify-between items-center text-xs font-semibold text-gray-300 px-4 md:px-8">
          
            <div className="flex items-center space-x-2">
                <SiNextdotjs className="text-white text-2xl" />
                <span>Next JS</span>
            </div>
            
            <div className="hidden md:block w-px h-5 bg-white/20"></div>

            <div className="flex items-center space-x-2">
                <SiReact className="text-[#61DAFB] text-2xl" />
                <span>React</span>
            </div>
            
            <div className="hidden md:block w-px h-5 bg-white/20"></div>

            <div className="flex items-center space-x-2">
                <SiDocker className="text-[#2496ED] text-2xl" />
                <span>Docker</span>
            </div>
            
            <div className="hidden md:block w-px h-5 bg-white/20"></div>

            <div className="flex items-center space-x-2">
                <SiGrafana className="text-[#F46800] text-2xl" />
                <span>Grafana</span>
            </div>

            <div className="hidden md:block w-px h-5 bg-white/20"></div>

            <div className="flex items-center space-x-2">
                <SiVagrant className="text-[#1563FF] text-2xl" />
                <span>Vagrant</span>
            </div>

            <div className="hidden md:block w-px h-5 bg-white/20"></div>

            <div className="flex items-center space-x-2">
                <SiOwasp className="text-gray-200 text-2xl" />
                <span>OWASP</span>
            </div>

            <div className="hidden md:block w-px h-5 bg-white/20"></div>

            <div className="flex items-center space-x-2">
                <SiNginx className="text-[#009639] text-2xl" />
                <span>Nginx</span>
            </div>

          
        </div>
      </div>
      
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0 opacity-20">
      </div>

    </div>
  );  
};



