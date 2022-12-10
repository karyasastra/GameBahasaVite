import imgClose from '@/assets/Global/close.png';

export type TPopupProps = {
  title?: string;
  close?: Function;
  withClose?: boolean;
  children?: any;
}

export default function Popup({ close = function(){}, withClose=true, title='', children=(<></>) }: TPopupProps){
  return (
    <div style={{
      background: '#563232',
      border: '4px solid white',
      borderRadius: '8px',
      padding: '1rem',
      width: 'calc(100% - 2rem - 8px - 2rem)',
      position: 'absolute',
      left: '1rem',
      top: '50%',
      transform: 'translateY(-50%)',
      color: 'white',
      fontFamily: "'Comic Neue', cursive",
      zIndex: 1024,
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'end'
      }}>
        { title.length > 0 && <p style={{ 
          padding:0, 
          margin:0, 
          fontWeight: 'bold', 
          textAlign: 'center', 
          width: '100%',
          fontSize: '1.4rem',
          alignItems: 'center',
        }}>{ title }</p> }
        { withClose && <img style={{height: '2rem', cursor: 'pointer'}} src={ imgClose } onClick={() => close()} /> }
      </div>
      <div style={{paddingTop: '1rem'}}>
        { children }
      </div>
    </div>
  )
}
