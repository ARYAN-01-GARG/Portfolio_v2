'use client';

import Button from "@/Components/Button";
import ArrowRightIcon from "../svgs/ArrowRightIcon";
import { useRouter } from "next/navigation";

export default function About() {
  const router = useRouter();

  return (
    <section className="min-h-screen flex items-start justify-center bg-[#101225] py-12 lg:py-28">
        <div className="flex flex-col items-center justify-between gap-6 w-full px-4 max-w-[75%]">
            <h3>About</h3>
            <h4 className="text-4xl font-bold">Who I Am</h4>
            <p className="text-[#94A3B8] text-lg max-w-[70%] text-center">I&apos;m a Computer Science student specializing in AI & ML. Passionate about programming, AI integration, and building innovative web applications.</p>
            <div className="flex flex-wrap items-center justify-center gap-10 my-12 mb-16">
                <Card icon={ArrowRightIcon} title="Web Development" desc="Experienced in building modern, responsive web applications using React.js, Next.js, and Node.js." />
                <Card icon={ArrowRightIcon} title="Computer Science" desc="Strong foundation in algorithms, data structures, and programming principles." />
                <Card icon={ArrowRightIcon} title="AI & Machine Learning" desc="Specializing in artificial intelligence and machine learning algorithms and applications." />
            </div>
             <Button
                className="cursor-pointer hover:text-white transition-all duration-300 bg-[#55cbbd] px-6 py-3 rounded-lg flex items-center   gap-x-2 hover:opacity-90"
                onClick={() => router.push("/about")}
            >
                    <span className="text-nowrap">More About Me</span>
                    <ArrowRightIcon />
             </Button>
        </div>
    </section>
  )
}


const Card = ({
    icon : Icon,
    title,
    desc
} : {
    icon: React.FC<React.SVGProps<SVGSVGElement>>;
    title: string;
    desc: string;
}) => {
    return (
        <div className="cursor-pointer max-w-[30%] grid-cols-1 bg-[#282A3B] border-2 border-[#525572] rounded-lg py-12 px-10 flex flex-col items-center justify-center gap-2">
            <Icon className="w-16 h-16 text-[#55cbbd] bg-[#253846] p-2 font-bold rounded-lg"/>
            <h5 className="text-xl text-white font-semibold my-4">{title}</h5>
            <p className="text-[#94A3B8] text-[0.9rem] text-center">{desc}</p>
        </div>
    )
}
