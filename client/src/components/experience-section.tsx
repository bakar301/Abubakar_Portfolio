export function ExperienceSection() {
  const experiences = [
    {
      title: "AI Developer",
      subtitle: "Final Year Project",
      description: "Developed 'ObjectIQ', an AI-powered food recognition mobile app using Flutter for the frontend and FastAPI for the backend. Designed and implemented RESTful APIs in FastAPI and developed custom AI agents in Python to process and analyze user-submitted food images.",
      technologies: ["Python", "FastAPI", "AI", "Flutter"],
      color: "from-primary to-accent",
      dotColor: "bg-primary",
      side: "left",
    },
    {
      title: "Mobile App Developer",
      subtitle: "Personal Project",
      description: "Built a productivity timer using React Native and Flutter. Focused on cross-platform UI/UX development and creating clean, intuitive interface designs that enhance user productivity.",
      technologies: ["React Native", "Flutter", "UI/UX Design"],
      color: "from-accent to-primary",
      dotColor: "bg-accent",
      side: "right",
    },
    {
      title: "Software Developer",
      subtitle: "Academic Project",
      description: "Created a console-based Number Guessing Game using C++ as a Programming Fundamentals project. Gained valuable experience with logic building, algorithm development, and core programming syntax.",
      technologies: ["C++", "Logic Building"],
      color: "from-green-400 to-blue-500",
      dotColor: "bg-green-500",
      side: "left",
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Professional Experience</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Key projects and development experiences
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-300 dark:bg-gray-600"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex items-center">
                {/* Experience Card */}
                <div className={`flex-1 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 ${
                  exp.side === "left" ? "mr-6 lg:mr-12" : "ml-6 lg:ml-12"
                }`}>
                  <div className="flex items-center mb-4">
                    <div className={`w-3 h-3 bg-gradient-to-r ${exp.color} rounded-full mr-3`}></div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{exp.title}</h3>
                    <span className="ml-auto text-sm text-gray-500 dark:text-gray-400">{exp.subtitle}</span>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {exp.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className={`px-3 py-1 rounded-full text-sm ${
                          tech === "Python" || tech === "C++" ? "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200" :
                          tech === "FastAPI" || tech === "Flutter" || tech === "React Native" ? "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200" :
                          "bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200"
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Timeline Dot */}
                <div className={`absolute left-1/2 transform -translate-x-1/2 w-4 h-4 ${exp.dotColor} rounded-full border-4 border-white dark:border-gray-900`}></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
