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
      className="flex justify-center items-center gradient w-[227px] h-[227px] rounded-[10px] border border-[#1E2635]  "
    >
      <div className="w-[193px] h-[162px]">
        <div className="w-[36px] h-[33px]">
          <img src={icon} alt="" />
        </div>
        <h2 className="font-script font-bold text-white text-[14px] mt-[18px]">
          {title}
        </h2>
        <p className="font-script font-normal text-[#D8D8D8] text-[14px] max-w-[200px] mt-[6px]">
          {paragraph}
        </p>
      </div>
    </motion.div>
  );
}

export default Services;
