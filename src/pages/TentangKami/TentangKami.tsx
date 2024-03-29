import { useEffect, useState } from "react";
import team1 from "../../assets/images/team-1.png";
import team2 from "../../assets/images/team-2.png";
import team3 from "../../assets/images/team-3.png";
import team4 from "../../assets/images/team-4.png";
import team5 from "../../assets/images/team-5.png";
import team6 from "../../assets/images/team-6.png";
import team7 from "../../assets/images/team-7.png";
import team8 from "../../assets/images/team-8.png";
import team9 from "../../assets/images/team-9.png";
import hero from "../../assets/images/tentang-kami-hero.png";
import { FadingHeader } from "../../components/commons/FadingHeader";
import { Slider } from "../../components/commons/Slider";
import useWindowDimensions from "../../helpers/useWindowDimension";
import { TeamCard, TeamCardProps } from "./TeamCard";
import visi from "../../assets/images/visi.png";
import misi from "../../assets/images/misi.png";

export const TentangKami = () => {
  const peoples: TeamCardProps[] = [
    {
      id: "team1",
      image: team4,
      name: "Dr. Alice Arianto, Psy.D., CGP.",
      title: "Founder YIPABK",
    },
    {
      id: "team2",
      image: team1,
      name: "Budiarti Silalahi, M.A",
      title: "Ketua Dewan Pembina",
    },
    {
      id: "team3",
      image: team2,
      name: "Drs. Maimunah Natasha, BA",
      title: "Anggota Dewan Pembina",
    },
    {
      id: "team4",
      image: team3,
      name: "Dr. Herti Eliza Silalahi, M.Kes, Ph.D",
      title: "Anggota Dewan Pembina",
    },
    {
      id: "team5",
      image: team5,
      name: "Charles Ham",
      title: "Dewan Pengawas",
    },
    {
      id: "team6",
      image: team6,
      name: "Suinah Djohan, SE",
      title: "Ketua Dewan Pengurus",
    },
    {
      id: "team7",
      image: team7,
      name: "Very Jun Leven Manik, S.Sos",
      title: "Wakil Ketua Dewan Pengurus",
    },
    {
      id: "team8",
      image: team8,
      name: "Yudi Hartanto",
      title: "Sekretaris Dewan Pengurus",
    },
    {
      id: "team9",
      image: team9,
      name: "Merry Sadan, SE",
      title: "Bendahara Dewan Pengurus",
    },
  ];
  const { width } = useWindowDimensions();
  const getMaxItem = () => {
    if (width >= 1280) {
      return 3;
    }
    if (width >= 680) {
      return 2;
    }

    return 1;
  };

  const [maxItem, setMaxItem] = useState(getMaxItem());

  useEffect(() => {
    setMaxItem(getMaxItem());
  }, [width, setMaxItem]);

  return (
    <div>
      <FadingHeader
        variant="black"
        className="flex justify-center items-end w-full h-[42vh] mt-20"
        bg={hero}
      >
        <div
          data-aos="fade-up"
          data-aos-once="true"
          className="text-white font-display text-5xl mb-12 tracking-wide"
        >
          TENTANG KAMI
        </div>
      </FadingHeader>
      <div>
        <div
          data-aos="fade-down"
          data-aos-once="true"
          data-aos-delay="200"
          className="px-6 sm:px-12 md:px-24 lg:px-56 w-full py-12 flex justify-center items-center flex-col font-montserrat font-[400]"
        >
          <div className="mb-24">
            <div className="mb-6 leading-6 text-left">
              Yayasan Indonesia Peduli Anak Berkebutuhan Khusus (YIPABK) berdiri
              tahun 2012 dengan akta notaris Linda Herawati Nomor 77 tanggal 28
              Juni 2012.
            </div>
            <div className="mb-6 leading-6 text-left">
              YIPABK lahir dari kepedulian sekelompok pendidik (guru, orangtua,
              dan pemerhati anak) terhadap masa depan anak-anak yang memiliki
              kondisi kekhususan. Sebab begitu besar jumlah anak-anak di
              Indonesia, baik yang mengalami ketunaan fisik, mental,
              intelegensi/kognisi, maupun sosial atau gangguan perilaku, yang
              masih belum mendapat perhatian terhadap kebutuhan penanganan dan
              pendidikan mereka.
            </div>
            <div className="mb-6 leading-6 text-left">
              Cikal bakal YIPABK dimulai dari gerakan bersama para pendidik
              dalam memperhatikan pentingnya penanganan yang tepat dan
              tersedianya layanan pendidikan yang baik sejak dini untuk membantu
              anak-anak berkondisi kekhususan tersebut memperoleh kesempatan
              bertumbuh dan berkembang, dan memiliki hidup yang lebih baik.
            </div>
          </div>
        </div>
        <div className="px-6 sm:px-12 md:px-24 lg:px-56 w-full h-full mb-24 py-16">
          <div className="flex flex-col xl:flex-row mb-16 gap-6 lg:gap-16">
            <img
              data-aos="fade-right"
              data-aos-once="true"
              className="w-96 h-64 object-cover grayscale"
              src={visi}
              alt=""
            />
            <div data-aos="fade-left" data-aos-once="true" className="relative">
              <div className="font-display text-4xl tracking-wide mb-6">
                VISI
              </div>
              <div className="font-montserrat">
                “Terwujudnya Indonesia dengan anak-anak yang bahagia dan
                memiliki kesempatan pendidikan yang sama.”
              </div>
              <div className="bg-white w-[5.5rem] h-[4.5rem] absolute top-0 left-[-5.5rem]"></div>
              <div className="bg-orange w-[2rem] h-[2rem] absolute top-[2rem] left-[-5rem]"></div>
              <div className="bg-orange w-[14rem] h-[0.14rem] absolute top-[2.93rem] left-[-5rem]"></div>
            </div>
          </div>
          <div className="flex flex-col xl:flex-row gap-6 lg:gap-16">
            <img
              data-aos="fade-right"
              data-aos-once="true"
              className="w-96 h-64 object-cover grayscale"
              src={misi}
              alt=""
            />
            <div data-aos="fade-left" data-aos-once="true" className="relative">
              <div className="font-display text-4xl tracking-wide mb-6">
                MISI
              </div>
              <div className="font-montserrat">
                <div className="font-bold mb-4 ">
                  Advocating, Creating, Educating Special Needs Children in
                  Indonesia
                </div>
                <ol className="flex flex-col gap-4 ml-4 list-decimal text-left">
                  <li>
                    Advocate - Anak-anak yang memiliki keterbatasan dalam
                    perkembangan maupun akses layanan pendidikan
                  </li>
                  <li>
                    Create - Menciptakan kesempatan, ruang/fasilitas,
                    lingkungan, pelayanan, pendidikan dan lapangan pekerjaan
                    bagi anak-anak berkebutuhan khusus
                  </li>
                  <li>
                    Educate - Mengedukasi seluruh elemen masyarakat melalui
                    berbagai kegiatan agar memiliki kepedulian, kesadaran, dan
                    pemahaman yang baik terhadap penanganan dan pendidikan
                    anak-anak berkebutuhan khusus
                  </li>
                </ol>
              </div>
              <div className="bg-white w-[5.5rem] h-[4.5rem] absolute top-0 left-[-5.5rem]"></div>
              <div className="bg-orange w-[2rem] h-[2rem] absolute top-[2rem] left-[-5rem]"></div>
              <div className="bg-orange w-[14rem] h-[0.14rem] absolute top-[2.93rem] left-[-5rem]"></div>
            </div>
          </div>
        </div>
        <div className="w-full h-full py-24 px-4 sm:px-6 md:px-12 items-center flex flex-col xl:flex-row gap-12">
          <div
            data-aos="fade-right"
            data-aos-once="true"
            className="xl:mr-auto text-4xl ml-4 whitespace-pre-line text-center xl:text-start font-display underline underline-offset-8 decoration-orange tracking-wide"
          >
            {`Meet Our Team`}
          </div>
          <Slider<TeamCardProps>
            key={maxItem}
            items={peoples}
            maxItemPerView={maxItem}
            showPagination
            renderItem={(item) => (
              <TeamCard key={`${item.title}-${item.id}`} {...item} />
            )}
          />
        </div>
      </div>
    </div>
  );
};
