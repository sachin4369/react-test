import React from "react";
import Image from "next/image";

const RightSection = () => {
  return (
    <div className="sticky top-20 w-full md:w-1/2 mt-10 md:mt-0">
      <h1 className="text-3xl md:text-5xl">JONATHAN SIMKHAI</h1>
      <p className="text-md">Lurex Linen Viscose Jacket in Conchiglia</p>
      <strong className="text-md">$225</strong>
      <p className=" mt-5">
        <span className="font-bold">Color</span> Conchiglia
      </p>
      <p className="flex">
        <span className="border-[1px]  border-black mt-2 w-[53px] h-[63px] overflow-hidden">
          <Image
            src="/image 410.png"
            width={53}
            height={63}
            className="image"
            alt="image"
          />
        </span>
        <span className="border mt-2 ml-2 w-[43px] h-[53px] overflow-hidden">
          <Image
            src="/image 410 (2).png"
            width={43}
            height={53}
            className="image"
            alt="image"
          />
        </span>
      </p>
      <p className="flex justify-between uppercase mb-5 mt-5">
        <span className="">
          <span className="font-bold">size</span> L
        </span>
        <span className="underline cursor-pointer">SIZE GUIDE</span>
      </p>
      <p>
        <button className="rounded-full w-[82px] h-[30px] border border-1 text-md mr-1 mb-3">
          XS
        </button>
        <button className="rounded-full w-[82px] h-[30px] border border-1 text-md mr-1 mb-3">
          S
        </button>
        <button className="rounded-full w-[82px] h-[30px] border border-1 text-md mr-1 mb-3 line-through text-secondary">
          M
        </button>
        <button className="rounded-full w-[82px] h-[30px] border border-1 text-md mr-1 mb-3 bg-black text-white">
          L
        </button>
        <button className="rounded-full w-[82px] h-[30px] border border-1 text-md mr-1 mb-3">
          XXL
        </button>
      </p>
      <button className="rounded-full w-full h-[48px] border border-1 text-md mr-1 mb-3 bg-black text-white mt-5">
        ADD TO BAG
      </button>
      <p className="mt-5">
        Get 4 interest-free payments of $196.25 with Klarna{" "}
        <span className="cursor-pointer uppercase">LEARN MORE</span>
      </p>
      <p className="mt-5">
        Speak to a Personal Stylist{" "}
        <span className="cursor-pointer uppercase">CHAT NOW</span>
      </p>
    </div>
  );
};

export default RightSection;
