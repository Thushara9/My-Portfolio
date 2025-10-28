import React, { useState } from 'react';
import { motion } from 'framer-motion';

const TechnicalProficiency = () => {
  const [activeTab, setActiveTab] = useState('Frontend');

  const toolsData = [
    { name: 'Git & GitHub', percentage: 85 },
    { name: 'Visual Studio Code', percentage: 75 },
    { name: 'Docker', percentage: 60 },
    { name: 'Responsive Design', percentage: 70 },
  ];

  const frontendData = [
    { name: 'HTML/CSS', percentage: 90 },
    { name: 'JavaScript', percentage: 90 },
    { name: 'React.js', percentage: 85 },
    { name: 'Tailwind CSS', percentage: 75 },
  ];

  const backendData = [
    { name: 'Node.js', percentage: 80 },
    { name: 'Express.js', percentage: 80 },
    { name: 'MongoDB', percentage: 80 },
    { name: 'SQL', percentage: 80 },
    { name: 'PHP', percentage: 70 },
  ];

  const softSkillsData = [
    { name: 'Communication', percentage: 85 },
    { name: 'Teamwork', percentage: 90 },
    { name: 'Problem Solving', percentage: 80 },
    { name: 'Adaptability', percentage: 75 },
  ];

  const tabs = ['Frontend', 'Backend', 'Tools', 'Soft Skills'];

  return (
    <div
      id="skills"
      className="bg-gradient-to-b from-[#171d32] via-purple-950 to-[#171d32] text-white p-5 min-h-screen flex items-center justify-center"
    >
      <div className="flex flex-col lg:flex-row gap-8 p-4 rounded-lg shadow-lg w-full max-w-6xl">
        {/* Left side: Tabs */}
        <motion.div
          className="lg:w-1/3 w-full p-6 border-purple-400 border mx-3 rounded-lg"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold mb-6 text-center lg:text-left">
            Technical Proficiency
          </h2>
          <div className="space-y-4">
            {tabs.map((tab) => (
              <motion.div
                key={tab}
                className={`p-4 text-center border rounded-lg cursor-pointer transition-all duration-300 ${
                  activeTab === tab
                    ? 'bg-purple-500 border-purple-400'
                    : 'border-gray-600 hover:border-purple-400'
                }`}
                onClick={() => setActiveTab(tab)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-xl font-semibold">{tab}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right side: Skills/Content */}
        <div className="lg:w-2/3 w-full p-6 border-purple-400 border rounded-lg">
        <motion.div
          className="w-full lg:w-1/2"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 2 }}
          viewport={{ once: true }}
          >
              </motion.div>
          {activeTab === 'Frontend' && (
            <div>
              <h3 className="text-xl font-semibold mb-4">Frontend Skills</h3>
              {frontendData.map((skill) => (
                <motion.div
                  key={skill.name}
                  className="mb-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 2 }}
                >
                  <div className="flex justify-between mb-1">
                    <span>{skill.name}</span>
                    <span>{skill.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2.5">
                    <div
                      className="bg-purple-600 h-2.5 rounded-full"
                      style={{ width: `${skill.percentage}%` }}
                    ></div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {activeTab === 'Backend' && (
            <div>
              <h3 className="text-xl font-semibold mb-4">Backend Skills</h3>
              {backendData.map((skill) => (
                <motion.div
                  key={skill.name}
                  className="mb-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 2 }}
                >
                  <div className="flex justify-between mb-1">
                    <span>{skill.name}</span>
                    <span>{skill.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2.5">
                    <div
                      className="bg-purple-600 h-2.5 rounded-full"
                      style={{ width: `${skill.percentage}%` }}
                    ></div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {activeTab === 'Tools' && (
            <div>
              <h3 className="text-xl font-semibold mb-4">Tools</h3>
              {toolsData.map((tool) => (
                <motion.div
                  key={tool.name}
                  className="mb-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 2 }}
                >
                  <div className="flex justify-between mb-1">
                    <span>{tool.name}</span>
                    <span>{tool.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2.5">
                    <div
                      className="bg-purple-600 h-2.5 rounded-full"
                      style={{ width: `${tool.percentage}%` }}
                    ></div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {activeTab === 'Soft Skills' && (
            <div>
              <h3 className="text-xl font-semibold mb-4">Soft Skills</h3>
              {softSkillsData.map((skill) => (
                <motion.div
                  key={skill.name}
                  className="mb-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 2 }}
                >
                  <div className="flex justify-between mb-1">
                    <span>{skill.name}</span>
                    <span>{skill.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2.5">
                    <div
                      className="bg-purple-600 h-2.5 rounded-full"
                      style={{ width: `${skill.percentage}%` }}
                    ></div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TechnicalProficiency;
