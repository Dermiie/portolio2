import Button from "../ui/Button";
import { BiLogoGithub, BiLogoInstagram, BiLogoLinkedin, BiCheckCircle } from "react-icons/bi"
import { useForm, ValidationError } from '@formspree/react';
import { Link } from "react-router";
import { useEffect, useState } from "react";

const inputStyles = 'w-full outline-none rounded p-2 md:p-4 focus:ring focus:ring-blue-400 focus:ring-offset-2 dark:bg-stone-800 dark:text-stone-300 dark:focus:ring-blue-400 dark:focus:ring-offset-stone-900 border-2 border-stone-300 dark:border-stone-600';

function Contact() {
const [state, handleSubmit] = useForm("xyzewbpj");
const [status, setStatus] = useState("initial");


 useEffect(() => {
    if (state.succeeded) {
      setStatus("success");

      // Reset back to "initial" after 10s
      const timer = setTimeout(() => {
        setStatus("initial");
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [state.succeeded]);


  return <div className="md:flex md:gap-4 md:pt-8">
    <div className="md:w-1/2">
      <h1  className="text-2xl my-4 font-extrabold md:text-start md:w-[80%] text-center">Get in touch</h1>
      <div className="flex flex-col mb-10 gap-3 md:gap-8  md:w-[80%] ">
      <p className="tracking-tight">Have a project in mind or just want to say hello? I&apos;d love to hear from you! Feel free to reach out, and let&apos;s build something great together. 🚀</p>
      <div className="flex gap-1 ">

        <Link to={'https://github.com/Dermiie'} className="inline-flex p-2 border-2 rounded-md border-stone-400">
        <BiLogoGithub className="text-xl text-stone-600"></BiLogoGithub>
        </Link>
        <Link to={'https://www.instagram.com/dermiie/?hl=en'} className="inline-flex p-2 border-2 rounded-md border-stone-400">
        <BiLogoInstagram className="text-xl text-stone-600"></BiLogoInstagram>
        </Link>
        <Link to={'https://www.linkedin.com/in/demilade-oyeniyi-820746246'} className="inline-flex p-2 border-2 rounded-md border-stone-400">
        <BiLogoLinkedin className="text-xl text-stone-600"></BiLogoLinkedin>
        </Link>
      </div>
    </div>
    </div>
       <div className="flex flex-col items-center w-full">
      {/* ✅ Success Message */}
      {status === "success" && (
        <div className="flex flex-col items-center justify-center w-2/3 gap-3 p-6 rounded-lg shadow bg-stone-100 dark:bg-stone-800 dark:text-stone-300">
          <BiCheckCircle className="text-5xl text-blue-400" />
          <p className="text-lg font-medium text-gray-700">
            Thanks for reaching out 👍
          </p>
        </div>
      )}

      {/* ✅ Initial Form */}
      {status === "initial" && (
        <form
          onSubmit={handleSubmit}
          className="flex flex-col w-full max-w-2xl gap-5"
        >
          <p className="font-semibold tracking-tight text-blue-400">
            Send a message / Leave a review 😉
          </p>

          {/* Name + Email */}
          <div className="flex flex-col gap-4 md:flex-row">
            <div className="md:w-1/2">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                className={`${inputStyles} w-full`}
                required
              />
              <ValidationError
                prefix="Name"
                field="name"
                errors={state.errors}
              />
            </div>

            <div className="md:w-1/2">
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Email address"
                className={`${inputStyles} w-full`}
                required
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>
          </div>

          {/* Message */}
          <div>
            <textarea
              id="message"
              name="message"
              placeholder="Message"
              rows={5}
              className={`${inputStyles} w-full`}
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>

          {/* Submit Button */}
          <div className="w-40">
            <Button type="primary">Submit</Button>
          </div>
        </form>
      )}
    </div>
    
  </div>;
}

export default Contact;
