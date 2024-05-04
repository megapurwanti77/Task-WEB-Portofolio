import React from 'react'
import { FaLinkedinIn, FaGithubSquare } from "react-icons/fa";
import { SiInstagram } from 'react-icons/si';
import { contactImg } from "../../assets/index";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#7AB2B2] to-[#7AB2B2] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Mega Purwanti</h3>
        <p className="text-lg font-normal text-white">
          Informatika
        </p>
        <p className="text-base text-white tracking-wide">
          Sedang mengikuti program Kampus Merdeka Study Independen Batch 6
          Web Development bersama Mitra Infinite Learning.
        </p>
        <p className="text-base text-white flex items-center gap-2">
          Phone: <span className="text-lightText font-bold">+62 8594-7222-949</span>
        </p>
        <p className="text-base text-white flex items-center gap-2">
          Email: <span className="text-lightText font-bold">megapurwanti7123@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <FaGithubSquare />
          </span>
          <span className="bannerIcon">
            <SiInstagram />
          </span>
          <span className="bannerIcon">
            <FaLinkedinIn />
          </span>
        </div>
      </div>
    </div>
  );
}

export default ContactLeft