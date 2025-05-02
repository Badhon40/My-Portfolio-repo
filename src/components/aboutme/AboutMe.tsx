'use client';

import Image from 'next/image';
import certificate from '../../assets/certificate.png';

const AboutMe = () => {
  return (
    <section
      id="aboutme"
      className="py-20 px-6 text-gray-900 dark:text-white bg-gradient-to-br from-white via-slate-100 to-white dark:from-[#0f172a] dark:via-[#0c0c1d] dark:to-[#0f172a]"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold mb-10 text-center">About Me</h2>

        <div className="flex flex-col-reverse lg:flex-row items-center gap-10">
          {/* Text Section */}
          <div className="lg:w-1/2 space-y-6">
            <p className="text-lg leading-relaxed">
              I am a passionate undergraduate student at{' '}
              <strong>Begum Rokeya University, Rangpur</strong>, focusing on MERN development and
              modern UI/UX design. I enjoy turning ideas into interactive and functional digital
              experiences using technologies like <strong>React</strong>, <strong>Next.js</strong>,{' '}
              <strong>MongoDB</strong>, and <strong>Tailwind CSS</strong>.
            </p>

            <p className="text-lg leading-relaxed">
              I thrive in problem-solving environments and love participating in programming
              contests. One of my notable experiences was participating in the{' '}
              <strong>National Girls Programming Contest</strong>, where I showcased my coding
              abilities and received a certificate of achievement.
            </p>
          </div>

          {/* Image Section */}
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative group rounded-xl overflow-hidden shadow-lg transform transition hover:scale-105 border border-gray-300 dark:border-gray-700">
              <Image
                src={certificate}
                alt="National Girls Programming Contest Certificate"
                width={600}
                height={400}
                className="object-contain"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white font-semibold text-sm">Certificate Preview</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
