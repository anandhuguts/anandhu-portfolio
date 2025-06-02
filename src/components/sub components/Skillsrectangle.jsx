import { useState } from "react";

function Skillsrectangle({ title, image, shadowColour, layerBlur }) {
  const [isHovered, setIsHovered] = useState(false);
  const transitionDuration = isHovered ? "300ms" : "1600ms";

  return (
    <div
      className="flex flex-col justify-center items-center bg-gradient-to-b from-[#161E31] to-[#0F1629] 
                 w-[160px] h-[160px] max-[400px]:!w-[100px] max-[400px]:!h-[100px] rounded-[10px] border border-[#1E2635] 
                 relative overflow-hidden flex-shrink-0 "
      style={{
        boxShadow:
          isHovered && shadowColour
            ? `0px 0px 35px -5px ${shadowColour}`
            : "0px 0px 0px 0px rgba(247, 223, 30, 0)",
        transition: `box-shadow ${transitionDuration} ease-out`,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Blurred Circle */}
      {layerBlur && (
        <div
          className={`absolute w-[73px] h-[73px] rounded-full ${layerBlur} blur-[66px]`}
          style={{ opacity: 0.33 }}
        />
      )}

      {/* Logo */}
      {image && (
        <img
          src={image}
          alt={title || "Skill Icon"}
          className="mb-[30px] w-[34px] h-[45px] sm:w-[50px] sm:h-[50px] md:w-[57px] md:h-[57px] object-contain"
        />
      )}

      {/* Title */}
      {title && (
        <h2 className="absolute bottom-[10px] font-script font-semibold text-white text-[14px] max-[400px]:!text-[11px] z-10">
          {title}
        </h2>
      )}
    </div>
  );
}

export default Skillsrectangle;
