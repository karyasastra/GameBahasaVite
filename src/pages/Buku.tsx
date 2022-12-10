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
        <Button style={{...buttonStyle, background:'#875ED9'}} onClick={ () => showPaper('pantun') }>Pantun</Button>
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
    title: 'Guruku',
    konten: [`Kau adalah pembimbingku
Pengajar dalam kehidupanku
Kau bagaikan penerang dalam hidupku
Tanpamu apalah jadinya aku
Oh guruku
Bagiku kau adalah pahlawan
Telah banyak ilmu yang kau ajarkan
Demi masa depanku yang terang
Tak kenal lelah kau ajariku
Sampaiku mengetahui ini dan itu
Dengan sabar kau ajariku
Sungguh besar jasamu wahai guru`]
  },
  pantun: {
    title: '',
    konten: [`Ada buaya bersembunyi di gua
Menghindar adalah pilihan yang tepat
Dengarkanlah nasihat orang tua
Supaya kamu jadi kuat
    
Makna: Jangan menyerah dalam menjalani kehidupan. Oleh karena itu, kamu harus sering mendengar nasihat dari orang tua.`]
  },
  cerpen: {
    title: 'Indahnya Berbagi dengan Sahabat',
    konten: [`Pagi itu hujan turun dengan deras. Ani merasa bingung bagaimana untuk berangkat ke sekolah. Ketika sedang memandang hujan, terdengar suara HP berdering dari kamar Ani, lantas saja Ani masuk ke kamar dan menjawab telepon.

Ternyata yang menghubungi Ani adalah Lia sahabatnya. Dalam teleponnya Lia mengatakan bahwa ia akan menjemput Ani, sebab Lia tahu jika Ani sedang kebingungan bagaimana untuk pergi ke sekolah.`,

`Tak selang berapa lama, Lia sudah sampai di depan rumah Ani bersama ayahnya menggunakan mobil. Ani pun bergegas berpamitan pada orang tuannya dan keluar untuk menemui Lia.

Setelah sampai di sekolah, yang merupakan teman sebangku tersebut pun masuk menuju kelasnya. Istirahat pun tiba, keduanya pergi ke kantin untuk menghilangkan rasa lapar. Ketika hendak membayar ternyata Lia lupa membawa dompet. Sehingga Ani sang sahabat membayarkannya.`]
  }
}
