'use client';

import Image from 'next/image';
import React, { useEffect, useState } from 'react';

type Skill = {
  name: string;
  image: string;
};

const SkillsSection = () => {
  const [skills, setSkills] = useState<Skill[]>([]);

  useEffect(() => {
     fetch('skills.json')
      .then((res) => res.json())
      .then((data) => setSkills(data));
  }, []);

  return (
    <section className=" py-16 px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">My Key Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-px border-t border-b border-white/10 divide-x divide-y divide-purple-500/30">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="flex flex-col items-center justify-center py-8 px-4"
          >
            <Image src={skill.image} alt={skill.name} className="w-16 h-16 mb-4 rounded-full shadow-md" />
            <p className="text-white text-lg font-medium">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
