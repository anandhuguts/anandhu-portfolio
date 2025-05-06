function Projectcomp({ title, mainimg, desc, tech }) {
  console.log(tech);
  return (
    <div className=" relative flex justify-center  w-[551px] h-[640px] bg-[#182234] border border-[#3A5074] rounded-[37px]">
      <div className="mt-[33px]">
        <img src={mainimg} alt="" />
        <div className="flex w-[468px] justify-between mt-[27px]">
          <h2 className="font-script font-semibold  text-[21px]">{title}</h2>
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
        <p className="w-[468px] font-script font-normal text-[#D8D8D8] text-[16px] mt-[15px] ">
          {desc}
        </p>
        <div className="flex w-[468px] justify-between absolute bottom-[58px] ">
          <div className="flex gap-[12px]">
            {tech.map((techh, index) => (
              <button
                className=" font-script font-semibold text-[#0C1328] text-[13px] flex item-center justify-center bg-[#00DC82] rounded-[21px] py-[10px] px-[10px]"
                key={index}
              >
                {techh}
              </button>
            ))}
          </div>
          <button className="flex justify-center items-center gap-[4px] bg-white font-script font-semibold text-[#0C1328] text-[15px] rounded-[21px] w-[107px] ">
            <a href=""> Visit Now</a> <img src="maki_arrow.svg" alt="" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Projectcomp;
