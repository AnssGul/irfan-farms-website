import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { products } from '@/data/products';
import { ProductCard } from '@/components/ui/ProductCard';

interface FeaturedProductsProps {
  title: string;
  subtitle?: string;
  filter?: 'bestseller' | 'new' | 'hot-deal' | 'all';
  limit?: number;
}

export const FeaturedProducts = ({
  title,
  subtitle,
  filter = 'all',
  limit = 4,
}: FeaturedProductsProps) => {
  const filteredProducts =
    filter === 'all'
      ? products.slice(0, limit)
      : products.filter((p) => p.badge === filter).slice(0, limit);

  return (
    <section className="section-padding bg-card">
      <div className="container-custom">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-primary font-medium tracking-wider uppercase text-sm">
              {subtitle || 'Handpicked for You'}
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold mt-2">
              {title}
            </h2>
          </div>
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
          >
            View All Products
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {filteredProducts.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              className="animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` } as React.CSSProperties}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
