import { FadingHeader } from "../../components/commons/FadingHeader";
import hero from "../../assets/images/program/life-hero.png";
import life1 from "../../assets/images/program/life-1.png";
import life2 from "../../assets/images/program/life-2.png";
import life3 from "../../assets/images/program/life-3.png";
import life4 from "../../assets/images/program/life-4.png";
import { SectionWithImage } from "../../components/commons/Section/SectionWithImage";

export const Life = () => {
  return (
    <div>
      <FadingHeader
        variant="black"
        bg={hero}
        className="flex flex-col justify-end items-center h-[42vh] mt-20 w-full"
      >
        <div
          data-aos="fade-down"
          data-aos-once="true"
          className="text-white font-display text-3xl lg:text-5xl mb-16"
        >
          LIFE
        </div>
        <div
          data-aos="fade-down"
          data-aos-once="true"
          className="text-grey text-center font-display text-xl lg-tex-[34px] mb-16 p-x4"
        >
          (Learning Intevention Family Equipt)
        </div>
      </FadingHeader>
      <div className="flex flex-col justify-center items-center w-100 min-h-[100vh] px-6 w-full bg-blue/40 gap-12">
        <div className="flex flex-col bg-white w-full justify-center items-center min-h-[100vh]">
          <div
            data-aos="fade-up"
            data-aos-once="true"
            className="pt-16 px-8 text-sm md:text-base font-semibold leading-7 whitespace-pre-line text-center"
          >
            {` Program bantuan bagi orang tua/wali dan anak dengan gangguan perkembangan atau kesulitan 
            belajar yang mengalami kesulitan ekonomi .`}
          </div>
          <SectionWithImage
            dir="ltr"
            imgs={[life1, life2]}
            title={"1. Program Aku Bisa Belajar"}
            content={
              <>
                <div className="mb-4">
                  Program Aku Bisa Belajar adalah program yang dirancang agar
                  anak-anak berkebutuhan khusus atau dengan disabilitas mendapat
                  layanan pendidikan sesuai keterbatasan siswa didik lewat
                  pemberian surat asesmen.
                </div>
                <div className="mb-4">
                  Asesmen meliputi asesmen  dasar dan tes intelegensi yang 
                  dilakukan oleh tenaga Psikolog melalui wawancara, observasi,
                  pengukuran informal dan tes baku verbal dan tes IQ.
                </div>
                <div className="mb-4">
                  Saat ini, program Aku Bisa Belajar berfokus pada pemberian
                  layanan asesmen bagi anak didik berkebutuhan khusus dari
                  berbagai sekolah negeri di DKI Jakarta.
                </div>
              </>
            }
          />
          <SectionWithImage
            dir="rtl"
            imgs={[life4, life3]}
            title={"2. Program Kita Bisa"}
            content={
              <>
                <div className="mb-4">
                  Program ini merupakan layanan pendampingan bagi para orangtua
                  yang memiliki anak berkebutuhan khusus. Kami meyakini orang
                  tua memiliki peran yang sangat besar dan kuat dalam membantu
                  anak mereka mengatasi berbagai hambatan atau kesulitan yang
                  dialami anak karena kondisi kebutuhan khusus mereka.
                </div>
                <div className="mb-4">
                  Oleh sebab itu orangtua perlu belajar memahami kondisi anak
                  mereka dan mengerti bagaimana memberikan intervensi di rumah,
                  mengajarkan anak akan kemampuan (skills) yang dibutuhkan untuk
                  anak mereka dapat bertumbuh, berkembang, belajar, dan
                  melakukan aktivitas yang bermakna.  
                </div>
                <div className="mb-4">
                  Program ini dijalankan bersama para terapis, psikolog, dan
                  relawan. Para praktisi ini bersama-sama memberikan saran,
                  arahan, dan training kepada orangtua yang memiliki anak
                  berkebutuhan khusus. 
                </div>
                <div className="mb-4">
                  Berfokus pada anak-anak dengan spektrum autisme, ADHD,
                  gangguan belajar, gifted disinkroni, dan down syndrome, YIPABK
                  telah membantu banyak anak untuk mendapatkan asesmen hingga
                  intervensi terapi.  
                </div>
              </>
            }
          />
        </div>
      </div>
    </div>
  );
};
