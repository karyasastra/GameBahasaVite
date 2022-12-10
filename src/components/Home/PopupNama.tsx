import localforage from 'localforage';
import { useState, useEffect } from 'react';
import Button from "../Global/Button";
import Popup, { TPopupProps } from "../Global/Popup";
import TextInput from "../Global/TextInput";

export default function PopupNama({ close }:TPopupProps){
  const [name, setName] = useState('');

  useEffect(() => {
    localforage.getItem('nama', function(err, val){
      setName((val as string) ?? 'Nama Kamu');
    });
  }, []);

  async function storeName(){
    await localforage.setItem('nama', name);
    close && close();
  }

  return (
    <Popup close={ close } title='Masukkan Nama' withClose={false}>
      <TextInput value={ name } onChange={(e) => setName(e.target.value)} />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Button style={{
          marginTop: '1rem',
          filter: name.length == 0 ? 'brightness(0.9) grayscale(0.9)' : '',
        }} onClick={ () => (name.length > 0 && storeName()) }>Simpan</Button>
      </div>
    </Popup>
  );
}
