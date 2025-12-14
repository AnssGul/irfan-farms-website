import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { useCart } from '@/context/CartContext';
import { ChevronRight, Check, CreditCard, Truck, MapPin } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { toast } from 'sonner';
import { cn } from '@/lib/utils';

const steps = [
  { id: 1, name: 'Shipping', icon: MapPin },
  { id: 2, name: 'Delivery', icon: Truck },
  { id: 3, name: 'Payment', icon: CreditCard },
];

const Checkout = () => {
  const { state, totalPrice, clearCart } = useCart();
  const [currentStep, setCurrentStep] = useState(1);

  const handlePlaceOrder = () => {
    toast.success('Order placed successfully! Thank you for shopping with Irfan Farms.');
    clearCart();
  };

  if (state.items.length === 0) {
    return (
      <Layout>
        <div className="section-padding text-center">
          <h1 className="font-serif text-2xl font-bold mb-4">Your cart is empty</h1>
          <Link to="/shop" className="btn-primary">
            Start Shopping
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <Helmet>
        <title>Checkout | Irfan Farms</title>
        <meta name="description" content="Complete your order at Irfan Farms." />
      </Helmet>

      <section className="section-padding bg-background">
        <div className="container-custom max-w-5xl">
          {/* Steps */}
          <div className="flex items-center justify-center gap-4 md:gap-8 mb-12">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <div
                  className={cn(
                    'flex items-center gap-2 px-4 py-2 rounded-full transition-colors',
                    currentStep === step.id
                      ? 'bg-primary text-primary-foreground'
                      : currentStep > step.id
                        ? 'bg-primary/20 text-primary'
                        : 'bg-secondary text-muted-foreground'
                  )}
                >
                  {currentStep > step.id ? (
                    <Check className="w-5 h-5" />
                  ) : (
                    <step.icon className="w-5 h-5" />
                  )}
                  <span className="font-medium hidden md:block">{step.name}</span>
                </div>
                {index < steps.length - 1 && (
                  <ChevronRight className="w-5 h-5 text-muted-foreground mx-2 md:mx-4" />
                )}
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Form Section */}
            <div className="lg:col-span-2">
              <div className="bg-card rounded-2xl p-6 md:p-8">
                {currentStep === 1 && (
                  <div className="space-y-6">
                    <h2 className="font-serif text-2xl font-semibold mb-6">
                      Shipping Address
                    </h2>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          First Name
                        </label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 rounded-lg bg-background border border-border 
                                   focus:outline-none focus:ring-2 focus:ring-primary"
                          placeholder="Muhammad"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Last Name
                        </label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 rounded-lg bg-background border border-border 
                                   focus:outline-none focus:ring-2 focus:ring-primary"
                          placeholder="Doe"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        className="w-full px-4 py-3 rounded-lg bg-background border border-border 
                                 focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="muhammad@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        className="w-full px-4 py-3 rounded-lg bg-background border border-border 
                                 focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Full Address
                      </label>
                      <textarea
                        rows={3}
                        className="w-full px-4 py-3 rounded-lg bg-background border border-border 
                                 focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                        placeholder="House no, Street, Landmark..."
                      />
                    </div>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          City
                        </label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 rounded-lg bg-background border border-border 
                                   focus:outline-none focus:ring-2 focus:ring-primary"
                          placeholder="Mumbai"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          State
                        </label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 rounded-lg bg-background border border-border 
                                   focus:outline-none focus:ring-2 focus:ring-primary"
                          placeholder="Maharashtra"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          PIN Code
                        </label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 rounded-lg bg-background border border-border 
                                   focus:outline-none focus:ring-2 focus:ring-primary"
                          placeholder="400001"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {currentStep === 2 && (
                  <div className="space-y-6">
                    <h2 className="font-serif text-2xl font-semibold mb-6">
                      Delivery Options
                    </h2>
                    <div className="space-y-4">
                      <label className="flex items-start gap-4 p-4 rounded-xl border-2 border-primary bg-primary/5 cursor-pointer">
                        <input type="radio" name="delivery" defaultChecked className="mt-1" />
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <span className="font-medium">Standard Delivery</span>
                            <span className="text-primary font-semibold">
                              {totalPrice >= 999 ? 'Free' : '50'}
                            </span>
                          </div>
                          <p className="text-sm text-muted-foreground mt-1">
                            Delivery within 3-5 business days
                          </p>
                        </div>
                      </label>
                      <label className="flex items-start gap-4 p-4 rounded-xl border-2 border-border hover:border-primary/50 cursor-pointer transition-colors">
                        <input type="radio" name="delivery" className="mt-1" />
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <span className="font-medium">Express Delivery</span>
                            <span className="font-semibold">149</span>
                          </div>
                          <p className="text-sm text-muted-foreground mt-1">
                            Delivery within 1-2 business days
                          </p>
                        </div>
                      </label>
                    </div>
                  </div>
                )}

                {currentStep === 3 && (
                  <div className="space-y-6">
                    <h2 className="font-serif text-2xl font-semibold mb-6">
                      Payment Method
                    </h2>
                    <div className="space-y-4">
                      <label className="flex items-start gap-4 p-4 rounded-xl border-2 border-primary bg-primary/5 cursor-pointer">
                        <input type="radio" name="payment" defaultChecked className="mt-1" />
                        <div className="flex-1">
                          <span className="font-medium">Cash on Delivery</span>
                          <p className="text-sm text-muted-foreground mt-1">
                            Pay when you receive your order
                          </p>
                        </div>
                      </label>
                      <label className="flex items-start gap-4 p-4 rounded-xl border-2 border-border hover:border-primary/50 cursor-pointer transition-colors">
                        <input type="radio" name="payment" className="mt-1" />
                        <div className="flex-1">
                          <span className="font-medium">UPI / Card Payment</span>
                          <p className="text-sm text-muted-foreground mt-1">
                            Pay securely with UPI, Debit/Credit Card
                          </p>
                        </div>
                      </label>
                    </div>
                  </div>
                )}

                {/* Navigation */}
                <div className="flex items-center justify-between mt-8 pt-6 border-t border-border">
                  <button
                    onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
                    className={cn(
                      'btn-secondary',
                      currentStep === 1 && 'opacity-50 pointer-events-none'
                    )}
                  >
                    Back
                  </button>
                  {currentStep < 3 ? (
                    <button
                      onClick={() => setCurrentStep(currentStep + 1)}
                      className="btn-primary"
                    >
                      Continue
                    </button>
                  ) : (
                    <button onClick={handlePlaceOrder} className="btn-primary">
                      Place Order
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-card rounded-2xl p-6 sticky top-24">
                <h3 className="font-serif text-xl font-semibold mb-4">
                  Order Summary
                </h3>
                <div className="space-y-3 mb-4">
                  {state.items.map((item) => (
                    <div key={item.id} className="flex gap-3">
                      <div className="w-16 h-16 rounded-lg overflow-hidden bg-secondary flex-shrink-0">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-sm line-clamp-1">{item.name}</p>
                        <p className="text-xs text-muted-foreground">Qty: {item.quantity}</p>
                        <p className="text-sm font-semibold text-primary mt-1">
                          {(item.price * item.quantity).toLocaleString()}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="space-y-2 border-t border-border pt-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span>{totalPrice.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Shipping</span>
                    <span className="text-primary">
                      {totalPrice >= 999 ? 'Free' : '50'}
                    </span>
                  </div>
                  <div className="flex justify-between font-semibold text-lg pt-2 border-t border-border">
                    <span>Total</span>
                    <span className="text-primary">
                      {(totalPrice + (totalPrice >= 999 ? 0 : 50)).toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Checkout;
