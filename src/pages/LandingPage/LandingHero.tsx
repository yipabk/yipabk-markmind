import Button from "../../components/Button";
import video from "../../assets/videos/video.mp4";

export const LandingHero = () => {
  return (
    <div className="flex items-center p-12 md:p-24 lg:p-36 xl:p-48 pt-0 relative w-100 min-h-[100vh] overflow-hidden">
      <div>
        <div
          data-aos="fade-right"
          data-aos-once="true"
          className="text-3xl sm:text-4xl tracking-wide max-w-[28rem] mb-4 font-display text-white"
        >
          Yayasan Indonesia Peduli Anak Berkebutuhan Khusus
        </div>
        <div
          data-aos="fade-right"
          data-aos-once="true"
          className="font-montserrat text-base sm:text-base max-w-[26rem] tracking-wide mb-16 font-light text-white"
        >
          Lahir dari kepedulian sekelompok pendidik akan masa depan anak
          berkebutuhan khusus, kami berkomitmen untuk mewujudkan generasi muda
          Indonesia yang berprestasi lewat pendidikan yang merata.
        </div>

        <div
          data-aos="fade-down"
          data-aos-once="true"
          data-aos-delay="ro200"
          className="flex flex-col sm:flex-row gap-4 w-56 sm:w-auto"
        >
          <Button className="w-[223px]" linkTo="tentang-kami">
            Tentang Kami
          </Button>
          <Button className="w-[223px]" linkTo="#program">
            Intip Kegiatan Kami
          </Button>
        </div>

        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute left-0 top-0 object-cover w-full h-full z-[-2]"
          src={video}
        />

        <div className="absolute left-0 top-0 w-full h-full bg-gradient-to-r from-black/75 to-transparent z-[-1]"></div>
      </div>
    </div>
  );
};
