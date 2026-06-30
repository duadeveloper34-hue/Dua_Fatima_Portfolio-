// app/components/Projects.js
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { projects } from "@/data";

export default function Projects() {
  return (
    <section id="projects" className="py-20 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            A selection of my recent work showcasing design and development expertise
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group glass-effect rounded-2xl p-6 hover:transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="mb-6">
                <div className={`h-48 rounded-xl bg-gradient-to-br ${project.imageColor} mb-4 relative overflow-hidden`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-4xl font-bold text-white ">
                       { project.image && (<img src={project.image} alt={project.title} className="object-cover w-full h-54" />) }
                      {/* {String(project.id).padStart(2, '0')} */}
                    </div>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-text-muted mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-surface text-sm text-text-muted border border-border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <div className="flex items-center space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-text-muted hover:text-primary transition-colors"
                    aria-label={`${project.title} GitHub repository`}
                  >
                    <FiGithub className="w-5 h-5 mr-2" />
                    Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-text-muted hover:text-primary transition-colors"
                    aria-label={`${project.title} live demo`}
                  >
                    <FiExternalLink className="w-5 h-5 mr-2" />
                    Live Demo
                  </a>
                </div>
                <span className="text-sm text-text-muted">
                  {project.year}
                </span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a
            href="/projects"
            className="inline-flex items-center px-6 py-3 rounded-lg border border-border hover:bg-surface transition-colors duration-200 font-medium"
          >
            View All Projects
            <FiExternalLink className="ml-2 w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
