import { ReactNode } from "react";

interface Props {
  title: string;
  content: ReactNode;
}

export const SectionText = ({ title, content }: Props) => {
  return (
    <div
      className={`flex flex-col px-8 xl:px-24 2xl:px-40 py-24 md:py-48 items-center justify-center gap-12 lg:gap-16'`}
    >
      <div className="flex flex-col items-center lg:items-start text-black font-montserrat">
        <div
          data-aos="fade-down"
          data-aos-once="true"
          className="text-xl lg:text-[32px] tracking-wide mb-6 font-bold text-center lg:text-start"
        >
          {title}
        </div>
        <div
          data-aos="fade-down"
          data-aos-once="true"
          className="text-sm lg:text-base font-light leading-5 text-left"
        >
          {content}
        </div>
      </div>
    </div>
  );
};
