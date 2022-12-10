import { useState, useEffect, useMemo } from 'react';
import kertas from '@/assets/Buku/paper.png';
import imgBack from '@/assets/Global/back.png';
import Button from '../Global/Button';

export type TPaper = {
  title?: string;
  content: string[];
  // prev?: Function;
  // next?: Function;
  close?: Function;
  // navigation?: boolean;
}; 

export const PaperDefaultProps: TPaper = {
  title: '',
  content: [''],
  // prev: ()=>{},
  // next: ()=>{},
  close: ()=>{},
  // navigation: false,
}

export default function Paper(props: TPaper){
  props = {...PaperDefaultProps, ...props};

  const [page, setPage] = useState(0);
  const [len, konten] = useMemo(() => {
    return [props.content.length, props.content[page]];
  }, [page]);

  function internalLanjut(){

  }

  return (
    <div style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      margin: '3rem 0rem 2rem 0rem',
    }}>
      <div style={{ padding: '0rem 2rem', }}>
        <img style={{width:'2rem', cursor: 'pointer'}} src={imgBack} onClick={() => props.close && props.close()} />
      </div>
      <div style={{ position: 'relative', margin:'1rem auto', width: 'calc(100% - 6rem)'}}>
        <img style={{ width: '100%' }} src={ kertas } />
        <p style={{
          position: 'absolute',
          width: '100%',
          top: 0,
          left: 0,
          padding: '0.5rem 1rem',
        }}>
          <span style={{ 
            fontWeight: 'bold', 
            textAlign: 'center', 
            display: 'inline-block', 
            width: 'calc(100% - 2rem)' 
          }}>{ props.title }</span>
          <pre style={{ 
            display: 'inline-block', 
            width: 'calc(100% - 2rem)',
            fontFamily: "'Comic Neue', cursive",
            fontSize: '0.8rem',
            whiteSpace: 'pre-wrap',
            marginTop: '0.6rem',
          }}>{ konten }</pre>
        </p>
      </div>
      <div style={{ display: 'flex', justifyContent:'center' }}>
        <Button style={{
          margin:'0px 1rem', 
          visibility: page > 0 ? 'visible' : 'hidden',
        }} onClick={() => page > 0 && setPage(page - 1)}>Balik</Button>
        <Button style={{
          margin:'0px 1rem',
          visibility: page < len - 1 ? 'visible' : 'hidden',
        }} onClick={() => page < len - 1 && setPage(page + 1)}>Lanjut</Button>
      </div>
    </div>
  );
}
