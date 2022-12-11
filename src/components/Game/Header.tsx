import imgPause from '@/assets/Global/pause.png'
import { useEffect, useId, useRef, useState } from 'react'
import { addZero } from '@/utils/utils';
import Popup from '../Global/Popup';
import Button from '../Global/Button';
import { useNavigate } from 'react-router-dom';



export default function Header({ gtype }:{gtype: 'Puisi' | 'Cerpen'}){
  const idTime = useId();
  const time = new Date().getTime();
  const [isPause, setPause] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    let t = 0;
    var timer = setInterval(() => {
      t = Math.floor((new Date().getTime() - time) / 1000);
      const el = document.getElementById(idTime);
      if(el !== null) 
        el.innerText = `${addZero(Math.floor(t / 60))} : ${addZero(t % 60)}`
    }, 800);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      { isPause && <Popup title={`Membuat ${gtype}`} close={() => setPause(false)}>
        <p style={{ fontWeight: 'bold', color: 'white', textAlign: 'center', margin: 0, fontSize: '1.3rem' }}>
          Ingin menghentikan permainan ini? {gtype} yang kamu tulis akan terhapus, <i>lho</i>!</p>
        <div style={{ display: 'flex', marginTop: '1rem', justifyContent: 'space-between' }}>
          <Button onClick={() => navigate('/') }>Beranda</Button>
          <Button onClick={() => navigate(0) }>Ulangi</Button>
        </div>
      </Popup> }
      <div style={{
        display: 'flex',
        justifyContent: 'start',
        alignItems: 'center',
        gap: '1rem',
        padding: '1rem'
      }}>
        <img src={imgPause} style={{ cursor: 'pointer' }} onClick={() => setPause(true)} />
        <span id={idTime} style={{
          fontSize: '1.8rem',
          fontWeight: 'bold',
          color: 'white'
        }}>00 : 00</span>
      </div>
    </>
  );
}
