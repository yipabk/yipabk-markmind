import bca from "../assets/images/BCA.png";
import qr from "../assets/images/QR.png";
import { FadingHeader } from "../components/commons/FadingHeader";

export const Kontribusi = () => {
  return (
    <div>
      <FadingHeader
        bg="https://images.unsplash.com/photo-1567507968014-cd038413b9f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2F0JTIwYmxhY2slMjBhbmQlMjB3aGl0ZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
        className="flex flex-col justify-end items-center h-[100vh] w-full"
      >
        <div className="text-white font-display text-5xl mb-16">DONASI</div>
        <div className="text-white font-display text-3xl mb-8 tracking-wide">
          "Giving is the GREATES Act of GRACE"
        </div>
        <div className="text-orange text-xl font-medium w-1/2 text-center mb-[15vh] tracking-wide">
          Mari salurkan donasi Anda melalui rekening YIPABK untuk bersama
          wujudkan mimpi anak berkebutuhan khusus!
        </div>
      </FadingHeader>
      <div className="flex flex-col justify-center items-center h-[80vh] w-full bg-blue/40">
        <div className="flex justify-center items-center mb-16">
          <div className="font-bold tracking-wide text-xl w-80">
            Scan QR code atau transfer untuk berdonasi!
          </div>
          <div className="flex bg-white w-[32rem] h-48 rounded-lg drop-shadow-md py-2 px-2">
            <img src={qr} className="mr-2"></img>
            <div className="p-2">
              <img src={bca} className="w-36 mb-4"></img>
              <div className="font-bold text-xl mb-2">
                No. Rek : 766 - 03 - 18181
              </div>
              <div>
                Yayasan Indonesia Peduli Anak Berkebutuhan Khusus (YIPABK)
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/2 text-center text-xl">
          Kontribusi yang Anda berikan akan digunakan untuk meningkatkan akses
          pendidikan inklusi di Indonesia melalui berbagai kegiatan dan program
          YIPABK.{" "}
        </div>
      </div>
    </div>
  );
};
