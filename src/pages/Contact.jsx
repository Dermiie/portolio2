import { CgArrowTopRight } from 'react-icons/cg';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { FiMail } from 'react-icons/fi';
import Button from '../ui/Button';
import { HiOutlineDownload } from 'react-icons/hi';
import { RiSendPlaneLine } from 'react-icons/ri';

import { useForm, ValidationError } from '@formspree/react';
import { useEffect, useState } from 'react';
import { BiCheckCircle } from 'react-icons/bi';

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
    value: 'Demilade Oyeniyi',
    icon: <FaLinkedin />,
    link: 'https://www.linkedin.com/in/demilade-oyeniyi-820746246/',
  },
  {
    id: 3,
    name: 'X',
    value: '@dermiie__',
    icon: <FaXTwitter />,
    link: 'https://x.com/dermiie__',
  },
  {
    id: 4,
    name: 'GitHub',
    value: 'Dermiie',
    icon: <FaGithub />,
    link: 'https://github.com/Dermiie',
  },
];

function Contact() {
  const [state, handleSubmit] = useForm('xqegpowg');
  const [status, setStatus] = useState('initial');

  useEffect(() => {
    if (state.succeeded) {
      setStatus('success');

      // Reset back to "initial" after 10s
      const timer = setTimeout(() => {
        setStatus('initial');
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [state.succeeded]);

  return (
    <>
      <div className="flex flex-col w-full gap-12 md:grid md:grid-cols-2 pt-28">
        <section className="flex flex-col gap-6 text-start">
          <header>
            <p className="text-3xl font-extrabold font-display md:text-6xl lg:text-6xl text-primary-900 dark:text-primary-800">
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
              <Button
                type={'noStyle'}
                key={i}
                to={data.link}
                className="grid group w-full grid-cols-[auto_1fr_1fr] gap-4 py-2 items-center font-light border-b-[0.8px] border-primary-900"
              >
                <div className="group-hover:text-primary-600">{data.icon}</div>
                <div className="text-start">
                  <p>{data.name}</p>
                  <p>{data.value}</p>
                </div>

                <div className="justify-self-end group-hover:text-primary-600">
                  <CgArrowTopRight />
                </div>
              </Button>
            ))}
          </ul>

          <div>
            <a href="/Demilade_Oyeniyi_Resume.pdf" download>
              <Button type={'solid'}>
                <div className="flex items-center justify-center gap-2">
                  <span>
                    <HiOutlineDownload></HiOutlineDownload>
                  </span>
                  <p>Download CV</p>
                </div>
              </Button>
            </a>
          </div>
        </section>
        <section>
          <header className="mb-4">
            <h1 className="mb-2 text-xl font-bold tracking-tight font-display text-primary-900 dark:text-primary-800 text-start">
              Send a message
            </h1>
            <p>Fill in the details, i&apos;ll get back to you</p>
          </header>

          {status === 'initial' && (
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col">
                <label htmlFor="name">Name</label>
                <input
                  name="name"
                  type="text"
                  className="bg-transparent border-b-[0.7px] transition-all duration-300 py-2 border-primary-800 outline-none  focus:border-b-2 mb-4"
                ></input>
                <ValidationError
                  prefix="Name"
                  field="name"
                  errors={state.errors}
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="email">Email</label>
                <input
                  name="email"
                  type="email"
                  className="bg-transparent border-b-[0.7px] py-2 transition-all duration-300 border-primary-800 outline-none  focus:border-b-2 mb-4"
                ></input>
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="subject">Subject</label>
                <input
                  name="subject"
                  type="text"
                  className="bg-transparent border-b-[0.7px] py-2 transition-all duration-300 border-primary-800 outline-none  focus:border-b-2 mb-4"
                ></input>
                <ValidationError
                  prefix="Subject"
                  field="subject"
                  errors={state.errors}
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="message">Message</label>
                <textarea
                  name="message"
                  className="bg-transparent border-b-[0.7px] py-2 transition-all duration-300 border-primary-800 outline-none  focus:border-b-2 h-32 mb-4"
                ></textarea>
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
              </div>

              <Button type={'solid'} disabled={state.submitting}>
                <div className="flex items-center justify-center gap-2">
                  <span>
                    <RiSendPlaneLine />
                  </span>
                  <p>Send Message</p>
                </div>
              </Button>
            </form>
          )}

          {status === 'success' && (
            <div className="flex flex-col items-center justify-center w-2/3 gap-3 p-6 rounded-lg shadow">
              <BiCheckCircle className="text-5xl text-primary-600" />
              <p className="text-lg font-medium text-primary-800">
                Thanks for reaching out 👍
              </p>
            </div>
          )}
        </section>
      </div>
    </>
  );
}

export default Contact;
