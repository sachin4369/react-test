import Link from "next/link";
import React from "react";

const BottomSection = () => {
  return (
    <div className="w-full md:w-1/2 mx-auto text-center">
      <p className=" mt-10">
        <Link href="#" className="px-2 underline">
          Jonathan Simkhai
        </Link>{" "}
        <Link href="#" className="px-2 underline">
          Simkhai Blazers
        </Link>{" "}
        <Link href="#" className="px-2 underline">
          Viscose
        </Link>
      </p>
      <p className="mt-20 text-center font-bold uppercase mb-4">
        a note from the editor
      </p>
      <p className="text-lg">
        The Forte Lurex Linen Viscose Jacket in Mother of Pearl features lunar
        lavishness by night and by day: a blazer in a linen blend shot with
        lurex for a shimmering surface that shines like a star in the sky.
      </p>
      <p className="mt-4 text-sm">
        ----By <span className="underline">MINNA SHIM</span>, Fashion Editor
      </p>
    </div>
  );
};

export default BottomSection;
