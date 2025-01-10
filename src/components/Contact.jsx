import { CONTACT } from "../constants";

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
        <h1 className="my-10 text-center text-4xl">Get in Touch</h1>
        <div className="text-center trackin-tighter">
            <p className="my-4"><a href="#" className="border-b mb-2">{CONTACT.email}</a></p>
            <p className="my-4"><a href="#" className="border-b">{CONTACT.LinkedIn}</a></p>
        </div> 
    </div>
  );
};

export default Contact;