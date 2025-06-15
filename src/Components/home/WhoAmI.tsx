import React from 'react'

export default function WhoAmI() {
  return (
    <section className="py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" style={{ opacity: 1, transform: "none" }}>
          <span className="inline-block py-1 px-3 rounded-full text-xs font-medium bg-teal-500/10 text-teal-400 mb-4">About Me</span>
          <h2 className="text-4xl font-bold mb-6">Who I Am</h2>
          <p className="max-w-3xl mx-auto text-muted-foreground">
            I'm a Computer Science student specializing in AI &amp; ML. Passionate about programming, AI integration, and building innovative web applications.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[#212637] p-8 rounded-lg" style={{ opacity: 1, transform: "none" }}>
            <div className="flex items-center justify-center w-16 h-16 bg-teal-500/10 rounded-lg mb-6 mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-code w-8 h-8 text-teal-400"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
            </div>
            <h3 className="text-xl font-semibold mb-4 text-center">Web Development</h3>
            <p className="text-muted-foreground text-center">Experienced in building modern, responsive web applications using React.js, Next.js, and Node.js.</p>
          </div>
          <div className="bg-[#212637] p-8 rounded-lg" style={{ opacity: 1, transform: "none" }}>
            <div className="flex items-center justify-center w-16 h-16 bg-teal-500/10 rounded-lg mb-6 mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-graduation-cap w-8 h-8 text-teal-400"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path><path d="M22 10v6"></path><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path></svg>
            </div>
            <h3 className="text-xl font-semibold mb-4 text-center">Computer Science</h3>
            <p className="text-muted-foreground text-center">Strong foundation in algorithms, data structures, and programming principles.</p>
          </div>
          <div className="bg-[#212637] p-8 rounded-lg" style={{ opacity: 1, transform: "none" }}>
            <div className="flex items-center justify-center w-16 h-16 bg-teal-500/10 rounded-lg mb-6 mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-briefcase w-8 h-8 text-teal-400"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path><rect width="20" height="14" x="2" y="6" rx="2"></rect></svg>
            </div>
            <h3 className="text-xl font-semibold mb-4 text-center">AI &amp; Machine Learning</h3>
            <p className="text-muted-foreground text-center">Specializing in artificial intelligence and machine learning algorithms and applications.</p>
          </div>
        </div>
        <div className="mt-12 text-center" style={{ opacity: 1, transform: "none" }}>
          <a className="inline-flex items-center px-6 py-3 bg-teal-500 text-white rounded-lg font-medium hover:bg-opacity-90 transition-all" href="/about">
            More About Me
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right ml-2 h-4 w-4"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
          </a>
        </div>
      </div>
    </section>
  )
}
