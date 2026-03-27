import Seperator from '../ui/Seperator';
import Technologies from '../ui/Technologies';

const expertise = [
  { no: '01', point: 'Frontend Web Development' },
  { no: '02', point: 'React/Next.js Applications' },
  { no: '03', point: 'TypeScript and Mordern JavaScript' },
  { no: '04', point: 'User Experience Centric' },
  { no: '05', point: 'Teamwork and Collaborations' },
];

function About() {
  return (
    <div className="flex flex-col gap-24 pt-28">
      <div className="flex flex-col gap-4 md:grid md:grid-cols-3 md:gap-0">
        <div className="flex flex-col md:col-span-2">
          <h3 className="mb-4 text-2xl font-bold tracking-tight md:text-4xl font-display text-primary-900 text-start">
            Bringing designs to life{' '}
            <span className="block text-primary-600">
              with code and creativity!
            </span>
          </h3>

          <div className="flex items-center justify-start gap-4 px-2 md:px-4">
            <div className="mb-4 overflow-hidden rounded-full size-24 md:size-32 ring ring-offset-2 ring-primary-600">
              <img src="/Demi.jpg" alt="Demi"></img>
            </div>
          </div>
          <p className="tracking-tight md:w-[60%] mt-4">
            Hey there! 👋 <br />
            I&apos;m Demi, a frontend developer specializing in building
            scalable, intuitive, and high-quality web applications.
            <br />
            With a solid foundation in Web development, I develop responsive and
            performance-driven interfaces designed to deliver seamless user
            experiences.
          </p>
        </div>
        <div>
          <h3 className="mb-4 text-2xl font-bold tracking-tight md:text-4xl font-display text-primary-900 text-start">
            Core Expertise
          </h3>
          <ul className="space-y-5">
            {expertise.map((e) => (
              <li key={e.no} className="flex items-center gap-2">
                <p>{e.no}</p>
                <Seperator />
                <p className="flex-shrink-0">{e.point}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex flex-col">
        <h3 className="mb-4 text-xl font-bold tracking-tight md:text-2xl font-display text-primary-900 text-start">
          Technologies
        </h3>

        <Technologies></Technologies>
      </div>
    </div>
  );
}

export default About;
