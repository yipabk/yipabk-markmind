import { FadingHeader } from "../../components/commons/FadingHeader";
import hero from "../../assets/images/program/teach-hero.png";
import teach1 from "../../assets/images/program/teach-1.png";
import { SectionText } from "../../components/commons/Section/SectionText";

export const Teach = () => {
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
          TEACH
        </div>
      </FadingHeader>
      <div className="flex flex-col justify-center items-center min-h-[100vh] px-6 w-full bg-blue/40 gap-12">
        <div className="flex flex-col bg-white w-full justify-center items-center min-h-[100vh]">
          <div
            data-aos="fade-up"
            data-aos-once="true"
            className="pt-16 px-8 text-sm md:text-base font-semibold leading-7 whitespace-pre-line text-center"
          >
            {`Program pembinaan guru di bidang pedagogi, program belajar, intervensi, dan pemahaman terhadap
                         kondisi peserta didik berkebutuhan khusus.`}
          </div>
          <SectionText
            title="1. Program “Guru Bisa Belajar”"
            content={
              <div>
                Menjembatani kebutuhan peserta didik berkebutuhan khusus dengan
                layanan pendidikan di sekolah-sekolah yang seringkali masih
                kurang memadai dari sisi kualitas maupun kuantitas, Program
                “Guru Bisa Belajar” menyediakan pelatihan dengan modul yang
                diampu oleh para praktisi pendidikan anak berkebutuhan khusus
                berpengalaman.
              </div>
            }
          />
          <SectionText
            title="2. Program Pelatihan bagi para Pendidik”"
            content={
              <div className="flex flex-col gap-10">
                <div>
                  Selama tahun 2012 hingga bulan Juni 2015 silam, program
                  pelatihan hasil kerja sama YIPABK dengan College of Allied
                  Educators (CAE) dan Perkumpulan Penyelenggara Pendidikan
                  Inklusif DKI Jakarta ini telah membantu 118 guru dan penggiat
                  pendidikan untuk mendapatkan Pelatihan Kompetensi Tenaga
                  Pendidik Pendidikan Inklusif.
                </div>
                <div className="flex flex-col lg:grid grid-cols-[auto_404px] lg:grid-cols-[auto_404px] gap-20">
                  <div>
                    <div className="flex flex-col gap-10">
                      <div>
                        Pelatihan ini ditujukan untuk memperlengkapi guru-guru
                        di PAUD & SD inklusi agar dapat menangani anak-anak
                        dengan kondisi Autism Spectrum Disorder, ADHD, Learning
                        Disabilities, Emotional Behaviour Disorder, dan Gifted
                        Talented.
                      </div>
                      <div>
                        Program Pelatihan bagi para Pendidik ini bersifat
                        praktikal, di mana fokusnya adalah meningkatkan
                        keterampilan tenaga pendidik dalam membantu dan
                        menangani ABK. Para instruktur pelatihan pun terdiri
                        dari beberapa pakar yang memang bergelut di bidang anak
                        berkebutuhan khusus dan berpengalaman menangani mereka
                        secara langsung.
                      </div>
                    </div>
                  </div>
                  <div className="flex">
                    <img src={teach1} alt="" />
                  </div>
                </div>
              </div>
            }
          />
        </div>
      </div>
    </div>
  );
};
