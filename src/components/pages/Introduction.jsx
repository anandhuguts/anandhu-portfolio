import { Element } from "react-scroll";

function Introduction() {
  return (
    <Element name="home">
      <section className=" flex justify-center w-full min-h-[1020px] bg-[rgb(15,15,15)] bg-gradient-to-b from-[#0F0F0F] to-[#0C1328]">
        <div className="flex   justify-between w-full  max-w-[1330px] mx-auto mt-[310px] px-[100px] gap-[100px]">
          <div className="whitespace-nowrap">
            <h1 className="font-script font-medium text-white text-[32px] max-xl:text-[27px] max-lg:text-[24px] max-md:text-[19px]">
              Hey It`s me
            </h1>
            <h2 className="font-script font-semibold text-[#00DC82] text-[40px] max-xl:text-[35px] max-lg:text-[32px]">
              Anandhu Prasad
            </h2>
            <p className="font-script font-medium text-white text-[32px] max-xl:text-[27px] max-lg:text-[24px]">
              Iam a Full Stack Developer,
              <br /> UI/UX Designer
            </p>
            <p className="font-script font-medium text-white text-[20px] mt-[11px] max-xl:text-[17px] max-lg:text-[15px]">
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
              <button className="flex items-center gap-[10px] py-[9px] px-[15px] bg-[#00DC82] rounded-[6px] font-bold text-[17px] text-black font-open-sans max-xl:text-[15px] max-lg:text-[14px]">
                Resume <img src="/downloadbtn.svg" alt="" />
              </button>
              <button className="gap-[10px] py-[9px] px-[15px] bg-white rounded-[6px] font-bold text-[17px] text-black font-open-sans max-xl:text-[15px] max-lg:text-[14px]">
                Hire Now
              </button>
            </div>
          </div>
          <div>
            <img
              src="/Ellipse 1.png"
              alt=""
              className="shrink-0 min-w-[305px] min-h-[305px] max-lg:scale"
            />
          </div>
        </div>
      </section>
    </Element>
  );
}

export default Introduction;
