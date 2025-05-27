import QRCode from 'react-qr-code';

export default function Hero() {
  return (
    <section id="home" className="pt-40 pb-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-red-900/10 to-transparent"></div>
      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Sell Your Crypto
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">
                {' '}
                Instantly
              </span>
            </h1>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Convert your cryptocurrency to cash in seconds. No waiting, no
              hassle. The fastest and most secure way to liquidate your digital
              assets with MB Exchange.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <a
                href="#"
                className="flex items-center gap-3 px-5 py-3 bg-black text-white rounded-lg shadow hover:scale-105 transition-transform w-44"
              >
                <img src="/apple.svg" alt="Apple" className="h-6 w-6" />
                <div className="text-left leading-tight">
                  <p className="text-xs">Download on the</p>
                  <p className="text-sm font-semibold">App Store</p>
                </div>
              </a>

              <a
                href="#"
                className="flex items-center gap-3 px-5 py-3 bg-black text-white rounded-lg shadow hover:scale-105 transition-transform w-44"
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

            <div className="bg-white px-6 py-5 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 w-fit flex flex-col items-center">
              <QRCode value="Coming Soon" className="w-36 h-36 text-gray-800" />
              <p className="text-sm text-gray-600 mt-4 font-semibold text-center">
                Scan to Download
              </p>
            </div>
          </div>

          <div className="order-1 lg:order-2 animate-float">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=600&h=400&fit=crop&crop=center"
                alt="Crypto Trading Dashboard"
                className="w-full rounded-2xl shadow-2xl object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-red-900/30 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
