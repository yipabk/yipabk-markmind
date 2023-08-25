import dyslexia from '../../../assets/images/artikel/dyslexia.png'
import { Layout } from './Layout'

export const Dyslexia = () => {
	return (
		<Layout
			firstSectionTitle='What is Dyslexia?'
			firstSectionContent={`Kata disleksia berasal dari kata “dys” yang berarti gangguan atau ketidakmampuan, dan kata “lexis” yang menunjuk kepada kata-kata atau berbahasa. Dari asal katanya disleksia berarti gangguan/ketidakmampuan dalam berbahasa dan mengeja kata. Disleksia bukan disebabkan oleh kurangnya motivasi belajar, kerusakan indera, atau kondisi lingkungan. Disleksia disebabkan karena adanya gangguan pada sistem syaraf pusat yang memengaruhi persepsi visual anak terhadap objek huruf, angka, atau kata. Anak dengan disleksia mengalami kesulitan dalam membaca, menulis, mengeja,menyimak, dan berhitung. Disleksia termasuk dalam kategori kesulitan belajar spesifik/khusus (specific learning disabilities).
  
      Fakta-fakta tentang disleksia menunjukkan bahwa satu dari lima pelajar atau 15-20 % anak usia sekolah dasar mengalami disleksia dengan variasi dalam tingkat keparahannya. Kebanyakan orang yang punya kemampuan membaca buruk, 70-80 % adalah “dyslexic”. Meski mengalami gangguan dalam belajar, anak dengan disleksia memiliki intelegensi normal, bahkan di atas rata-rata. Albert Einstein, Lee Kuan Yew, Tom Cruise adalah orang-orang dengan disleksia.`}
			secondSectionTitle='Mengapa Intervensi Dini Sangat Penting?'
			secondSectionContent='Disleksia adalah gangguan belajar yang bersifat menetap seumur hidup. Karena itu penanganan terhadap disleksia membutuhkan deteksi sejak awal terhadap gejala yang terjadi pada anak, yang kemudian diikuti dengan intervensi berupa metode-metode pengajaran yang kreatif termasuk penggunaan teknologi, agar anak dengan disleksia mampu mengejar “ketertinggalan”. Intervensi dini berarti kemudahan bagi anak untuk melanjutkan studinya. Intervensi khusus bisa diberikan melalui pendekatan konseling pada anak.'
			secondSectionImage={dyslexia}
			secondSectionDir='rtl'
		/>
	)
}
