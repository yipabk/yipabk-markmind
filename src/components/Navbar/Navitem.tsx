import React from "react";

interface ItemProps {
  children: React.ReactNode;
  linkTo: string;
  isActive?: boolean;
}

function Navitem({ isActive = false, linkTo, children }: ItemProps) {
	return (
		<a
			href={linkTo}
			className={`py-2 sm:py-0 flex items-center justify-center decoration-orange decoration-2 mx-4 text-xs cursor-pointer hover:opacity-75
        ${isActive ? 'font-bold underline underline-offset-8' : 'font-medium'}`}>
			{children}
		</a>
	)
}

export default Navitem;
