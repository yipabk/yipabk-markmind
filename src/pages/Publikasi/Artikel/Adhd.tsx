import adhd from '../../../assets/images/artikel/adhd.png'
import { Layout } from './Layout'

export const Adhd = () => {
	return (
		<Layout
			firstSectionTitle='What is ADHD?'
			firstSectionContent={`Pernahkah kita merasa sulit memusatkan perhatian, seakan begitu banyak hal mengganggu pikiran sehingga tidak bisa tidur? Atau, pernahkah kita merasa sangat bergairah menikmati hal-hal yang kita suka, hingga lupa waktu dan tidak ingin semua itu dihentikan? Kondisi tersebut dapat terjadi pada setiap orang. Namun, pada penyandang ADHD, hal itu berlangsung terus menerus di mana pun ia berada. Layaknya televisi, mereka tidak memiliki tombol switch on dan off, sehingga tidak dapat dipindahkan channel nya atau dihentikan.
  
      Karena selalu terdorong untuk bergerak, mereka menjadi tidak bisa diam dan selalu mencari kegiatan atau orang-orang yang bereaksi sama dengan dirinya. Gerakan kipas angin, kupu-kupu yang terbang di luar jendela kelas, suara ramai di kelas sebelah, atau video game bisa menjadi faktor pengganggu, ketika ia sedang mendengarkan guru yang mengajar di depan kelas. Kondisi ini berdampak pada ketidakstabilan performa akademik mereka. Suatu ketika bisa mendapatkan nilai baik, namun di lain waktu nilainya juga bisa turun karena proses belajar yang tidak konsisten.
      
      ADHD (Attention Deficit Hyperactivity Disorder) atau gangguan pemusatan perhatian dan hiperaktivitas memiliki tiga karakteristik utama, yaitu: Inatensi atau kesulitan memusatkan perhatian. Impulsivitas atau kesulitan menahan keinginan. Hiperaktivitas atau kesulitan mengendalikan gerakan.`}
			secondSectionTitle='Mengapa Peran Orang Tua Penting?'
			secondSectionContent='Anak dengan ADHD perlu menyalurkan energinya melalui aktivitas dan program rutin. Di sini peran orang tua menjadi penting untuk mengontrol sekaligus menata perilaku anak. Barkley (2005) bahkan memberi jaminan adanya hasil yang lebih baik, ketika orang tua melibatkan suasana emosi positif dalam mendampingi anak. Anak secara psikologis akan merasa lebih diterima, sementara orang tua akan memahami kenyataan sulitnya perjuangan anak dalam belajar. Hal ini akan membuat orang tua menjadi lebih sabar dan membantu anak untuk menata perilakunya yang positif bagi dirinya.'
			secondSectionImage={adhd}
			secondSectionDir='rtl'
		/>
	)
}
