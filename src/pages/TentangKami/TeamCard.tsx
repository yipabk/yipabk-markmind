import { FC } from "react";

export interface TeamCardProps {
  id: string;
  image: string;
  title: string;
  name: string;
}

export const TeamCard: FC<TeamCardProps> = ({ image, title, name }) => {
  return (
    <div className="relative">
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(201, 201, 201, 0.00) 0%, #7E7E7E 100%)",
        }}
      ></div>
      <div className="relative z-20 flex items-end w-[222px] h-[222px]">
        <img src={image} width={222} height={222} alt="" />
      </div>
      <div
        className="font-montserrat text-white p-4 max-w-[222px] flex flex-col justify-center items-center relative z-20 text-center font-montserrat h-[80px]"
        style={{
          background:
            "linear-gradient(0deg, #6CB4BE 35.04%, rgba(108, 180, 190, 0.00) 138.42%)",
        }}
      >
        <div className="font-semibold">{name}</div>
        <div className="font-light text-xs">{title}</div>
      </div>
    </div>
  );
};
