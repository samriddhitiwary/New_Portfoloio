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
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Background with Less Darkness */}
      <div className="absolute inset-0">
        <Image
          src="/background/poert_3.avif"
          alt="Samriddhi Tiwary"
          priority
          fill
          className="object-cover object-center opacity-70"
        />
        <div className="absolute inset-0 bg-black/30"></div> {/* Reduced darkness */}
      </div>

      {/* Title Section */}
      <div className="relative text-center py-24">
        <h1 className="text-5xl font-extrabold text-white tracking-wide">
          My Projects
        </h1>
        <p className="mt-4 text-lg text-gray-300">
          Explore my recent works in web development and UI design.
        </p>
      </div>

      {/* Project Cards */}
      <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 lg:px-20 py-12">
        {projectsData.map((project) => (
          <div
            key={project.id}
            className="group relative bg-gray-900/80 rounded-xl shadow-xl p-6 transition-transform transform hover:scale-105 hover:shadow-neon"
          >
            <h2 className="text-2xl font-semibold text-white">{project.name}</h2>
            <p className="mt-2 text-gray-400">{project.description}</p>
            <a
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block px-4 py-2 text-white bg-blue-700 rounded-lg transition-all hover:bg-blue-600"
            >
              View Project
            </a>
          </div>
        ))}
      </div>

      {/* 3D Model Floating on Side */}
      <div className="absolute bottom-10 right-10 hidden lg:block">
        <RenderModel>
          <Staff />
        </RenderModel>
      </div>
    </div>
  );
}
