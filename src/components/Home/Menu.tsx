import Button from "@/components/Global/Button";

export default function Menu(){
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      position: 'absolute',
      left: '1.5rem',
      bottom: '6rem',
    }}>
      <Button>Mainkan</Button>
      <Button style={{marginTop: '1rem'}}>Buku</Button>
      <Button style={{marginTop: '1rem'}}>Pengaturan</Button>
      <Button style={{marginTop: '1rem'}}>Keluar</Button>
    </div>
  );
}
