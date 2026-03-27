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

const skills = [
  { name: 'JavaScript', icon: <SiJavascript /> },
  { name: 'React', icon: <SiReact /> },
  { name: 'Next.js', icon: <SiNextdotjs /> },
  { name: 'TypeScript', icon: <SiTypescript /> },
  { name: 'Tailwind', icon: <SiTailwindcss /> },
  { name: 'Supabase', icon: <SiSupabase /> },
];

function Home() {
  return (
    <>
      <div className="flex flex-col gap-20">
        <div className="relative flex flex-col min-h-screen gap-3 px-8 overflow-hidden bg-cover pt-28 md:gap-10">
          <div className="relative flex items-center gap-2">
            <span className="relative flex size-2">
              <span className="inline-flex rounded-full animate-pulseSlow size-2 bg-primary-600"></span>
            </span>
            <span className="text-sm">Available for work</span>
          </div>
          <div className="flex flex-col items-start">
            <p>FRONTEND DEVELOPER</p>
            <h1 className="font-extrabold font-display text-huge text-primary-900">
              Demilade
            </h1>
            <h1 className="font-extrabold font-display text-huge text-primary-600">
              Oyeniyi
            </h1>
          </div>

          <div className="grid grid-cols-2">
            <div className="flex flex-col gap-4">
              <p className="w-[85%] md:w-[70%] text-lg tracking-tight">
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
            <div className="flex items-end justify-end">
              <div className="flex items-end gap-2">
                <Button type={'solid'}>
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
                <Button type={'primary'}>
                  <div className="flex items-center justify-center gap-2">
                    <span>
                      <HiOutlineMail></HiOutlineMail>
                    </span>
                    <p>Contact Me</p>
                  </div>
                </Button>
              </div>
            </div>
          </div>

          <div className="absolute overflow-hidden border-t-[0.7px] pt-6 border-primary-900 bottom-10">
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
