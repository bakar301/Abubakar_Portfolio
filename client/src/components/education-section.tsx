import { GraduationCap, University } from "lucide-react";

export function EducationSection() {
  return (
    <section className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Education</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Academic background and qualifications
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* University Education */}
          <div className="bg-gradient-to-br from-primary/5 to-accent/5 dark:from-primary/10 dark:to-accent/10 p-8 rounded-xl border border-primary/20 dark:border-primary/30">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 gradient-bg-accent rounded-full flex items-center justify-center mr-4">
                <University className="text-white text-2xl" size={32} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Bachelor of Science</h3>
                <p className="text-gray-600 dark:text-gray-300">Computer Science</p>
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-lg font-semibold text-gray-900 dark:text-white">University of South Asia, Lahore</p>
              <p className="text-gray-600 dark:text-gray-300">2021 - 2025</p>
              <p className="text-gray-600 dark:text-gray-300 mt-4">
                Comprehensive study of computer science fundamentals including programming, software engineering, and artificial intelligence.
              </p>
            </div>
          </div>

          {/* Intermediate Education */}
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 p-8 rounded-xl border border-gray-200 dark:border-gray-600">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-gray-600 to-gray-700 rounded-full flex items-center justify-center mr-4">
                <GraduationCap className="text-white text-2xl" size={32} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Intermediate</h3>
                <p className="text-gray-600 dark:text-gray-300">Higher Secondary Education</p>
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-lg font-semibold text-gray-900 dark:text-white">Govt. Civil Line College, Lahore</p>
              <p className="text-gray-600 dark:text-gray-300">2019 - 2021</p>
              <p className="text-gray-600 dark:text-gray-300 mt-4">
                Foundation studies in mathematics, physics, and chemistry, building the analytical and problem-solving skills essential for computer science.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
