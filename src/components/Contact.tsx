export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 max-w-4xl mx-auto text-center">
      <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
      <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
        Have a project in mind or just want to chat? Feel free to reach out!
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="mailto:fadhilfathi.rzm@gmail.com"
          className="px-8 py-4 bg-blue-600 hover:bg-blue-500 rounded-lg font-medium transition-all hover:shadow-lg hover:shadow-blue-500/25 inline-flex items-center justify-center gap-2"
        >
          ✉️ Email Me
        </a>
        <a
          href="https://wa.me/085290383202"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-4 border border-gray-600 hover:border-gray-400 rounded-lg font-medium transition-all hover:shadow-lg hover:shadow-white/5 inline-flex items-center justify-center gap-2"
        >
          💬 WhatsApp
        </a>
        <a
          href="https://github.com/fadhilfathi"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-4 border border-gray-600 hover:border-gray-400 rounded-lg font-medium transition-all hover:shadow-lg hover:shadow-white/5 inline-flex items-center justify-center gap-2"
        >
          🐙 GitHub
        </a>
      </div>
    </section>
  );
}
