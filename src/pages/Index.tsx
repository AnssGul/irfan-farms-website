import { Layout } from '@/components/layout/Layout';
import HeroSlider from '../components/home/HeroSlider';
import { CategorySection } from '@/components/home/CategorySection';
import { FeaturedProducts } from '@/components/home/FeaturedProducts';
import { ConcernSection } from '@/components/home/ConcernSection';
import { FarmStory } from '@/components/home/FarmStory';
import { TestimonialsSection } from '@/components/home/TestimonialsSection';
import { Helmet } from 'react-helmet-async';
import { Truck, ShieldCheck, Award, Leaf } from 'lucide-react';


const Index = () => {
  const features = [
    {
      icon: Truck,
      title: 'Free Delivery',
      description: 'On orders over $50',
    },
    {
      icon: ShieldCheck,
      title: '100% Organic',
      description: 'Certified organic products',
    },
    {
      icon: Award,
      title: 'Premium Quality',
      description: 'Farm-fresh guarantee',
    },
    {
      icon: Leaf,
      title: 'Eco-Friendly',
      description: 'Sustainable farming',
    },
  ];
  return (
    <div className="min-h-screen bg-gray-50">
      <Layout>
        <Helmet>
          <title>Irfan Farms - Fresh Organic Products | Farm to Home Delivery</title>
          <meta
            name="description"
            content="Shop fresh organic products from Irfan Farms. Pure A2 Ghee, cold-pressed oils, stone-ground flour, and more. Free delivery on orders above 999."
          />
        </Helmet>

        <HeroSlider />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"></div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300"
            >
              <feature.icon className="w-10 h-10 text-green-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-800 mb-1">{feature.title}</h3>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
        <CategorySection />
        <FeaturedProducts
          title="Best Sellers"
          subtitle="Customer Favorites"
          filter="bestseller"
          limit={4}
        />
        <ConcernSection />
        <FeaturedProducts
          title="Hot Deals"
          subtitle="Limited Time Offers"
          filter="hot-deal"
          limit={4}
        />
        {/* <FarmStory /> */}
        {/* <FeaturedProducts
          title="New Arrivals"
          subtitle="Fresh Additions"
          filter="new"
          limit={4}
        /> */}
        <TestimonialsSection />
      </Layout>
    </div >
  );
};

export default Index;
