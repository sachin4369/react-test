"use client";

import Link from "next/link";
import React from "react";

const LeftSection = () => {
  return (
    <div className="sticky top-20 w-1/3 pr-4 pb-5 hidden md:block text-sm">
      <p className="flex mb-2">
        <span className="font-bold color-black text-md mr-5 uppercase">
          details
        </span>
        <span className="text-md mr-5 uppercase text-zinc-400 cursor-pointer">
          delivery
        </span>
        <span className="text-md mr-5 uppercase text-zinc-400 cursor-pointer">
          fit
        </span>
        <span className="text-md mr-5 uppercase text-zinc-400 cursor-pointer">
          share
        </span>
      </p>
      The Forte Lurex Linen Viscose Jacket in Mother of Pearl features lunar
      lavishness by night and by day: a blazer in a linen blend shot with lurex
      for a shimmering surface that shines like a star in the sky. it has a
      straight fit with well defined shoulders and a shawl collar culminating in
      a button and has been flawlessly finished with three jet pockets with a
      sartorial feel.
      <p className="mt-3">
        See the{" "}
        <Link href="#" className="underline uppercase">
          EDITOR’S NOTE
        </Link>
      </p>
      <p className="mt-3">
        Learn about the{" "}
        <Link href="#" className="underline uppercase">
          DESIGNER
        </Link>
      </p>
    </div>
  );
};

export default LeftSection;
