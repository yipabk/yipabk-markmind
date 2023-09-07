import care from "../../assets/images/program-care.png";
import life from "../../assets/images/program-life.png";
import raise from "../../assets/images/program-raise.png";
import teach from "../../assets/images/program-teach.png";
import ProgramDisplayBox from "./ProgramDisplayBox";

export const Programs = () => {
  return (
    <div
      id="program"
      className="flex flex-col justify-center items-center w-100 py-24"
    >
      <div
        data-aos="fade-down"
        data-aos-once="true"
        className="flex flex-col items-center mb-16 w-full"
      >
        <div className="text-3xl md:text-5xl font-display mb-4">
          Program-Program Kami
        </div>
        <div className="bg-orange h-1 w-[80%] max-w-[42rem]"></div>
      </div>
      <div className="grid grid-cols-2 lg:flex">
        <ProgramDisplayBox
          linkTo="/program/life"
          hoverText="Learning Intervention Family Equipt"
          className="w-[10rem] h-[14rem] sm:w-[12rem] sm:h-[16rem] xl:w-[16rem] xl:h-[20rem] m-2"
          bgImage={life}
        >
          LIFE
        </ProgramDisplayBox>
        <ProgramDisplayBox
          linkTo="/program/raise"
          hoverText="Resource, Awareness, Inspiration, Stories, Education"
          className="w-[10rem] h-[14rem] sm:w-[12rem] sm:h-[16rem] xl:w-[16rem] xl:h-[20rem] m-2"
          bgImage={raise}
        >
          RAISE
        </ProgramDisplayBox>
        <ProgramDisplayBox
          linkTo="/program/teach"
          hoverText="Training, Educators, Ability, Care, &Hard-skill"
          className="w-[10rem] h-[14rem] sm:w-[12rem] sm:h-[16rem] xl:w-[16rem] xl:h-[20rem] m-2"
          bgImage={teach}
        >
          TEACH
        </ProgramDisplayBox>
        <ProgramDisplayBox
          linkTo="/program/care"
          hoverText="Companionship, Assistance, Recharge, Encouragement"
          className="w-[10rem] h-[14rem] sm:w-[12rem] sm:h-[16rem] xl:w-[16rem] xl:h-[20rem] m-2"
          bgImage={care}
        >
          CARE
        </ProgramDisplayBox>
      </div>
    </div>
  );
};
