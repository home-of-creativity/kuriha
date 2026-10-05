import { Header } from '@/components/Header/Header';
import { Hero } from '@/components/Hero/Hero';
import { TrustStrip } from '@/components/TrustStrip/TrustStrip';
import { About } from '@/components/About/About';
import { Certificate } from '@/components/Certificate/Certificate';
import { Stats } from '@/components/Stats/Stats';
import { VisionMission } from '@/components/VisionMission/VisionMission';
import { Services } from '@/components/Services/Services';
import { Systems } from '@/components/Systems/Systems';
import { Gear } from '@/components/Gear/Gear';
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
        <Certificate />
        <Stats />
        <VisionMission />
        <Services />
        <Systems />
        <Gear />
        <Standards />
        <Clients />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
