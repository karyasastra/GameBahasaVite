import { useState } from 'react';
import bg from '@/assets/Buku/background.png';
import Paper from '@/components/Buku/Paper';
import Background from '@/components/Global/Background';
import Button from "@/components/Global/Button";
import { useNavigate } from 'react-router-dom';
import { konten } from '@/consts/konten_buku';

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
        {/* <Button style={{...buttonStyle, background:'#875ED9'}} onClick={ () => showPaper('pantun') }>Pantun</Button> */}
        <Button style={{marginTop: '2rem'}} onClick={() => navigate('/')}>Kembali</Button>
      </div>
      {paper.length > 0 && 
        /// @ts-ignore
        <Paper content={konten[paper].konten} title={konten[paper].title} close={ () => showPaper('') } />}
    </div>
  );
}
