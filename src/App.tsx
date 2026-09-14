import { Header } from '@/components/Header/Header';
import { Hero } from '@/components/Hero/Hero';
import { TrustStrip } from '@/components/TrustStrip/TrustStrip';
import { About } from '@/components/About/About';
import { Stats } from '@/components/Stats/Stats';
import { VisionMission } from '@/components/VisionMission/VisionMission';
import { Services } from '@/components/Services/Services';
import { Systems } from '@/components/Systems/Systems';
import { Standards } from '@/components/Standards/Standards';
import { Clients } from '@/components/Clients/Clients';
import { ContactCTA } from '@/components/ContactCTA/ContactCTA';
import { Footer } from '@/components/Footer/Footer';
import { OrganizationSchema } from '@/components/Seo/OrganizationSchema';

export default function App() {
  return (
    <>
      <OrganizationSchema />
      <Header />
      <main>
        <Hero />
        <TrustStrip />
        <About />
        <Stats />
        <VisionMission />
        <Services />
        <Systems />
        <Standards />
        <Clients />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
