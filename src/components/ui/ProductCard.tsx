import { ShoppingBag, Star, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Product } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';
import { CSSProperties } from 'react';

interface ProductCardProps {
  product: Product;
  className?: string;
  style?: CSSProperties;
}

const badgeStyles = {
  bestseller: 'bg-primary text-primary-foreground',
  new: 'bg-accent text-accent-foreground',
  'hot-deal': 'bg-destructive text-destructive-foreground',
  limited: 'bg-earth text-primary-foreground',
};

const badgeLabels = {
  bestseller: 'Best Seller',
  new: 'New',
  'hot-deal': 'Hot Deal',
  limited: 'Limited Stock',
};

export const ProductCard = ({ product, className, style }: ProductCardProps) => {
  const { addItem, openCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!product.inStock) return;
    addItem(product);
    toast.success(`${product.name} added to cart!`, {
      action: {
        label: 'View Cart',
        onClick: () => openCart(),
      },
    });
  };

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <Link
      to={`/product/${product.id}`}
      className={cn('card-product block group', className)}
      style={style}
    >
      {/* Image Container */}
      <div className="relative aspect-square bg-secondary overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Badge */}
        {product.badge && (
          <span
            className={cn(
              'absolute top-3 left-3 px-3 py-1 text-xs font-semibold rounded-full',
              badgeStyles[product.badge]
            )}
          >
            {badgeLabels[product.badge]}
          </span>
        )}

        {/* Discount Badge */}
        {discount > 0 && (
          <span className="absolute top-3 right-3 px-2 py-1 bg-destructive text-destructive-foreground text-xs font-bold rounded-full">
            -{discount}%
          </span>
        )}

        {/* Wishlist Button */}
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            toast.success('Added to wishlist!');
          }}
          className="absolute top-12 right-3 p-2 bg-background/90 rounded-full opacity-0 group-hover:opacity-100 
                     transition-opacity duration-300 hover:bg-background hover:scale-110"
        >
          <Heart className="w-4 h-4 text-foreground" />
        </button>

        {/* Out of Stock Overlay */}
        {!product.inStock && (
          <div className="absolute inset-0 bg-background/70 flex items-center justify-center">
            <span className="px-4 py-2 bg-foreground text-background font-medium rounded-full text-sm">
              Out of Stock
            </span>
          </div>
        )}

        {/* Quick Add Button */}
        {product.inStock && (
          <button
            onClick={handleAddToCart}
            className="absolute bottom-3 left-3 right-3 py-3 bg-primary text-primary-foreground font-medium 
                       rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 
                       translate-y-2 group-hover:translate-y-0 flex items-center justify-center gap-2
                       hover:bg-primary/90"
          >
            <ShoppingBag className="w-4 h-4" />
            Add to Cart
          </button>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <span className="text-xs text-muted-foreground uppercase tracking-wide">
          {product.category}
        </span>
        <h3 className="font-medium mt-1 line-clamp-2 group-hover:text-primary transition-colors">
          {product.name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-1 mt-2">
          <Star className="w-4 h-4 fill-accent text-accent" />
          <span className="text-sm font-medium">{product.rating}</span>
          <span className="text-sm text-muted-foreground">
            ({product.reviews} reviews)
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2 mt-2">
          <span className="font-serif text-lg font-bold text-primary">
            {product.price}
          </span>
          {product.originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              {product.originalPrice}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
};
