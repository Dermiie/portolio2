import { HiOutlineDesktopComputer, HiOutlineServer } from 'react-icons/hi';
import { TbDatabase } from 'react-icons/tb';

const techStack = {
  'Frontend & UI': [
    {
      name: 'React',
      note: 'Building dynamic and component-based user interfaces.',
    },
    {
      name: 'Next.js',
      note: 'Creating performant, full-stack React applications.',
    },
    {
      name: 'Tailwind CSS',
      note: 'Styling interfaces quickly with utility-first CSS.',
    },
    {
      name: 'Framer Motion',
      note: 'Adding smooth animations and interactions.',
    },
  ],

  'Data & Integration': [
    {
      name: 'React Query',
      note: 'Managing server state and data fetching efficiently.',
    },
    {
      name: 'REST APIs',
      note: 'Integrating and communicating with external services.',
    },
    {
      name: 'Supabase',
      note: 'Handling backend services like database and authentication.',
    },
  ],

  'Engineering & Workflow': [
    {
      name: 'JavaScript',
      note: 'Writing core application logic and interactive functionality.',
    },
    {
      name: 'TypeScript',
      note: 'Writing type-safe and scalable JavaScript code.',
    },
    { name: 'Git', note: 'Tracking changes and managing code versions.' },
    { name: 'GitHub', note: 'Collaborating and hosting code repositories.' },
  ],
};

function Technologies() {
  return (
    <div className="flex flex-col md:grid md:grid-cols-3 bg-primary-50">
      <div className="border-b-[0.8px] border-primary-800 p-6 ">
        <header className="flex items-center justify-start gap-4 mb-6 font-semibold uppercase font-display">
          <span>
            <HiOutlineDesktopComputer size={24} className="text-primary-600" />
          </span>
          Frontend & UI
        </header>
        <ul className="flex flex-col gap-2">
          {techStack['Frontend & UI'].map((s, i) => (
            <li key={i} className="pl-6 border-l-2 border-primary-300 ">
              <h2>{s.name}</h2>
              <h2 className="text-sm">{s.note}</h2>
            </li>
          ))}
        </ul>
      </div>
      <div className="border-b-[0.8px] border-primary-800 p-6">
        <header className="flex items-center justify-start gap-4 mb-6 font-semibold uppercase font-display">
          <span>
            <TbDatabase size={24} className="text-primary-600" />
          </span>
          Data & Integration
        </header>
        <ul className="flex flex-col gap-2">
          {techStack['Data & Integration'].map((s, i) => (
            <li key={i} className="pl-6 border-l-2 border-primary-200 ">
              <h2>{s.name}</h2>
              <h2 className="text-sm">{s.note}</h2>
            </li>
          ))}
        </ul>
      </div>
      <div className="border-b-[0.8px] border-primary-800 p-6 ">
        <header className="flex items-center justify-start gap-4 mb-6 font-semibold uppercase font-display">
          <span>
            <HiOutlineServer size={24} className="text-primary-600" />
          </span>
          Engineering & Workflow
        </header>
        <ul className="flex flex-col gap-2">
          {techStack['Engineering & Workflow'].map((s, i) => (
            <li key={i} className="pl-6 border-l-2 border-primary-200 ">
              <h2>{s.name}</h2>
              <h2 className="text-sm">{s.note}</h2>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Technologies;
