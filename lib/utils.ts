import { type ClassValue, clsx } from "clsx";
import { Metadata } from "next";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function constructMetadata({
  title = "Sumai - Ai Summarizer",
  description = "Sumai is an api based, article summarizing app built using NextJS. Which  provides you with the core essence of complex articles, delivering precise summaries with remarkable accuracy. It supports most of the articles and may sometimes some websites can be summarized. Please use it wisely and only for educational purposes. The actual quality of content may vary.",
  image = "/thumbnail.png",
  icons = "/favicon.ico",
  noIndex = false,
}: {
  title?: string;
  description?: string;
  image?: string;
  icons?: string;
  noIndex?: boolean;
} = {}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: image,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@piraharish",
    },
    icons,
    metadataBase: new URL("https://sumai-summarizer.vercel.app"),
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}
