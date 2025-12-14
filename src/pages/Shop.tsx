import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { ProductCard } from '@/components/ui/ProductCard';
import { products, categories, concerns } from '@/data/products';
import { Filter, Grid3X3, List, ChevronDown, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Helmet } from 'react-helmet-async';

type SortOption = 'featured' | 'price-low' | 'price-high' | 'rating' | 'newest';

const sortOptions: { value: SortOption; label: string }[] = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-low', label: 'Price: Low to High' },
  { value: 'price-high', label: 'Price: High to Low' },
  { value: 'rating', label: 'Top Rated' },
  { value: 'newest', label: 'Newest' },
];

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [showFilters, setShowFilters] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const activeCategory = searchParams.get('category');
  const activeConcern = searchParams.get('concern');
  const sortBy = (searchParams.get('sort') as SortOption) || 'featured';

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Filter by category
    if (activeCategory) {
      result = result.filter((p) => p.category === activeCategory);
    }

    // Filter by concern
    if (activeConcern) {
      result = result.filter((p) => p.concern?.includes(activeConcern));
    }

    // Sort
    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        result = result.filter((p) => p.badge === 'new').concat(result.filter((p) => p.badge !== 'new'));
        break;
    }

    return result;
  }, [activeCategory, activeConcern, sortBy]);

  const updateFilter = (key: string, value: string | null) => {
    if (value) {
      searchParams.set(key, value);
    } else {
      searchParams.delete(key);
    }
    setSearchParams(searchParams);
  };

  const clearFilters = () => {
    setSearchParams({});
  };

  const hasActiveFilters = activeCategory || activeConcern;

  return (
    <Layout>
      <Helmet>
        <title>Shop Organic Products | Irfan Farms</title>
        <meta
          name="description"
          content="Browse our collection of fresh organic products. Pure ghee, cold-pressed oils, stone-ground flour, and more farm-fresh items."
        />
      </Helmet>

      {/* Hero Banner */}
      <section className="bg-gradient-organic py-16 md:py-24">
        <div className="container-custom text-center text-primary-foreground">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            Our Products
          </h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Fresh, organic, and delivered with care. Explore our complete range of farm products.
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Filters - Desktop */}
            <aside className="hidden lg:block w-64 flex-shrink-0">
              <div className="sticky top-24 space-y-6">
                {/* Categories */}
                <div className="bg-card p-6 rounded-2xl">
                  <h3 className="font-serif text-lg font-semibold mb-4">Categories</h3>
                  <ul className="space-y-2">
                    <li>
                      <button
                        onClick={() => updateFilter('category', null)}
                        className={cn(
                          'w-full text-left px-3 py-2 rounded-lg transition-colors text-sm',
                          !activeCategory
                            ? 'bg-primary text-primary-foreground'
                            : 'hover:bg-secondary text-foreground'
                        )}
                      >
                        All Products
                      </button>
                    </li>
                    {categories.map((cat) => (
                      <li key={cat.id}>
                        <button
                          onClick={() => updateFilter('category', cat.id)}
                          className={cn(
                            'w-full text-left px-3 py-2 rounded-lg transition-colors text-sm flex items-center justify-between',
                            activeCategory === cat.id
                              ? 'bg-primary text-primary-foreground'
                              : 'hover:bg-secondary text-foreground'
                          )}
                        >
                          <span>{cat.name}</span>
                          <span className="text-xs opacity-70">{cat.productCount}</span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Concerns */}
                <div className="bg-card p-6 rounded-2xl">
                  <h3 className="font-serif text-lg font-semibold mb-4">Shop by Concern</h3>
                  <ul className="space-y-2">
                    {concerns.map((concern) => (
                      <li key={concern.id}>
                        <button
                          onClick={() =>
                            updateFilter('concern', activeConcern === concern.id ? null : concern.id)
                          }
                          className={cn(
                            'w-full text-left px-3 py-2 rounded-lg transition-colors text-sm flex items-center gap-2',
                            activeConcern === concern.id
                              ? 'bg-primary text-primary-foreground'
                              : 'hover:bg-secondary text-foreground'
                          )}
                        >
                          <span>{concern.icon}</span>
                          <span>{concern.name}</span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1">
              {/* Toolbar */}
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-3">
                  {/* Mobile Filter Toggle */}
                  <button
                    onClick={() => setShowFilters(!showFilters)}
                    className="lg:hidden flex items-center gap-2 px-4 py-2 bg-secondary rounded-full text-sm font-medium"
                  >
                    <Filter className="w-4 h-4" />
                    Filters
                  </button>

                  <p className="text-muted-foreground text-sm">
                    Showing <span className="font-medium text-foreground">{filteredProducts.length}</span> products
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  {/* Sort Dropdown */}
                  <div className="relative">
                    <select
                      value={sortBy}
                      onChange={(e) => updateFilter('sort', e.target.value)}
                      className="appearance-none bg-secondary px-4 py-2 pr-10 rounded-full text-sm font-medium 
                               cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      {sortOptions.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none" />
                  </div>

                  {/* View Toggle */}
                  <div className="hidden md:flex items-center gap-1 bg-secondary rounded-full p-1">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={cn(
                        'p-2 rounded-full transition-colors',
                        viewMode === 'grid' ? 'bg-primary text-primary-foreground' : 'hover:bg-secondary'
                      )}
                    >
                      <Grid3X3 className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={cn(
                        'p-2 rounded-full transition-colors',
                        viewMode === 'list' ? 'bg-primary text-primary-foreground' : 'hover:bg-secondary'
                      )}
                    >
                      <List className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Active Filters */}
              {hasActiveFilters && (
                <div className="flex flex-wrap items-center gap-2 mb-6">
                  <span className="text-sm text-muted-foreground">Active filters:</span>
                  {activeCategory && (
                    <button
                      onClick={() => updateFilter('category', null)}
                      className="inline-flex items-center gap-1 px-3 py-1 bg-primary/10 text-primary 
                               rounded-full text-sm font-medium hover:bg-primary/20 transition-colors"
                    >
                      {categories.find((c) => c.id === activeCategory)?.name}
                      <X className="w-3 h-3" />
                    </button>
                  )}
                  {activeConcern && (
                    <button
                      onClick={() => updateFilter('concern', null)}
                      className="inline-flex items-center gap-1 px-3 py-1 bg-primary/10 text-primary 
                               rounded-full text-sm font-medium hover:bg-primary/20 transition-colors"
                    >
                      {concerns.find((c) => c.id === activeConcern)?.name}
                      <X className="w-3 h-3" />
                    </button>
                  )}
                  <button
                    onClick={clearFilters}
                    className="text-sm text-muted-foreground hover:text-foreground underline"
                  >
                    Clear all
                  </button>
                </div>
              )}

              {/* Products Grid */}
              <div
                className={cn(
                  'grid gap-4 md:gap-6',
                  viewMode === 'grid'
                    ? 'grid-cols-2 md:grid-cols-3'
                    : 'grid-cols-1'
                )}
              >
                {filteredProducts.map((product, index) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    className="animate-fade-up"
                    style={{ animationDelay: `${index * 0.05}s` } as React.CSSProperties}
                  />
                ))}
              </div>

              {/* Empty State */}
              {filteredProducts.length === 0 && (
                <div className="text-center py-16">
                  <p className="text-muted-foreground text-lg mb-4">
                    No products found matching your filters.
                  </p>
                  <button onClick={clearFilters} className="btn-primary">
                    Clear Filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Filters Drawer */}
      {showFilters && (
        <>
          <div
            className="fixed inset-0 bg-foreground/50 z-50 lg:hidden"
            onClick={() => setShowFilters(false)}
          />
          <div className="fixed bottom-0 left-0 right-0 bg-background rounded-t-3xl z-50 lg:hidden max-h-[80vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-serif text-xl font-semibold">Filters</h3>
                <button onClick={() => setShowFilters(false)}>
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Categories */}
              <div className="mb-6">
                <h4 className="font-medium mb-3">Categories</h4>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => updateFilter('category', null)}
                    className={cn(
                      'px-4 py-2 rounded-full text-sm font-medium transition-colors',
                      !activeCategory
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-secondary hover:bg-secondary/80'
                    )}
                  >
                    All
                  </button>
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => updateFilter('category', cat.id)}
                      className={cn(
                        'px-4 py-2 rounded-full text-sm font-medium transition-colors',
                        activeCategory === cat.id
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-secondary hover:bg-secondary/80'
                      )}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Concerns */}
              <div className="mb-6">
                <h4 className="font-medium mb-3">Shop by Concern</h4>
                <div className="flex flex-wrap gap-2">
                  {concerns.map((concern) => (
                    <button
                      key={concern.id}
                      onClick={() =>
                        updateFilter('concern', activeConcern === concern.id ? null : concern.id)
                      }
                      className={cn(
                        'px-4 py-2 rounded-full text-sm font-medium transition-colors flex items-center gap-1',
                        activeConcern === concern.id
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-secondary hover:bg-secondary/80'
                      )}
                    >
                      <span>{concern.icon}</span>
                      {concern.name}
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={() => setShowFilters(false)}
                className="w-full btn-primary"
              >
                Apply Filters ({filteredProducts.length} products)
              </button>
            </div>
          </div>
        </>
      )}
    </Layout>
  );
};

export default Shop;
