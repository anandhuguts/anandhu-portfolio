import { Element } from "react-scroll";
import Experiencefeatures from "../sub components/Experiencefeatures";
import Experiencejson from "../../../json/Experince.json";

function Experience() {
  return (
    <Element name="experience">
      <section className="w-full h-[1948px] bg-[#0C1328] text-white">
        <div className="text-center">
          <h2 className="font-script font-bold text-white text-[40px] ">
            Work Experience
          </h2>
        </div>
        <div className="flex justify-center gap-[40px] mt-[30px]">
          <div className="flex items-center justify-center w-[521px] h-[560px] bg-[#182234] border border-[#3A5074] rounded-lg">
            <div className="w-[450px] h-[492px]">
              <h2 className="font-script font-bold  text-[21px]">
                Front-end Development
              </h2>
              <p className="font-script font-semibold text-[#D8D8D8] text-[14px] leading-[19px] tracking-[.4px] mt-[4px]">
                React.js, Next.js, Context API, React Query, Redux,
                <br /> Tailwind CSS, Advanced Patterns
              </p>
              <ul className="mt-[18px] list-disc ml-4">
                {Experiencejson.react.map((item, index) => {
                  return <Experiencefeatures key={index} text={item} />;
                })}
              </ul>
            </div>
          </div>
          <div className="flex items-center justify-center w-[521px] h-[560px] bg-[#182234] border border-[#3A5074] rounded-lg">
            <div className="w-[450px] h-[492px]">
              <h2 className="font-script font-bold  text-[21px]">
                Back-end Development
              </h2>
              <p className="font-script font-semibold text-[#D8D8D8] text-[14px] leading-[19px] tracking-[.4px] mt-[4px]">
                React.js, Next.js, Context API, React Query, Redux,
                <br /> Tailwind CSS, Advanced Patterns
              </p>
              <ul className="mt-[18px] list-disc ml-4">
                {Experiencejson.backend.map((item, index) => {
                  return <Experiencefeatures key={index} text={item} />;
                })}
              </ul>
            </div>
          </div>
          <div className="flex items-center justify-center w-[521px] h-[560px] bg-[#182234] border border-[#3A5074] rounded-lg">
            <div className="w-[450px] h-[492px]">
              <h2 className="font-script font-bold  text-[21px]">
                Front-end Development
              </h2>
              <p className="font-script font-semibold text-[#D8D8D8] text-[14px] leading-[19px] tracking-[.4px] mt-[4px]">
                React.js, Next.js, Context API, React Query, Redux,
                <br /> Tailwind CSS, Advanced Patterns
              </p>
              <ul className="mt-[18px] list-disc ml-4">
                {Experiencejson.expertise.map((item, index) => {
                  return <Experiencefeatures key={index} text={item} />;
                })}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Element>
  );
}

export default Experience;
