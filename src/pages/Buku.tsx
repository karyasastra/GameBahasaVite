import { useState } from 'react';
import bg from '@/assets/Buku/background.png';
import Paper from '@/components/Buku/Paper';
import Background from '@/components/Global/Background';
import Button from "@/components/Global/Button";
import { useNavigate } from 'react-router-dom';

export default function Buku(){
  const [paper, showPaper] = useState('');
  const buttonStyle = {borderRadius: 0, border: 'none'};
  const navigate = useNavigate();

  return (
    <div style={{
      width:'100%',
      height:'100%',
      background: '#683AC2',
      position: 'relative'
    }}>
      <Background src={bg} />
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        maxWidth: 'calc(100% - 4rem)',
        width: '14rem',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
      }}>
        <Button style={{...buttonStyle}} onClick={ () => showPaper('cerpen') }>Cerpen</Button>
        <Button style={{...buttonStyle, background:'#6935CF'}} onClick={ () => showPaper('puisi') }>Puisi</Button>
        {/* <Button style={{...buttonStyle, background:'#875ED9'}} onClick={ () => showPaper('pantun') }>Pantun</Button> */}
        <Button style={{marginTop: '2rem'}} onClick={() => navigate('/')}>Kembali</Button>
      </div>
      {paper.length > 0 && 
        /// @ts-ignore
        <Paper content={konten[paper].konten} title={konten[paper].title} close={ () => showPaper('') } />}
    </div>
  );
}

export const konten = {
  puisi: {
    title: 'Puisi',
    konten: [`Pengertian Puisi 

Puisi adalah karya sastra yang berisi tanggapan serta pendapat penyair mengenai berbagai hal. Pemikiran penyair ini kemudian dituangkan dengan menggunakan bahasa-bahasa apik serta memiliki struktur batin dan fisik khas penyair.

Cara Menulis Puisi

1. Membuat kerangka puisi, dimulai dari jenis puisi yang ingin ditulis, kemudian perhatikan unsur puisi. Jika pembaca ingin menulis puisi lama, maka irama, rima sajak harus ditentukan terlebih dahulu agar pesan yang ingin disampaikan dapat dimengerti oleh pembaca puisi.`,

`2. Menentukan judul, penentuan judul di awal dapat mempermudah pembaca untuk membatasi ungkapan atau emosi yang ingin disampaikan melalui puisi.

3. Proses kreatif yang dapat pembaca peroleh melalui membaca referensi serta puisi atau berimajinasi. Dalam proses membuat puisi, penggunaan diksi tidak perlu terlalu sulit, cukup memulai dengan kata-kata yang familiar, dengan begitu pembaca akan mulai terbiasa untuk membuat ragam puisi lainnya. Selamat berpuisi.`]
  },
  cerpen: {
    title: 'Cerita Pendek',
    konten: [`Cerpen merupakan singkatan dari cerita pendek yang biasanya dikemas secara pendek, jelas dan ringkas. Cerpen juga bisa disebut sebagai fiksi prosa karena cerita yang disuguhkan hanya berfokus pada satu konflik permasalahan.

Disamping itu, permasalahan yang dikisahkan pada cerpen tidak terlalu rumit. Maka dari itu jumlah kata pada cerpen juga dibatasi, pada umumnya cerpen tidak lebih dari dari 10.000 kata saja.`,
`1. Menentukan Topik dan Tokoh
Memilih topik sesuai keinginan atau yang dikehendaki dan persiapkan tokoh yang akan dibuat dalam cerpen dengan matang

2. Menulis garis besar cerita
Garis besar cerita meliputi apa-apa saja yang akan terjadi. Buatlah garis besar cerita dengan singkat, padat dan jelas serta harus memperhatikan berbagai kejadian yang akan muncul.

3. Menentukan alur
Tentukan alur cerita secara tepat dan baik sehingga memberi kesan mendalam bagi pembaca. Perlu diketahui, alur ada tiga yaitu alur maju, alur mundur, dan alur campuran. `,
`4. Membuat kerangka karangan sesuai alur
Setelah tahapan sebelumnya selesai, langkah selanjutnya adalah membuat kerangka. Kerangka harus dibuat sesuai alur yang ditentukan dan mencakup langkah yang sebelumnya sudah dibuat.

5. Mulai menyusun cerpen dengan memperhatikan padu tidaknya antar kalimat
Cerita yang ditulis sesuai kerangka yang telah dibuat dan berikan diksi yang benar-benar tepat dengan memperhatikan padu tidaknya kalimat. Sebab, apabila antarkalimat tidak padu, akan terkesan janggal.`]
  }
}
