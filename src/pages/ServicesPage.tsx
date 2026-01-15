import Layout from '@/components/Layout';
import ServicesIntro from '@/components/ServicesIntro';
import Services from '@/components/Services';

const ServicesPage = () => {
  return (
    <Layout>
      <div className="pt-24">
        <ServicesIntro />
        <Services />
      </div>
    </Layout>
  );
};

export default ServicesPage;
