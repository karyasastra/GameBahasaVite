import {useState} from 'react';
import Button from "@/components/Global/Button";
import PopupPengaturan from "./PopupPengaturan";

export default function Menu(){
  const [pengaturan, tampilkanPengaturan] = useState(false);
  return (
    <>
      {pengaturan && <PopupPengaturan close={ () => tampilkanPengaturan(false) } />}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        position: 'absolute',
        left: '1.5rem',
        bottom: '6rem',
      }}>
        <Button>Mainkan</Button>
        <Button style={{marginTop: '1rem'}}>Buku</Button>
        <Button style={{marginTop: '1rem'}} onClick={()=>tampilkanPengaturan(true)}>Pengaturan</Button>
        <Button style={{marginTop: '1rem'}}>Keluar</Button>
      </div>
    </>
  );
}
