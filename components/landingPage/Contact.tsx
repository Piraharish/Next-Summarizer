import Link from "next/link";
import {
  FaFacebookF,
  FaFacebookMessenger,
  FaGithub,
  FaHandshakeSimple,
  FaLinkedinIn,
  FaUserSecret,
  FaXTwitter,
} from "react-icons/fa6";
import { UseCard } from "../UseCard";

const Contact = () => {
  return (
    <section id="contact">
      <div>
        <div className="mb-14 text-center">
          <div className="inline-flex items-center text-base font-semibold py-1 px-3 m-2 text-green-800 bg-green-200 rounded-full mb-4">
            <FaHandshakeSimple className="mr-2" />
            Get in touch
          </div>
          <h2 className="text-4xl font-extrabold mt-3 mb-4">Contact</h2>
          <p className="text-lg text-muted-foreground">
            You can send a mail to me on&nbsp;
            <Link
              href="mailto:piraharish.s@gmail.com"
              className="text-primary hover:underline"
            >
              piraharish.s@gmail.com
            </Link>
            &nbsp;or connect with me on social media.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center">
          <UseCard
            icon={<FaXTwitter className="h-7 w-7" />}
            title="Twitter"
            link="https://twitter.com/piraharish"
            linkText="Follow me!"
            isExternal
          />
          <UseCard
            icon={<FaFacebookF className="h-7 w-7" />}
            title="Facebook"
            link="https://facebook.com/piraharish"
            linkText="Be friends!"
            isExternal
          />
          <UseCard
            icon={<FaGithub className="h-7 w-7" />}
            title="Github"
            link="https://github.com/Piraharish"
            linkText="Rate a star!"
            isExternal
          />
          <UseCard
            icon={<FaLinkedinIn className="h-7 w-7" />}
            title="LinkedIn"
            link="https://linkedin.com/in/piraharish"
            linkText="Let's connect"
            isExternal
          />
          <UseCard
            icon={<FaUserSecret className="h-7 w-7" />}
            title="Portfolio"
            link="https://piraharish.vercel.app"
            linkText="Hire me!"
            isExternal
          />
          <UseCard
            icon={<FaFacebookMessenger className="h-7 w-7" />}
            title="Messenger"
            link="https://m.me/piraharish"
            linkText="Message me!"
            isExternal
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
