import BackgroundWave from '@/components/BackgroundWave';
import Navbar from '@/components/Navbar';
import HeroSection from './sections/Hero';
import EventsSection from './sections/Events';

const MainPage = () => {
  return (
    <main id="home">
      <Navbar />
      <BackgroundWave />
      <HeroSection />
      <EventsSection />
    </main>
  );
};

export default MainPage;
