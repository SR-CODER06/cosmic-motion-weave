
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { personalInfo } from '../data/portfolio';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current && contentRef.current) {
      gsap.from(contentRef.current.children, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center",
          end: "bottom center",
        },
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out"
      });
    }
  }, []);

  return (
    <section id="contact" ref={sectionRef} className="min-h-screen bg-[#221F26] py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div ref={contentRef}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 bg-gradient-to-r from-purple-400 to-pink-300 text-transparent bg-clip-text">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            I'm always open to new opportunities and collaborations.
            Feel free to reach out if you'd like to work together!
          </p>
          <div className="space-y-4">
            <p className="text-gray-300">
              <span className="font-bold text-purple-400">Location:</span> {personalInfo.location}
            </p>
            <p className="text-gray-300">
              <span className="font-bold text-purple-400">Email:</span>{' '}
              <a
                href={`mailto:${personalInfo.email}`}
                className="hover:text-purple-400 transition-colors"
              >
                {personalInfo.email}
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
