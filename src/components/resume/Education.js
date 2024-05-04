import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2003 - 2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="SMAN 1 Sukatani"
            subTitle="(2018 - 2021)"
            des="Don't let your dreams be dreams"
          />
          <ResumeCard
            title="Gunadarma University"
            subTitle="Informatics (2021 - Now)"
            result="3.79/4"
            des="Leadership is not about titles, positions, or flow charts. It is about one life influencing another. _John C. Maxwell"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
