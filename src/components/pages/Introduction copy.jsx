import { Element } from "react-scroll";
import { motion } from "motion/react";
import Typewriter from "../hooks/Typewriter";
import Background3D from "../sub components/Background";

function Introduction() {
  return (
    <Element name="home">
      <section className=" flex items-center justify-center w-full min-h-[1020px] bg-[rgb(15,15,15)] bg-gradient-to-b from-[#0F0F0F] to-[#0C1328] z-[2] max-[400px]:!min-h-screen">
        <Background3D />
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex   items-center mx-auto  max-xl:mb-[200px] px-[50px] gap-[30px] max-sm:flex-col-reverse max-sm:mb-[100px] max-[400px]:!mb-[0px] "
        >
          <div className="whitespace-nowrap text-center flex flex-col items-center ">
            <h1 className="max-[400px]:!text-[14px]   font-open-sans font-semibold text-white text-[32px] max-xl:text-[28px] max-lg:text-[26px] max-md:text-[24px] max-sm:text-[22px]   ">
              Welcome to My Portfolio
            </h1>
            <h2 className="font-script font-medium text-white text-[61px]  leading-tight max-[400px]:!text-[27px] max-xl:text-[52px] max-lg:text-[45px] max-md:text-[38px] max-sm:text-[32px]  ">
              Hi, Im <span className="text-[#00DC82]">Anandhu Prasad</span>
              <br />
              <span className="w-full flex justify-start ">
                Iam a&nbsp;
                <Typewriter />
              </span>
            </h2>

            <p className="font-script font-medium text-white text-[20px] mt-[11px]  max-[400px]:!text-[15px] max-xl:text-[19px] max-lg:text-[18px] max-md:text-[17px] max-sm:text-[16px]  ">
              Connect with me on
            </p>
            <ul className="flex gap-[18px] mt-[10px] ">
              <li>
                <a href="">
                  <img
                    className="transition-transform duration-200 hover:scale-110  "
                    src="/linkedin.svg"
                    alt="linkedinsvg"
                  />
                </a>
              </li>
              <li>
                <a href="">
                  <img
                    className="transition-transform duration-200 hover:scale-110"
                    src="/behance.svg"
                    alt=""
                  />
                </a>
              </li>
              <li>
                <a href="">
                  <img
                    className="transition-transform duration-200 hover:scale-110"
                    src="/instagram.svg"
                    alt=""
                  />
                </a>
              </li>
              <li>
                <a href="">
                  <img
                    className="transition-transform duration-200 hover:scale-110"
                    src="/twitter.svg"
                    alt=""
                  />
                </a>
              </li>
              <li>
                <a href="">
                  <img
                    className="transition-transform duration-200 hover:scale-110"
                    src="/facebook.svg"
                    alt=""
                  />
                </a>
              </li>
            </ul>
            <div className="flex gap-[20px] mt-[23px]">
              <button className="flex items-center gap-[10px] py-[9px] px-[15px] bg-[#00DC82] rounded-[6px] font-bold text-[17px] text-black font-open-sans max-[400px]:!text-[14px] ">
                Resume <img src="/downloadbtn.svg" alt="" />
              </button>
              <button className="gap-[10px] py-[9px] px-[15px] bg-white rounded-[6px] font-bold text-[17px] text-black font-open-sans max-[400px]:!text-[14px] ">
                Hire Now
              </button>
            </div>
          </div>
        </motion.div>
      </section>
    </Element>
  );
}

export default Introduction;
