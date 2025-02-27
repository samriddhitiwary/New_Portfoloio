import React from "react";
import ItemLayout from "./ItemLayout";
import Link from "next/link";

const AboutDetails = () => {
  return (
    <section className="py-20 w-full">
      <div className="grid grid-cols-12 gap-4 xs:gap-6 md:gap-8 w-full ml-3">
        <ItemLayout
          className={
            "col-span-full lg:col-span-8 row-span-2 flex-col items-start"
          }
        >
          <h2 className="text-xl md:text-2xl text-left w-full capitalize">
            Architect of Enchantment
          </h2>
          <p className="font-light text-xs sm:text-sm md:text-base">
            I am Samriddhi Tiwary, a passionate developer with expertise in full-stack development.
            I specialize in the MERN stack. My journey in web development has been driven by a
            deep curiosity to explore and innovate. I craft immersive and engaging digital experiences,
            ensuring performance, accessibility, and seamless UI/UX. I have contributed to open-source
            projects, participated in hackathons, and continuously push my boundaries to learn
            new technologies like Tailwind CSS, MongoDB, and Generative AI.
          </p>
        </ItemLayout>

        <ItemLayout className={"col-span-full"}>
          <img
            className="w-full h-auto"
            src={`https://skillicons.dev/icons?i=bootstrap,css,firebase,git,github,html,js,mongodb,nextjs,nodejs,npm,react,tailwind,threejs,vercel,vite,vscode`}
            alt="CodeBucks"
            loading="lazy"
          />
        </ItemLayout>
      </div>

      {/* Achievements Section */}
      <div className="mt-16 w-full text-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">My Achievements</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <ItemLayout key={index} className="flex flex-col items-center text-center">
              <h3 className="text-xl font-bold mb-2">{achievement.title}</h3>
              <p className="text-sm md:text-base font-light">{achievement.description}</p>
            </ItemLayout>
          ))}
        </div>
      </div>
    </section>
  );
};

const achievements = [
  {
    title: "Google Girl Hackathon 2025",
    description: "Selected for the prestigious Google Girl Hackathon 2025."
  },
  {
    title: "HackWar Hackathon",
    description: "Awarded Best Innovative Design by IIC VIT in January 2025."
  },
  {
    title: "GirlScript Summer of Code 2024",
    description: "Recognized as a Top 100 Contributor out of 70,000+ participants, earning 7 badges."
  },
  {
    title: "HackWeb3Conf 2024",
    description: "Ranked in the Top 100 out of 1,600+ developers and 600+ submissions."
  },
  {
    title: "Hacktoberfest 2024",
    description: "Successfully completed Hacktoberfest challenges and earned 4 badges."
  },
  {
    title: "CropSky Internship",
    description: "Selected as a Web Developer Intern for AI-driven agricultural solutions."
  },
  {
    title: "Team Lambda Internship",
    description: "Working on a government-funded project by DST, India as a Web Developer Intern."
  },
  {
    title: "IIT BHU & IIT Indore Hackathon Finalist",
    description: "Qualified for the final round of hackathons at IIT BHU and IIT Indore."
  }
];

export default AboutDetails;
