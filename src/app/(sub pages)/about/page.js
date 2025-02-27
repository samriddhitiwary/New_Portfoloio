import Image from "next/image";
import RenderModel from "@/components/RenderModel";
import AboutDetails from "@/components/about";
import dynamic from "next/dynamic";

const HatModel = dynamic(() => import("@/components/models/HatModel"), {
  ssr: false,
});

export const metadata = {
  title: "About",
};

export default function Home() {
  return (
    <>
      {/* Fix: Added "fill" to make the image responsive */}
      <div className="fixed top-0 left-0 w-full h-full -z-50">
        <Image
          src="/background/port_1.jpg"
          alt="Next.js Portfolio website's about page background image"
          priority
          fill
          className="object-cover object-center opacity-50"
        />
      </div>

      <div className="w-full h-3/5 xs:h-3/4 sm:h-screen absolute top-1/2 -translate-y-1/2 left-0 z-10">
        <RenderModel>
          <HatModel />
        </RenderModel>
      </div>

      <div className="relative w-full h-screen flex flex-col items-center justify-center">
        <div className="absolute flex flex-col items-center text-center top-1/2 sm:top-[60%] left-1/2 -translate-y-1/2 -translate-x-1/2">
          <h1 className="font-bold text-6xl xs:text-7xl sm:text-8xl lg:text-9xl text-accent">
            Samriddhi Tiwary
          </h1>
          <p className="font-light text-foreground text-lg">
            Meet the wizard behind this portfolio
          </p>
        </div>
      </div>

      <AboutDetails />
    </>
  );
}
