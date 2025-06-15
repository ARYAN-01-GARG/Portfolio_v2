import React from 'react'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-72 h-72 bg-teal-500/20 rounded-full filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-1/3 -left-20 w-72 h-72 bg-amber-500/20 rounded-full filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 w-72 h-72 bg-rose-500/20 rounded-full filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>
      <div className="container mx-auto px-4 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="mb-4" style={{ opacity: 1, transform: "none" }}>
              <span className="inline-block py-1 px-3 rounded-full text-xs font-medium bg-teal-500/10 text-teal-400 mb-4">Welcome to my portfolio</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4" style={{ opacity: 1, transform: "none" }}>
              <span className="block">Hi, I'm </span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-amber-400">Uday G</span>
            </h1>
            <div className="h-12 mb-6" style={{ opacity: 1, transform: "none" }}>
              <span className="inline-block text-2xl md:text-3xl font-medium text-muted-foreground" style={{ opacity: 1 }}>
                Full Stack Developer
              </span>
            </div>
            <p className="text-lg text-muted-foreground mb-8 max-w-lg" style={{ opacity: 1, transform: "none" }}>
              Passionate about programming and software development with expertise in Python, JavaScript, and C++. Building modern web applications using Node.js, React.js, and Next.js. Freelancer specializing in AI-powered solutions.
            </p>
            <div className="flex flex-wrap gap-4" style={{ opacity: 1, transform: "none" }}>
              <div>
                <a className="inline-flex items-center bg-teal-500 text-white px-6 py-3 rounded-lg font-medium transition-all" href="/contact">
                  Get in Touch
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right ml-2 h-4 w-4"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
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
                <div className="bg-glass-panel p-6 flex flex-col justify-center col-span-3 row-span-2" style={{ boxShadow: "rgba(155, 135, 245, 0.2) 0px 0px 0px 0px", transform: "none" }}>
                  <div className="flex items-center mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-code w-5 h-5 mr-2 text-teal-400"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
                    <h3 className="text-xl font-semibold">Python</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">Expert level proficiency</p>
                </div>
                <div className="bg-glass-panel p-6 flex flex-col justify-center col-span-3 row-span-2" style={{ boxShadow: "rgba(155, 135, 245, 0.2) 0px 0px 0px 0px", transform: "none" }}>
                  <div className="flex items-center mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-code w-5 h-5 mr-2 text-teal-400"><path d="M10 12.5 8 15l2 2.5"></path><path d="m14 12.5 2 2.5-2 2.5"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z"></path></svg>
                    <h3 className="text-xl font-semibold">JavaScript</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">Frontend &amp; backend development</p>
                </div>
                <div className="bg-glass-panel p-6 flex flex-col justify-center col-span-2 row-span-2">
                  <div className="flex items-center mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-globe w-5 h-5 mr-2 text-teal-400"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
                    <h3 className="text-xl font-semibold">React.js</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">UI Library</p>
                </div>
                <div className="bg-glass-panel p-6 flex flex-col justify-center col-span-2 row-span-2">
                  <div className="flex items-center mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-database w-5 h-5 mr-2 text-teal-400"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5V19A9 3 0 0 0 21 19V5"></path><path d="M3 12A9 3 0 0 0 21 12"></path></svg>
                    <h3 className="text-xl font-semibold">SQL</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">Database</p>
                </div>
                <div className="bg-glass-panel p-6 flex flex-col justify-center col-span-2 row-span-2">
                  <div className="flex items-center mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-terminal w-5 h-5 mr-2 text-teal-400"><polyline points="4 17 10 11 4 5"></polyline><line x1="12" x2="20" y1="19" y2="19"></line></svg>
                    <h3 className="text-xl font-semibold">C++</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">Systems programming</p>
                </div>
                <div className="bg-glass-panel p-6 flex flex-col justify-center col-span-3 row-span-2">
                  <div className="flex items-center mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-server w-5 h-5 mr-2 text-teal-400"><rect width="20" height="8" x="2" y="2" rx="2" ry="2"></rect><rect width="20" height="8" x="2" y="14" rx="2" ry="2"></rect><line x1="6" x2="6.01" y1="6" y2="6"></line><line x1="6" x2="6.01" y1="18" y2="18"></line></svg>
                    <h3 className="text-xl font-semibold">Node.js</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">Backend development</p>
                </div>
                <div className="bg-glass-panel p-6 flex flex-col justify-center col-span-3 row-span-2" style={{ boxShadow: "rgba(155, 135, 245, 0.2) 0px 0px 0px 0px", transform: "none" }}>
                  <div className="flex items-center mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-tv w-5 h-5 mr-2 text-teal-400"><rect width="20" height="15" x="2" y="7" rx="2" ry="2"></rect><polyline points="17 2 12 7 7 2"></polyline></svg>
                    <h3 className="text-xl font-semibold">UI/UX Design</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">Interface design &amp; prototyping</p>
                </div>
                <div className="bg-glass-panel p-6 flex flex-col justify-center col-span-3 row-span-2" style={{ boxShadow: "rgba(155, 135, 245, 0.2) 0px 0px 0px 0px", transform: "none" }}>
                  <div className="flex items-center mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-git-branch w-5 h-5 mr-2 text-teal-400"><line x1="6" x2="6" y1="3" y2="15"></line><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M18 9a9 9 0 0 1-9 9"></path></svg>
                    <h3 className="text-xl font-semibold">AI &amp; Machine Learning</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">Model development &amp; deployment</p>
                </div>
                <div className="bg-glass-panel p-6 flex flex-col justify-center col-span-3 row-span-2" style={{ boxShadow: "rgba(155, 135, 245, 0.2) 0px 0px 0px 0px", transform: "none" }}>
                  <div className="flex items-center mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-code w-5 h-5 mr-2 text-teal-400"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
                    <h3 className="text-xl font-semibold">Next.js</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">React framework</p>
                </div>
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
