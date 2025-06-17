import React from 'react';

const projects = [
	{
		img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8',
		alt: 'Income Tax Fraud Detection',
		title: 'Income Tax Fraud Detection',
		desc: 'A system to detect fraudulent activities in income tax filings using AI and machine learning.',
		tags: ['Python', 'Machine Learning', 'AI'],
		details: '/projects',
		github: 'https://github.com/oxBinaryBrain/An_Income_Tax_Fraud_Detection_Using_AI-ML',
	},
	{
		img: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8',
		alt: 'Oral Cancer Classification using Neural Networks',
		title: 'Oral Cancer Classification using Neural Networks',
		desc: 'Machine learning model to detect and classify oral cancer levels from images.',
		tags: ['Python', 'TensorFlow', 'Neural Networks'],
		details: '/projects',
		github: 'https://github.com/oxBinaryBrain/Oral_Cancer_Classification',
	},
	{
		img: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8',
		alt: 'Credit Card Fraud Detection',
		title: 'Credit Card Fraud Detection',
		desc: 'Machine learning model to analyze whether a credit card transaction is fraudulent or not.',
		tags: ['Python', 'ML', 'Data Science'],
		details: '/projects',
		github: 'https://github.com/oxBinaryBrain/CC-Fraud-Detection',
	},
];

export default function FeatureSection() {
	return (
		<section className="py-24 bg-secondary/50" id="projects">
			<div className="flex flex-col items-center justify-center px-4">
				<div className="text-center mb-16">
					<span className="inline-block py-1 px-3 rounded-full text-xs font-medium bg-teal-500/10 text-teal-400 mb-4">
						Portfolio
					</span>
					<h2 className="text-4xl font-bold mb-6">Featured Projects</h2>
					<p className="max-w-3xl mx-auto text-muted-foreground">
						A selection of my recent web development and programming projects.
					</p>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{projects.map((project) => (
						<div
							key={project.title}
							className="glass-panel rounded-lg overflow-hidden"
						>
							<div className="h-48 overflow-hidden">
								<img
									src={project.img}
									alt={project.alt}
									className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
								/>
							</div>
							<div className="p-6">
								<h3 className="text-xl font-semibold mb-2">
									{project.title}
								</h3>
								<p className="text-muted-foreground mb-4">
									{project.desc}
								</p>
								<div className="flex flex-wrap gap-2 mb-6">
									{project.tags.map((tag) => (
										<span
											key={tag}
											className="text-xs py-1 px-3 bg-secondary rounded-full"
										>
											{tag}
										</span>
									))}
								</div>
								<div className="flex justify-between">
									<a
										className="inline-flex items-center text-teal-400 hover:text-teal-300 transition-colors"
										href={project.details}
									>
										View Details
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="24"
											height="24"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
											className="lucide lucide-arrow-right ml-2 h-4 w-4"
										>
											<path d="M5 12h14"></path>
											<path d="m12 5 7 7-7 7"></path>
										</svg>
									</a>
									<a
										href={project.github}
										className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors"
										target="_blank"
										rel="noopener noreferrer"
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="24"
											height="24"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
											className="lucide lucide-github mr-1.5 h-4 w-4"
										>
											<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
											<path d="M9 18c-4.51 2-5-2-7-2"></path>
										</svg>
										Source Code
									</a>
								</div>
							</div>
						</div>
					))}
				</div>
				<div className="mt-12 text-center">
					<a className="inline-flex items-center px-6 py-3 bg-teal-500 text-white rounded-lg font-medium hover:bg-opacity-90 transition-all">
						View All Projects
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
							className="lucide lucide-arrow-right ml-2 h-4 w-4"
						>
							<path d="M5 12h14"></path>
							<path d="m12 5 7 7-7 7"></path>
						</svg>
					</a>
				</div>
			</div>
		</section>
	);
}
