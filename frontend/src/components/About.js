import React from 'react';

const About = () => {
  const skills = [
    'React.js', 'JavaScript', 'Node.js', 'HTML5', 'CSS3', 'Git', 'GitHub',
    'Shopify', 'Firebase Studio', 'Lovable.dev', 'Cursor', 'Replit', 'v0',
    'n8n', 'Stitch AI', 'Prompt Engineering', 'Netlify', 'Render', 'Vercel'
  ];

  const experience = [
    {
      title: 'React JS Developer + AI',
      period: 'Current',
      description: 'Specializing in React development while integrating cutting-edge AI tools to build innovative web applications.'
    },
    {
      title: 'MERN Stack Developer',
      period: 'Ongoing',
      description: 'Full-stack development using MongoDB, Express.js, React.js, and Node.js for scalable web applications.'
    },
    {
      title: 'Shopify Developer',
      period: 'Ongoing',
      description: 'Creating custom Shopify stores and applications, focusing on e-commerce solutions and user experience.'
    }
  ];

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <h1 className="text-5xl font-bold gradient-text mb-6">About Me</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Passionate React developer exploring the intersection of web development and artificial intelligence
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Profile & Description */}
          <div className="animate-fadeInUp">
            <div className="glass rounded-2xl p-8 mb-8">
              <div className="flex items-center mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1613203713329-b2e39e14c266"
                  alt="Developer workspace" 
                  className="w-24 h-24 rounded-full object-cover border-4 border-indigo-500/30"
                />
                <div className="ml-6">
                  <h2 className="text-2xl font-bold text-white">Chanchal Kumari</h2>
                  <p className="text-indigo-300 font-semibold">React Enthusiast | AI Explorer</p>
                </div>
              </div>
              
              <p className="text-gray-300 leading-relaxed mb-6">
                I'm a passionate React JS developer with a keen interest in artificial intelligence and modern web technologies. 
                I specialize in building scalable MERN stack applications while leveraging cutting-edge AI tools to enhance 
                development workflows and create innovative solutions.
              </p>
              
              <p className="text-gray-300 leading-relaxed mb-6">
                My expertise spans from traditional web development to exploring AI agent development, always staying at the 
                forefront of technological innovation. I enjoy combining React's powerful ecosystem with AI tools like 
                Lovable.dev, Cursor, and v0 to build exceptional user experiences.
              </p>
              
              <div className="flex flex-wrap gap-2">
                <span className="text-indigo-400 font-semibold">Focus Areas:</span>
                <span className="text-gray-300">Frontend Development, AI Integration, E-commerce Solutions</span>
              </div>
            </div>

            {/* Experience Section */}
            <div className="glass rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Experience</h3>
              <div className="space-y-6">
                {experience.map((exp, index) => (
                  <div key={index} className="border-l-4 border-indigo-500 pl-6">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-lg font-semibold text-white">{exp.title}</h4>
                      <span className="text-indigo-400 text-sm font-medium">{exp.period}</span>
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed">{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Skills */}
          <div className="animate-fadeInUp">
            <div className="glass rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-8">Skills & Technologies</h3>
              
              {/* Frontend Skills */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-indigo-300 mb-4">Frontend Development</h4>
                <div className="flex flex-wrap gap-3">
                  {['React.js', 'JavaScript', 'HTML5', 'CSS3'].map((skill) => (
                    <span key={skill} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>

              {/* Backend Skills */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-indigo-300 mb-4">Backend & Tools</h4>
                <div className="flex flex-wrap gap-3">
                  {['Node.js', 'Git', 'GitHub', 'Shopify'].map((skill) => (
                    <span key={skill} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>

              {/* AI Tools */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-indigo-300 mb-4">AI & Development Tools</h4>
                <div className="flex flex-wrap gap-3">
                  {['Lovable.dev', 'Cursor', 'Replit', 'v0', 'n8n', 'Stitch AI'].map((skill) => (
                    <span key={skill} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>

              {/* Deployment */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-indigo-300 mb-4">Deployment & Cloud</h4>
                <div className="flex flex-wrap gap-3">
                  {['Netlify', 'Render', 'Vercel', 'Firebase Studio'].map((skill) => (
                    <span key={skill} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>

              {/* Additional Skills */}
              <div>
                <h4 className="text-lg font-semibold text-indigo-300 mb-4">Additional Skills</h4>
                <div className="flex flex-wrap gap-3">
                  <span className="skill-tag">Prompt Engineering</span>
                  <span className="skill-tag">AI Agent Development</span>
                  <span className="skill-tag">E-commerce Development</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;