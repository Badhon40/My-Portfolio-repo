import Image from "next/image";
import { SkillsInfo } from "../data/skills";

const SkillCategory = () => {
    return (
        <section id="skills" className="w-full py-20 ">
             <h2 className="text-4xl font-bold mb-4 text-white text-center">
                    My Skills
                </h2>
                <p className="text-gray-400 mb-8 text-center max-w-4xl mx-auto px-4">
                    I have a diverse skill set that includes frontend and backend development, as well as proficiency in various programming languages and tools. I am always eager to learn new technologies and improve my skills.
                </p>
            <div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 px-4">
                   {
                    SkillsInfo.map((category, index) => (
                        <div key={index} className="mb-10">
                            
                            <div className="py-5 px-6 text-white bg-gradient-to-br  from-[#0f172a] via-[#0c0c1d] dto-[#0f172a] rounded-lg shadow-md min-h-96">
                            <h3 className="text-2xl font-semibold text-center text-white mb-4">{category.title}</h3>
                            <div className="flex flex-wrap gap-4">
                                {category.skills.map((skill, index) => (
                                    <div key={index} className="flex items-center bg-gray-800 p-4 rounded-lg shadow-md">
                                        <Image src={skill.logo} alt={skill.name} className="w-8 h-8 mr-2" />
                                        <span className="text-white">{skill.name}</span>
                                    </div>
                                ))}
                            </div>
                            </div>
                            </div>
                       
                    ))  
                   } 
                    </div>
            </div>
        </section>
    );
};

export default SkillCategory;