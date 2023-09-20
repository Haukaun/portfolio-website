import React from "react";
import ProjectCard from "../../projectCard/ProjectCard";

function ProjectSection() {
  return (
    <div>
      <h1 className="text-center mb-10 text-3xl font-bold dark:text-white">
        Projects
      </h1>
      <ProjectCard
        title="VoicePick"
        description="Applicaiton and it is very good"
        image="./images/mac.png"
        secondImage="./images/solwr.png"
      />
      <ProjectCard
        title="VoicePick"
        description="Applicaiton and it is very good"
        image="./images/mac.png"
        secondImage="./images/trails.png"
      />
      <ProjectCard
        title="VoicePick"
        description="Applicaiton and it is very good"
        image="./images/mac.png"
        secondImage="./images/next.png"
      />
    </div>
  );
}

export default ProjectSection;
