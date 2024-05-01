import BackgroundWave from '@/components/BackgroundWave';
import Navbar from '@/components/Navbar';
import HeroSection from './sections/Hero';
import EventsSection from './sections/Events';
import Footer from '@/components/Footer';

const MainPage = () => {
  return (
    <main id="home">
      <Navbar />
      <BackgroundWave />
      <HeroSection />
      <EventsSection />
      <Footer />
    </main>
  );
};

export default MainPage;
