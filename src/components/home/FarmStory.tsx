import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight } from 'lucide-react';

const features = [
  'Certified organic farming practices',
  'No pesticides or artificial fertilizers',
  'Traditional processing methods',
  'Farm-fresh to doorstep delivery',
];

export const FarmStory = () => {
  return (
    <section className="section-padding bg-background overflow-hidden">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-secondary">
                  <img
                    src="/placeholder.svg"
                    alt="Farm landscape"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square rounded-2xl overflow-hidden bg-secondary">
                  <img
                    src="/placeholder.svg"
                    alt="Fresh produce"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="pt-8 space-y-4">
                <div className="aspect-square rounded-2xl overflow-hidden bg-secondary">
                  <img
                    src="/placeholder.svg"
                    alt="Farmer at work"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-secondary">
                  <img
                    src="/placeholder.svg"
                    alt="Organic products"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-4 -right-4 md:bottom-8 md:right-0 bg-primary text-primary-foreground 
                          p-6 rounded-2xl shadow-strong animate-float">
              <div className="text-center">
                <span className="block text-4xl font-serif font-bold">15+</span>
                <span className="text-sm opacity-80">Years of Trust</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="lg:pl-8">
            <span className="text-primary font-medium tracking-wider uppercase text-sm">
              Our Story
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-6 leading-tight">
              From Our Farm, <br />
              <span className="text-primary">With Love</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              At Irfan Farms, we believe in the power of pure, organic food. For over 15 years, 
              we've been cultivating the finest produce using traditional methods passed down 
              through generations. Every product that leaves our farm is a testament to our 
              commitment to quality, sustainability, and your well-being.
            </p>

            {/* Features List */}
            <ul className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </li>
              ))}
            </ul>

            <Link
              to="/about"
              className="inline-flex items-center gap-2 btn-primary"
            >
              Read Our Full Story
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
