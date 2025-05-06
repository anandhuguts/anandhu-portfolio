import { useState } from "react";

function Skillsrectangle({ title, image, shadowColour, layerBlur }) {
  const [isHovered, setIsHovered] = useState(false);
  const transitionDuration = isHovered ? "300ms" : "1600ms";

  return (
    <div
      className="flex flex-col justify-center items-center bg-gradient-to-b from-[#161E31] to-[#0F1629] w-[117px] h-[117px] rounded-[10px] border border-[#1E2635] flex-shrink-0 relative overflow-hidden"
      style={{
        boxShadow:
          isHovered && shadowColour
            ? ` 0px 0px 35px -5px ${shadowColour} `
            : "0px 0px 0px 0px rgba(247, 223, 30, 0)",
        transition: isHovered
          ? `box-shadow ${transitionDuration} ease-out`
          : `box-shadow ${transitionDuration} ease-out`,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Blurred Circle */}
      {layerBlur && (
        <div
          className={`absolute w-[73px] h-[73px] rounded-full ${layerBlur}  blur-[66px]`}
          style={{ opacity: 0.33 }}
        ></div>
      )}

      {/* React Logo */}
      {image && <img src={image} alt="React Logo" className="mb-[30px]" />}

      {/* Title Below the Image */}
      <h2 className="absolute bottom-[10px] font-script font-semibold text-white text-[14px] z-11  ">
        {title}
      </h2>
    </div>
  );
}

export default Skillsrectangle;
