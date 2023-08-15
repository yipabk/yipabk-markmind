function Footer() {
  return (
    <div className="w-full h-52 text-xs">
      <div className="flex items-between justify-between w-100% h-5/6 bg-lightgrey px-24 py-12">
        <div className="flex justify-center w-auto">
          <div className="flex w-auto mx-8">
            <div className="mr-4">O</div>
            <div>
              <div>Gedung E-Building, Lantai 2</div>
              <div>Komplek Ruko harmoni Plaza Blok I, No 1-4,</div>
              <div>Jl. Suryopranoto No.2 RT.14/RW.8</div>
              <div>Gambir, Jakarta Pusat, DKI Jakarta 10130</div>
            </div>
          </div>
          <div className="w-auto mx-8">
            <div className="flex">
              <div className="mr-4">O</div>
              <div>yipabk@gmail.com</div>
            </div>
            <div className="flex">
              <div className="mr-4">O</div>
              <div>+62 813-7070-3429</div>
            </div>
          </div>
          <div className="w-auto mx-8">
            <div className="font-bold">KONTAK KAMI</div>
            <div className="flex">
              <div className="mr-4">O</div>
              <div>Instagram</div>
            </div>
            <div className="flex">
              <div className="mr-4">O</div>
              <div>Youtube</div>
            </div>
            <div className="flex">
              <div className="mr-4">O</div>
              <div>Facebook</div>
            </div>
          </div>
        </div>
        <div className="flex justify-center w-auto">
          <div className="flex flex-col items-center mx-8">
            <div className="font-bold">DIDUKUNG OLEH</div>
            <div>dewaweb</div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center w-100% h-1/6 bg-grey">
        <p className="text-white">
          © COPY RIGHT 2023, Yayasan Indonesia Peduli Anak Berkebutuhan Khusus
        </p>
      </div>
    </div>
  );
}

export default Footer;
