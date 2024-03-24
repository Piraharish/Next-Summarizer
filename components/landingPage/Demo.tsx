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
            alt="demo1"
            width={1920}
            height={1080}
            loading="lazy"
            className="object-contain"
          />
        </CarouselItem>
        <CarouselItem>
          <Image
            src="/login.png"
            alt="demo2"
            width={1920}
            height={1080}
            loading="lazy"
            className="object-contain"
          />
        </CarouselItem>
        <CarouselItem>
          <Image
            src="/summarizer.png"
            alt="demo3"
            width={1920}
            height={1080}
            loading="lazy"
            className="object-contain"
          />
        </CarouselItem>
        <CarouselItem>
          <Image
            src="/summary.png"
            alt="demo4"
            width={1920}
            height={1080}
            loading="lazy"
            className="object-contain"
          />
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
};

export default Demo;
