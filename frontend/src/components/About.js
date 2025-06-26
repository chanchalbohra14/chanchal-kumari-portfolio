import React from 'react';

const About = () => {
  const skills = [
    'React.js', 'JavaScript', 'HTML5', 'CSS3', 'Git', 'GitHub',
    'AWS', 'Shopify', 'Lovable.dev', 'Cursor', 'Replit', 'v0',
    'n8n', 'Stitch AI', 'OpenAI', 'SerpAPI', 'Canva', 'Content Creation'
  ];

  const experience = [
    {
      title: 'Frontend Developer',
      company: 'Freelance',
      period: 'Nov 2024 - Present',
      description: 'Developing responsive web applications using React.js, JavaScript, HTML5, and CSS3. Focus on creating seamless user experiences and modern UI components.',
      skills: ['JavaScript', 'HTML5', 'React.js', 'CSS3']
    },
    {
      title: 'Social Media Manager',
      company: 'Instagram (Freelance)',
      period: 'Feb 2025 - Present',
      description: 'Managing social media presence and content strategy. Creating engaging content using Canva and implementing time management strategies.',
      skills: ['Canva', 'Time Management', 'Content Creation']
    },
    {
      title: 'Content Creator',
      company: 'Full-time',
      period: 'Nov 2024 - Present',
      description: 'Creating engaging digital content and managing brand presence. Specializing in tech content and AI-powered development workflows.',
      skills: ['Canva', 'Content Creation', 'Brand Management']
    },
    {
      title: 'React.js Developer Intern',
      company: 'Alfido Tech',
      period: 'May 2025 - Jun 2025',
      description: 'Built dynamic and responsive web applications using React.js, Vite, and Tailwind CSS. Worked on portfolio sites, interactive dashboards, and API-driven apps.',
      skills: ['React.js', 'API Integration', 'Tailwind CSS', 'Git']
    }
  ];

  const internships = [
    {
      title: 'Software Engineering Intern',
      company: 'Accenture Nordics',
      period: 'Jun 2025',
      description: 'Gained experience in debugging code, reading complex codebases, and software engineering best practices.',
      skills: ['Debugging Code', 'Reading Code']
    },
    {
      title: 'GenAI Intern',
      company: 'BCG X',
      period: 'Jun 2025',
      description: 'Worked on generative AI projects including chatbot development and AI integration using Microsoft Excel and advanced AI tools.',
      skills: ['Chatbot Development', 'Microsoft Excel', 'GenAI']
    },
    {
      title: 'Solutions Architecture Intern',
      company: 'AWS APAC',
      period: 'Jun 2025',
      description: 'Learned AWS cloud architecture principles and solutions design for scalable applications.',
      skills: ['Amazon Web Services (AWS)', 'Cloud Architecture']
    }
  ];

  const education = {
    degree: 'Bachelor of Computer Applications',
    institution: 'Shree Medha Degree College',
    period: '2021 - 2024',
    grade: 'CGPA: 9.33',
    location: 'Ballari, Karnataka, India'
  };

  const certifications = [
    {
      title: 'Microsoft Azure AI Engineer Associate',
      issuer: 'ICT Academy',
      date: 'Jun 2025',
      category: 'Cloud & AI'
    },
    {
      title: 'AWS APAC Solutions Architecture Job Simulation',
      issuer: 'Forage',
      date: 'Jun 2025',
      category: 'Cloud & AI'
    },
    {
      title: 'BCG GenAI Job Simulation',
      issuer: 'Forage',
      date: 'Jun 2025',
      category: 'AI & ML'
    },
    {
      title: 'Accenture Nordics Software Engineering Job Simulation',
      issuer: 'Forage',
      date: 'Jun 2025',
      category: 'Software Engineering'
    },
    {
      title: 'ChatGPT Prompt Engineering for Developers',
      issuer: 'OpenAI',
      date: 'Jun 2025',
      category: 'AI & ML'
    },
    {
      title: 'Multi AI Agent Systems with crewAI',
      issuer: 'CrewAI',
      date: 'Jun 2025',
      category: 'AI & ML'
    },
    {
      title: 'Build Real World AI Applications with Gemini and Imagen',
      issuer: 'Google Cloud Skills Boost',
      date: 'Jun 2025',
      category: 'AI & ML'
    },
    {
      title: 'AI For Beginners',
      issuer: 'HP',
      date: 'Jun 2025',
      category: 'AI & ML'
    },
    {
      title: 'Agile Project Management',
      issuer: 'HP',
      date: 'Jun 2025',
      category: 'Project Management'
    },
    {
      title: 'Data Science & Analytics',
      issuer: 'HP',
      date: 'Jun 2025',
      category: 'Data Science'
    },
    {
      title: 'Introduction to Cybersecurity Awareness',
      issuer: 'HP',
      date: 'Jun 2025',
      category: 'Security'
    },
    {
      title: 'Prompt Engineering',
      issuer: 'AI IXX',
      date: 'Jun 2025',
      category: 'AI & ML'
    },
    {
      title: 'Lloyds Banking Group UX Design Introduction',
      issuer: 'Forage',
      date: 'Jun 2025',
      category: 'Design'
    }
  ];

  const additionalCerts = [
    'Gen AI Agents: Transform Your Organization (Google Cloud)',
    'Gen AI Apps: Transform Your Work (Google Cloud)', 
    'Gen AI: Beyond the Chatbot (Google Cloud)',
    'Gen AI: Navigate the Landscape (Google Cloud)',
    'Gen AI: Unlock Foundational Concepts (Google Cloud)',
    'Google Cloud Fundamentals: Core Infrastructure',
    'Introduction to Gen AI (Google Cloud)',
    'Prompt Design in Vertex AI (Google Cloud)',
    'Introduction To MERN Stack (Simplilearn)',
    'Digital Marketing Fundamentals (IIDE)',
    'Python Fundamentals For Beginners (Great Learning)',
    'Deplomat Coding Event (De Paul College)',
    'Enthrone Event CodeVita (Shree Medha College)',
    '+ 15 more specialized certifications'
  ];

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <h1 className="text-5xl font-bold gradient-text mb-6">About Me</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Recent Computer Applications graduate passionate about React.js and AI-powered development
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
                  <p className="text-indigo-300 font-semibold">React Enthusiast + AI Explorer</p>
                  <p className="text-gray-400 text-sm">Ballari, Karnataka, India</p>
                </div>
              </div>
              
              <p className="text-gray-300 leading-relaxed mb-6">
                Hello, I'm Chanchal Kumari, a recent Computer Applications graduate passionate about React.js and 
                front-end development, eager to grow into a skilled full-stack developer. I've gained practical 
                experience through internships at top companies like Accenture, BCG X, and AWS, plus hands-on 
                development experience at Alfido Tech.
              </p>
              
              <p className="text-gray-300 leading-relaxed mb-6">
                I enjoy crafting clean, modular UI components using React and designing seamless user experiences 
                that work beautifully across all devices. I'm also exploring AI-powered development tools like 
                Lovable.dev, Replit, Cursor, and building AI agents with n8n and OpenAI.
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-indigo-400 font-semibold">Currently:</span>
                <span className="text-green-400 text-sm font-medium">Open to React Developer & Full Stack roles</span>
              </div>
            </div>

            {/* Education Section */}
            <div className="glass rounded-2xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-white mb-6">Education</h3>
              <div className="border-l-4 border-indigo-500 pl-6">
                <h4 className="text-lg font-semibold text-white">{education.degree}</h4>
                <p className="text-indigo-400 font-medium">{education.institution}</p>
                <p className="text-gray-400 text-sm">{education.period} | {education.location}</p>
                <p className="text-green-400 font-semibold text-sm mt-2">{education.grade}</p>
              </div>
            </div>

            {/* Certifications */}
            <div className="glass rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Key Certifications</h3>
              
              {/* Major Certifications */}
              <div className="space-y-4 mb-6">
                {certifications.map((cert, index) => (
                  <div key={index} className="border-l-4 border-green-500 pl-4 bg-white/5 rounded-lg p-3">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-sm font-semibold text-white">{cert.title}</h4>
                      <span className="text-xs text-green-400 font-medium">{cert.date}</span>
                    </div>
                    <p className="text-green-400 text-xs font-medium">{cert.issuer}</p>
                    <span className="text-xs bg-green-500/20 text-green-300 px-2 py-1 rounded-full mt-2 inline-block">
                      {cert.category}
                    </span>
                  </div>
                ))}
              </div>

              {/* Additional Certifications */}
              <div className="border-t border-gray-600 pt-6">
                <h4 className="text-lg font-semibold text-indigo-300 mb-4">Additional Certifications</h4>
                <div className="grid grid-cols-1 gap-2">
                  {additionalCerts.map((cert, index) => (
                    <div key={index} className="flex items-center p-2 bg-white/5 rounded-lg">
                      <div className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></div>
                      <span className="text-gray-300 text-sm">{cert}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Certification Stats */}
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-green-400">28+</div>
                  <div className="text-sm text-gray-300">Total Certifications</div>
                </div>
                <div className="bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-blue-400">2025</div>
                  <div className="text-sm text-gray-300">Most Recent Year</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Experience & Skills */}
          <div className="animate-fadeInUp space-y-8">
            {/* Current Experience */}
            <div className="glass rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Current Experience</h3>
              <div className="space-y-6">
                {experience.map((exp, index) => (
                  <div key={index} className="border-l-4 border-indigo-500 pl-6">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="text-lg font-semibold text-white">{exp.title}</h4>
                        <p className="text-indigo-400 font-medium">{exp.company}</p>
                      </div>
                      <span className="text-indigo-400 text-sm font-medium">{exp.period}</span>
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed mb-3">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, idx) => (
                        <span key={idx} className="text-xs bg-indigo-500/20 text-indigo-300 px-2 py-1 rounded-full">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Internships */}
            <div className="glass rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Recent Internships (2025)</h3>
              <div className="space-y-6">
                {internships.map((internship, index) => (
                  <div key={index} className="border-l-4 border-purple-500 pl-6">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="text-lg font-semibold text-white">{internship.title}</h4>
                        <p className="text-purple-400 font-medium">{internship.company}</p>
                      </div>
                      <span className="text-purple-400 text-sm font-medium">{internship.period}</span>
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed mb-3">{internship.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {internship.skills.map((skill, idx) => (
                        <span key={idx} className="text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded-full">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills */}
            <div className="glass rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-8">Skills & Technologies</h3>
              
              {/* Core Development */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-indigo-300 mb-4">Core Development</h4>
                <div className="flex flex-wrap gap-3">
                  {['React.js', 'JavaScript', 'HTML5', 'CSS3', 'Git', 'GitHub'].map((skill) => (
                    <span key={skill} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>

              {/* AI & Modern Tools */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-indigo-300 mb-4">AI & Modern Tools</h4>
                <div className="flex flex-wrap gap-3">
                  {['Lovable.dev', 'Cursor', 'Replit', 'v0', 'n8n', 'Stitch AI', 'OpenAI', 'SerpAPI'].map((skill) => (
                    <span key={skill} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>

              {/* Cloud & AI Platforms */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-indigo-300 mb-4">Cloud & AI Platforms</h4>
                <div className="flex flex-wrap gap-3">
                  {['AWS', 'Google Cloud', 'Microsoft Azure', 'OpenAI', 'CrewAI', 'Gemini', 'Vertex AI'].map((skill) => (
                    <span key={skill} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>

              {/* Content & Design */}
              <div>
                <h4 className="text-lg font-semibold text-indigo-300 mb-4">Content & Design</h4>
                <div className="flex flex-wrap gap-3">
                  {['Canva', 'Content Creation', 'UI/UX Design'].map((skill) => (
                    <span key={skill} className="skill-tag">{skill}</span>
                  ))}
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