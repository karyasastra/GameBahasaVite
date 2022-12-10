import { useState, useEffect } from 'react';
import localforage from "localforage";
import ButtonMini from "../Global/ButtonMini";
import PopupNama from './PopupNama';

export default function Extras(){
  const [cekNama, setPUNama] = useState(false);
  const [nama, setNama] = useState('');

  console.log({cekNama});

  useEffect(() => {
    localforage.getItem('nama', function(err, val){
      if(!val) setPUNama(true);
      else setNama(val as string);
      console.log({err, val, v: !val});
    });
  }, [cekNama]);

  return (
    <>
      {cekNama && <PopupNama close={() => setPUNama(false)} />}
      <div style={{
        position: 'absolute',
        bottom: '2rem',
        left: '1rem',
        width: 'calc(100% - 2rem)',
        display: 'flex',
        justifyContent: 'space-between'
      }}>
        <ButtonMini>Hak Cipta</ButtonMini>
        <ButtonMini onClick={() => setPUNama(true)}>{ nama }</ButtonMini>
      </div>
    </>
  );
}
