import React from "react";
import { Link } from "react-router-dom";

export default function AboutMe() {
    return (
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
            </nav>
          </div>

          <div className="flex-1 flex items-center justify-center p-6 md:p-12 relative overflow-hidden">
            <div className="w-full max-w-6xl bg-[#0d111a] rounded-[2rem] p-8 md:p-12 shadow-2xl relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center z-10">
              
              <div className="lg:col-span-5 space-y-6 z-10">
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold flex items-center gap-2 text-white">
                     Get to Know Me
                  </h1>
                </div>
      
                <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                I am a passionate developer with a background in electrical engineering and training at 42,
                specializing in creating secure, high-performance web applications and robust infrastructures.
                I love turning complex technical ideas into reality through clean code, automation, and DevSecOps practices.
                </p>
      
                <div className="grid grid-cols-2 gap-6 pt-4">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-extrabold text-[#ff3b80]">2+</h3>
                    <p className="text-xs text-gray-400 mt-1 uppercase tracking-wider">Years Experience</p>
                  </div>
                </div>
              </div>
      
      
              <div className="lg:col-span-7 space-y-6 z-10">
                
                <div className="bg-[#111827] border border-gray-800 rounded-2xl p-6 shadow-lg">
                  <h2 className="text-[#ff3b80] text-xl font-bold mb-3 tracking-wide">
                    My personal qualities
                  </h2>
                  <p className="text-gray-300 text-sm leading-relaxed font-bold">
                    Rigorous & Resilient:
                  </p>
                  <p className="text-gray-400 text-sm leading-relaxed font-light">
                    Methodical and detail-oriented, ensuring the reliability, cleanliness, and security of technical architectures while persevering through complex engineering challenges and tough debugging sessions.
                  </p>
                  
                  <p className="text-gray-300 text-sm leading-relaxed font-bold">
                    Self-Taught:
                  </p>
                  <p className="text-gray-400 text-sm leading-relaxed font-light">
                    Driven by an autonomous learning mindset, capable of quickly exploring and mastering new technologies, tools, and paradigms across software and infrastructure.
                  </p>
                  
                  <p className="text-gray-300 text-sm leading-relaxed font-bold">
                    High Adaptability:
                  </p>
                  <p className="text-gray-400 text-sm leading-relaxed font-light">
                    Exceptional flexibility in navigating diverse domains, effortlessly bridging the physical world of hardware with the digital realm of software development.
                  </p>

                  <p className="text-gray-300 text-sm leading-relaxed font-bold">
                    Analytical Mindset:
                  </p>
                  <p className="text-gray-400 text-sm leading-relaxed font-light">
                    Strong aptitude for breaking down complex technical problems, identifying friction points, and designing structured, high-performance solutions.
                  </p>  

                </div>
      
                <div className="bg-[#111827] border border-gray-800 rounded-2xl p-6 shadow-lg">
                  <h2 className="text-[#ff3b80] text-xl font-bold mb-3 tracking-wide">
                    My hobbies
                  </h2>
                  <p className="text-gray-400 text-sm leading-relaxed font-light">
                  📖​ Reading : Immersing myself in thrilling detective novels, heartfelt romance stories, and intense dark romance narratives to unwind and explore complex human emotions.
                  </p>
                  <p className="text-gray-400 text-sm leading-relaxed font-light">
                  🧶​ Knitting : Practicing a meticulous, patient craft that blends structural precision with creative patterns.
                  </p>
                  <p className="text-gray-400 text-sm leading-relaxed font-light">
                  🗺️ Traveling: Discovering new cultures, environments, and ways of thinking to foster adaptability and broaden global awareness.
                  </p>
                  <p className="text-gray-400 text-sm leading-relaxed font-light">
                  ​​🤖​ Robotics: Building and experimenting at the intersection of hardware mechanics, electronics, and embedded software programming.
                  </p>
                </div>
      
              </div>
      
            </div>
      
          </div>

        </div>
      );
}