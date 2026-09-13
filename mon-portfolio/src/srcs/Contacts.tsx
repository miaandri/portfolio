import React from "react";
import { Link } from "react-router-dom";

export default function Contacts() {
  const contactLinks = [
    {
      label: "Email",
      value: "lalainaandrianarivony04@gmail.com",
      href: "mailto:lalainaandrianarivony04@gmail.com",
      icon: (
        <svg className="w-6 h-6 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 002-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      label: "Phone",
      value: "+261 34 37 020 61",
      href: "tel:+261343702061",
      icon: (
        <svg className="w-6 h-6 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
    },
    {
      label: "GitHub",
      value: "github.com/miaandri",
      href: "https://github.com/miaandri",
      isExternal: true,
      icon: (
        <svg className="w-6 h-6 text-pink-400" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
        </svg>
      ),
    },
  ];

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
        <div className="w-full max-w-4xl bg-[#111625] rounded-[2rem] p-8 md:p-12 border border-white/5 shadow-2xl relative overflow-hidden z-10">
          
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500/10 blur-3xl rounded-full pointer-events-none"></div>

          <div className="relative z-10 flex flex-col items-center gap-8">
            
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white flex items-center justify-center gap-3">
                <span>☎️​</span> Contact Me 
              </h2>
              <p className="text-gray-400 text-xs md:text-sm font-mono mt-2 tracking-wider">
                Get in touch with me directly
              </p>
            </div>

            <div className="w-full max-w-lg flex flex-col gap-4 mt-2">
              {contactLinks.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  target={item.isExternal ? "_blank" : "_self"}
                  rel={item.isExternal ? "noopener noreferrer" : ""}
                  className="bg-[#181f30] border border-white/5 rounded-2xl p-4 flex items-center justify-between group hover:border-pink-500/40 hover:bg-[#1d263b] transition-all duration-300 hover:shadow-[0_0_20px_rgba(236,72,153,0.25)] hover:-translate-y-0.5"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-pink-500/10 border border-pink-500/20 rounded-xl group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-gray-400 block">
                        {item.label}
                      </span>
                      <span className="text-sm md:text-base font-mono font-medium text-gray-200 group-hover:text-pink-300 transition-colors">
                        {item.value}
                      </span>
                    </div>
                  </div>

                  <span className="text-pink-400 font-mono text-sm group-hover:translate-x-1 transition-transform">
                    ↗
                  </span>
                </a>
              ))}
            </div>

          </div>

        </div>
      </div>

    </div>
  );    
}