import { Layout } from '@/components/layout/Layout';
import { CheckCircle, Leaf, Heart, Users, Award } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const values = [
  {
    icon: Leaf,
    title: 'Organic First',
    description: 'We use only natural farming methods, no pesticides or artificial fertilizers.',
  },
  {
    icon: Heart,
    title: 'Made with Love',
    description: 'Every product is crafted with care and traditional wisdom passed through generations.',
  },
  {
    icon: Users,
    title: 'Community Focus',
    description: 'Supporting local farmers and building a sustainable agricultural ecosystem.',
  },
  {
    icon: Award,
    title: 'Quality Assured',
    description: 'Rigorous quality checks ensure only the best reaches your home.',
  },
];

const timeline = [
  { year: '2009', title: 'The Beginning', description: 'Started with just 5 acres of organic farmland.' },
  { year: '2014', title: 'Expansion', description: 'Grew to 50 acres with traditional farming methods.' },
  { year: '2018', title: 'First Products', description: 'Launched our first line of organic ghee and oils.' },
  { year: '2021', title: 'Online Store', description: 'Brought farm-fresh products directly to your doorstep.' },
  { year: '2024', title: 'Growing Strong', description: 'Serving thousands of happy customers across pakistan.' },
];

const About = () => {
  return (
    <Layout>
      <Helmet>
        <title>About Us | Irfan Farms - Our Story</title>
        <meta
          name="description"
          content="Learn about Irfan Farms' journey, our commitment to organic farming, and our mission to bring fresh, healthy products to your home."
        />
      </Helmet>

      {/* Hero */}
      <section className="bg-gradient-organic py-20 md:py-32">
        <div className="container-custom text-center text-primary-foreground">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Our Story
          </h1>
          <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
            From a small family farm to your kitchen table – our journey of bringing
            pure, organic goodness to thousands of homes.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="text-primary font-medium tracking-wider uppercase text-sm">
                Our Mission
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold mt-3 mb-6">
                Bringing Nature's Best <br />to Every Home
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                At Irfan Farms, we believe that everyone deserves access to pure,
                chemical-free food. Our mission is to bridge the gap between traditional
                organic farming and modern households, ensuring that the goodness of
                nature reaches your table in its purest form.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                We work directly with dedicated farmers who share our passion for
                sustainable agriculture. Every product is a testament to our commitment
                to quality, health, and environmental responsibility.
              </p>
              <div className="space-y-3">
                {['No artificial pesticides', 'Traditional processing methods', 'Farm-to-home traceability', 'Supporting local farmers'].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-secondary">
                <img
                  src="https://images.pexels.com/photos/2132171/pexels-photo-2132171.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt="Our farm"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-2xl shadow-strong">
                <div className="text-center">
                  <span className="block text-4xl font-serif font-bold">15+</span>
                  <span className="text-sm opacity-80">Years of Trust</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-primary font-medium tracking-wider uppercase text-sm">
              What We Stand For
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold mt-2">
              Our Core Values
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="p-6 bg-background rounded-2xl text-center hover:shadow-medium transition-shadow animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-primary font-medium tracking-wider uppercase text-sm">
              Our Journey
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold mt-2">
              How We Got Here
            </h2>
          </div>
          <div className="max-w-3xl mx-auto">
            {timeline.map((item, index) => (
              <div
                key={item.year}
                className="flex gap-6 pb-8 last:pb-0 animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                    {item.year.slice(-2)}
                  </div>
                  {index < timeline.length - 1 && (
                    <div className="flex-1 w-0.5 bg-border mt-2" />
                  )}
                </div>
                <div className="flex-1 pb-8">
                  <span className="text-primary font-semibold">{item.year}</span>
                  <h3 className="font-serif text-xl font-semibold mt-1 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-custom text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
            Join Our Farm Family
          </h2>
          <p className="text-lg opacity-90 max-w-xl mx-auto mb-8">
            Experience the difference of truly organic products. Start your journey to healthier living today.
          </p>
          <a href="/shop" className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-full font-semibold hover:brightness-110 transition-all">
            Shop Now
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default About;
