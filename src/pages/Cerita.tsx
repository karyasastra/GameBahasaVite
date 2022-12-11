import Button from '@/components/Global/Button'
import Header from '@/components/Game/Header'
import { getRandomInt } from '@/utils/utils'
import { useEffect, useId, useMemo, useRef, useState } from 'react'
import Container from '@/components/Game/Container'
import Panel from '@/components/Game/Panel'
import TextArea from '@/components/Global/TextArea'
import send from '@/utils/formspree'
import { modulCerpen } from '@/consts/cerpen'

export default function Cerita(){
  const img = useMemo(() => {
    const i = getRandomInt(0, modulCerpen.length - 1);
    const mP = modulCerpen[i];
    console.log({i, mP});
    return mP;
  }, []);

  const [cerpen, setCerpen] = useState('');
  const classAbstrak = `${useId()}-abstrak`;

  async function kirim(){
    const g = img.gambar.split('/');
    const abs = document.getElementsByClassName(classAbstrak);
    const vals: string[] = [];
    for(let i=0; i<abs.length; i++){
      /// @ts-ignore
      vals.push(abs.item(i).value);
    }

    console.log(abs);

    send('Cerpen', g[g.length - 1], vals, cerpen);
  }

  return (
    <div style={{
      width:'100%',
      height:'100%',
      background: '#683AC2',
      position: 'relative',
    }}>
      <Header gtype='Cerpen' />
      <Container>
        <Panel>
          <p style={{ fontSize: '1.4rem', fontWeight:'bold', color: 'white', textAlign: 'center', paddingLeft: '1rem', paddingRight: '1rem' }}>Buatlah cerita pendek dimulai dari kerangka pikiran berdasarkan gambar berikut!</p>
          <img src={img.gambar} style={{ display: 'block', width: 'calc(100% - 5rem)', margin: '0px auto' }} />
          <p style={{ color: 'white', textAlign: 'center'}}>Geser ke kiri!</p>
        </Panel>
        <Panel>
          <p style={{ fontSize: '1.4rem', fontWeight:'bold', color: 'white', textAlign: 'center', paddingLeft: '1rem', paddingRight: '1rem' }}>Mulailah dari kerangka pikiran.</p>
          { Array(img.konten).fill(<TextArea className={classAbstrak} style={{ margin: '0px 1rem 1rem', width: 'calc(100% - 4rem)', height: 'calc(40%)', fontSize:'1.2rem' }} onChange={(e) => setCerpen(e.target.value)}></TextArea>) }
        </Panel>
        <Panel>
          <p style={{ fontSize: '1.4rem', fontWeight:'bold', color: 'white', textAlign: 'center', paddingLeft: '1rem', paddingRight: '1rem' }}>Kemudian, kembangkan menjadi satu cerita.</p>
          <TextArea style={{ margin: '0px 1rem', width: 'calc(100% - 4rem)', height: 'calc(100% - 14rem)', fontSize:'1.2rem' }} onChange={(e) => setCerpen(e.target.value)}></TextArea>
          <Button style={{ margin: '1rem', width: 'calc(100% - 2rem)', }} onClick={()=>kirim()}>Kirim</Button>
        </Panel>
      </Container>
    </div>
  )
}
