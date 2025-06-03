function Projectcomp({ title, mainimg, desc, tech }) {
  console.log(tech);
  return (
    <div className=" relative flex justify-center max-sm:px-[20px]  px-[38px] py-[33px] bg-[#182234] border border-[#3A5074] rounded-[37px] ">
      <div>
        <img className="w-full h-auto object-cover" src={mainimg} alt="" />
        <div className="flex items-center  justify-between mt-[27px]">
          <h2 className="font-script font-semibold max-xl:text-[19px]  max-md:text-[18px] max-lg:text-2xl max-sm:text-[14px] text-[21px]">
            {title}
          </h2>
          <div className="flex gap-[13px]">
            <button>
              <a href="">
                <img src="figma.svg" alt="" />
              </a>
            </button>
            <button>
              <a href="">
                <img src="github-light logo.svg" alt="" />
              </a>
            </button>
          </div>
        </div>
        <p className=" font-script font-normal text-[#D8D8D8] max-xl:text-[15px] text-[16px] mt-[15px] max-lg:text-[18px] max-md:text-[15px] max-sm:text-[14px]">
          {desc}
        </p>
        <div className="flex max-sm:items-center max-sm:flex-col max-sm:gap-[20px] mt-[54px] w-full justify-between ">
          <div className="flex gap-[12px]">
            {tech.map((techh, index) => (
              <button
                className=" font-script font-semibold text-[#0C1328] text-[13px] max-xl:text-[12px] max-lg:text-[15px] max-md:text-[12px] max-sm:text-[10px]   bg-[#00DC82] rounded-[21px] py-[10px] px-[10px]"
                key={index}
              >
                {techh}
              </button>
            ))}
          </div>
          <button className=" flex justify-center items-center gap-[4px] bg-white font-script font-semibold text-[#0C1328] max-md:text-[14px] max-sm:text-[12px]  max-lg:text-[17px] text-[15px] max-xl:text-[14px]  rounded-[21px] p-[10px]  ">
            <a href=""> Visit Now</a> <img src="maki_arrow.svg" alt="" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Projectcomp;
