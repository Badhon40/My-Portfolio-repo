"use client";
import { motion } from "framer-motion";

const Education = () => {
  const educationData = [
    {
      title: "B.Sc. in Computer Science & Engineering",
      institution: "Begum Rokeya University, Rangpur",
      duration: "2022 – Present",
      cgpa: "CGPA: 3.14/4.00",
      courses: [
        "Data Structures", "Web Development", "Operating Systems", "Computer Graphics",
      ],
    },
    {
      title: "Higher Secondary Certificate (HSC)",
      institution: "Holy Land College, Dinajpur",
      duration: "2018 – 2020",
      group: "Science",
      result: "GPA: 5.00",
    },
    {
      title: "Secondary School Certificate (SSC)",
      institution: "Nekmorad Alimuddin GOVT High School",
      duration: "2013 – 2018",
      group: "Science",
      result: "GPA: 5.00",
    },
  ];

   const slideInLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.3, type: "spring", stiffness: 60 },
    }),
  };

  const bounceIn = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { type: "spring", stiffness: 500, damping: 20 },
    },
  };

  return (
    <section
      id="education"
      className="scroll-mt-24 py-16 px-4 mb-8 sm:px-6 lg:px-8"
    >
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-4xl font-bold text-center text-white mb-12"
          variants={slideInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          📘 Educational Background
        </motion.h2>

        <div className="relative border-l border-gray-600">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              className="mb-10 ml-6 "
              custom={index}
              variants={slideInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
            >
              <motion.div
                className="absolute w-4 h-4 bg-blue-500 rounded-full -left-2.5 border-2 border-gray-900"
                variants={bounceIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
              />
              <h3 className="text-xl font-semibold text-white">{edu.title}</h3>
              <p className="text-gray-300">{edu.institution}</p>
              <p className="text-gray-400 text-sm">{edu.duration}</p>
              {edu.cgpa && (
                <p className="text-gray-400 mt-1">🎯 {edu.cgpa}</p>
              )}
              {edu.result && (
                <p className="text-gray-400 mt-1">🎯 {edu.result}</p>
              )}
              {edu.group && (
                <p className="text-gray-400 mt-1">📘 Group: {edu.group}</p>
              )}
              {edu.courses && (
                <p className="mt-2 text-gray-700 dark:text-gray-300">
                  📚 <strong>Relevant Courses:</strong> {edu.courses.join(", ")}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
