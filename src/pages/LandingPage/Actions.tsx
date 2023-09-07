import { DonateIcon } from "../../components/icons/DonateIcon";
import { ShakeHandIcon } from "../../components/icons/ShakeHandIcon";
import { ActionsBox } from "./ActionsBox";
import background from "../../assets/images/landing-page-actions.png";

export const Actions = () => {
  const actions = [
    {
      icon: <DonateIcon />,
      title: "DONASI",
      subtitle: `untuk bersama wujudkan
       mimpi anak berkebutuhan khusus`,
      buttonText: "Donasi Sekarang",
      buttonLink: "/kontribusi",
    },
    {
      icon: <ShakeHandIcon />,
      title: "JADI RELAWAN",
      subtitle: `untuk buat dampak nyata
       bersama muda mudi Indonesia`,
      buttonText: "Daftar Sekarang",
      buttonLink: "mailto:yipabk@gmail.com",
    },
  ];

  return (
    <div className="relative flex flex-col justify-center items-center w-100 min-h-[100vh] px-6 overflow-hidden py-20">
      <img
        className="absolute object-cover w-full h-full z-[-2]"
        src={background}
        alt=""
      />
      <div
        style={{
          background:
            "linear-gradient(180deg, rgba(89, 156, 191, 0.50) -35.79%, rgba(84, 147, 180, 0.50) -26.7%, rgba(71, 124, 152, 0.50) -10.87%, rgba(49, 86, 105, 0.50) 9.81%, rgba(19, 34, 41, 0.50) 34.29%, rgba(0, 0, 0, 0.50) 48.81%, rgba(2, 3, 4, 0.50) 57.79%, rgba(8, 14, 17, 0.50) 67.12%, rgba(17, 31, 37, 0.50) 76.6%, rgba(31, 54, 66, 0.50) 86.18%, rgba(48, 85, 104, 0.50) 95.85%, rgba(69, 122, 149, 0.50) 105.44%, rgba(89, 156, 191, 0.50) 113.14%)",
        }}
        className="absolute z-[-1] w-full h-full"
      ></div>
      <div
        data-aos="fade-down"
        data-aos-once="true"
        className="text-center text-white text-3xl lg:text-5xl font-display leading-tight drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)]"
      >
        Giving is The GREATEST Act of GRACE
      </div>
      <div className="flex flex-col lg:flex-row mt-20 gap-24">
        {actions.map((action) => (
          <ActionsBox
            key={action.title}
            icon={action.icon}
            title={action.title}
            subtitle={action.subtitle}
            buttonText={action.buttonText}
            buttonLink={action.buttonLink}
          />
        ))}
      </div>
    </div>
  );
};
