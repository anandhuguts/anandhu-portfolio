import { Element } from "react-scroll";
import { motion } from "motion/react";
import elipse from "../../images/Ellipse 1.png";

function Introduction() {
  return (
    <Element name="home">
      <section className=" flex items-center justify-center w-full min-h-[1020px] bg-[rgb(15,15,15)] bg-gradient-to-b from-[#0F0F0F] to-[#0C1328]">
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex max-w-[1200px] w-full justify-between items-center mx-auto  max-xl:mb-[200px] px-[50px] gap-[30px] max-sm:flex-col-reverse max-sm:mb-[100px] "
        >
          <div className="whitespace-nowrap ">
            <h1 className="font-script font-medium text-white text-[32px] max-lg:text-[29px]  ">
              Hey It`s me
            </h1>
            <h2 className="font-script font-semibold text-[#00DC82] text-[40px] max-lg:text-[36px] ">
              Anandhu Prasad
            </h2>
            <p className=" font-script font-medium text-white text-[32px] max-lg:text-[27px] ">
              Iam a Full Stack&nbsp;
              <span className="hidden max-lg:inline">
                <br />
              </span>
              Developer,
              <br /> UI/UX Designer
            </p>
            <p className="font-script font-medium text-white text-[20px] mt-[11px] max-lg:text-[19px]  ">
              Connect with me on
            </p>
            <ul className="flex gap-[18px] mt-[14px] ">
              <li>
                <a href="">
                  <img src="/linkedin.svg" alt="linkedinsvg" />
                </a>
              </li>
              <li>
                <a href="">
                  <img src="/behance.svg" alt="" />
                </a>
              </li>
              <li>
                <a href="">
                  <img src="/instagram.svg" alt="" />
                </a>
              </li>
              <li>
                <a href="">
                  <img src="/twitter.svg" alt="" />
                </a>
              </li>
              <li>
                <a href="">
                  <img src="/facebook.svg" alt="" />
                </a>
              </li>
            </ul>
            <div className="flex gap-[20px] mt-[33px]">
              <button className="flex items-center gap-[10px] py-[9px] px-[15px] bg-[#00DC82] rounded-[6px] font-bold text-[17px] text-black font-open-sans ">
                Resume <img src="/downloadbtn.svg" alt="" />
              </button>
              <button className="gap-[10px] py-[9px] px-[15px] bg-white rounded-[6px] font-bold text-[17px] text-black font-open-sans  ">
                Hire Now
              </button>
            </div>
          </div>
          <div className="min-w-[269px] max-w-[305px] overflow-hidden ">
            <img
              src={elipse}
              alt=""
              className="shrink-0 w-[305px] h-[305px] max-lg:w-[269px] max-lg:h-[269px] overflow-hidden"
            />
          </div>
        </motion.div>
      </section>
    </Element>
  );
}

export default Introduction;
