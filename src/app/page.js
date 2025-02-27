import Image from "next/image";
import RenderModel from "@/components/RenderModel";
import Navigation from "@/components/navigation";
import dynamic from "next/dynamic";

const Wizard = dynamic(() => import("@/components/models/Wizard"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      {/* Corrected Image Path */}
      <div className="fixed top-0 left-0 w-full h-full -z-50">
        <Image
          src="/background/contact-background.png"
          alt="Home background image"
          priority
          fill
          className="object-cover object-center opacity-50"
        />
      </div>

      <div className="w-full h-screen">
        <Navigation />
        <RenderModel>
          <Wizard />
        </RenderModel>
      </div>
    </main>
  );
}
