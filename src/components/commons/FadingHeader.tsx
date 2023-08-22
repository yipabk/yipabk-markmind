import React from "react";

interface HeaderProps {
  children?: React.ReactNode;
  bg: string;
  color?: string;
  className?: string;
}

export const FadingHeader = ({
  children = null,
  bg,
  color = "black",
  className = "",
}: HeaderProps) => {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {children}
      <div
        className={`absolute w-full h-full z-[-1] bg-gradient-to-t from-black via-30% via-${color} to-transparent`}
      ></div>
      <img
        className="absolute w-full h-full object-cover z-[-2]"
        src={bg}
      ></img>
    </div>
  );
};
