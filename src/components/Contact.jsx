import { CONTACT } from "../constants";

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <h1 className="my-10 text-center text-4xl">Get in Touch</h1>
      <div className="text-center tracking-tighter">
        <p className="my-4">
          <a 
            href={`mailto:${CONTACT.email}`} 
            className="border-b mb-2" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="Email"
          >
            {CONTACT.email}
          </a>
        </p>
        <p className="my-4">
          <a 
            href={CONTACT.LinkedIn}
            className="border-b" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="LinkedIn"
          >
            Visit my LinkedIn profile
          </a>
        </p>
      </div>
    </div>
  );
};

export default Contact;