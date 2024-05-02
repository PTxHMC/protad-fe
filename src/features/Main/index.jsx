import BackgroundWave from '@/components/BackgroundWave';
import Navbar from '@/components/Navbar';
import HeroSection from './sections/Hero';
import Footer from '@/components/Footer';
import OurProgram from './sections/OurProgram';
import OurMember from './sections/OurMember';

const MainPage = () => {
  return (
    <main id="home">
      <Navbar
        textColor="text-background"
        buttonBg="bg-transparent"
        theme="light"
      />
      <BackgroundWave />
      <HeroSection />
      <OurProgram />
      <OurMember />
      <Footer />
    </main>
  );
};

export default MainPage;
