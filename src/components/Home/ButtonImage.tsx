export default function ButtonImage({ title, src }: any){
  return (
    <button style={{
      background: 'transparent',
      border: 'none',
      cursor: 'pointer',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <img src={ src } style={{ width:'4rem' }}/>
      <span style={{ 
        fontFamily: "'Comic Neue', cursive",
        fontWeight: 'bold',
        paddingTop: '0.5rem',
        fontSize: '1rem',
        color: 'white',
      }}>{ title }</span>
    </button>
  );
}
