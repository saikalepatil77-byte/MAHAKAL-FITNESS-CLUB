import { useEffect, useState } from 'react';
import Loader from './components/Loader';
import CustomCursor from './components/CustomCursor';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import GymSection from './components/GymSection';
import EquipmentSection from './components/EquipmentSection';
import TransformationSection from './components/TransformationSection';
import MembershipSection from './components/MembershipSection';
import WhyMahakalSection from './components/WhyMahakalSection';
import CountdownSection from './components/CountdownSection';
import ContactSection from './components/ContactSection';
import FilmGrain from './components/FilmGrain';

export default function App() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 3200);
    return () => clearTimeout(timer);
  }, []);

  // Intersection Observer for reveal animations
  useEffect(() => {
    if (!loaded) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -60px 0px' }
    );
    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [loaded]);

  return (
    <>
      <FilmGrain />
      <CustomCursor />
      <Loader onComplete={() => setLoaded(true)} />
      <div style={{ opacity: loaded ? 1 : 0, transition: 'opacity 1s ease 0.3s' }}>
        <Navigation />
        <main>
          <HeroSection />
          <div className="section-hr" />
          <GymSection />
          <div className="section-connector" />
          <EquipmentSection />
          <div className="section-connector reverse" />
          <TransformationSection />
          <div className="section-connector" />
          <MembershipSection />
          <div className="section-connector reverse" />
          <WhyMahakalSection />
          <CountdownSection />
          <ContactSection />
        </main>
      </div>
    </>
  );
}
