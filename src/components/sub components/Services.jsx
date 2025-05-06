function Services({ title, icon, paragraph }) {
  return (
    <div className="flex justify-center items-center gradient w-[227px] h-[227px] rounded-[10px] border border-[#1E2635]  ">
      <div>
        <img src={icon} alt="" />
        <h2 className="font-script font-bold text-white text-[14px] mt-[22px]">
          {title}
        </h2>
        <p className="font-script font-normal text-[#D8D8D8] text-[14px] max-w-[193px] mt-[8px]">
          {paragraph}
        </p>
      </div>
    </div>
  );
}

export default Services;
