import { CgArrowTopRight } from 'react-icons/cg';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { FiMail } from 'react-icons/fi';
import Button from '../ui/Button';
import { HiOutlineDownload } from 'react-icons/hi';
import { RiSendPlaneLine } from 'react-icons/ri';

const contactData = [
  {
    id: 1,
    name: 'Email',
    value: 'Demioyeniyi@gmail.com',
    icon: <FiMail />,
    link: 'mailto:demioyeniyi@gmail.com',
  },
  {
    id: 2,
    name: 'LinkedIn',
    value: 'linkedin.com/in/yourname',
    icon: <FaLinkedin />,
    link: 'https://linkedin.com/in/yourname',
  },
  {
    id: 3,
    name: 'X',
    value: '@yourusername',
    icon: <FaXTwitter />,
    link: 'https://x.com/yourusername',
  },
  {
    id: 4,
    name: 'GitHub',
    value: 'github.com/yourusername',
    icon: <FaGithub />,
    link: 'https://github.com/yourusername',
  },
];

function Contact() {
  return (
    <>
      <div className="flex flex-col w-full gap-12 md:grid md:grid-cols-2 pt-28">
        <section className="flex flex-col gap-6 text-start">
          <header>
            <p className="text-3xl font-extrabold font-display md:text-6xl lg:text-6xl text-primary-900">
              Let&apos;s
            </p>
            <p className="text-3xl font-extrabold font-display md:text-6xl lg:text-6xl text-primary-600">
              Connect
            </p>
          </header>
          <p className="md:w-[70%]">
            Ready to come on board. Drop me a message and i&apos;ll get back
            between 24 to 48 hours
          </p>

          <ul className="flex flex-col gap-2 ">
            {contactData.map((data, i) => (
              <li
                key={i}
                className="grid group w-full grid-cols-[auto_1fr_1fr] gap-4 py-2 items-center font-light border-b-[0.8px] border-primary-900"
              >
                <div className="group-hover:text-primary-600">{data.icon}</div>
                <div>
                  <p>{data.name}</p>
                  <p>{data.value}</p>
                </div>

                <div className="justify-self-end group-hover:text-primary-600">
                  <CgArrowTopRight />
                </div>
              </li>
            ))}
          </ul>

          <div>
            <Button type={'solid'}>
              <div className="flex items-center justify-center gap-2">
                <span>
                  <HiOutlineDownload></HiOutlineDownload>
                </span>
                <p>Download CV</p>
              </div>
            </Button>
          </div>
        </section>
        <section>
          <header className="mb-4">
            <h1 className="mb-2 text-xl font-bold tracking-tight font-display text-primary-900 text-start">
              Send a message
            </h1>
            <p>Fill in the details, i&apos;ll get back to you</p>
          </header>
          <form>
            <div className="flex flex-col">
              <label htmlFor="name">Name</label>
              <input
                name="name"
                type="text"
                className="bg-transparent border-b-[0.7px] transition-all duration-300 py-2 border-primary-800 outline-none  focus:border-b-2 mb-4"
              ></input>
            </div>
            <div className="flex flex-col">
              <label htmlFor="email">Email</label>
              <input
                name="email"
                type="email"
                className="bg-transparent border-b-[0.7px] py-2 transition-all duration-300 border-primary-800 outline-none  focus:border-b-2 mb-4"
              ></input>
            </div>
            <div className="flex flex-col">
              <label htmlFor="subject">Subject</label>
              <input
                name="subject"
                type="text"
                className="bg-transparent border-b-[0.7px] py-2 transition-all duration-300 border-primary-800 outline-none  focus:border-b-2 mb-4"
              ></input>
            </div>
            <div className="flex flex-col">
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                className="bg-transparent border-b-[0.7px] py-2 transition-all duration-300 border-primary-800 outline-none  focus:border-b-2 h-32 mb-4"
              ></textarea>
            </div>

            <Button type={'solid'}>
              <div className="flex items-center justify-center gap-2">
                <span>
                  <RiSendPlaneLine />
                </span>
                <p>Send Message</p>
              </div>
            </Button>
          </form>
        </section>
      </div>
    </>
  );
}

export default Contact;
