import ImgBercerita from '@/assets/Home/Bercerita.png';
import ImgBerpuisi from '@/assets/Home/Berpuisi.png';
import { TPopupProps } from "../Global/Popup";
import ButtonImage from './ButtonImage';
import ImgClose from '@/assets/Global/close.png';

export default function PilihPermainan({ close=function(){} }:TPopupProps){
  return (
    <div style={{
      width: '100%',
      height: '100%',
      background: 'rgba(255,255,255,0.05)',
      position: 'absolute',
      top: 0,
      left: 0,
      zIndex: 1024,
      backdropFilter: 'blur(4px)'
    }}>
      <img style={{
        position: 'absolute',
        right: '1rem',
        top: '1rem',
        cursor: 'pointer'
      }} src={ImgClose} onClick={() => close()} />
      <div style={{
        display: 'flex',
        position: 'absolute',
        top: '50%',
        left: 0,
        width: '100%',
        transform: 'translateY(-50%)',
        columnGap: '2rem',
        justifyContent: 'center'
      }}>
        <ButtonImage src={ImgBercerita} title='Buat Cerita'></ButtonImage>
        <ButtonImage src={ImgBerpuisi} title='Buat Puisi'></ButtonImage>
      </div>
    </div>
  );
}
