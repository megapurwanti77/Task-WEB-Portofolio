import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2021 - Now</p>
          <h2 className="text-3xl md:text-4xl font-bold">Task</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Redesign Aplikasi Letterboxd"
            subTitle="Praktikum Interaksi Manusia & Komputer - (2023)"
            result="Universitas Gunadarma"
            des="Membuat ulang UI aplikasi Letterboxd menggunakan figma dan mendapatkan nilai akhir 'A'."
          />
          <ResumeCard
            title="UI/UX Designer"
            subTitle="Mata Kuliah Interaksi Manusia & Komputer - (2023)"
            result="Universitas Gunadarma"
            des="Membuat sebuah desain aplikasi E-Commerce dengan nama 'UNIKELO' dengan membuat sebuah fitur unggulan."
          />
          <ResumeCard
            title="Front-end Developer"
            subTitle="Mata Kuliah Pemrograman WEB - (2023)"
            result="Universitas Gunadarma"
            des="Menjadi seorang Frontend dalam membuat sebuah WEB E-Commerce yang menjadi tugas akhir mata kuliah tersebut."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
