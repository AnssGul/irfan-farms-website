import { Link } from 'react-router-dom';
import { concerns } from '@/data/products';

export const ConcernSection = () => {
  return (
    <section className="section-padding bg-gradient-warm">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-primary font-medium tracking-wider uppercase text-sm">
            Shop by Your Needs
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold mt-2 mb-4">
            What Are You Looking For?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Find the perfect products based on your health goals and daily requirements.
          </p>
        </div>

        {/* Concern Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {concerns.map((concern, index) => (
            <Link
              key={concern.id}
              to={`/shop?concern=${concern.id}`}
              className="group relative p-6 md:p-8 rounded-2xl bg-background border-2 border-transparent 
                       hover:border-primary transition-all duration-300 hover:shadow-medium
                       animate-fade-up text-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-secondary flex items-center justify-center 
                            text-3xl group-hover:scale-110 group-hover:bg-primary/10 transition-all duration-300">
                {concern.icon}
              </div>

              {/* Content */}
              <h3 className="font-serif text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                {concern.name}
              </h3>

              {/* Hover Line */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-primary rounded-full 
                            group-hover:w-1/2 transition-all duration-300" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
