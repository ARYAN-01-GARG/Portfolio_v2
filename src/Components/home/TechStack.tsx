"use client";

const techs = [
  { name: "JavaScript", percent: 85 },
	{ name: "React.js", percent: 85 },
	{ name: "Node.js", percent: 95 },
	{ name: "Firebase", percent: 90 },
	{ name: "Next.js", percent: 85 },
	{ name: "Python", percent: 70 },
];

function TechBar({ name, percent }: { name: string; percent: number }) {
	return (
		<div className="bg-[#212637] p-6 rounded-lg">
			<div className="flex justify-between items-center mb-2">
				<h3 className="text-lg font-medium">{name}</h3>
				<span className="text-sm text-muted-foreground">{percent}%</span>
			</div>
			<div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
				<div
					className="h-full bg-teal-500 transition-all duration-700"
					style={{ width: `${percent}%` }}
				></div>
			</div>
		</div>
	);
}

export default function TechStack() {
	return (
		<section className="flex items-center justify-center py-24">
			<div className="mx-auto px-4">
				<div className="text-center mb-16">
					<span className="inline-block py-1 px-3 rounded-full text-xs font-medium bg-teal-500/10 text-teal-400 mb-4">
						Skills
					</span>
					<h2 className="text-4xl font-bold mb-6">Tech Stack</h2>
					<p className="max-w-3xl mx-auto text-muted-foreground">
						A collection of technologies I work with to build web applications and
						solve complex problems.
					</p>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
					{techs.map((tech) => (
						<TechBar key={tech.name} name={tech.name} percent={tech.percent} />
					))}
				</div>
				<div>
					Hello, Aryan this side and I&apos;m a full stack dev 
				</div>
			</div>
		</section>
	);
}
