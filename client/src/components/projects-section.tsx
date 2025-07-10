import { Github, ExternalLink } from "lucide-react";

export function ProjectsSection() {
  const projects = [
    {
      title: "ObjectIQ",
      description: "AI-powered food recognition mobile app using Flutter frontend and FastAPI backend. Identifies food items and provides nutritional information, calorie estimates, and personalized recipe suggestions.",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      imageAlt: "AI neural network visualization representing ObjectIQ technology",
      technologies: ["Python", "FastAPI", "Flutter", "AI/ML"],
      featured: true,
      githubUrl: "https://github.com/abubakarazeem/objectiq",
      liveUrl: null,
    },
    {
      title: "Pomodoro Timer",
      description: "Cross-platform productivity timer application built with React Native and Flutter. Features clean UI/UX design and efficient time management functionality.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      imageAlt: "Mobile app development interface showing productivity timer",
      technologies: ["React Native", "Flutter", "UI/UX"],
      featured: false,
      githubUrl: "https://github.com/abubakarazeem/pomodoro-timer",
      liveUrl: null,
    },
    {
      title: "Number Guessing Game",
      description: "Console-based game developed as a Programming Fundamentals project. Demonstrates core programming concepts, logic building, and C++ syntax mastery.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      imageAlt: "C++ programming code showing game development logic",
      technologies: ["C++", "Console App", "Game Logic"],
      featured: false,
      githubUrl: "https://github.com/abubakarazeem/number-guessing-game",
      liveUrl: null,
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Featured Projects</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Showcase of my technical skills and problem-solving abilities
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`bg-gray-50 dark:bg-gray-700 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 ${
                project.featured ? "col-span-1 lg:col-span-2 xl:col-span-1" : ""
              }`}
            >
              <img
                src={project.image}
                alt={project.imageAlt}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{project.title}</h3>
                  {project.featured && (
                    <span className="px-3 py-1 gradient-bg-accent text-white rounded-full text-sm font-medium">
                      Featured
                    </span>
                  )}
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className={`px-3 py-1 rounded-full text-sm ${
                        tech === "Python" ? "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200" :
                        tech === "FastAPI" || tech === "Flutter" ? "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200" :
                        tech === "AI/ML" || tech === "UI/UX" ? "bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200" :
                        "bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200"
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-secondary transition-colors duration-200 flex items-center gap-1"
                  >
                    <Github size={16} />
                    View Code
                  </a>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-secondary transition-colors duration-200 flex items-center gap-1"
                    >
                      <ExternalLink size={16} />
                      Live Project
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
