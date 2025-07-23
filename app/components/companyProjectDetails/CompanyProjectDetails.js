// components/CompanyProjectDetails.jsx
"use client";

import React from "react";
const CompanyProjectDetails = ({ title, description, technologies ,features}) => {
  return (

<div className="bg-[#1c152b] rounded-2xl p-6 shadow-lg border border-[#2a1f3c] transition-all duration-300">
  <h4 className="text-2xl font-semibold text-white mb-3">{title}</h4>
  <p className="text-[#b3a7d6] mb-5 leading-relaxed">{description}</p>

  {/* Additional Features */}
  {features && features.length > 0 && (
    <div className="mb-6">
      <h5 className="text-sm font-semibold text-purple-400 uppercase tracking-wider mb-2">Key Features</h5>
      <ul className="list-disc list-inside text-[#c5b3e6] space-y-1 text-sm">
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
    </div>
  )}

  {/* Technologies */}
  <div>
    <h5 className="text-sm font-semibold text-purple-400 uppercase tracking-wider mb-2">Technologies Used</h5>
    <div className="flex flex-wrap gap-2">
      {technologies.map((tech, index) => (
        <span
          key={index}
          className="bg-[#2e2342] text-sm text-purple-200 px-3 py-1 rounded-md border border-purple-500/30 hover:bg-purple-700/20 transition"
        >
          {tech}
        </span>
      ))}
    </div>
  </div>
</div>



  );
};

export default CompanyProjectDetails;
