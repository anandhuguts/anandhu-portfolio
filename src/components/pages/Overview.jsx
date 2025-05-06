import { Element } from "react-scroll";
import Services from "../sub components/Services";
import Service from "../../json/Services.json";

function Overview() {
  return (
    <Element name="about">
      <section className="flex justify-center w-full min-h-[766px] bg-[#0C1328] text-white overflow-hidden">
        <div>
          <div>
            <h2 className="font-script font-bold text-white text-[47px]">
              Overview
            </h2>
            <p className=" font-script font-normal text-[#D8D8D8] text-[16px] leading-[28px] tracking-[1.2px] mt-[11px]">
              As a creative MERN stack developer and web designer, I specialize
              in crafting high- <br />
              performance, visually stunning digital experiences. With a strong
              passion for <br /> building dynamic web applications, I seamlessly
              blend functionality with aesthetic <br /> design, ensuring every
              project is both efficient and visually engaging. My expertise{" "}
              <br /> lies in developing intuitive user experiences, combining
              creativity with technical <br /> proficiency to deliver solutions
              that are not only beautifully designed but also highly <br />{" "}
              optimized for performance and usability.
            </p>
          </div>
          <div className="flex gap-[20px] mt-[50px]">
            {Service.map((service, index) => {
              return (
                <Services
                  key={index}
                  icon={service.icon}
                  title={service.title}
                  paragraph={service.paragraph}
                />
              );
            })}
          </div>
        </div>
      </section>
    </Element>
  );
}

export default Overview;
