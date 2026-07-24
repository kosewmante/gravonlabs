import { HeroSection } from '../components/HeroSection';
import { ServiceModules } from '../components/ServiceModules';
import { ProofSection } from '../components/ProofSection';
import { WorkflowSection } from '../components/WorkflowSection';
import { WhoWeHelp } from '../components/WhoWeHelp';
import { ContactSection } from '../components/ContactSection';

export const Home = () => {
  return (
    <main>
      <HeroSection />
      <ServiceModules />
      <ProofSection />
      <WorkflowSection />
      <WhoWeHelp />
      <ContactSection />
    </main>
  );
};
