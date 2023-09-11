import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import Sliders from '../components/Sliders';
import Footer from '../components/Footer';
import Image from 'next/image';
import Cards from '../components/Cards';
import History from '../components/History';
import { useAuth } from '@/AuthContext'; // or wherever you've placed AuthContext
export default function Home() {
  console.log('Inside Home component');
  return (
    <div>
      <NavBar />
      <Hero />
      <Sliders />
      <Cards />
      <History />
      <Footer />
    </div>
  );
}
