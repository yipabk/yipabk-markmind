import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
}

function ActButton(props: ButtonProps) {
  return (
    <div
      className={`flex justify-center items-center bg-orange text-white font-medium px-6 py-2 ${props.className}`}
    >
      {props.children}
    </div>
  );
}

export default ActButton;
