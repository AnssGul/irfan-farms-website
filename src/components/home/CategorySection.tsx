import { Link } from 'react-router-dom';
import { categories } from '@/data/products';
import { ArrowRight } from 'lucide-react';
import { Truck, ShieldCheck, Award, Leaf } from 'lucide-react';


export const CategorySection = () => {
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
    <section className="section-padding bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-primary font-medium tracking-wider uppercase text-sm">
            Browse Our Collection
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold mt-2 mb-4">
            Shop by Category
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our wide range of organic products, carefully sourced and freshly delivered from our farm.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {categories.map((category, index) => (
            <Link
              key={category.id}
              to={`/shop?category=${category.id}`}
              className="group relative aspect-square rounded-2xl overflow-hidden bg-secondary animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
              </div>

              {/* Content */}
              <div className="absolute inset-0 p-4 md:p-6 flex flex-col justify-end">
                <h3 className="font-serif text-lg md:text-xl font-semibold text-primary-foreground">
                  {category.name}
                </h3>
                <p className="text-primary-foreground/70 text-sm mt-1">
                  {category.productCount} Products
                </p>
                <div className="flex items-center gap-2 mt-3 text-accent font-medium text-sm 
                              opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 
                              transition-all duration-300">
                  <span>Explore</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
