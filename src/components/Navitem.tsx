import React from "react";

interface ItemProps {
  children: React.ReactNode;
  isActive?: boolean;
}

function Navitem(props: ItemProps) {
  const isActive = props.isActive !== undefined ? props.isActive : false;

  return (
    <div
      className={`decoration-orange decoration-2 mx-4
        ${isActive ? "font-bold underline" : "font-medium"}`}
    >
      {props.children}
    </div>
  );
}

export default Navitem;
