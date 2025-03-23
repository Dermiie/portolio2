import Button from "../ui/Button";
import { BiLogoGithub, BiLogoGmail, BiLogoLinkedin } from "react-icons/bi"
import { useForm, ValidationError } from '@formspree/react';


function Contact() {
const [state, handleSubmit] = useForm("xyzewbpj");
const inputStyles = 'w-full outline-none rounded p-2 md:p-4 focus:ring focus:ring-blue-400 focus:ring-offset-2'

if (state.succeeded) {
  return <p>Thanks for joining!</p>;
}

  return <div className="md:flex md:gap-4 md:pt-8">
    <div className="md:w-1/2">
      <h1  className="text-2xl my-4 font-extrabold md:text-start md:w-[80%] text-center">Get in touch</h1>
      <div className="flex flex-col mb-10 gap-3 md:gap-8  md:w-[80%] ">
      <p className="tracking-tight">Have a project in mind or just want to say hello? I&apos;d love to hear from you! Feel free to reach out, and let&apos;s build something great together. 🚀</p>
      <div className="flex gap-1 ">

        <div className="p-2 border-2 border-stone-400 rounded-md inline-flex">
        <BiLogoGithub className="text-xl  text-stone-600"></BiLogoGithub>
        </div>
        <div className="p-2 border-2 border-stone-400 rounded-md inline-flex">
        <BiLogoGmail className="text-xl text-stone-600"></BiLogoGmail>
        </div>
        <div className="p-2 border-2 border-stone-400 rounded-md inline-flex">
        <BiLogoLinkedin className="text-xl  text-stone-600"></BiLogoLinkedin>
        </div>
      </div>
    </div>
    </div>
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
    <p  className="tracking-tighter text-blue-400">Send a message / Leave a review 😉</p>
    <div className="flex flex-col md:flex-row gap-4 w-full">   
     <div className="md:w-[50%]">
      <input type="text" id="name" name="name" placeholder="Name" className={`${inputStyles} w-full`} required></input>
       <ValidationError 
        prefix="Name" 
        field="name"
        errors={state.errors}
      />
     </div>
     <div className="md:w-[50%]">
     <input id="email" name="email" type="email" placeholder="Email-address" className={`${inputStyles}`} required></input>
     <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
     </div>
    </div>
     <textarea id="message"
        name="message" placeholder="Message" rows={5} className={`${inputStyles}`} ></textarea>
        <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
     <div className="w-[40%]">
     <Button type={'primary'}>Submit</Button>
     </div>
    </form>
    
  </div>;
}

export default Contact;
