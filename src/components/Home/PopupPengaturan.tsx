import localforage from 'localforage';
import { useState, useEffect } from 'react';
import Button from "../Global/Button";
import Popup, { TPopupProps } from "../Global/Popup";
import TextInput from "../Global/TextInput";

export default function PopupPengaturan({ close }:TPopupProps){
  const [email, setEmail] = useState('');

  useEffect(() => {
    localforage.getItem('email', function(err, val){
      setEmail((val as string) ?? 'surelmu@mail.com');
    });
  }, []);

  async function storeEmail(){
    await localforage.setItem('email', email);
    close && close();
  }

  return (
    <Popup close={ close } title='Integrasikan Formspree' withClose={true}>
      <TextInput type='url' value={ email } onChange={(e) => setEmail(e.target.value)} />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Button style={{
          marginTop: '1rem',
        }} onClick={ () => (storeEmail()) }>Simpan</Button>
      </div>
    </Popup>
  );
}
