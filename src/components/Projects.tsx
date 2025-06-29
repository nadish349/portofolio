import { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const [activeProject, setActiveProject] = useState(0);

  const projects = [
    {
  title: 'Vision Mission - Flutter App (Ongoing Project)',
  description:
    'Vision Mission is a collaborative platform designed to help students turn their ideas into action.',
  tech: ['Dart', 'Firebase', 'Flutter', 'REST API'],
  image: '/visionmission.png', // Local image
  github: '#',
  live: '#',
},
{
  title: 'SeniorWell -web app',
  description:
    'SeniorWell is a digital wellness platform dedicated to enhancing the health, safety, and independence of senior citizens.',
  tech: ['Flutter', 'Dart', 'Firebase', 'REST API'],
  image: '/seniorwell.png', // Local image
  github: '#',
  live: 'https://www.linkedin.com/feed/update/urn:li:activity:7333383798329409538/',
},
{
  title: 'Syscocheck-ssytem compatibility analyser',
  description:
    'SyscoCheck is a smart compatibility and recommendation tool that analyzes your system specs to suggest the best software and hardware configurations.',
  tech: ['python', 'Html'],
  image: '/sysco.jpg', // Local image
  github: 'https://github.com/nadish349/syscocheck',
  live: 'https://nadish349.github.io/syscocheck/',
}

  ];

  return (
    <section
      id="projects"
      className="py-20 px-6 bg-slate-900 scroll-mt-20"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl overflow-hidden hover:transform hover:scale-[1.02] transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20"
              onMouseEnter={() => setActiveProject(index)}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={`${project.image}?w=600&h=300&fit=crop`}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>
              </div>

              <div className="p-6">
                <h3 className="text-white font-bold text-xl mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    <Github size={20} />
                    Code
                  </a>
                  <a
                    href={project.live}
                    className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors duration-300"
                  >
                    <ExternalLink size={20} />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
