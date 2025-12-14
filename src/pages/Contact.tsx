import { Layout } from '@/components/layout/Layout';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { toast } from 'sonner';

const contactInfo = [
  {
    icon: MapPin,
    title: 'Visit Us',
    details: ['Irfan Farms, Village Road', 'Punjab, Pakistan'],
  },
  {
    icon: Phone,
    title: 'Call Us',
    details: ['0343-7900297'],
  },
  {
    icon: Mail,
    title: 'Email Us',
    details: ['https://irfanfarms.com',],
  },
  {
    icon: Clock,
    title: 'Working Hours',
    details: ['Mon - Sat: 9:00 AM - 6:00 PM', 'Sunday: Closed'],
  },
];

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Thank you for your message! We will get back to you soon.');
  };

  return (
    <Layout>
      <Helmet>
        <title>Contact Us | Irfan Farms</title>
        <meta
          name="description"
          content="Get in touch with Irfan Farms. Visit our farm, call us, or send us a message. We're here to help!"
        />
      </Helmet>

      {/* Hero */}
      <section className="bg-gradient-organic py-20 md:py-28">
        <div className="container-custom text-center text-primary-foreground">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            Get in Touch
          </h1>
          <p className="text-lg opacity-90 max-w-xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-6">
              {contactInfo.map((info, index) => (
                <div
                  key={info.title}
                  className="flex gap-4 p-6 bg-card rounded-2xl animate-fade-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{info.title}</h3>
                    {info.details.map((detail, i) => (
                      <p key={i} className="text-muted-foreground text-sm">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-card rounded-2xl p-6 md:p-8">
                <h2 className="font-serif text-2xl font-semibold mb-6">
                  Send us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 rounded-lg bg-background border border-border 
                                 focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Muhammad Irfan"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        className="w-full px-4 py-3 rounded-lg bg-background border border-border 
                                 focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="muhammad@example.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 rounded-lg bg-background border border-border 
                               focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="+92 30265 43210"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-lg bg-background border border-border 
                               focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="How can we help you?"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Your Message
                    </label>
                    <textarea
                      rows={5}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-background border border-border 
                               focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                      placeholder="Tell us more about your inquiry..."
                    />
                  </div>
                  <button type="submit" className="btn-primary">
                    <Send className="w-5 h-5" />
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Map */}

          <div className="mt-16">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
              Find Us Here
            </h2>
            <div className="bg-gray-300 rounded-lg overflow-hidden shadow-lg h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.869474951593!2d72.9190695!3d31.9318166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x392189bf389f8155%3A0x6f0ab18fa53467e!2sIRFAN%20Farms!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>


        </div>
      </section>
    </Layout>
  );
};

export default Contact;
