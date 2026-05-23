import HeroSection from '@/components/hero-section';
import ExpertiseSection from '@/components/about-section';
import ProjectsShowcaseSection from '@/components/projects-showcase-section';
import ContactSection from '@/components/contact-section';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ExpertiseSection />
      <ProjectsShowcaseSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
