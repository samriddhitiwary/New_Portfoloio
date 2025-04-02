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
    <div className="relative min-h-screen bg-gradient-to-b from-gray-800 to-gray-600 text-white overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/background/poert_3.avif"
          alt="Samriddhi Tiwary"
          priority
          fill
          className="object-cover object-center opacity-60"
        />
        <div className="absolute inset-0 bg-black/10"></div>
      </div>

      {/* Title Section */}
      <div className="relative text-center py-24">
        <h1 className="text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-white-500 tracking-wide">
          My Projects
        </h1>
        <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
          Explore my recent works in web development and UI design.
        </p>
      </div>

      {/* Project Cards */}
      <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-6 lg:px-20 py-12">
        {projectsData.map((project) => (
          <div
            key={project.id}
            className="group relative bg-gray-800/80 backdrop-blur-lg rounded-xl shadow-2xl p-6 transition-transform transform hover:scale-105 hover:shadow-blue-500/50 border border-gray-700"
          >
            <h2 className="text-3xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
              {project.name}
            </h2>
            <p className="text-gray-400 mb-4 leading-relaxed">
              {project.description}
            </p>
            <a
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block px-5 py-2 text-white font-medium bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg transition-all hover:opacity-80 shadow-lg"
            >
              View Project
            </a>
          </div>
        ))}
      </div>

      {/* 3D Model Floating on Side */}
      <div className="absolute bottom-10 right-10 hidden lg:block animate-float">
        <RenderModel>
          <Staff />
        </RenderModel>
      </div>
    </div>
  );
}


