import { useState, useEffect } from 'react';
import { Award } from 'lucide-react';

const Certifications = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [selectedCert, setSelectedCert] = useState(null);

  const certifications = [
    {
      title: 'PYTHON ESSENTIAL PYTHON INSTITUTE-Cisco',
      issuer: 'Cisco',
      date: '2024',
      description: 'Certified in developing Python environments',
      color: 'from-orange-500 to-yellow-500',
      image: '/c6.png'
    },
    {
      title: 'MINI MBA IN ENTREPRENEURSHIP UDEMY',
      issuer: 'Udemy',
      date: '2024',
      description: 'Advanced Knowledge about running entrepreneurship',
      color: 'from-blue-500 to-cyan-500',
      image: '/c5.png'
    },
    {
      title: 'CYBERSECURITY WITH CLOUD COMPUTING',
      issuer: 'Linkedin Learning',
      date: '2024',
      description: 'Complete cybersecurity with cloud computing certification covering modern technologies',
      color: 'from-green-500 to-emerald-500',
      image: '/c3.png'
    },
    {
      title: 'CRYPTOGRAPHY WITH PYTHON',
      issuer: 'Infosys',
      date: '2024',
      description: 'Cryptography with Python certification covering modern technologies',
      color: 'from-green-600 to-green-400',
      image: '/c2.png'
    },
    {
      title: 'CARRIER ESSENTIALS IN GENERATIVE AI',
      issuer: 'Microsoft',
      date: '2024',
      description: 'Career essentials in generative AI certification covering modern technologies',
      color: 'from-green-600 to-green-400',
      image: '/c1.png'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % certifications.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const openModal = (cert) => {
    setSelectedCert(cert);
    setShowModal(true);
  };

  const closeModal = () => {
    setSelectedCert(null);
    setShowModal(false);
  };

  return (
    <section className="py-20 px-6 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Certifications
        </h2>

        <div className="relative max-w-4xl mx-auto">
          {/* Main card with background */}
          <div className="relative h-80 mb-8">
            {certifications.map((cert, index) => (
              <div
                key={cert.title}
                className={`absolute inset-0 transition-all duration-700 transform ${
                  index === currentIndex
                    ? 'opacity-100 scale-100 z-10'
                    : 'opacity-0 scale-95 z-0'
                }`}
              >
                <div
                  className="relative h-full rounded-2xl overflow-hidden border border-slate-700"
                  style={{
                    backgroundImage: `url(${cert.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                >
                  <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex flex-col justify-center items-center text-center p-8 z-10">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${cert.color} mb-6 flex items-center justify-center`}>
                      <Award className="text-white" size={32} />
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-2">{cert.title}</h3>
                    <p className="text-blue-300 font-semibold mb-2">{cert.issuer}</p>
                    <p className="text-gray-400 mb-4">{cert.date}</p>
                    <p className="text-gray-300 max-w-md">{cert.description}</p>

                    <button
                      onClick={() => openModal(cert)}
                      className="mt-4 text-sm text-blue-400 hover:underline"
                    >
                      View Certificate
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation dots */}
          <div className="flex justify-center gap-3">
            {certifications.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-blue-500 scale-125'
                    : 'bg-slate-600 hover:bg-slate-500'
                }`}
              />
            ))}
          </div>

          {/* Thumbnail grid */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-8">
            {certifications.map((cert, index) => (
              <button
                key={cert.title}
                onClick={() => setCurrentIndex(index)}
                className={`p-4 rounded-lg border transition-all duration-300 ${
                  index === currentIndex
                    ? 'border-blue-500 bg-blue-500/10'
                    : 'border-slate-700 bg-slate-800/30 hover:border-slate-600'
                }`}
              >
                <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${cert.color} mx-auto mb-2 flex items-center justify-center`}>
                  <Award className="text-white" size={16} />
                </div>
                <p className="text-white text-sm font-medium truncate">{cert.title}</p>
                <p className="text-gray-400 text-xs">{cert.issuer}</p>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Modal for enlarged certificate */}
      {showModal && selectedCert && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center">
          <div className="bg-slate-900 p-6 rounded-xl max-w-3xl w-full relative">
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-white text-xl hover:text-red-400"
            >
              &times;
            </button>
            <h2 className="text-white text-lg font-semibold mb-4">{selectedCert.title}</h2>
            <img
              src={selectedCert.image}
              alt={selectedCert.title}
              className="w-full h-auto rounded-md border border-slate-700"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Certifications;
