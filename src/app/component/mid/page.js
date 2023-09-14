"use client";

import ImgSlider from "../slider/page";
import Heart from "../../../../public/Ellipse 19.png";
import Image from "next/image";

const MidSection = () => {
  return (
    <>
      <div className=" relative top-5 -right-5 z-10 block md:hidden">
        <Image
          src={Heart}
          alt="heart"
          className="relative -right-60 z-10"
          width={20}
          height={18}
        />
      </div>
      <ImgSlider />
      <div className=" sticky top-20 z-10 hidden md:block">
        <Image
          src={Heart}
          alt="heart"
          className="md:relative md:-left-10 md:top-5 z-10 cursor-pointer"
          width={20}
          height={18}
        />
      </div>
    </>
  );
};

export default MidSection;
