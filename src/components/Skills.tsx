
const Skills = () => {
  const skills = [
    { name: 'Frontend', techs: ['React', 'Javascript', 'TypeScript', 'Tailwind CSS'], color: 'from-blue-500 to-cyan-500' },
    { name: 'Backend', techs: ['Node.js', 'Python', 'Firebase', 'MongoDB'], color: 'from-green-500 to-emerald-500' },
    { name: 'Mobile', techs: ['Flutter', 'Dart', 'Firebase', 'Native APIs'], color: 'from-purple-500 to-pink-500' },
    { name: 'Tools', techs: ['Git', 'Flutter', 'AWS', 'VS Code'], color: 'from-orange-500 to-red-500' }
  ];

  return (
    <section className="py-20 px-6 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Technical Skills
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div 
              key={skill.name}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:transform hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${skill.color} mb-4 flex items-center justify-center`}>
                <span className="text-white font-bold text-lg">{skill.name[0]}</span>
              </div>
              <h3 className="text-white font-semibold text-lg mb-3">{skill.name}</h3>
              <div className="space-y-2">
                {skill.techs.map((tech) => (
                  <span key={tech} className="inline-block bg-slate-700 text-gray-300 px-3 py-1 rounded-full text-sm mr-2 mb-2">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
