import { Code, Layers, Bolt } from "lucide-react";

export function SkillsSection() {
  const programmingLanguages = [
    { name: "Python", percentage: 90 },
    { name: "Dart", percentage: 85 },
    { name: "JavaScript", percentage: 75 },
    { name: "C++", percentage: 70 },
  ];

  const frameworks = [
    { name: "FastAPI", percentage: 90 },
    { name: "Flutter", percentage: 85 },
    { name: "Langchain", percentage: 80 },
    { name: "React Native", percentage: 75 },
  ];

  const technologies = [
    "RESTful APIs",
    "Git/GitHub",
    "AI/ML",
    "Mobile UI/UX",
    "Database Design",
    "Cross-platform",
  ];

  const SkillBar = ({ name, percentage }: { name: string; percentage: number }) => (
    <div>
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{name}</span>
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{percentage}%</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
        <div
          className="gradient-bg h-2 rounded-full transition-all duration-1000"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Technical Skills</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Proficient in modern technologies and frameworks
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Programming Languages */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <Code className="text-2xl text-primary mr-3" size={24} />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Programming Languages</h3>
            </div>
            <div className="space-y-4">
              {programmingLanguages.map((skill) => (
                <SkillBar key={skill.name} name={skill.name} percentage={skill.percentage} />
              ))}
            </div>
          </div>

          {/* Frameworks & Libraries */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <Layers className="text-2xl text-accent mr-3" size={24} />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Frameworks & Libraries</h3>
            </div>
            <div className="space-y-4">
              {frameworks.map((skill) => (
                <SkillBar key={skill.name} name={skill.name} percentage={skill.percentage} />
              ))}
            </div>
          </div>

          {/* Technologies & Tools */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <Bolt className="text-2xl text-green-500 mr-3" size={24} />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Technologies & Tools</h3>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {technologies.map((tech, index) => (
                <div key={tech} className="flex items-center space-x-2">
                  <div className={`w-2 h-2 rounded-full ${
                    index === 0 ? 'bg-green-500' :
                    index === 1 ? 'bg-blue-500' :
                    index === 2 ? 'bg-purple-500' :
                    index === 3 ? 'bg-orange-500' :
                    index === 4 ? 'bg-red-500' : 'bg-yellow-500'
                  }`} />
                  <span className="text-sm text-gray-600 dark:text-gray-300">{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
