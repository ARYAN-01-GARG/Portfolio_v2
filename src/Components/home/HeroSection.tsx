"use client";

import { useEffect, useState } from 'react'
import { skills } from './skillsData';
import ArrowRightIcon from './svgs/ArrowRightIcon';

export default function HeroSection() {
  const [domain , setDomain] = useState("Full Stack Developer");

  useEffect(() => {
    const domains = [
      "Full Stack Developer",
      "AI Enthusiast",
      "Open Source Contributor",
      "Freelancer",
      "Tech Blogger"
    ];
    let index = 0;
    const interval = setInterval(() => {
      setDomain(domains[index]);
      index = (index + 1) % domains.length;
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="flex items-center justify-between gap-x-2 mx-auto px-12 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="mb-4">
              <span className="inline-block py-1 px-3 rounded-full text-xs font-medium bg-teal-500/10 text-teal-400 mb-4">Welcome to my portfolio</span>
            </div>
            <h1 className="text-5xl md:text-4xl font-bold mb-4">
              <span className="block">Hi, I'm </span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-amber-400">Aryan Garg</span>
            </h1>
            <div className="h-12 mb-1">
              <span className="inline-block text-2xl md:text-3xl font-medium text-muted-foreground">
                {domain}
              </span>
            </div>
            <p className="text-lg text-muted-foreground mb-8 max-w-lg">
              Passionate about programming and software development with expertise JavaScript, Python and C++. Building modern web applications using Node.js, React.js, and Next.js. Freelancer specializing in AI-powered solutions.
            </p>
            <div className="flex flex-wrap gap-4">
              <div>
                <a className="inline-flex items-center bg-teal-500 text-white px-6 py-3 rounded-lg font-medium transition-all" href="/contact">
                  Get in Touch
                  <ArrowRightIcon className="ml-2 h-4 w-4" />
                </a>
              </div>
              <div tabIndex={0}>
                <a className="inline-flex items-center bg-secondary text-foreground px-6 py-3 rounded-lg font-medium transition-all" href="/projects">
                  View Projects
                </a>
              </div>
            </div>
          </div>
          <div className="relative hidden lg:block" style={{ opacity: 1, transform: "none" }}>
            <div className="relative w-full h-[500px] rounded-lg overflow-hidden glass-panel p-6">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-transparent"></div>
              <div className="relative h-full w-full grid grid-cols-6 grid-rows-6 gap-4">
                {/* Skill Cards */}
                {skills.map((skill, idx) => {
                  const Icon = skill.icon;
                  return (
                    <div key={skill.title + idx} className={`bg-glass-panel p-6 flex flex-col justify-center ${skill.className}`} style={{ boxShadow: "rgba(155, 135, 245, 0.2) 0px 0px 0px 0px", transform: "none" }}>
                      <div className="flex items-center mb-2">
                        <Icon className="w-5 h-5 mr-2 text-teal-400" />
                        <h3 className="text-xl font-semibold">{skill.title}</h3>
                      </div>
                      <p className="text-sm text-muted-foreground">{skill.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2" style={{ opacity: 0.96772, transform: "translateY(0.645596px)" }}>
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <div className="w-1.5 h-1.5 bg-muted-foreground rounded-full mt-2" style={{ transform: "translateY(10.9587px)" }}></div>
        </div>
      </div>
    </section>
  )
}
