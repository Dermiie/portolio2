const experiences = [
  {
    role: 'Frontend Developer',
    type: 'Volunteer',
    company: 'Neoclan Technologies',
    duration: 'Oct 2025 - Present',
    responsibilities: [
      'Developed and maintained React + TypeScript components for products, cart, and user profiles, ensuring robust and type-safe code.',
      'Built responsive UI features with conditional rendering and micro-interactions to improve user experience.',
      'Collaborated in a Git-based workflow, resolving merge conflicts and maintaining clean, scalable code.',
    ],
  },
  {
    role: 'Frontend Developer Intern',
    type: 'SIWES',
    company: 'RenMoney MFB',
    duration: 'June 2022 - October 2022', // add if you have it
    responsibilities: [
      'Improved proficiency in JavaScript and React through hands-on development.',
      'Collaborated effectively with team members on real-world projects.',
      'Maintained a safe and structured work environment through adherence to team practices.',
    ],
  },
];

function Experience() {
  return (
    <>
      {experiences.map((experience, i) => (
        <div
          key={i}
          className="md:grid group flex flex-col gap-4 justify-between transition-all duration-500 md:grid-cols-[1fr_1.5fr_1fr] border-b-[0.7px] rounded border-primary-800 md:px-4 py-6 hover:bg-primary-100/90"
        >
          <h2 className="text-lg font-medium transition-all duration-300 font-display group-hover:text-primary-600">
            {experience.role}
          </h2>

          <ul className="space-y-2 md:space-y-3">
            {experience.responsibilities.map((res, i) => (
              <li key={i} className="text-sm">
                {res}
              </li>
            ))}
          </ul>

          <p className="text-end">{experience.duration}</p>
        </div>
      ))}
    </>
  );
}

export default Experience;
