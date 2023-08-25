import autism from '../../../assets/images/artikel/autism.png'
import { Layout } from './Layout'

export const Autism = () => {
	return (
		<Layout
			firstSectionTitle='What is Autism?'
			firstSectionContent={`Istilah “autistic” berasal dari bahasa Yunani “autos” yang artinya “self”. Istilah ini digunakan untuk menjelaskan seseorang yang bersibuk diri dengan dunianya sehingga kelihatan tidak tertarik kepada orang lain. Anak dengan autisma memang seperti memiliki “dunia” sendiri. Gangguan yang terjadi pada fungsi otak membawa anak autistik mengalami masalah pada: interaksi sosial timbal balik, komunikasi, dan pola tingkah laku yang repetitif (berulang) serta minat yang sempit.
  
      Autisma merupakan gangguan perkembangan yang kompleks. Setiap anak autistik memiliki ciri-ciri berbeda. Sebagian anak dengan kondisi yang berat menunjukkan ciri yang menyolok, sementara yang lainnya hanya menunjukkan beberapa ciri yang tidak terlalu kentara. Sebagian anak membutuhkan penanganan individual dan tetap tergantung pada orang lain sampai dewasa, sementara yang lainnya bisa belajar di sekolah umum dan mampu mandiri. Rentang yang luas dari keadaan anak-anak penyandang autisma dikenal dengan sebutan “Autistic Spectrum Disorder” (ASD).
      
      Identifikasi karakteristik pada anak autistik bisa dilakukan dengan melihat ciri-ciri yang khas pada anak, antara lain: kesulitan dalam interaksi dengan orang lain, hambatan dalam berbicara dan berkomunikasi, tingkah laku yang berulang, gangguan perilaku agresif dan hiperaktivitas, kelekatan dengan benda-benda, gangguan sensori, dan perkembangan yang tidak seimbang pada masa tumbuh kembang.`}
			secondSectionTitle='Intervensi Dini sangatlah penting!'
			secondSectionContent='Intervensi dini mencakup tindakan penanganan pada usia 0-3 tahun. Beberapa riset menunjukkan bahwa intervensi dini mempunyai pengaruh yang luar biasa dalam mengurangi gejala-gejala spektrum autisma. Penelitian membuktikan perkembangan otak pada anak usia dini sangat fleksibel sehingga sangat mungkin menghasilkan kemajuan berarti yang mempengaruhi pengembangan kemampuan kognitif, komunikasi, dan interaksi sosial anak ke depan menjadi lebih baik.'
			secondSectionImage={autism}
			secondSectionDir='ltr'
		/>
	)
}
