import { Link } from "react-scroll";
import { Spin as Hamburger } from "hamburger-react";
import { useState } from "react";
import { motion } from "motion/react";

function Navigation() {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="flex fixed w-full z-[9999]">
      <div className="flex  w-full h-[75px] bg-[#0f0f0f] border-b-[0.5px] border-[#1E2635]  ">
        <nav
          className="flex  w-full max-w-[1198px]  justify-between  items-center  text-[#A5A5A5] px-[30px]
text-[17px] mx-auto max-xl:w-full max-xl:max-w-[877px]   gap-[20px] max-lg:w-[700px] max-md:w-[600px]
"
        >
          <h1 className="flex flex-col text-[#00DC82] text-[18px] font-script font-medium max-lg:text-[15px] max-md:text-[13px]">
            Portfolio{" "}
            <span className=" text-white text-[10px] max-lg:text-[8px] max-md:text-[7px] whitespace-nowrap">
              Anandhu Prasad
            </span>
          </h1>
          <ul className="flex w-[590px] justify-between   font-script font-medium max-lg:text-[15px] gap-[10px] max-lg:w-[500px] max-md:w-[350px] max-md:text-[12px] max-md:hidden ">
            <Link
              to="home"
              className="cursor-pointer hover:text-white transition-colors duration-300 ease-in-out active:text-white
"
              activeClass="text-white"
            >
              Home
            </Link>
            <Link
              to="about"
              className="cursor-pointer hover:text-white transition-colors duration-300 ease-in-out
 "
              offset={-170}
              activeClass="text-white"
            >
              About
            </Link>
            <Link
              to="skills"
              className="cursor-pointer hover:text-white transition-colors duration-300 ease-in-out
"
              offset={-100}
            >
              Skills
            </Link>
            {/* <Link
            to="experience"
            className="cursor-pointer hover:text-white transition-colors duration-300 ease-in-out
"
            offset={-100}
          >
            Experience
          </Link> */}
            <Link
              to="project"
              className="cursor-pointer hover:text-white transition-colors duration-300 ease-in-out
"
              offset={-100}
            >
              Project
            </Link>
            <Link
              to="contact"
              className="cursor-pointer hover:text-white transition-colors duration-300 ease-in-out
"
            >
              Contact
            </Link>
          </ul>
          <div className="md:hidden relative z-50">
            <div className="md:hidden">
              <Hamburger size={23} toggled={isOpen} toggle={setOpen} />
            </div>
            {isOpen && (
              <div
                className="  flex flex-col absolute right-0 mt-2 bg-[#1E2635] shadow-lg rounded-xl p-4 space-y-3  w-40
          transition-all duration-300 ease-in-out"
              >
                <Link
                  onClick={() => setOpen(false)}
                  to="home"
                  className="cursor-pointer hover:text-white transition-colors duration-300 ease-in-out active:text-white
"
                  activeClass="text-white"
                >
                  Home
                </Link>
                <Link
                  onClick={() => setOpen(false)}
                  to="about"
                  className="cursor-pointer hover:text-white transition-colors duration-300 ease-in-out
 "
                  offset={-170}
                  activeClass="text-white"
                >
                  About
                </Link>
                <Link
                  onClick={() => setOpen(false)}
                  to="skills"
                  className="cursor-pointer hover:text-white transition-colors duration-300 ease-in-out
"
                  offset={-100}
                >
                  Skills
                </Link>
                <Link
                  onClick={() => setOpen(false)}
                  to="project"
                  className="cursor-pointer hover:text-white transition-colors duration-300 ease-in-out
"
                  offset={-100}
                >
                  Project
                </Link>
                <Link
                  onClick={() => setOpen(false)}
                  to="contact"
                  className="cursor-pointer hover:text-white transition-colors duration-300 ease-in-out
"
                >
                  Contact
                </Link>
              </div>
            )}
          </div>

          <button className="text-black text-[16px] border bg-white rounded-[6px] w-[122px] h-[40px] font-script font-semibold  max-xl:hidden transition-all duration-300 ease-in-out hover:bg-[#00DC82] hover:text-white hover:border-[#00DC82]">
            Email me
          </button>
        </nav>
      </div>
    </div>
  );
}

export default Navigation;
