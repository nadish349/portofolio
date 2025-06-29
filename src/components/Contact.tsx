import { Mail, MessageSquare, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section className="py-20 px-6 bg-slate-900">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Let's Work Together
        </h2>
        <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
          Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Email Card */}
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:transform hover:scale-105 transition-all duration-300">
            <Mail className="text-blue-400 mx-auto mb-4" size={32} />
            <h3 className="text-white font-semibold text-lg mb-2">Email Me</h3>
            <a href="mailto:nadishash7@gmail.com" className="text-blue-300 hover:underline">
              nadishash7@gmail.com
            </a>
          </div>

          {/* WhatsApp Card */}
          <a
            href="https://wa.me/919544024242"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:transform hover:scale-105 transition-all duration-300 block"
          >
            <MessageSquare className="text-purple-400 mx-auto mb-4" size={32} />
            <h3 className="text-white font-semibold text-lg mb-2">Let's Chat</h3>
            <p className="text-gray-400">Connect on WhatsApp</p>
          </a>
        </div>

        <a
  href="mailto:nadishash7@gmail.com?subject=Project%20Inquiry&body=Hi%20Nadish%2C%0AI%27d%20like%20to%20discuss%20a%20project%20idea%20with%20you."
  className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105"
>
  <Send size={20} />
  Start a Project
</a>

      </div>
    </section>
  );
};

export default Contact;
