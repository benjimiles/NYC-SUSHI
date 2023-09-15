import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import Sliders from '../components/Sliders';
import Footer from '../components/Footer';
import Cards from '../components/Cards';
import History from '../components/History';
export default function Home() {
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
