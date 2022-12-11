import imgPause from '@/assets/Global/pause.png'
import Button from '@/components/Global/Button'
import Header from '@/components/Game/Header'
import { modulPuisi } from '@/consts/puisi'
import { getRandomInt } from '@/utils/utils'
import styled from '@emotion/styled'
import { useEffect, useId, useMemo, useRef, useState } from 'react'
import Container from '@/components/Game/Container'
import Panel from '@/components/Game/Panel'
import TextArea from '@/components/Global/TextArea'
import send from '@/utils/formspree'

export default function Puisi(){
  const img = useMemo(() => {
    const i = getRandomInt(0, modulPuisi.length - 1);
    const mP = modulPuisi[i];
    console.log({i, mP});
    return mP;
  }, []);

  const [puisi, setPuisi] = useState('');
  // const [terkirim, setKirim] = useState(false);

  async function kirim(){
    console.log({puisi});
    send('Puisi', img.clue.join(', '), null, puisi);
  }

  return (
    <div style={{
      width:'100%',
      height:'100%',
      background: '#683AC2',
      position: 'relative',
    }}>
      <Header gtype='Puisi' />
      <Container>
        <Panel>
          <p style={{ fontSize: '1.4rem', fontWeight:'bold', color: 'white', textAlign: 'center' }}>Buatlah puisi dari gambar dan petunjuk berikut!</p>
          <img src={img.gambar} style={{ display: 'block', width: 'calc(100% - 5rem)', margin: '0px auto' }} />
          <p style={{ color: 'white', textAlign: 'center'}}>Geser ke kiri!</p>
        </Panel>
        <Panel>
          <div style={{display: 'flex', margin: '0px 1rem', height: '3rem', justifyContent:'space-around', alignItems: 'center'}}>
            <div style={{fontSize: '1.4rem', color: 'white', fontWeight: 'bold'}}>{ img.clue[0] }</div>
            <div style={{fontSize: '1.4rem', color: 'white', fontWeight: 'bold'}}>{ img.clue[1] }</div>
            <div style={{fontSize: '1.4rem', color: 'white', fontWeight: 'bold'}}>{ img.clue[2] }</div>
          </div>
          <TextArea style={{ margin: '0px 1rem', width: 'calc(100% - 4rem)', height: 'calc(100% - 10rem)', fontSize:'1.2rem' }} onChange={(e) => setPuisi(e.target.value)}></TextArea>
          <Button style={{ margin: '1rem', width: 'calc(100% - 2rem)', }} onClick={()=>kirim()}>Kirim</Button>
        </Panel>
      </Container>
    </div>
  )
}
