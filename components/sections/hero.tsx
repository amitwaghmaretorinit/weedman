/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import Image from "next/image";

const Hero = (props: any) => {
  const { hero } = props;
  return (
    <section className="relative h-[600px] lg:h-screen">
      <Image
        src={hero.backgroundImage.asset.url}
        alt={hero.backgroundImage.alt || "alt"}
        layout="fill"
        objectFit="cover"
        priority
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="text-center text-white max-w-4xl px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            {hero.mainHeading}
          </h1>
          <p className="text-xl md:text-2xl mb-8">{hero.subheading}</p>
          <Button
            size="lg"
            className="bg-green-600 hover:bg-green-700 text-white"
          >
            {hero.ctaButton.text}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
