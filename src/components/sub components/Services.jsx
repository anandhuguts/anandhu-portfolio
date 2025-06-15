import { motion } from "motion/react";

function Services({ title, icon, paragraph, index }) {
  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.3,
        delay: index * 0.1,
        ease: "easeOut",
      }}
      className="flex justify-center items-center gradient max-sm:!w-full max-sm:!h-[190px]  w-[227px] py-[25px] rounded-[10px] border border-[#1E2635]  "
    >
      <div className="max-sm:!flex max-sm:!w-full max-sm:!gap-[30px] w-[193px] h-[162px] justify-center items-center">
        <div className="w-[36px] h-[33px]">
          <img src={icon} alt="" />
        </div>
        <div>
          <h2 className="font-script font-bold text-white text-[14px] mt-[18px]">
            {title}
          </h2>
          <p className="font-script font-normal text-[#D8D8D8] text-[14px] max-w-[200px] mt-[6px]">
            {paragraph}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default Services;
