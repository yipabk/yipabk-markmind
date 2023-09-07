import { FadingHeader } from "../../components/commons/FadingHeader";
import hero from "../../assets/images/publikasi-hero.png";

export const PublikasiHero = () => {
  return (
    <FadingHeader
      variant="black"
      bg={hero}
      className="flex flex-col justify-end items-center h-[45vh] mt-20 w-full"
    >
      <div
        data-aos="fade-down"
        data-aos-once="true"
        className="text-white font-display text-5xl mb-16"
      >
        PUBLIKASI
      </div>
    </FadingHeader>
  );
};
