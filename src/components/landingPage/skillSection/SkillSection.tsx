import React, { useRef, useState } from "react";
import SkillCardList from "../../skillCard/SkillCardList";

function SkillSection() {
  const divRef = useRef<HTMLDivElement>(null);
  const [light, setLight] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current || !light) return;

    if (!divRef.current) return;

    const div = divRef.current;
    const rect = div.getBoundingClientRect();

    setPosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  };

  const toggleFlashlight = () => {
    setLight((prevState) => !prevState);
  };

  const flashlightRadius = 100;

  const flashLightStyle = light
    ? {
        mask: `radial-gradient(circle ${flashlightRadius}px at ${position.x}px ${position.y}px, transparent, black 200px)`,
        WebkitMask: `radial-gradient(circle ${flashlightRadius}px at ${position.x}px ${position.y}px, transparent, black 300px)`,
      }
    : {};

  return (
    <div className="flex gap-10 flex-col mt-20 text-center text-3xl font-bold dark:text-white">
      <div className="max-w-[70%] 2xl:max-w-[85rem] mx-auto flex flex-col gap-5">
        <h1>Skills</h1>
        <h2>
          <span className="text-blue-500 dark:text-red-500">Oh!</span> It looks
          like I forgot to turn on the lights.
        </h2>
        <h2>
          Please <span className="text-blue-500 dark:text-red-500">press</span>{" "}
          the switch for flashlight.
        </h2>
      </div>

      <div>
        <span
          onClick={toggleFlashlight}
          className="inline-flex justify-center items-center w-[46px] h-[46px] rounded-full border dark:active:bg-yellow-200 active:bg-yellow-200 border-gray-200 bg-white text-blue-500 shadow-sm dark:bg-gray-800 dark:border-gray-700 dark:text-red-500"
        >
          <svg
            className="w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09z" />
          </svg>
        </span>
      </div>

      <div className="relative min-h-screen">
        <SkillCardList />
        <div
          ref={divRef}
          onMouseLeave={() => setLight(false)}
          onMouseMove={handleMouseMove}
          className="absolute top-0 left-0 w-full h-full z-10"
          style={{
            ...flashLightStyle,
            backgroundImage:
              "linear-gradient(to bottom, transparent 0%,   rgba(0, 0, 0, 0.97) 7%, rgba(0, 0, 0, 1) 100%)",
          }}
        ></div>
      </div>
    </div>
  );
}

export default SkillSection;
