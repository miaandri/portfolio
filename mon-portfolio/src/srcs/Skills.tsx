import React from "react";
import { Link } from "react-router-dom";

const leftSkills = [
  { name: "React", level: "80%", width: "80%" },
  { name: "TypeScript", level: "80%", width: "80%" },
  { name: "Tailwind CSS", level: "80%", width: "80%" },
  { name: "NextJS", level: "75%", width: "75%" },
  { name: "Prisma", level: "75%", width: "75%" },
  { name: "Dart/Flutter", level: "60%", width: "60%" },
  { name: "C/C++", level: "90%", width: "90%" },
  { name: "Python", level: "60%", width: "60%" },
];

const rightSkills = [
  { name: "Docker", level: "90%", width: "90%" },
  { name: "Grafana/Prometheus", level: "80%", width: "80%" },
  { name: "OWASP", level: "80%", width: "80%" },
  { name: "Makefile", level: "90%", width: "90%" },
  { name: "Scripting", level: "80%", width: "80%" },
  { name: "Git (CI/CD)", level: "80%", width: "80%" },
  { name: "Vagrant", level: "60%", width: "60%" },
  { name: "Server", level: "80%", width: "80%" },
];

export default function MySkills() {
  return (
    <div className="min-h-screen bg-[#131527] text-white font-sans flex flex-col relative overflow-hidden">
      
      {/* Barre de navigation */}
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
        <div className="w-full max-w-5xl bg-[#111625] rounded-[2rem] p-8 md:p-12 border border-white/5 shadow-2xl relative z-10">
          
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-white flex items-center justify-center gap-3">
               My Skills 
            </h2>
            <p className="text-gray-400 text-xs font-mono mt-2 tracking-wider">
              Technologies I work with
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            
            <div className="flex flex-col gap-4">
              {leftSkills.map((skill, index) => (
                <div 
                  key={index} 
                  className="bg-[#181f30] border border-white/5 p-4 rounded-xl shadow-md hover:border-pink-500/30 transition-all"
                >
                  <div className="flex justify-between items-center mb-2 text-xs md:text-sm font-semibold">
                    <span className="text-gray-200">{skill.name}</span>
                    <span className="text-pink-400 font-mono">{skill.level}</span>
                  </div>
                  <div className="w-full bg-[#0d121d] h-2 rounded-full overflow-hidden">
                    <div 
                      className="bg-pink-500 h-full rounded-full transition-all duration-500" 
                      style={{ width: skill.width }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-4">
              {rightSkills.map((skill, index) => (
                <div 
                  key={index} 
                  className="bg-[#181f30] border border-white/5 p-4 rounded-xl shadow-md hover:border-pink-500/30 transition-all"
                >
                  <div className="flex justify-between items-center mb-2 text-xs md:text-sm font-semibold">
                    <span className="text-gray-200">{skill.name}</span>
                    <span className="text-pink-400 font-mono">{skill.level}</span>
                  </div>
                  <div className="w-full bg-[#0d121d] h-2 rounded-full overflow-hidden">
                    <div 
                      className="bg-pink-500 h-full rounded-full transition-all duration-500" 
                      style={{ width: skill.width }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>

    </div>
  );
}