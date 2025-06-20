import { Element } from "react-scroll";
import Projectcomp from "../sub components/Projectcomp";

function Projects() {
  return (
    <Element name="project">
      <section className="w-full py-[50px] bg-[#0C1328] text-white pb-[64px] px-[20px] sm:px-[74px] ">
        <div className="text-center">
          <h2 className="font-script font-bold text-white text-[40px] ">
            Projects
          </h2>
        </div>
        <div className="mt-[79px] max-sm:mt-[50px] grid grid-cols-2 max-lg:grid-cols-1 gap-[112px] max-xl:gap-[100px] max-lg:gap-[90px] max-sm:gap-[60px] max-w-[1234px] mx-auto ">
          <Projectcomp
            title={"Hulu Landing Page Website"}
            mainimg={"image.png"}
            desc={
              "One of my first projects, built with Vanilla CSS and JavaScript, focusing on responsive design, animations, and interactivity. This project helped me grasp DOM manipulation, event handling, and CSS styling, laying a solid frontend foundation."
            }
            tech={["HTML", "CSS", "JavaScript"]}
          />
        </div>
      </section>
    </Element>
  );
}

export default Projects;
