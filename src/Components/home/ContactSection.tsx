import Link from "next/link";

export default function ContactSection() {
  return (
    <section className="py-24" id="contact">
      <div className="mx-auto px-4">
        <div className="bg-[#212637] p-12 rounded-lg max-w-4xl mx-auto text-center" style={{ opacity: 1, transform: "none" }}>
          <div className="flex items-center justify-center w-16 h-16 bg-teal-500/10 rounded-full mb-6 mx-auto">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star w-8 h-8 text-teal-400">
              <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
            </svg>
          </div>
          <h2 className="text-3xl font-bold mb-4">New project setup</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">I'm currently available for freelance work and open to new opportunities. If you have a project in mind or want to collaborate, let's connect!</p>
          <Link className="inline-flex items-center px-8 py-3 bg-teal-500 text-white rounded-lg font-medium hover:bg-opacity-90 transition-all" href="/contact">Get in Touch
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right ml-2 h-4 w-4">
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
