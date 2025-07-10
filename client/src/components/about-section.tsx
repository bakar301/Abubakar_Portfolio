export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Passionate about creating innovative solutions through code
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <img
              src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
              alt="Python programming code on computer screen"
              className="rounded-xl shadow-lg w-full h-auto"
            />
          </div>
          
          <div className="animate-slide-up">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">My Development Journey</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              As a Computer Science graduate, I've developed a strong foundation in software development with a particular focus on Python and backend technologies. My journey began with core programming concepts and has evolved into specializing in building scalable applications using modern frameworks.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              I'm particularly passionate about AI integration and mobile app development, combining these interests in projects like ObjectIQ, where I implemented AI-powered food recognition using Python backends and Flutter frontends.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Backend Focus</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">Python, FastAPI, RESTful APIs</p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Mobile Development</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">Flutter, React Native, Cross-platform</p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">Problem Solver</span>
              <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm font-medium">Team Player</span>
              <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm font-medium">Fast Learner</span>
              <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 rounded-full text-sm font-medium">AI Enthusiast</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
