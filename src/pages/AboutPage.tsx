import Layout from '@/components/Layout';
import AboutSection from '@/components/AboutSection';
import Benefits from '@/components/Benefits';

const AboutPage = () => {
  return (
    <Layout>
      <div className="pt-24">
        <AboutSection />
        <Benefits />
      </div>
    </Layout>
  );
};

export default AboutPage;
