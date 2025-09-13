import { personalInfo } from '@/data/portfolio';

export default function Hero() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-200 mb-6">
            Hi, I&apos;m{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">
              {personalInfo.name}
            </span>
          </h1>
          
          <h2 className="text-xl md:text-2xl lg:text-3xl text-slate-400 mb-8 max-w-3xl mx-auto">
            {personalInfo.description}
          </h2>
          
          <p className="text-lg text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            {personalInfo.fullDescription}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#projects"
              className="inline-flex items-center px-8 py-4 bg-teal-500 hover:bg-teal-600 text-white font-medium rounded-lg transition-colors duration-200"
            >
              View My Work
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 border border-teal-500 text-teal-400 hover:bg-teal-500/10 font-medium rounded-lg transition-colors duration-200"
            >
              View Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}