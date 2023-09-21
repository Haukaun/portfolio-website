import React from "react";
import SkillCard from "./SkillCard";

function SkillCardList() {
  const images = [
    "./images/skill/html5-original.svg",
    "./images/skill/css3-original.svg",
    "./images/skill/javascript.svg",
    "./images/skill/react-original.svg",
    "./images/skill/java.svg",
    "./images/skill/angular.svg",
    "./images/skill/github-original.svg",
    "./images/skill/gitlab-original.svg",
    "./images/skill/flutter-original.svg",
    "./images/skill/csharp-original.svg",
    "./images/skill/vuejs.svg",
    "./images/skill/spring-original.svg",
    "./images/skill/unity-original.svg",
    "./images/skill/swift.svg",
  ];

  return (
    <div className="max-w-[70%] 2xl:max-w-[85rem] mx-auto flex flex-wrap justify-between items-center gap-10">
      {images.map((image, index) => (
        <SkillCard key={index} image={image} />
      ))}
    </div>
  );
}

export default SkillCardList;
