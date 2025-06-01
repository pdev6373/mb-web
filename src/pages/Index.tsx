import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  Shield,
  Zap,
  TrendingUp,
  Star,
  Download,
  ArrowRight,
  CheckCircle,
  Clock,
  Award,
  Headphones,
  Mail,
  Phone,
  MapPin,
} from 'lucide-react';
import QRCode from 'react-qr-code';
import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'home',
        'features',
        'why-us',
        'testimonials',
        'cta',
        'contact',
        'faq',
      ];

      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openEmailClient = () => {
    window.open(
      'mailto:info@mbexchangehub.com?subject=Contact%20MB%20Exchange',
      '_blank',
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900">
      <Header
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />

      <Hero />

      <section
        id="features"
        className="py-20 px-6 bg-gradient-to-r from-slate-800/50 to-gray-800/50"
      >
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4 animate-fade-in">
              Powerful Features
            </h2>
            <p className="text-xl text-gray-200">
              Everything you need to sell crypto with confidence
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-slate-800/80 border-red-500/30 hover:border-red-500/50 transition-all duration-500 transform hover:scale-105 hover:shadow-xl hover:shadow-red-500/10 group">
              <CardContent className="p-8 text-center">
                <div className="relative mb-6">
                  <img
                    src="https://images.unsplash.com/photo-1640161704729-cbe966a08476?w=80&h=80&fit=crop&crop=center"
                    alt="Fast transactions"
                    className="w-16 h-16 mx-auto rounded-full object-cover"
                  />
                  <Zap className="w-8 h-8 text-red-500 absolute -bottom-2 -right-2 bg-slate-800 rounded-full p-1" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-400 transition-colors">
                  Instant Transactions
                </h3>
                <p className="text-gray-200">
                  Sell your crypto and receive cash in your account within
                  seconds, not hours.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-slate-800/80 border-red-500/30 hover:border-red-500/50 transition-all duration-500 transform hover:scale-105 hover:shadow-xl hover:shadow-red-500/10 group">
              <CardContent className="p-8 text-center">
                <div className="relative mb-6">
                  <img
                    src="https://images.unsplash.com/photo-1616499370260-485b3e5ed653?w=80&h=80&fit=crop&crop=center"
                    alt="Security"
                    className="w-16 h-16 mx-auto rounded-full object-cover"
                  />
                  <Shield className="w-8 h-8 text-red-500 absolute -bottom-2 -right-2 bg-slate-800 rounded-full p-1" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-400 transition-colors">
                  Bank-Level Security
                </h3>
                <p className="text-gray-200">
                  Your assets are protected with military-grade encryption and
                  multi-layer security.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-slate-800/80 border-red-500/30 hover:border-red-500/50 transition-all duration-500 transform hover:scale-105 hover:shadow-xl hover:shadow-red-500/10 group">
              <CardContent className="p-8 text-center">
                <div className="relative mb-6">
                  <img
                    src="https://images.unsplash.com/photo-1642104704074-907c0698cbd9?w=80&h=80&fit=crop&crop=center"
                    alt="Best rates"
                    className="w-16 h-16 mx-auto rounded-full object-cover"
                  />
                  <TrendingUp className="w-8 h-8 text-red-500 absolute -bottom-2 -right-2 bg-slate-800 rounded-full p-1" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-400 transition-colors">
                  Best Market Rates
                </h3>
                <p className="text-gray-200">
                  Get the most competitive rates in the market with real-time
                  price optimization.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="why-us" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-up">
              <h2 className="text-4xl font-bold text-white mb-7">
                Why Choose MB Exchange?
              </h2>
              <div className="flex flex-col gap-7">
                <div className="flex items-start space-x-4 group">
                  <CheckCircle className="w-6 h-6 text-red-500 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <div>
                    <h3 className="text-lg font-semibold text-white group-hover:text-red-400 transition-colors">
                      Lightning Fast Processing
                    </h3>
                    <p className="text-gray-200">
                      Average transaction time of 60 seconds from initiation to
                      completion.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 group">
                  <Clock className="w-6 h-6 text-red-500 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <div>
                    <h3 className="text-lg font-semibold text-white group-hover:text-red-400 transition-colors">
                      24/7 Availability
                    </h3>
                    <p className="text-gray-200">
                      Sell your crypto anytime, anywhere. We never sleep, so you
                      don't have to wait.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 group">
                  <Award className="w-6 h-6 text-red-500 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <div>
                    <h3 className="text-lg font-semibold text-white group-hover:text-red-400 transition-colors">
                      Industry Leading
                    </h3>
                    <p className="text-gray-200">
                      Trusted by over 1 million users worldwide with 99.9%
                      uptime.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 group">
                  <Headphones className="w-6 h-6 text-red-500 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <div>
                    <h3 className="text-lg font-semibold text-white group-hover:text-red-400 transition-colors">
                      Expert Support
                    </h3>
                    <p className="text-gray-200">
                      Get help from our crypto experts whenever you need
                      assistance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative animate-float">
              <div className="bg-gradient-to-br from-red-600 to-red-800 p-8 rounded-3xl shadow-2xl relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-transparent"></div>
                <img
                  src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=300&h=200&fit=crop&crop=center"
                  alt="Happy crypto users"
                  className="w-full h-48 object-cover rounded-2xl mb-6 opacity-80"
                />
                <div className="text-center relative z-10">
                  <div className="text-6xl font-bold text-white mb-4">1K+</div>
                  <div className="text-xl text-red-100">Happy Users</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="testimonials"
        className="py-20 px-6 bg-gradient-to-r from-slate-800/50 to-gray-800/50"
      >
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              What Our Users Say
            </h2>
            <p className="text-xl text-gray-200">
              Join thousands of satisfied crypto sellers
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                image:
                  'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=60&h=60&fit=crop&crop=face',
                name: 'Sarah M.',
                review:
                  'Absolutely amazing! I sold my Bitcoin in under 30 seconds and the money was in my account instantly. Best crypto selling app ever!',
              },
              {
                image:
                  'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=60&h=60&fit=crop&crop=face',
                name: 'John D.',
                review:
                  "The interface is so clean and the process is incredibly fast. I've tried other platforms but none come close to MB Exchange.",
              },
              {
                image:
                  'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=60&h=60&fit=crop&crop=face',
                name: 'Emma L.',
                review:
                  'Security and speed combined perfectly. I feel confident selling my crypto here knowing my funds are protected.',
              },
            ].map((testimonial, i) => (
              <Card
                key={i}
                className="bg-slate-800/80 border-red-500/30 hover:border-red-500/50 transition-all duration-300 transform hover:scale-105"
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className="w-5 h-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-gray-200 mb-4 italic">
                    "{testimonial.review}"
                  </p>
                  <div className="flex items-center">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover mr-3"
                    />
                    <div>
                      <div className="text-white font-semibold">
                        {testimonial.name}
                      </div>
                      <div className="text-gray-400 text-sm">Verified User</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/30 via-red-800/20 to-red-900/30"></div>
        <div className="container mx-auto text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-bold text-white mb-6 animate-fade-in">
              Ready to{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">
                Transform
              </span>{' '}
              Your Crypto?
            </h2>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Join over 1 million users who trust MB Exchange for instant crypto
              conversions. Start selling your digital assets in seconds, not
              hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <Button
                onClick={() => scrollToSection('home')}
                className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-10 py-6 text-lg transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-red-500/25 font-bold"
              >
                <Download className="w-10 h-10 mr-2" />
                Download MB Exchange
              </Button>
              <Button
                onClick={() => scrollToSection('contact')}
                variant="outline"
                className="border-red-600 text-white hover:bg-red-600 hover:text-white px-10 py-6 transform hover:scale-105 transition-all text-lg duration-300 font-bold bg-transparent"
              >
                Get in Touch
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="animate-slide-up">
                <div className="text-4xl font-bold text-red-400 mb-2">60s</div>
                <div className="text-gray-200">Average Transaction Time</div>
              </div>
              <div
                className="animate-slide-up"
                style={{ animationDelay: '0.2s' }}
              >
                <div className="text-4xl font-bold text-red-400 mb-2">1K+</div>
                <div className="text-gray-200">Happy Users</div>
              </div>
              <div
                className="animate-slide-up"
                style={{ animationDelay: '0.4s' }}
              >
                <div className="text-4xl font-bold text-red-400 mb-2">
                  99.9%
                </div>
                <div className="text-gray-200">Uptime</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="py-20 px-6 bg-gradient-to-r from-slate-800/50 to-gray-800/50"
      >
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-200">
              Have questions? We're here to help
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card
              className="bg-slate-800/80 border-red-500/30 hover:border-red-500/50 transition-all duration-300 transform hover:scale-105 group cursor-pointer"
              onClick={openEmailClient}
            >
              <CardContent className="p-8 text-center">
                <Mail className="w-12 h-12 text-red-500 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-red-400 transition-colors">
                  Email Us
                </h3>
                <p className="text-gray-200 mb-4">
                  Get in touch via email for support
                </p>
                <p className="text-red-400 font-medium">
                  support@mbexchange.com
                </p>
              </CardContent>
            </Card>
            <Card className="bg-slate-800/80 border-red-500/30 hover:border-red-500/50 transition-all duration-300 transform hover:scale-105 group">
              <CardContent className="p-8 text-center">
                <Phone className="w-12 h-12 text-red-500 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-red-400 transition-colors">
                  Call Us
                </h3>
                <p className="text-gray-200 mb-4">24/7 customer support</p>
                <p className="text-red-400 font-medium">+234 (703) 973 4721</p>
              </CardContent>
            </Card>
            <Card className="bg-slate-800/80 border-red-500/30 hover:border-red-500/50 transition-all duration-300 transform hover:scale-105 group">
              <CardContent className="p-8 text-center">
                <MapPin className="w-12 h-12 text-red-500 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-red-400 transition-colors">
                  Visit Us
                </h3>
                <p className="text-gray-200 mb-4">Our headquarters</p>
                <p className="text-red-400 font-medium">
                  Ilom Street,
                  <br />
                  Woji Road, Portharcourt
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-6 max-w-5xl mx-auto">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-200">
              Get answers to common questions
            </p>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem
              value="item-1"
              className="bg-slate-800/50 border-red-500/30 rounded-lg px-6 hover:bg-slate-800/70 transition-all duration-300"
            >
              <AccordionTrigger className="text-white hover:text-red-400 transition-colors">
                What cryptocurrencies do you support ?
              </AccordionTrigger>
              <AccordionContent className="text-gray-200">
                We support a wide range of cryptocurrencies, including Bitcoin,
                Ethereum and USDT
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-2"
              className="bg-slate-800/50 border-red-500/30 rounded-lg px-6 hover:bg-slate-800/70 transition-all duration-300"
            >
              <AccordionTrigger className="text-white hover:text-red-400 transition-colors">
                What countries do you support for cashout?
              </AccordionTrigger>
              <AccordionContent className="text-gray-200">
                We support cashout to bank accounts in just Nigeria for now, but
                we are expanding to Ghana, South Africa, Kenya and Rwanda soon
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-3"
              className="bg-slate-800/50 border-red-500/30 rounded-lg px-6 hover:bg-slate-800/70 transition-all duration-300"
            >
              <AccordionTrigger className="text-white hover:text-red-400 transition-colors">
                How long does it take to convert crypto to cash ?
              </AccordionTrigger>
              <AccordionContent className="text-gray-200">
                Our platform can convert your crypto to cash in 60 seconds or
                less.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-4"
              className="bg-slate-800/50 border-red-500/30 rounded-lg px-6 hover:bg-slate-800/70 transition-all duration-300"
            >
              <AccordionTrigger className="text-white hover:text-red-400 transition-colors">
                Do you hold assets during the conversion process ?
              </AccordionTrigger>
              <AccordionContent className="text-gray-200">
                No, we don't hold your assets. We directly convert your crypto
                into your chosen bank account.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-5"
              className="bg-slate-800/50 border-red-500/30 rounded-lg px-6 hover:bg-slate-800/70 transition-all duration-300"
            >
              <AccordionTrigger className="text-white hover:text-red-400 transition-colors">
                Are your fees transparent ?
              </AccordionTrigger>
              <AccordionContent className="text-gray-200">
                Yes, our pricing model is simple and transparent, with no hidden
                fees or charges.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-6"
              className="bg-slate-800/50 border-red-500/30 rounded-lg px-6 hover:bg-slate-800/70 transition-all duration-300"
            >
              <AccordionTrigger className="text-white hover:text-red-400 transition-colors">
                Is your platform compliant with regulations ?
              </AccordionTrigger>
              <AccordionContent className="text-gray-200">
                Yes, our platform is fully compliant with all relevant
                regulations, giving you peace of mind when using our service.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <footer className="bg-slate-900 border-t border-red-500/30 py-16 px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="relative">
                  <img
                    src="/logo.png"
                    alt="MB Exchange Logo"
                    className="w-12 h-12 rounded-lg object-cover"
                  />
                  <div className="absolute inset-0 bg-red-500/5 rounded-lg"></div>
                </div>
                <span className="text-2xl font-bold text-white">
                  MB Exchange
                </span>
              </div>
              <p className="text-gray-300 mb-6">
                The fastest and most secure way to sell your cryptocurrency
                instantly.
              </p>
              <div className="bg-white px-6 py-5 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 w-fit flex flex-col items-center">
                <QRCode
                  value="https://goldchain-files.s3.us-east-1.amazonaws.com/MB+Exchange.apk"
                  className="w-36 h-36 text-gray-800"
                />
                <p className="text-sm text-gray-600 mt-4 font-semibold text-center">
                  Scan to Download
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-white font-semibold text-lg mb-4">Product</h3>
              <ul className="space-y-3 text-gray-300">
                <li>
                  <a
                    href="#features"
                    className="hover:text-red-400 transition-colors duration-200"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#why-us"
                    className="hover:text-red-400 transition-colors duration-200"
                  >
                    Security
                  </a>
                </li>
                <li>
                  <div
                    onClick={openEmailClient}
                    className="hover:text-red-400 transition-colors duration-200 cursor-pointer"
                  >
                    Support
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold text-lg mb-4">Company</h3>
              <ul className="space-y-3 text-gray-300">
                <li>
                  <a
                    href="#why-us"
                    className="hover:text-red-400 transition-colors duration-200"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="hover:text-red-400 transition-colors duration-200"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="#testimonials"
                    className="hover:text-red-400 transition-colors duration-200"
                  >
                    Reviews
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold text-lg mb-4">
                Download
              </h3>
              <div className="space-y-3 flex flex-col">
                {/* <a
                  href="#"
                  className="flex w-44 items-center gap-3 px-5 py-3 bg-black text-white rounded-lg shadow hover:scale-105 transition-transform"
                >
                  <img src="/apple.svg" alt="Apple" className="h-6 w-6" />
                  <div className="text-left leading-tight">
                    <p className="text-xs">Download on the</p>
                    <p className="text-sm font-semibold">App Store</p>
                  </div>
                </a> */}

                <a
                  href="https://goldchain-files.s3.us-east-1.amazonaws.com/MB+Exchange.apk"
                  download
                  className="flex w-44 items-center gap-3 px-5 py-3 bg-black text-white rounded-lg shadow hover:scale-105 transition-transform"
                >
                  <img
                    src="/playstore.svg"
                    alt="Play Store"
                    className="h-6 w-6"
                  />
                  <div className="text-left leading-tight">
                    <p className="text-xs">Get it on</p>
                    <p className="text-sm font-semibold">Google Play</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">
              &copy; 2024 MB Exchange. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                target="_blank"
                href="/privacy-policy"
                className="text-gray-400 hover:text-red-400 transition-colors duration-200"
              >
                Privacy Policy
              </a>
              <a
                target="_blank"
                href="/terms-of-use"
                className="text-gray-400 hover:text-red-400 transition-colors duration-200"
              >
                Terms of Use
              </a>
              <button
                onClick={openEmailClient}
                className="text-gray-400 hover:text-red-400 transition-colors duration-200"
              >
                Support
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
