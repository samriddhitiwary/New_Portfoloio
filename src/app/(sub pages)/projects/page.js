import Image from "next/image";
import ProjectList from "@/components/projects";
import { projectsData } from "../../data";
import RenderModel from "@/components/RenderModel";
import dynamic from "next/dynamic";

const Staff = dynamic(() => import("@/components/models/Staff"), {
  ssr: false,
});

export const metadata = {
  title: "Projects",
};

export default function Home() {
  return (
    <>
      {/* Corrected Image Path */}
      <div className="fixed top-0 left-0 w-full h-full -z-50">
        <Image
          src="/background/poert_3.avif"
          alt="Samriddhi Tiwary"
          priority
          fill
          className="object-cover object-center opacity-50"
        />
      </div>

      <ProjectList projects={projectsData} />

      <div className="flex items-center justify-center fixed top-16 lg:top-20 -translate-x-1/2 lg:translate-x-0 -z-10 left-1/2 lg:-left-24 h-screen">
        <RenderModel>
          <Staff />
        </RenderModel>
      </div>
    </>
  );
}
