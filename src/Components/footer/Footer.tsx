import React from 'react'

export default function Footer() {
  return (
    <footer className="w-full py-8 border-t border-muted">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="text-2xl font-bold text-brand-purple mb-2">AG.</div>
            <p className="text-muted-foreground text-sm max-w-md">
              Building innovative digital solutions with a focus on clean, efficient code and exceptional user experiences.
            </p>
          </div>
          <div className="flex flex-col items-center md:items-end">
            <p className="text-foreground font-medium mb-3">Connect with me</p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/ARYAN-01-GARG/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-brand-purple transition-colors bg-secondary p-3 rounded-full"
                aria-label="GitHub"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github h-5 w-5">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                  <path d="M9 18c-4.51 2-5-2-7-2"></path>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/aryan-garg-ab9900272/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-brand-purple transition-colors bg-secondary p-3 rounded-full"
                aria-label="LinkedIn"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin h-5 w-5">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a
                href="https://twitter.com/ARYAN-01-GARG"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-brand-purple transition-colors bg-secondary p-3 rounded-full"
                aria-label="Twitter"
                tabIndex={0}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter h-5 w-5">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
              <a
                href="mailto:workwitharyangarg0@gmail.com"
                className="text-muted-foreground hover:text-brand-purple transition-colors bg-secondary p-3 rounded-full"
                aria-label="Email"
                tabIndex={0}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail h-5 w-5">
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="text-muted-foreground text-sm text-center mt-8">
          © 2025 Aryan Garg. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
