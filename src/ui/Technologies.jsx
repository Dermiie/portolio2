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
      note: 'Building performant and full-stack React applications.',
    },
    {
      name: 'Tailwind CSS',
      note: 'Styling responsive interfaces with utility-first CSS.',
    },
    {
      name: 'Framer Motion',
      note: 'Creating smooth animations and interactive experiences.',
    },
  ],

  'Backend & APIs': [
    {
      name: 'Node.js',
      note: 'Building scalable server-side applications and services.',
    },
    {
      name: 'Express.js',
      note: 'Developing REST APIs and backend application services.',
    },
    {
      name: 'REST APIs',
      note: 'Designing and integrating client-server communication.',
    },
    {
      name: 'Socket.IO',
      note: 'Building real-time, event-driven communication features.',
    },
  ],

  'Data & State Management': [
    {
      name: 'MongoDB',
      note: 'Working with document-based databases and application data.',
    },
    {
      name: 'Mongoose',
      note: 'Modeling MongoDB data and managing database operations.',
    },
    {
      name: 'React Query',
      note: 'Managing server state, caching, and asynchronous data.',
    },
    {
      name: 'Supabase',
      note: 'Working with database, authentication, and backend services.',
    },
  ],

  'Languages & Workflow': [
    {
      name: 'TypeScript',
      note: 'Writing type-safe and maintainable application code.',
    },
    {
      name: 'JavaScript',
      note: 'Building application logic and interactive functionality.',
    },
    {
      name: 'Git',
      note: 'Managing versions and collaborative development workflows.',
    },
    {
      name: 'GitHub',
      note: 'Hosting repositories and collaborating through Git workflows.',
    },
  ],
};

function Technologies() {
  return (
    <div className="flex flex-col md:grid md:grid-cols-3 bg-primary-50 dark:bg-primary-900">
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
            <HiOutlineServer size={24} className="text-primary-600" />
          </span>
          Backend & APIs
        </header>
        <ul className="flex flex-col gap-2">
          {techStack['Backend & APIs'].map((s, i) => (
            <li key={i} className="pl-6 border-l-2 border-primary-200 ">
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
          Data & State Management
        </header>
        <ul className="flex flex-col gap-2">
          {techStack['Data & State Management'].map((s, i) => (
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
          {techStack['Languages & Workflow'].map((s, i) => (
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
