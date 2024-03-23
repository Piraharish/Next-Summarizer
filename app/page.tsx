import Contact from "@/components/landingPage/Contact";
import Faqs from "@/components/landingPage/Faqs";
import Features from "@/components/landingPage/Features";
import GetStarded from "@/components/landingPage/GetStarted";
import Hero from "@/components/landingPage/Hero";
import Slogan from "@/components/landingPage/Slogan";
import UseCases from "@/components/landingPage/UseCases";
import CustomSeparator from "@/components/ui/custom-separator";

export default function Home() {
  return (
    <main>
      <Hero />
      <CustomSeparator />
      <Features />
      <CustomSeparator />
      <UseCases />
      <Faqs />
      <CustomSeparator />
      <GetStarded />
      <Slogan />
      <Contact />
      <CustomSeparator />
    </main>
  );
}
