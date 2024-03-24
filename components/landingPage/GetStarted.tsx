import { FaDownload, FaRegPaste, FaUser } from "react-icons/fa6";
import { UseCard } from "../UseCard";

const GetStarded = () => {
  return (
    <section id="getstarted">
      <div>
        <h2 className="text-center text-3xl font-bold mb-4">Get Started</h2>
        <p className=" text-center text-lg text-muted-foreground mb-16">
          Want to know how to get started? It&apos;s very simple. Just follow
          the steps below.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
          <UseCard
            icon={<FaUser className="w-7 h-7" />}
            title={"Sign up with an account"}
            link="/auth/register"
            linkText="Create an account"
          />

          <UseCard
            icon={<FaRegPaste className="w-7 h-7" />}
            title={"Copy and paste an article url"}
            link="/summarizer"
            linkText="Paste URL here"
          />

          <UseCard
            icon={<FaDownload className="w-7 h-7" />}
            title={"Download your summary"}
            link="/summarizer"
            linkText="Download here"
          />
        </div>
      </div>
    </section>
  );
};

export default GetStarded;
