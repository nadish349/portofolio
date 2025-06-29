import { Github, Linkedin, Mail, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-blue-500/10 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <div className="animate-fade-in">
          {/* Heading + Profile Image */}
          <div className="flex items-center justify-center flex-col md:flex-row gap-6 mb-6">
            <h1 className="text-5xl md:text-7xl font-bold text-white bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Web Developer
            </h1>
            <img
  src="/nadish.png"
  alt="Profile"
  className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-white shadow-lg object-cover"
/>
          </div>

          <h2 className="text-2xl md:text-3xl text-gray-300 mb-4 font-light">
            Full Stack • Flutter • Creative Solutions
          </h2>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
            Passionate developer crafting beautiful, functional applications across web and mobile platforms.
            Turning ideas into digital experiences that make a difference.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a
              href="#projects"
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105 inline-block"
            >
              View My Work
            </a>
            <a
              href="https://drive.google.com/file/d/1X6b-pspuQS5TXIhqag1ZdBQHEIk-XJhn/view?usp=sharing" // <-- Replace with actual CV link
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-600 text-gray-300 px-8 py-3 rounded-full font-semibold hover:bg-gray-800 transition-all duration-300 flex items-center gap-2"
            >
              <Download size={20} />
              Download CV
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6">
            <a
              href="https://github.com/nadish349"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-300 hover:scale-110 transform"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/nadish-np/"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-300 hover:scale-110 transform"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:nadishash7@gmail.com"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-300 hover:scale-110 transform"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
    </section>
  );
};

export default Hero;
