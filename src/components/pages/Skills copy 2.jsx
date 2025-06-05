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
      <section className="w-full  bg-[#0C1328] text-white py-16 px-6">
        <h2 className="font-script font-bold text-white text-[40px] text-center mb-10">
          My Skills
        </h2>
        <div className="sm:block hidden">
          <div className="grid gap-[26px] grid-cols-[repeat(auto-fit,_minmax(120px,_1fr))] px-[50px] xl:px-[300px] ">
            {[...skills.frontend, ...skills.backend, ...skills.design].map(
              (skill, index) => (
                <Skillsrectangles
                  key={index}
                  title={skill?.title}
                  image={skill?.image}
                  layerBlur={skill?.layerBlur}
                  shadowColour={skill?.shadowColour}
                />
              )
            )}
          </div>
        </div>
        <div className="relative sm:hidden">
          {/* Blurred Borders */}
          <div className="max-sm:!hidden absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#0C1328] to-transparent z-40 pointer-events-none"></div>
          <div className="max-sm:!hidden absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0C1328] to-transparent z-40 pointer-events-none"></div>
          <div className="max-sm:!hidden absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-[#0C1328] to-transparent z-40 pointer-events-none"></div>
          <div className=" max-sm:!hidden absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-[#0C1328] to-transparent z-40 pointer-events-none"></div>

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
      </section>
    </Element>
  );
}

export default Skills;
