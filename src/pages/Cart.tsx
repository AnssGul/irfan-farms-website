import { Link } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { useCart } from '@/context/CartContext';
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight, Tag } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const Cart = () => {
  const { state, removeItem, updateQuantity, totalPrice, clearCart } = useCart();

  return (
    <Layout>
      <Helmet>
        <title>Shopping Cart | Irfan Farms</title>
        <meta name="description" content="Review your cart and proceed to checkout." />
      </Helmet>

      <section className="section-padding bg-background">
        <div className="container-custom">
          <h1 className="font-serif text-3xl md:text-4xl font-bold mb-8">
            Shopping Cart
          </h1>

          {state.items.length === 0 ? (
            <div className="text-center py-16">
              <ShoppingBag className="w-20 h-20 mx-auto text-muted-foreground/30 mb-6" />
              <h2 className="font-serif text-2xl font-semibold mb-3">
                Your cart is empty
              </h2>
              <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                Looks like you haven't added any products yet. Start exploring our fresh organic products!
              </p>
              <Link to="/shop" className="btn-primary">
                Start Shopping
              </Link>
            </div>
          ) : (
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-4">
                {/* Header */}
                <div className="hidden md:grid grid-cols-12 gap-4 px-4 py-3 bg-secondary rounded-xl text-sm font-medium text-muted-foreground">
                  <div className="col-span-6">Product</div>
                  <div className="col-span-2 text-center">Price</div>
                  <div className="col-span-2 text-center">Quantity</div>
                  <div className="col-span-2 text-right">Total</div>
                </div>

                {/* Items */}
                {state.items.map((item) => (
                  <div
                    key={item.id}
                    className="grid grid-cols-12 gap-4 p-4 bg-card rounded-xl items-center"
                  >
                    {/* Product Info */}
                    <div className="col-span-12 md:col-span-6 flex gap-4">
                      <Link
                        to={`/product/${item.id}`}
                        className="w-20 h-20 md:w-24 md:h-24 rounded-xl overflow-hidden bg-secondary flex-shrink-0"
                      >
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </Link>
                      <div className="flex-1 min-w-0">
                        <Link
                          to={`/product/${item.id}`}
                          className="font-medium hover:text-primary transition-colors line-clamp-2"
                        >
                          {item.name}
                        </Link>
                        <p className="text-sm text-muted-foreground mt-1 capitalize">
                          {item.category}
                        </p>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="mt-2 text-destructive text-sm flex items-center gap-1 hover:underline md:hidden"
                        >
                          <Trash2 className="w-3 h-3" />
                          Remove
                        </button>
                      </div>
                    </div>

                    {/* Price */}
                    <div className="col-span-4 md:col-span-2 text-center">
                      <span className="md:hidden text-xs text-muted-foreground block mb-1">
                        Price
                      </span>
                      <span className="font-medium">{item.price}</span>
                    </div>

                    {/* Quantity */}
                    <div className="col-span-4 md:col-span-2 flex justify-center">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center hover:bg-secondary/80 transition-colors"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-8 text-center font-medium">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center hover:bg-secondary/80 transition-colors"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>

                    {/* Total */}
                    <div className="col-span-4 md:col-span-2 text-right">
                      <span className="md:hidden text-xs text-muted-foreground block mb-1">
                        Total
                      </span>
                      <span className="font-semibold text-primary">
                        {(item.price * item.quantity).toLocaleString()}
                      </span>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="hidden md:block mt-1 text-destructive text-xs hover:underline"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}

                {/* Clear Cart */}
                <div className="flex justify-end">
                  <button
                    onClick={clearCart}
                    className="text-destructive text-sm hover:underline flex items-center gap-1"
                  >
                    <Trash2 className="w-4 h-4" />
                    Clear Cart
                  </button>
                </div>
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="bg-card rounded-2xl p-6 sticky top-24">
                  <h2 className="font-serif text-xl font-semibold mb-6">
                    Order Summary
                  </h2>

                  {/* Coupon */}
                  <div className="mb-6">
                    <label className="text-sm font-medium mb-2 block">
                      Have a coupon?
                    </label>
                    <div className="flex gap-2">
                      <div className="flex-1 relative">
                        <Tag className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <input
                          type="text"
                          placeholder="Enter code"
                          className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-background border border-border 
                                   focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                        />
                      </div>
                      <button className="px-4 py-2.5 bg-secondary rounded-lg text-sm font-medium hover:bg-secondary/80 transition-colors">
                        Apply
                      </button>
                    </div>
                  </div>

                  {/* Totals */}
                  <div className="space-y-3 border-t border-border pt-4 mb-6">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span className="font-medium">{totalPrice.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Shipping</span>
                      <span className="font-medium text-primary">
                        {totalPrice >= 999 ? 'Free' : '50'}
                      </span>
                    </div>
                    {totalPrice < 999 && (
                      <p className="text-xs text-muted-foreground">
                        Add {(999 - totalPrice).toLocaleString()} more for free shipping!
                      </p>
                    )}
                    <div className="flex justify-between text-lg font-semibold pt-3 border-t border-border">
                      <span>Total</span>
                      <span className="text-primary">
                        {(totalPrice + (totalPrice >= 999 ? 0 : 50)).toLocaleString()}
                      </span>
                    </div>
                  </div>

                  <Link to="/checkout" className="btn-primary w-full justify-center">
                    Proceed to Checkout
                    <ArrowRight className="w-5 h-5" />
                  </Link>

                  <Link
                    to="/shop"
                    className="block text-center text-sm text-muted-foreground hover:text-foreground mt-4 transition-colors"
                  >
                    Continue Shopping
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Cart;
