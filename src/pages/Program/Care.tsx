import { FadingHeader } from '../../components/commons/FadingHeader'
import { SectionWithImage } from '../../components/commons/Section/SectionWithImage'
import hero from '../../assets/images/program/care-hero.png'
import care1 from '../../assets/images/program/care-1.png'
import care2 from '../../assets/images/program/care-2.png'
import { SectionText } from '../../components/commons/Section/SectionText'

export const Care = () => {
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
          CARE
        </div>
        <div
          data-aos="fade-down"
          data-aos-once="true"
          className="text-grey text-center font-display text-xl lg-tex-[34px] mb-16 p-x4"
        >
          (Companionship, Assistance, Recharge, Encouragement)
        </div>
      </FadingHeader>
      <div className="flex flex-col justify-center items-center w-100 min-h-[100vh] px-6 w-full bg-blue/40 gap-12">
        <div className="flex flex-col bg-white w-full justify-center items-center min-h-[100vh]">
          <SectionWithImage
            dir="ltr"
            title="1. Program YIPPIE"
            imgs={[care1]}
            imRatio="w-3/5"
            txRatio="lg:w-2/5"
            content={
              <div className="flex flex-col gap-4">
                <div>
                  Terdiri dari sekelompok profesional muda yang bertindak
                  sebagai duta dari misi YIPABK, YIPPIE (YIPABK Young
                  Philanthropist) adalah para relawan yang turut berkontribusi
                  melalui berbagai acara jejaring, penjangkauan media sosial,
                  dan upaya penggalangan dana.
                </div>
                <div>
                  Menjadi sumber daya jangka panjang dan menggunakan jaringan
                  pribadi maupun profesional mereka untuk menggalang dana,
                  mengadvokasi, serta menjadi sukarelawa, YIPPIE adalah salah
                  satu aset terpenting terhadap keberlangsungan dan kesuksesan
                  program-program YIPABK.
                </div>
                <div>
                  Bagi kamu yang berusia 20-30 tahun, antusias, kreatif, dan
                  ingin membuat dampak nyata bersama muda-mudi Indonesia
                  lainnya, yuk bergabung sebagai YIPPIE dengan menghubungi kami
                  melalui Instagram, WhatsApp, atau email!
                </div>
              </div>
            }
          />
          <SectionText
            title="2. #PEDULICHALLENGE - Care Package"
            content={
              <div className="flex flex-col gap-4">
                <div>
                  Menyadari adanya peningkatan isu kesehatan mental di tengah
                  pandemi COVID-19, YIPABK meluncurkan kampanye #PEDULICHALLENGE
                  guna menjangkau anak-anak di berbagai kota agar tetap dapat
                  bermain.
                </div>
                <div>
                  Dengan bantuan HOPE Indonesia dan Play Therapy Indonesia, 792
                  paket bermain (care package) telah berhasil kami salurkan
                  kepada anak-anak dan keluarga yang membutuhkan melalui
                  kampanye #PEDULICHALLENGE.
                </div>
                <div className="flex items-center justify-center">
                  <img src={care2} alt="" />
                </div>
              </div>
            }
          />
        </div>
      </div>
    </div>
  );
};
