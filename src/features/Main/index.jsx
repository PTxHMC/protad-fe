import BackgroundWave from '@/components/BackgroundWave';
import Navbar from '@/components/Navbar';
import HeroSection from './sections/Hero';
import Footer from '@/components/Footer';
import OurProgram from './sections/OurProgram';

const MainPage = () => {
  return (
    <main id="home">
      <Navbar />
      <BackgroundWave />
      <HeroSection />
      <OurProgram />
      <Footer />
    </main>
  );
};

export default MainPage;
