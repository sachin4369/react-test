"use client";

import React, { Component } from "react";
import Slider from "react-slick";
import Image from "next/image";

const ImgSlider = () => {
  const settings = {
    speed: 500,
    initialSlide: 0,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 9999,
        settings: "unslick",
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };
  return (
    <>
      <Slider id="slide" {...settings} className="w-full md:w-1/2">
        <div>
          <Image
            src="/image 409.png"
            width={540}
            height={675}
            alt="image"
            className="mx-auto md:mb-3"
          />
        </div>
        <div>
          <Image
            src="/image 410.png"
            width={266}
            height={332}
            alt="image"
            className="mx-auto md:mb-3"
          />
        </div>
        <div>
          <Image
            src="/image 410 (2).png"
            width={540}
            height={675}
            alt="image"
            className="mx-auto md:mb-3"
          />
        </div>
        <div>
          <Image
            src="/image 410 (1).png"
            width={266}
            height={332}
            alt="image"
            className="mx-auto md:mb-3"
          />
        </div>
        <div>
          <Image
            src="/image 409 (1).png"
            width={540}
            height={675}
            alt="image"
            className="mx-auto md:mb-3"
          />
        </div>
      </Slider>
    </>
  );
};

export default ImgSlider;
