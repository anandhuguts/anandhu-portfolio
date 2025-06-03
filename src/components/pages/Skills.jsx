import { Element } from "react-scroll";
import Skillsrectangle from "../sub components/Skillsrectangle";
import skills from "../../json/Skills.json";
import Skillsrectangles from "../sub components/Skillsrectangle copy";

function Skills() {
  const allSkills = [
    ...Array().fill(null),
    ...skills.frontend,
    ...Array().fill(null),
    ...skills.backend,
    ...Array().fill(null),
    ...skills.design,
    ...Array().fill(null),
  ];

  return (
    <Element name="skills">
      <section className="w-full min-h-screen bg-[#0C1328] text-white py-16 px-6">
        <h2 className="font-script font-bold text-white text-[40px] text-center mb-10">
          My Skills
        </h2>

        <div className="relative sm:hidden">
          {/* Blurred Borders */}
          <div className="max-[400px]:!hidden absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#0C1328] to-transparent z-40 pointer-events-none"></div>
          <div className="max-[400px]:!hidden absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0C1328] to-transparent z-40 pointer-events-none"></div>
          <div className="max-[400px]:!hidden absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-[#0C1328] to-transparent z-40 pointer-events-none"></div>
          <div className=" max-[400px]:!hidden absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-[#0C1328] to-transparent z-40 pointer-events-none"></div>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4 z-10 relative mx-auto overflow-x-auto">
            {allSkills.map((skill, index) => (
              <Skillsrectangle
                key={index}
                title={skill?.title}
                image={skill?.image}
                layerBlur={skill?.layerBlur}
                shadowColour={skill?.shadowColour}
              />
            ))}
          </div>
        </div>
        <div className="sm:block hidden">
          <div className="flex flex-col gap-[26px] overflow-hidden relative ">
            {/* Top Blur */}
            <div className="absolute top-0 left-0 w-full h-[141px] bg-gradient-to-b from-[#0C1328] to-transparent z-40"></div>

            {/* Bottom Blur */}
            <div className="absolute bottom-0 left-0 w-full h-[141px] bg-gradient-to-t from-[#0C1328] to-transparent z-40"></div>

            {/* Left Blur */}
            <div className="absolute top-0 left-0 w-[141px] h-full bg-gradient-to-r from-[#0C1328] to-transparent z-40"></div>

            {/* Right Blur */}
            <div className="absolute top-0 right-0 w-[141px] h-full bg-gradient-to-l from-[#0C1328] to-transparent z-40"></div>

            <div className="flex gap-[28px] overflow-hidden">
              {[...Array(14)].map((_, index) => (
                <Skillsrectangles key={index} index={index} />
              ))}
            </div>
            {/* <div className="flex gap-[28px] overflow-hidden mt-[26px]">
          {[...Array(3)].map((_, index) => (
            <Skillsrectangle key={index} />
          ))}
          <Skillsrectangle
            title="HTML 5"
            image={"/HTML logo.png"}
            layerBlur={
              "absolute w-[73px] h-[73px] rounded-full bg-[#D65733]  blur-[66px]"
            }
            shaodwColour={"shadow-[0px_0px_34.5px_10px_rgba(247,223,30,0.8)]"}
          />
        </div> */}
            <div className="flex gap-[28px]">
              <Skillsrectangles />
              <Skillsrectangles />

              {skills.frontend.map((skill, index) => {
                return (
                  <Skillsrectangles
                    key={index}
                    title={skill.title}
                    image={skill.image}
                    layerBlur={skill.layerBlur}
                    shadowColour={skill.shadowColour}
                  />
                );
              })}

              {[...Array(5)].map((_, index) => (
                <Skillsrectangles key={index} />
              ))}
            </div>
            <div className="flex gap-[28px] ">
              {[...Array(3)].map((_, index) => (
                <Skillsrectangles key={index} />
              ))}
              {skills.backend.map((skill, index) => {
                return (
                  <Skillsrectangles
                    key={index}
                    title={skill.title}
                    image={skill.image}
                    layerBlur={skill.layerBlur}
                    shadowColour={skill.shadowColour}
                  />
                );
              })}

              {[...Array(5)].map((_, index) => (
                <Skillsrectangles key={index} />
              ))}
            </div>
            <div className="flex gap-[28px] ">
              {[...Array(4)].map((_, index) => (
                <Skillsrectangles key={index} />
              ))}
              {skills.design.map((skill, index) => {
                return (
                  <Skillsrectangles
                    key={index}
                    title={skill.title}
                    image={skill.image}
                    layerBlur={skill.layerBlur}
                    shadowColour={skill.shadowColour}
                  />
                );
              })}

              {[...Array(5)].map((_, index) => (
                <Skillsrectangles key={index} />
              ))}
            </div>
            <div className="flex gap-[28px] overflow-hidden">
              {[...Array(14)].map((_, index) => (
                <Skillsrectangles key={index} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </Element>
  );
}

export default Skills;
