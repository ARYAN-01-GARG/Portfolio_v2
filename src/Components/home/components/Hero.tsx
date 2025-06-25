import Button from "@/Components/Button";
import ArrowRightIcon from "../svgs/ArrowRightIcon";
import CodeIcon from "../svgs/CodeIcon";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-[#080E21] py-12 lg:p-12">
        <div className="flex items-center justify-between gap-12 w-full px-4 max-w-[75%]">
            <div className="flex-1 flex flex-col justify-center items-start gap-4">
                <span className="">welcome to my portfolio</span>
                <h2 className="text-6xl font-bold py-1 flex flex-col gap-1 items-start">
                    <span className="">Hi, I&apos;m</span>
                    <span className="">Aryan Garg</span>
                </h2>
                <h3 className="text-[#94A3B8] font-semibold text-4xl mb-5">
                    Feature
                </h3>
                <p className="text-[#94A3B8] text-lg mb-6 w-3/4">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores quae aut esse maiores? Sequi nam corrupti recusandae totam aliquam delectus.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores quae aut esse maiores? Sequi nam corrupti recusandae totam aliquam delectus.Lorem ipsum, dolor sit amet
                </p>
                <div className="flex items-center justify-center gap-8 text-lg font-semibold">
                    <Button className="cursor-pointer hover:scale-105 transition-all duration-300 bg-[#14B8A6] px-4 py-3 rounded-lg flex items-center gap-x-2 shadow-lg shadow-[#14b8a58c] hover:shadow-2xl"><span className="text-nowrap">Get In touch </span><ArrowRightIcon /></Button>
                    <Button className="cursor-pointer hover:scale-105 transition-all duration-300 bg-[#171529] px-4 py-3 rounded-lg flex items-center gap-x-2 shadow-[#263856] hover:shadow-2xl"><span className="text-nowrap">Views Projects</span></Button>
                </div>
            </div>
            <div className="bg-[#20303F] flex-1 p-6 rounded-lg shadow-lg shadow-[#20303F] border border-[#528a9e]">
                <div className="grid grid-cols-2 gap-4">
                    <BoxMember name="JavaScript" icon={CodeIcon} desc="Expert Level Proficiency" />
                    <BoxMember name="Node.js" icon={CodeIcon} desc="Expert Level Proficiency" />
                </div>
                <div className="grid grid-cols-3 gap-4 mt-4">
                    <BoxMember name="JavaScript" icon={CodeIcon} desc="Expert Level Proficiency" />
                    <BoxMember name="Node.js" icon={CodeIcon} desc="Expert Level Proficiency" />
                    <BoxMember name="React.js" icon={CodeIcon} desc="Expert Level Proficiency" />
                </div>
                <div className="grid grid-cols-2 my-4 gap-4">
                    <BoxMember name="JavaScript" icon={CodeIcon} desc="Expert Level Proficiency" />
                    <BoxMember name="Node.js" icon={CodeIcon} desc="Expert Level Proficiency" />
                </div>
                <div className="grid grid-cols-2 gap-4 mt-4">
                    <BoxMember name="JavaScript" icon={CodeIcon} desc="Expert Level Proficiency" />
                    <BoxMember name="Node.js" icon={CodeIcon} desc="Expert Level Proficiency" />
                </div>
            </div>
        </div>
    </section>
  )
}

const BoxMember = ({
    name,
    icon : Icon,
    desc
} : {
    name: string;
    icon: React.FC<React.SVGProps<SVGSVGElement>>;
    desc: string;
}) => {
  return (
    <div className="cursor-pointer hover:scale-105 grid-cols-1 bg-[#35515B] border border-[#528a9e] rounded-lg shadow-xl shadow-cyan-500/10 p-4 px-10 flex flex-col items-start justify-center gap-2">
      <span className="flex items-center justify-start gap-2 text-[#7b9e91]">
        <Icon className="scale-120" />
        <span className="text-bold text-white/80 text-xl">{name}</span>
      </span>
      <p className="text-sm text-[#94A3B8] font-[500]">{desc}</p>
    </div>
  );
}
