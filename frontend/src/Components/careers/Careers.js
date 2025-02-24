import "./Careers.scss";

const careerData = [
	// {
	// 	icon: "https://img.icons8.com/dusk/64/laptop--v1.png",
	// 	positionsOpen: 2,
	// 	title: "Jr. Software Engineer",
	// 	description:
	// 		"Responsible for designing, developing and maintaining software systems and applications.",
	// },
	// {
	// 	icon: "https://img.icons8.com/external-others-pike-picture/50/external-data-data-scientist-worker-others-pike-picture.png",
	// 	positionsOpen: 3,
	// 	title: "Data Scientist",
	// 	description:
	// 		"Responsible for collecting, analyzing and interpreting large data sets to help organizations make better decisions.",
	// },
	// {
	// 	icon: "https://img.icons8.com/dusk/64/gear.png",
	// 	positionsOpen: 1,
	// 	title: "Project Manager",
	// 	description:
	// 		"Responsible for planning, executing and closing projects on time and within budget.",
	// },
	// {
	// 	icon: "https://img.icons8.com/dusk/64/positive-dynamic.png",
	// 	positionsOpen: 1,
	// 	title: "Product Manager",
	// 	description:
	// 		"Responsible for managing the entire product life cycle, from ideation to launch and post-launch.",
	// },
	// {
	// 	icon: "https://img.icons8.com/dusk/64/database.png",
	// 	positionsOpen: 4,
	// 	title: "Sales Representative",
	// 	description:
	// 		"Responsible for reaching out to potential customers and closing sales deals.",
	// },
	// {
	// 	icon: "https://img.icons8.com/bubbles/50/commercial.png",
	// 	positionsOpen: 1,
	// 	title: "Marketing Manager - Intern",
	// 	description:
	// 		"Responsible for creating and marketing strategies to promote a company or product.",
	// },
];

const Careers = () => {
	return (
		<div className="Careers">
			<h2>Careers</h2>
			<div className="Careers__mission">
				<div className="Careers__mission__title">
					<h3>Our Mission & Values</h3>
				</div>
				<div>
					CryptoTalk was founded in June 2022. We are a collaborative,
					hardworking, and intelligent team on a mission to make
					cryptocurrency knowledge accessible to everyone - especially
					those new to the world of crypto. Together, we're building a
					welcoming community where anyone can learn, grow, and
					explore the world of cryptocurrency.
				</div>
				<div className="Careers__mission__values">
					<h3>
						We are guided by four core values that shape everything
						we do:
					</h3>

					<ul>
						<li>
							<b>Integrity:</b> We uphold the highest standards of
							honesty and transparency in all our work.
						</li>
						<li>
							<b>Innovation:</b> We embrace creativity and
							forward-thinking to drive the future of
							cryptocurrency education.
						</li>
						<li>
							<b>Collaboration:</b> We believe in the power of
							teamwork and building a strong community.
						</li>
						<li>
							<b>Inclusivity & DEI:</b> We are committed to
							fostering a diverse, equitable, and inclusive
							environment where all individuals, regardless of
							their background, feel welcomed, valued, and
							empowered to learn and grow.
						</li>
					</ul>
				</div>
			</div>
			<div className="Careers__description">
				<div className="Careers__description__title">
					<h3>Job Openings</h3>
				</div>
				<div>
					We're looking for hardworking individuals to join the
					CryptoTalk team. Check out our current openings below and
					start your journey with us today!
				</div>
			</div>
			{careerData.length ? (
				<div className="Careers__jobs">
					{careerData.map((job, index) => {
						return (
							<div
								className="Careers__jobs__job"
								key={job.title + index}
							>
								<div className="Careers__jobs__icon">
									<img
										src={job.icon}
										alt={job.title + "icon"}
									/>
								</div>
								<div>{job.title}</div>
								<div>{job.description}</div>
								<button>Apply Here</button>
							</div>
						);
					})}
				</div>
			) : (
				<div className="Careers__noJobs">
					<h1>No jobs available.</h1>
					<h3>Join our Talent Community</h3>
					<div>
						Be the first to know about opportunities, internships
						and recruitment events at CryptoTalk.
					</div>
					<div>
						Sign up for our newsletter to become part of our
						database.
					</div>
					<div>
						Our recruiters will proactively review your profile for
						potential job matches.
					</div>
				</div>
			)}
		</div>
	);
};

export default Careers;
