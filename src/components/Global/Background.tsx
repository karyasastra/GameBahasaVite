export default function Background({ src }:{ src: string }){
  // const { src } = props;

  return (
    <div style={{display:'flex', justifyContent: 'center', height: '100%'}}>
      <img style={{ height:'100%' }} src={src} />
    </div>
  );
}
