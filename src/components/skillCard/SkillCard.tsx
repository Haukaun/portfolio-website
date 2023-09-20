import React from "react";

function SkillCard(props: { image: string }) {
  return (
    <div className="flex flex-col items-center w-[15rem] h-auto justify-center bg-white border shadow-sm rounded-xl p-4 md:p-5 dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7] dark:text-gray-400">
      <img src={props.image} alt="Skill" className="w-full" />
    </div>
  );
}

export default SkillCard;
