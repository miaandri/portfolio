import React from "react";

export default function Components({title, description}: {title: string, description: string}) {
    return (
        <div className="bg-card-bg rounded-2xl p-8 md:p-10 border border-gray-800 shadow-lg hover:border-gray-700 transition-all duration-300">
        <h2 className="text-highlight-text text-2xl md:text-3xl font-bold mb-5 tracking-tight">
          {title}
        </h2>
        
        <p className="text-body-text text-base md:text-lg leading-relaxed font-light">
          {description}
        </p>
      </div>
    );
}