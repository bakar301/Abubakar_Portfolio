import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Abu Bakar</h3>
          <p className="text-gray-400 mb-6">Python Developer</p>
          
          <div className="flex justify-center space-x-6 mb-6">
            <a
              href="https://github.com/bakar301"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/abubakar-azeem-821625226/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:abubakarazeem32@gmail.com"
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              <Mail size={24} />
            </a>
          </div>
          
          <div className="border-t border-gray-800 pt-6">
            <p className="text-gray-400 text-sm">© 2024 Abu Bakar. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
