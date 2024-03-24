import { FaReadme } from "react-icons/fa6";
import { FeatureItems } from "./FeatureItems";

const Features = () => {
  return (
    <section id="features">
      <div>
        <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
          <div className="inline-flex items-center text-base font-semibold py-1 px-3 m-2 text-green-800 bg-green-200 rounded-full mb-4">
            <FaReadme className="mr-2" /> Attain concise understanding
          </div>
          <h2 className="text-4xl font-extrabold mt-3 mb-4">
            Single platform, endless summaries
          </h2>
          <p className="text-lg text-muted-foreground">
            Transforming information overload into manageable insights —
            consistently striving for clarity.
          </p>
        </div>
        <div className="grid gap-20">
          <FeatureItems
            title={" Condense & Comprehend: Summarization Simplified"}
            subtitle={"100% Automatic Article Summarization with just a click"}
            text={
              "In the sheer amount of information that bombards Internet users from all sides, hardly anyone wants to devote their valuable time to reading long texts. This's clever AI analyzes any piece of text and summarizes it automatically, in a way that makes it easy for you to read, understand and act on."
            }
            imageSrc={"/feature_1.svg"}
            alt={"feature_1"}
            width={868}
            height={474}
          />
          <FeatureItems
            isMiddle
            title={"Pure Focus, No Fuss: Your Ad-Free Reading Heaven"}
            subtitle={"Distraction and ad-free reading"}
            text={
              "As an efficient article summarizer tool, This meticulously eliminates ads, popups, graphics, and other online distractions, providing you with a clean, uncluttered reading experience. Moreover, it enhances your focus and comprehension by presenting the essential content in a concise and straightforward manner, thus transforming the way you consume information online."
            }
            imageSrc={"/feature_2.svg"}
            alt={"feature_2"}
            width={652}
            height={385}
          />
          <FeatureItems
            title={"Dodge the Distraction, Embrace the Essence"}
            subtitle={"Avoid the Clickbait Trap"}
            text={
              "This smartly selects the most relevant points from a text, filtering out weak arguments and baseless speculation. It allows for quick comprehension of the essence, without needing to sift through all paragraphs. By focusing on core substance and disregarding fluff, it enhances efficiency in consuming information, freeing more time for valuable content."
            }
            imageSrc={"/feature_3.svg"}
            alt={"feature_3"}
            width={1141}
            height={822}
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
