
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { skills } from '../data/portfolio';

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (sectionRef.current) {
      gsap.from(skillsRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center",
          end: "bottom center",
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out"
      });
    }
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="min-h-screen bg-[#221F26] py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 bg-gradient-to-r from-purple-400 to-pink-300 text-transparent bg-clip-text">
          Skills & Expertise
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              ref={el => skillsRef.current[index] = el}
              className="bg-[#2A2730] p-6 rounded-lg"
            >
              <h3 className="text-xl text-white mb-4">{skill.name}</h3>
              <div className="bg-gray-700 h-3 rounded-full">
                <div
                  className="bg-gradient-to-r from-purple-400 to-pink-300 h-full rounded-full"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
