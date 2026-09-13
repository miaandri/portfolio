import React from "react";
import { Link } from "react-router-dom";

const educationData = [
  {
    degree: "DevSecOps student",
    institution: "42 Antananarivo",
    period: "Mai 2026 - present",
    highlight: "RNCP 6"
  },
  {
    degree: "Common Core Curriculum",
    institution: "42 Antananarivo",
    period: "March 2024 - Mai 2026",
    highlight: "Level 11,62"
  },
  {
    degree: "Bachelor's Degree in Electrical Engineering",
    institution: "Ecole Supérieure Polytechnique d'Antananarivo (ESPA)",
    period: "2022-2025",
    highlight: "With highest honors"
  }
];

const certificationData = [
    {
        title: "Networking Basics",
        issuer: "Cisco Networking Academy",
        date: "in progress",
    },
    {
        title: "English Proficiency Test",
        issuer: "FLTC Madagascar",
        date: "2021",
    }
];

export default function CertSchool() {
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
        <div className="w-full max-w-6xl bg-[#131527] rounded-[2rem] p-8 md:p-12 shadow-2xl relative flex flex-col gap-10 z-10">
          
          <div>
            <h2 className="text-3xl font-bold text-white flex items-center justify-center md:justify-start gap-3 tracking-wide">
              Certifications & Schooling
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            
            <div className="flex flex-col w-full">
              <div className="mb-6 text-center md:text-left">
                <h2 className="text-gray-400 text-xl font-bold tracking-wide">
                  My academic background
                </h2>
              </div>
              
              <div className="flex flex-col gap-6">
                {educationData.map((item, index) => (
                  <div 
                    key={index} 
                    className="bg-[#161b22] border border-white/5 p-5 rounded-xl shadow-lg hover:border-pink-500/30 transition-all duration-300 hover:bg-[#1a202c]"
                  >
                    <h3 className="text-gray-100 font-bold text-md md:text-lg">
                      {item.degree}
                    </h3>
                    <p className="text-pink-400 text-xs md:text-sm font-semibold mt-1">
                      {item.institution}
                    </p>
                    <div className="flex items-center gap-4 mt-3 text-[11px] md:text-xs text-gray-400 font-mono">
                      <span className="flex items-center gap-1.5">
                        📅 {item.period}
                      </span>
                      <span className="flex items-center gap-1.5">
                        🎓 {item.highlight}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col w-full">
              <div className="mb-6 text-center md:text-left">
                <h2 className="text-gray-400 text-xl font-bold tracking-wide">
                  Certifications
                </h2>
              </div>
              
              <div className="flex flex-col gap-6">
                {certificationData.map((item, index) => (
                  <div 
                    key={index} 
                    className="bg-[#161b22] border border-white/5 p-5 rounded-xl shadow-lg hover:border-pink-500/30 transition-all duration-300 hover:bg-[#1a202c]"
                  >
                    <h3 className="text-gray-100 font-bold text-md md:text-lg">
                      {item.title}
                    </h3>
                    <p className="text-pink-400 text-xs md:text-sm font-semibold mt-1">
                      {item.issuer}
                    </p>
                    <div className="flex items-center gap-4 mt-3 text-[11px] md:text-xs text-gray-400 font-mono">
                      <span className="flex items-center gap-1.5">
                        📅 {item.date}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}