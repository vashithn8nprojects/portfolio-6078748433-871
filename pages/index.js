export default function Home() {
  const resume = {
  "title": "Professional",
  "email": "contact@example.com",
  "summary": "Experienced professional",
  "skills": [
    "JavaScript",
    "React",
    "Node.js"
  ],
  "experience": [],
  "education": [],
  "projects": []
};

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white">
      {/* Header */}
      <header className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-5xl font-bold mb-4">{resume.name || 'Portfolio'}</h1>
        <h2 className="text-2xl text-blue-300 mb-6">{resume.title || 'Professional'}</h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-8">{resume.summary || 'Welcome to my portfolio'}</p>
        <div className="flex justify-center gap-4 flex-wrap">
          {resume.email && (
            <a href={`mailto:${resume.email}`} className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-full transition">
              📧 Email
            </a>
          )}
          {resume.links?.github && (
            <a href={resume.links.github} target="_blank" rel="noopener noreferrer" className="bg-gray-700 hover:bg-gray-600 px-6 py-2 rounded-full transition">
              🔗 GitHub
            </a>
          )}
          {resume.links?.linkedin && (
            <a href={resume.links.linkedin} target="_blank" rel="noopener noreferrer" className="bg-blue-700 hover:bg-blue-600 px-6 py-2 rounded-full transition">
              💼 LinkedIn
            </a>
          )}
        </div>
      </header>

      {/* Skills */}
      {resume.skills && resume.skills.length > 0 && (
        <section className="container mx-auto px-4 py-12">
          <h3 className="text-3xl font-bold mb-6 text-center">🚀 Skills</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {resume.skills.map((skill, i) => (
              <span key={i} className="bg-blue-600/30 border border-blue-400 px-4 py-2 rounded-lg hover:bg-blue-600/40 transition">
                {skill}
              </span>
            ))}
          </div>
        </section>
      )}

      {/* Experience */}
      {resume.experience && resume.experience.length > 0 && (
        <section className="container mx-auto px-4 py-12">
          <h3 className="text-3xl font-bold mb-8 text-center">💼 Experience</h3>
          <div className="max-w-4xl mx-auto space-y-6">
            {resume.experience.map((exp, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:border-blue-400/50 transition">
                <h4 className="text-xl font-bold text-blue-300">{exp.position || 'Position'}</h4>
                <p className="text-gray-300 mb-2">{exp.company || 'Company'} • {exp.duration || 'Duration'}</p>
                {exp.description && (
                  <ul className="list-disc list-inside space-y-1 text-gray-300">
                    {Array.isArray(exp.description) ? (
                      exp.description.map((item, j) => (
                        <li key={j}>{item}</li>
                      ))
                    ) : (
                      <li>{exp.description}</li>
                    )}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Projects */}
      {resume.projects && resume.projects.length > 0 && (
        <section className="container mx-auto px-4 py-12">
          <h3 className="text-3xl font-bold mb-8 text-center">🛠️ Projects</h3>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
            {resume.projects.map((project, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:border-purple-400/50 transition hover:scale-105">
                <h4 className="text-xl font-bold text-blue-300 mb-2">{project.name || project || 'Project'}</h4>
                <p className="text-gray-300 mb-4">{project.description || ''}</p>
                {project.technologies && Array.isArray(project.technologies) && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, j) => (
                      <span key={j} className="text-xs bg-blue-600/50 px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:underline">
                    View Project →
                  </a>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Education */}
      {resume.education && resume.education.length > 0 && (
        <section className="container mx-auto px-4 py-12">
          <h3 className="text-3xl font-bold mb-8 text-center">🎓 Education</h3>
          <div className="max-w-4xl mx-auto space-y-4">
            {resume.education.map((edu, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <h4 className="text-xl font-bold text-blue-300">{edu.degree || 'Degree'}</h4>
                <p className="text-gray-300">{edu.school || 'School'} • {edu.year || 'Year'}</p>
                {edu.field && <p className="text-gray-400">Field: {edu.field}</p>}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="container mx-auto px-4 py-12 text-center text-gray-400 border-t border-white/20">
        <p>Built with Next.js • Deployed on Vercel</p>
        <p className="mt-2">✨ Auto-generated from resume</p>
        <p className="mt-4 text-sm text-gray-500">
          Repository: sai-varshith-pujala-748433-etzm • User ID: 748433
        </p>
      </footer>
    </div>
  );
}