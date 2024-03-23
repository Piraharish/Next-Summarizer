import Link from "next/link";
import { Button } from "../ui/button";
import Demo from "./Demo";

const Hero = () => {
  return (
    <div>
      <div className="max-w-3xl mx-auto flex flex-col items-center justify-center text-center mt-8 lg:mt-24">
        <h1 className="text-5xl font-extrabold">
          Summarize articles using <span className="grad">SumAI</span>
        </h1>
        <p className="text-muted-foreground mt-8 mb-8">
          Harnessing the power of GPT 4, SUM AI enables users to effortlessly
          extract the core essence of complex texts, delivering precise
          summaries with remarkable accuracy.
        </p>
        <Button asChild size="lg">
          <Link href="/summarizer">Try Now! - It&apos;s Free</Link>
        </Button>
      </div>
      <Demo />
    </div>
  );
};

export default Hero;
