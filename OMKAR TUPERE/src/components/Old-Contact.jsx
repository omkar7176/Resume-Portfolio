import React from "react";
import { CONTACT } from "../constants";

const Contact = () => {
  return (
    <section id="contact" className="section">
      <div className="pb-4">
        <h2 className="my-20 text-center text-4xl">Contact</h2>
        <div className="container lg:grid lg:grid-cols-2 lg:items-stretch">
          <div className="mb-12 lg:mb-0 lg:flex lg:flex-col">
            <h2 className="headline-2 text-2xl">
              Contact me for collaboration
            </h2>
            <p className="text-zinc-600 mt-3 mb-8 max-w-[50ch] lg:max-w-[32ch]">
              Reach out to me to discuss your project needs collaborating
              something amazing!
            </p>
            {/* <div className="flex items-center gap-2 mt-auto">
              {socialLinks.map(({ href, icon }, key) => (
                <a
                  href={href}
                  target="_blank"
                  key={key}
                  className="w-12 h-12 grid place-items-center ring-inset ring-2 ring-zinc-50/5 rounded-lg transition-[background-color,color] hover:bg-zinc-50 hover:text-zinc-950 active:bg-zinc-50/80"
                >
                  {icon}
                </a>
              ))}
            </div> */}
          </div>

          <form
            action=""
            method="POST"
            className="xl:pl-10 2xl:pl-20"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Message submitted successfully");
            }}
          >
            <div className="md:grid md:items-center md:grid-cols-2 md:gap-2">
              <div className="mb-4">
                <label htmlFor="name" className="label">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  autoComplete="name"
                  required
                  placeholder="Omkar Tupere"
                  className="text-field"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="label">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  required
                  placeholder="omkar@google.com"
                  className="text-field"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="message" className="label">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  placeholder="Type your message here !"
                  className="text-field resize-y min-h-32 max-h-80"
                  required
                ></textarea>
              </div>
            </div>
            <div className="flex justify-center mb-4">
              <button type="submit" className="submit-button">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="border-t border-stone-900 pb-20">
        <h2 className="my-10 text-center text-4xl">Get in Touch</h2>
        <div className="text-center tracking-tighter">
          <p className="my-4">{CONTACT.address}</p>
          <p className="my-4">{CONTACT.phoneNo}</p>
          <a href="#" className="border-b">
            {CONTACT.email}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
