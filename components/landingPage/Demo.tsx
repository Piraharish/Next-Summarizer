"use client";

import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";

const Demo = () => {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 1200,
        }),
      ]}
      className="max-w-5xl aspect-video mx-auto overflow-hidden rounded-md border-4 border-foreground mt-20 md:mt-32"
    >
      <CarouselContent>
        <CarouselItem>
          <Image
            src="/register.png"
            alt="demo"
            width={1920}
            height={1080}
            quality={100}
            className="object-cover"
          />
        </CarouselItem>
        <CarouselItem>
          <Image
            src="/login.png"
            alt="demo"
            width={1920}
            height={1080}
            quality={100}
            className="object-cover"
          />
        </CarouselItem>
        <CarouselItem>
          <Image
            src="/summarizer.png"
            alt="demo"
            width={1920}
            height={1080}
            quality={100}
            className="object-cover"
          />
        </CarouselItem>
        <CarouselItem>
          <Image
            src="/summary.png"
            alt="demo"
            width={1920}
            height={1080}
            quality={100}
            className="object-cover"
          />
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
};

export default Demo;
