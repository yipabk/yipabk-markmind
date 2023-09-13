import { ReactNode } from "react";

interface Props {
  imgs: string[];
  title?: string;
  content: ReactNode;
  dir: "ltr" | "rtl" | "ttb";
  imRatio?: string;
  txRatio?: string;
}

export const SectionWithImage = ({
  imgs,
  title,
  content,
  dir,
  imRatio = "w-1/3",
  txRatio = "w-2/3",
}: Props) => {
  return (
    <div
      className={`flex ${
        dir === "ltr"
          ? "flex-col lg:flex-row"
          : dir === "rtl"
          ? "flex-col lg:flex-row-reverse"
          : dir === "ttb"
          ? "flex-col-reverse"
          : "flex-col"
      } px-8 xl:px-24 2xl:px-40 py-24 md:py-12 items-start justify-center gap-10 lg:gap-16'`}
    >
      <div
        data-aos={`fade-${dir === "ltr" ? "right" : "left"}`}
        data-aos-once="true"
        className={`flex flex-row ${
          dir === "ttb" ? "w-full" : `sm:flex-col sm:${imRatio}`
        } justify-center gap-6`}
      >
        {imgs.map((img) => (
          <div key={img} className={`mx-1 sm:my-2`}>
            <img
              src={img}
              className={`${
                dir === "ttb" ? "h-full" : "w-full"
              } object-fill bg-black`}
            />
          </div>
        ))}
      </div>
      <div
        data-aos={`fade-${dir === "ltr" ? "left" : "right"}`}
        data-aos-once="true"
        className={`${
          dir === "ttb" ? "" : `${txRatio}`
        } flex flex-col items-center lg:items-start text-black font-montserrat`}
      >
        {title && (
          <div className="text-xl lg:text-[32px] tracking-wide mb-6 font-bold text-center lg:text-start">
            {title}
          </div>
        )}
        <div className="text-sm lg:text-base font-light leading-5 text-justify">
          {content}
        </div>
      </div>
    </div>
  );
};
