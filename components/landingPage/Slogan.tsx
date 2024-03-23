import Link from "next/link";

const Slogan = () => {
  return (
    <section>
      <div className="bg-primary flex flex-col lg:flex-row justify-between rounded items-center gap-8 p-12">
        <h3 className="text-3xl font-bold lg:w-1/2 text-center lg:text-left">
          Focus on the Value, Not the Noise.
        </h3>

        <Link
          href="/summarizer"
          className="text-lg font-medium px-4 py-2 bg-foreground text-primary rounded-md"
        >
          Try Now ! - It&apos;s Free
        </Link>
      </div>
    </section>
  );
};

export default Slogan;
