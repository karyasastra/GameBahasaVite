import {useState} from 'react';
import Button from "@/components/Global/Button";
import PopupPengaturan from "./PopupPengaturan";
import PilihPermainan from './PilihPermainan';
import { redirect, useNavigate } from 'react-router-dom';

export default function Menu(){
  const [mainkan, pilihPermainan] = useState(false);
  const [pengaturan, tampilkanPengaturan] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      {pengaturan && <PopupPengaturan close={ () => tampilkanPengaturan(false) } />}
      {mainkan && <PilihPermainan close={ () => pilihPermainan(false) } />}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        position: 'absolute',
        left: '1.5rem',
        bottom: '8rem',
      }}>
        <Button onClick={()=>pilihPermainan(true)}>Mainkan</Button>
        <Button style={{marginTop: '1rem'}} onClick={()=>navigate('/buku')}>Buku</Button>
        <Button style={{marginTop: '1rem'}} onClick={()=>tampilkanPengaturan(true)}>Pengaturan</Button>
        <Button style={{marginTop: '1rem'}} onClick={()=>window.close()}>Keluar</Button>
      </div>
    </>
  );
}
