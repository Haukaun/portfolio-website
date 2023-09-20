import React from "react";
import Header from "../components/header/Header";
import MainContent from "../components/landingPage/mainSection/MainContent";
import ProjectSection from "../components/landingPage/projectSection/ProjectSection";
import SkillSection from "../components/landingPage/skillSection/SkillSection";

function LandingPage() {
  return (
    <main className="flex justify-center bg-white dark:bg-gray-800">
      <div className="w-full min-h-screen">
        <div className="max-w-[70%] 2xl:max-w-[85rem] mx-auto">
          <Header />
          <MainContent />
          <ProjectSection />
        </div>

        <SkillSection />
      </div>
    </main>
  );
}

export default LandingPage;
