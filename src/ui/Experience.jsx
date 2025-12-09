function Experience() {
  return (
   <div className="flex flex-col gap-4 md:gap-6 md:flex-row">
     <div className="flex flex-col gap-3 p-4 border rounded-sm md:w-2/3 md:mx-auto border-stone-300">
      <h1 className="tracking-tight text-blue-400 ">Frontend Developer <span className="text-sm text-stone-500 ">Volunteer</span></h1>
      <h3 className="text-sm tracking-tight text-stone-500">Neoclan Technologies    OCT 2025 - present</h3>
      <ul className="flex flex-col gap-3 divide-y-2 divide-stone-300">
      <li>Developed and maintained React + TypeScript components for
products, cart, and user profiles, ensuring robust and type-safe code.</li>
      <li>Developed responsive UI features, including conditional rendering and
micro interaction feedbacks for improved user experience.</li>
      <li>Collaborated in a Git-based workflow, resolving merge conflicts and
maintaining type-safe, maintainable code.</li>
      </ul>
    </div>
    <div className="flex flex-col gap-3 p-4 border rounded-sm md:w-2/3 md:mx-auto border-stone-300">
      <h1 className="tracking-tight text-blue-400 ">Frontend Developer Intern</h1>
      <h3 className="text-sm tracking-tight text-stone-500">RenMoney MFB </h3>
      <ul className="flex flex-col gap-3 divide-y-2 divide-stone-300">
      <li>Developed more proficiency in programming languages like
      JavaScript and also the React library</li>
      <li> Learned how to collaborate effectively with team members on
      projects</li>
      <li>Maintained an overall safe work environment with employee
      training programs and enforcement of safety procedures.</li>
      </ul>
    </div>
   </div>
  )
}

export default Experience
