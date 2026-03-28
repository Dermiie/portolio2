import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Button from '../ui/Button';
import { HiArrowRight, HiOutlineDownload, HiOutlineMail } from 'react-icons/hi';
import { CiLocationOn } from 'react-icons/ci';
import {
  SiJavascript,
  SiNextdotjs,
  SiReact,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';
import { useNavigate } from 'react-router';

const skills = [
  { name: 'JavaScript', icon: <SiJavascript /> },
  { name: 'React', icon: <SiReact /> },
  { name: 'Next.js', icon: <SiNextdotjs /> },
  { name: 'TypeScript', icon: <SiTypescript /> },
  { name: 'Tailwind', icon: <SiTailwindcss /> },
  { name: 'Supabase', icon: <SiSupabase /> },
];

function Home() {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex flex-col gap-10 md:gap-20 pt-28 md:pt-0">
        <div className="relative flex flex-col gap-3 pt-8 overflow-hidden min-h-[calc(100vh-70px)] bg-cover md:px-8 md:pt-28 md:gap-10">
          <div className="relative flex items-center gap-2">
            <span className="flex size-2">
              <span className="inline-flex rounded-full animate-pulseSlow size-2 bg-primary-600"></span>
            </span>
            <span className="text-sm">Available for work</span>
          </div>
          <div className="flex flex-col items-start text-sm md:text-base">
            <p>FRONTEND DEVELOPER</p>
            <h1 className="text-4xl font-extrabold font-display md:text-6xl lg:text-huge text-primary-900 dark:text-primary-800">
              Demilade
            </h1>
            <h1 className="text-4xl font-extrabold font-display md:text-6xl lg:text-huge text-primary-600">
              Oyeniyi
            </h1>
          </div>

          <div className="text-sm lg:grid lg:grid-cols-2">
            <div className="flex flex-col gap-4 mb-6 lg:mb-0">
              <p className="w-[85%] lg:w-[70%] md:text-lg tracking-tight">
                A frontend developer with an eye for clean code and user centric
                applications, I create seamless user interfaces that are both
                functional and visually compelling.
              </p>
              <p className="flex gap-2">
                <span>
                  <CiLocationOn size={24} className=" text-primary-600" />
                </span>
                Based in Nigeria - Open to remote opportunities
              </p>
            </div>

            <div className="flex flex-col gap-2 md:flex-row md:items-end lg:justify-end">
              <Button type={'solid'} to={'/projects'}>
                <div className="flex items-center justify-center gap-2">
                  <p>View Projects</p>
                  <span>
                    <HiArrowRight></HiArrowRight>
                  </span>
                </div>
              </Button>
              <Button type={'primary'}>
                {' '}
                <div className="flex items-center justify-center gap-2">
                  <span>
                    <HiOutlineDownload></HiOutlineDownload>
                  </span>
                  <p>Resume</p>
                </div>
              </Button>
              <Button type={'primary'} to={'/contact'}>
                <div className="flex items-center justify-center gap-2">
                  <span>
                    <HiOutlineMail></HiOutlineMail>
                  </span>
                  <p>Contact Me</p>
                </div>
              </Button>
            </div>
          </div>

          <div className="absolute overflow-hidden border-t-[0.7px] pt-6 border-primary-900 bottom-20 md:bottom-0">
            <div className="flex whitespace-nowrap animate-scroll">
              {[...skills, ...skills, ...skills].map((skill, i) => (
                <div key={i} className="flex items-center gap-2 px-6 shrink-0">
                  <span className="text-primary-600">{skill.icon}</span>
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <About />
        <Projects />
        <Contact />
      </div>
    </>
  );
}

export default Home;
