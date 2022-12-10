import bg from '@/assets/Home/background.png';
import Background from '@/components/Global/Background';
import Popup from '@/components/Global/Popup';
import Extras from '@/components/Home/Extras';
import Menu from '@/components/Home/Menu';

export default function Home() {
  return (
    <div style={{
      width:'100%',
      height:'100%',
    }}>
      <Background src={bg} />
      <Extras />
      <Menu />
    </div>
  );
}
