import React from "react";
import { Link } from "react-router-dom"; 

const projects = [
  {
    title: "Inception of Thing",
    description: "Advanced system administration project, introducing to K8s and Continuous Integration and Continious Deployment",
    image: "/pic2.png",
    tags: ["Kubernetes", "Vagrant", "CI/CD"],
    link: "/Progress" 
  },
  {
    title: "Mihasoa",
    description: "This platform enables the execution of photovoltaic installation studies, comprehensive data analysis, and end-to-end solar project management.",
    image: "/perso.jpg",
    tags: ["NextJS", "Prisma", "Docker", "+3"],
    link: "/Progress" 
  },
  {
    title: "EstimeDeSoi - 2D Combat Game",
    description: "Multiplayer web game with real-time chat and system monitoring.",
    image: "/pic2.png",
    tags: ["React", "Socket.io", "Docker", "+2"],
    link: "/Hub"
  },
  {
    title: "Monitoring d'un parc solaire",
    description: "Telemetry pipeline collecting sensor data via MQTT to Prometheus & Grafana.",
    image: "/solar.png",
    tags: ["Grafana", "MQTT", "Docker", "+3"],
    link: "https://github.com/miaandri/Monitoring_PS"
  },
  {
    title: "Inception",
    description: "Automated security scanning, Nginx reverse proxy, and containerized deployment.",
    image: "/pic2.png",
    tags: ["Docker", "OWASP", "Nginx", "+2"],
    link: "https://github.com/miaandri/Inception"
  },
  {
    title: "NetPractice Network Config",
    description: "Complex TCP/IP, IPv4 subnetting, and routing table architecture setup.",
    image: "/pic2.png",
    tags: ["Networking", "TCP/IP", "Subnetting"],
    link: "/Hub"
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-[#0b0f19] text-white flex items-center justify-center p-6">
      <div className="w-full max-w-6xl bg-[#111625] rounded-[2rem] p-8 md:p-12 border border-white/5 shadow-2xl relative">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-pink-400 flex items-center justify-center gap-3">
             Projects 
          </h2>
          <p className="text-gray-400 text-xs font-mono mt-2 tracking-wider">
            My latest work
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-[#181f30] border border-white/5 rounded-2xl overflow-hidden shadow-lg hover:border-pink-500/30 transition-all duration-300 hover:-translate-y-1 flex flex-col group"
            >
              <div className="w-full h-48 bg-[#0d121d] overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-90 group-hover:opacity-100"
                />
              </div>
              
              <div className="p-5 flex flex-col flex-grow justify-between gap-4">
                <div>
                  <h3 className="text-gray-100 font-bold text-base md:text-lg group-hover:text-pink-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-300">{project.description}</p>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className="px-2.5 py-1 bg-pink-500/10 text-pink-400 border border-pink-500/20 text-[11px] font-mono rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Link 
                  to={project.link} 
                  className="inline-flex items-center gap-1.5 text-pink-400 text-xs font-semibold hover:underline mt-1 w-fit"
                >
                  {project.link === "/Progress" 
                    ? "In Progress ⏳" 
                    : project.link === "/Hub" 
                    ? "Explore Hub 🚀" 
                    : "View Project ↗"}
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}