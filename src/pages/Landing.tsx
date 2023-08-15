import ActButton from "../components/ActButton";
import DisplayBox from "../components/DisplayBox";

function Landing() {
  return (
    <div>
      <div className="flex items-center p-48 relative w-100 h-[100vh] overflow-hidden">
        <div>
          <div className="text-4xl tracking-wide w-[28rem] mb-4 font-display text-white">
            Yayasan Indonesia Peduli Anak Berbutuhan Khusus
          </div>
          <div className="w-[26rem] tracking-wide mb-16 font-light text-white">
            Lahir dari kepedulian sekelompok pendidik akan masa depan anak
            berkebutuhan khusus, kami berkomitmen untuk mewujudkan generasi muda
            Indonesia yang berprestasi lewat pendidikan yang merata.
          </div>

          <div className="flex">
            <ActButton className="mr-4">Tentang Kami</ActButton>
            <ActButton className="mr-4">Intip Kegiatan Kami</ActButton>
          </div>

          <img
            className="absolute left-0 top-0 object-cover w-full h-full z-[-2]"
            src="https://www.thesprucepets.com/thmb/uQnGtOt9VQiML2oG2YzAmPErrHo=/5441x0/filters:no_upscale():strip_icc()/all-about-tabby-cats-552489-hero-a23a9118af8c477b914a0a1570d4f787.jpg"
            alt=""
          />

          <div className="absolute left-0 top-0 w-full h-full bg-gradient-to-r from-black/75 to-transparent z-[-1]"></div>
        </div>
      </div>
      <div className="flex px-48 justify-between items-center w-100 h-[100vh] bg-orange">
        <div className="text-white mr-10">
          <div className="text-5xl tracking-wide mb-6 font-display ">
            Tentang Kami
          </div>
          <div className="text-md font-light w-[34rem] leading-5 text-justify">
            <div className="mb-4">
              Dengan rahmat, kasih, dan penyertaan Tuhan, YIPABK (Yayasan
              Indonesia Peduli Anak Berkebutuhan Khusus) dibentuk pada tahun
              2012 oleh sejumlah pendidik yang punya hati, peduli, dan secara
              sukarela ingin membantu mewujudkan pemenuhan hak anak berkebutuhan
              khusus.
            </div>
            <p className="mb-4">
              Tentu saja perjalanan selama belasan tahun ini dipenuhi berbagai
              suka duka, kemenangan, maupun tantangan. Tetapi, kami yakin kami
              akan terus menjalankannya dengan sepenuh hati agar visi dan kasih
              Tuhan untuk anak-anak-Nya yang spesial bisa terwujud.
            </p>
            <p className="mb-4">
              Kami percaya bahwa setiap anak diciptakan unik, baik, dan
              sempurna. Terdapat begitu banyak kekuatan, karunia, maupun hadiah
              di dalam diri setiap anak berkebutuhan khusus. Oleh karena itu,
              sudah menjadi tanggung jawab kita untuk membantu dan melakukan
              edukasi untuk mewujudkan impian mereka.
            </p>
            <p className="mb-4">
              Kami berharap ke depannya akan semakin banyak orang yang peduli
              dan terlibat, agar YIPABK bisa memberi dampak yang lebih
              signifikan dalam membantu anak-anak dan keluarga Indonesia
              menemukan keindahan diri mereka.
            </p>
            <p className="mb-4">
              Kami berharap ke depannya akan semakin banyak orang yang peduli
              dan terlibat, agar YIPABK bisa memberi dampak yang lebih
              signifikan dalam membantu anak-anak dan keluarga Indonesia
              menemukan keindahan diri mereka.
            </p>
            <p className="font-medium">
              Dr. Alice Arianto, Psy.D., CGP. - Pendiri Bentara Campus
            </p>
          </div>
        </div>
        <div className="relative w-[30rem] h-[30rem]">
          <div className="absolute bg-white bottom-0 right-0 w-[28rem] h-[28rem]"></div>
          <img
            className="absolute bg-black top-0 left-0 w-[28rem] h-[28rem]"
            src="https://hips.hearstapps.com/hmg-prod/images/russian-blue-royalty-free-image-1658451809.jpg?crop=0.665xw:1.00xh;0.112xw,0&resize=980:*"
          />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center w-100 h-[100vh]">
        <div className="flex flex-col items-center mb-16">
          <div className="text-5xl  font-display mb-4">
            Program-Program Kami
          </div>
          <div className="bg-orange h-1 w-[42rem]"></div>
        </div>
        <div className="flex">
          <DisplayBox
            className="w-[16rem] h-[20rem] m-2"
            bgImage="https://hips.hearstapps.com/hmg-prod/images/large-cat-breed-1553197454.jpg"
          >
            LIFE
          </DisplayBox>
          <DisplayBox
            className="w-[16rem] h-[20rem] m-2"
            bgImage="https://hips.hearstapps.com/hmg-prod/images/domestic-cat-lies-in-a-basket-with-a-knitted-royalty-free-image-1592337336.jpg?crop=0.668xw:1.00xh;0.247xw,0&resize=1200:*"
          >
            RAISE
          </DisplayBox>
          <DisplayBox
            className="w-[16rem] h-[20rem] m-2"
            bgImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_vxA1uuUaujpLm07PPJkoqTeDs9HGCKXCtg&usqp=CAU"
          >
            TEACH
          </DisplayBox>
          <DisplayBox
            className="w-[16rem] h-[20rem] m-2"
            bgImage="https://media-cldnry.s-nbcnews.com/image/upload/t_fit-760w,f_auto,q_auto:best/rockcms/2022-08/220805-domestic-cat-mjf-1540-382ba2.jpg"
          >
            CARE
          </DisplayBox>
        </div>
      </div>
      <div className="relative flex justify-center items-center w-100 h-[100vh] overflow-hidden">
        <img
          className="absolute object-cover w-full h-full z-[-2]"
          src="https://www.alleycat.org/wp-content/uploads/2019/03/FELV-cat.jpg"
          alt=""
        />
        <div className="absolute bg-gradient-to-b from-paleblue to-paleblue/25 z-[-1] w-full h-full"></div>
        <div className="text-center text-white text-5xl font-display w-[36rem] tracking-wide leading-tight drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)]">
          Giving is The GREATEST Act of GRACE
        </div>
      </div>
      <div className="flex flex-col justify-center items-center w-100 h-[100vh]">
        <div className="text-5xl  font-display mb-4">Partner Kami</div>
        <div>Logo</div>
      </div>
    </div>
  );
}

export default Landing;
