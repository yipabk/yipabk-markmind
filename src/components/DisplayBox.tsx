import React from "react";

interface BoxProps {
  children: React.ReactNode;
  bgImage: string;
  className?: string;
}

function DisplayBox(props: BoxProps) {
  return (
    <div
      className={`flex justify-center items-center relative overflow-hidden ${props.className}`}
    >
      <div className="top-0 left-0 bg-brown/50 absolute w-full h-full z-[-1]"></div>
      <img
        className="top-0 left-0 absolute object-cover w-full h-full z-[-2]"
        src={props.bgImage}
      ></img>
      <div className="text-white font-display text-5xl">{props.children}</div>
    </div>
  );
}

export default DisplayBox;
