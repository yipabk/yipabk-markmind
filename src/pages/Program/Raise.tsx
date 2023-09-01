import { FadingHeader } from "../../components/commons/FadingHeader";
import hero from "../../assets/images/program/raise-hero.png";
import raise1 from "../../assets/images/program/raise-1.png";
import raise2 from "../../assets/images/program/raise-2.png";
import raise3 from "../../assets/images/program/raise-3.png";
import raise4 from "../../assets/images/program/raise-4.png";
import { SectionWithImage } from "../../components/commons/Section/SectionWithImage";
import { SectionText } from "../../components/commons/Section/SectionText";

export const Raise = () => {
  return (
    <div>
      <FadingHeader
        variant="black"
        bg={hero}
        className="flex flex-col justify-end items-center h-[50vh] w-full"
      >
        <div
          data-aos="fade-down"
          data-aos-once="true"
          className="text-white font-display text-3xl lg:text-5xl mb-16"
        >
          RAISE
        </div>
        <div
          data-aos="fade-down"
          data-aos-once="true"
          className="text-grey text-center font-display text-xl lg-tex-[34px] mb-16 p-x4"
        >
          (Resource, Awareness, Inspiration, Stories, Education)
        </div>
      </FadingHeader>
      <div className="flex flex-col justify-center items-center w-100 min-h-[100vh] px-6 w-full bg-blue/40 gap-12">
        <div className="flex flex-col bg-white w-full justify-center items-center min-h-[100vh]">
          <div
            data-aos="fade-up"
            data-aos-once="true"
            className="pt-16 px-8 text-sm md:text-base font-semibold leading-7 whitespace-pre-line text-center"
          >
            {`Program edukasi masyarakat seputar pendidikan dan penanganan anak berkebutuhan khusus
                         melalui website, media sosial, dan newsletters.`}
          </div>
          <SectionWithImage
            dir="ltr"
            img={raise1}
            title="1. Program “Pustaka Kita”"
            content={
              <>
                <div className="mb-4">
                  Didasari minimnya kesadaran dan informasi terkait penanganan,
                  pendidikan, maupun dukungan pengasuhan terhadap anak/individu
                  berkebutuhan khusus, YIPABK secara rutin telah menyebarkan
                  informasi dan inspirasi seputar kondisi anak berkebutuhan
                  khusus lewat Program “Pustaka Kita”.
                </div>
                <div className="mb-4">
                  Mulai dari IG live, konten edukasi, newsletter bulanan, hingga
                  webinar gratis yang diikuti dengan sesi diskusi bersama pakar,
                  Anda bisa menemukan lebih banyak tentang isu-isu pendidikan
                  ABK di website serta Instagram @yipabk!
                </div>
              </>
            }
          />
          <SectionText
            title="2. Kampanye Peduli ABK"
            content={
              <div className="flex flex-col gap-12">
                <div className="text-sm lg:text-base font-light leading-5 text-justify">
                  <div className="mb-4">
                    Bertujuan untuk menyebarkan edukasi bagi semua kalangan
                    termasuk pemerintah, lembaga pendidikan, dunia usaha,
                    organisasi kemasyarakatan, dan komunitas ABK, Kampanye
                    Peduli ABK memiliki tiga fokus area yang menjadi prioritas
                    gerakan ini:
                  </div>
                  <div className="ml-2">
                    <div className="mb-4">
                      1. Membangun kesadaran dan kepedulian masyarakat terhadap
                      ABK melalui pemahaman yang benar tentang keberagaman
                      kondisi kekhususan pada anak
                    </div>
                    <div className="mb-4">
                      2. Mendukung setiap potensi yang dimiliki ABK sebagai
                      upaya meningkatkan kualitas hidup mereka
                    </div>
                    <div className="mb-4">
                      3. Mengupayakan tersedianya layanan penanganan dan
                      pendidikan yang tepat dan efektif bagi ABK sebagai langkah
                      awal mendukung masa depan yang lebih baik bagi ABK
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <img src={raise2} />
                </div>
              </div>
            }
          />

          <div className="flex flex-col justify-center gap-4 max-w-[75%] py-24">
            <div
              data-aos="fade-down"
              data-aos-once="true"
              className="text-justify"
            >
              YIPABK percaya bahwa anak berkebutuhan khusus dan para penyandang
              disabilitas merupakan sosok pribadi yang spesial. Di balik
              kelemahan fisik maupun mental mereka, tersimpan kelebihan yang
              luar biasa. Sayangnya, kelebihan ini seringkali belum bisa
              diberdayakan sebagai dampak dari kondisi sosial budaya dan
              kebijakan yang belum ramah ABK/disabilitas.
            </div>
            <div className="flex flex-col md:flex-row gap-8">
              <div
                data-aos="fade-right"
                data-aos-once="true"
                className="flex w-full"
              >
                <img className="w-full object-cover" src={raise3} />
              </div>
              <div
                data-aos="fade-left"
                data-aos-once="true"
                className="flex w-full"
              >
                <img className="w-full object-cover" src={raise4} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
