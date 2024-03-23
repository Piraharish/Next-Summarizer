import { Architects_Daughter } from "next/font/google";
import Image from "next/image";

const architects = Architects_Daughter({
  subsets: ["latin"],
  weight: ["400"],
});

interface FeatureItemProps {
  isMiddle?: boolean;
  title: string;
  subtitle: string;
  text: string;
  imageSrc: string;
  alt: string;
  width: number;
  height: number;
}

export const FeatureItems: React.FC<FeatureItemProps> = ({
  isMiddle,
  title,
  subtitle,
  text,
  imageSrc,
  alt,
  width,
  height,
}) => {
  const flexDirection = isMiddle ? "lg:flex-row-reverse" : "lg:flex-row";
  const padding = isMiddle ? "lg:pr-8" : "lg:pl-8";

  return (
    <div
      className={`flex flex-col-reverse gap-6 ${flexDirection} w-full justify-between max-w-3xl md:max-w-4xl lg:max-w-full mx-auto`}
    >
      <div className={`lg:w-1/2 ${padding}`}>
        <div className={`${architects.className} text-xl text-primary mb-3`}>
          {title}
        </div>
        <h3 className="mb-3 font-bold text-3xl">{subtitle}</h3>
        <p className="text-lg text-muted-foreground mb-4">{text}</p>
      </div>
      <div className="lg:w-1/2 overflow-hidden aspect-video bg-foreground rounded-md p-8 mb-8">
        <Image
          src={imageSrc}
          alt={alt}
          width={width}
          height={height}
          quality={100}
          className="object-contain"
        />
      </div>
    </div>
  );
};
