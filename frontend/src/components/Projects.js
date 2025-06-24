import React, { useState } from 'react';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'AI-Powered E-commerce Store',
      description: 'A modern Shopify store integrated with AI tools for product recommendations and customer support. Built with React and AI agents for enhanced user experience.',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
      tags: ['React', 'Shopify', 'AI Tools', 'Node.js'],
      category: 'ecommerce',
      features: ['AI Product Recommendations', 'Automated Customer Support', 'Dynamic Pricing', 'Analytics Dashboard'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 2,
      title: 'MERN Stack Task Manager',
      description: 'A comprehensive task management application built with MongoDB, Express.js, React, and Node.js. Features real-time updates and collaborative workflows.',
      image: 'https://images.pexels.com/photos/5475750/pexels-photo-5475750.jpeg',
      tags: ['React', 'Node.js', 'MongoDB', 'Express'],
      category: 'fullstack',
      features: ['Real-time Updates', 'Team Collaboration', 'Task Automation', 'Progress Tracking'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 3,
      title: 'React AI Dashboard',
      description: 'An interactive dashboard leveraging AI APIs for data visualization and insights. Built with React and integrated with multiple AI services for enhanced analytics.',
      image: 'https://images.unsplash.com/photo-1576272531110-2a342fe22342',
      tags: ['React', 'AI APIs', 'D3.js', 'Tailwind'],
      category: 'ai',
      features: ['AI-Powered Analytics', 'Interactive Charts', 'Real-time Data', 'Custom Widgets'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 4,
      title: 'AI Agent Development Platform',
      description: 'A platform for building and deploying AI agents using modern web technologies. Integrates with various AI tools and provides a user-friendly interface.',
      image: 'https://images.unsplash.com/photo-1613203713329-b2e39e14c266',
      tags: ['React', 'AI Agents', 'n8n', 'API Integration'],
      category: 'ai',
      features: ['Drag & Drop Interface', 'Multi-AI Integration', 'Custom Workflows', 'Deployment Tools'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 5,
      title: 'Lovable.dev Portfolio Generator',
      description: 'A React application that leverages Lovable.dev AI to automatically generate portfolio websites based on user input and preferences.',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
      tags: ['React', 'Lovable.dev', 'AI Generation', 'Tailwind'],
      category: 'ai',
      features: ['AI-Generated Layouts', 'Custom Themes', 'Responsive Design', 'One-Click Deploy'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 6,
      title: 'Shopify Custom App',
      description: 'A custom Shopify application for inventory management and sales analytics. Built with React and integrated with Shopify APIs for seamless operation.',
      image: 'https://images.pexels.com/photos/5475750/pexels-photo-5475750.jpeg',
      tags: ['Shopify', 'React', 'APIs', 'Analytics'],
      category: 'ecommerce',
      features: ['Inventory Tracking', 'Sales Analytics', 'Order Management', 'Customer Insights'],
      liveUrl: '#',
      githubUrl: '#'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'ai', name: 'AI Projects' },
    { id: 'fullstack', name: 'Full Stack' },
    { id: 'ecommerce', name: 'E-commerce' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <h1 className="text-5xl font-bold gradient-text mb-6">My Projects</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A showcase of my work in React development, AI integration, and modern web technologies
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fadeInUp">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                filter === category.id
                  ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg'
                  : 'text-gray-300 border border-gray-600 hover:border-indigo-500 hover:text-indigo-400'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="glass rounded-2xl overflow-hidden card-hover animate-fadeInUp"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs bg-indigo-500/20 text-indigo-300 px-2 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-indigo-300 mb-2">Key Features:</h4>
                  <ul className="text-xs text-gray-400 space-y-1">
                    {project.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <span className="w-1 h-1 bg-indigo-400 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Action Buttons */}
                <div className="flex gap-3">
                  <a
                    href={project.liveUrl}
                    className="flex-1 bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-center py-2 px-4 rounded-lg text-sm font-semibold hover:from-indigo-600 hover:to-purple-700 transition-all duration-300"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    className="flex-1 border border-gray-600 text-gray-300 text-center py-2 px-4 rounded-lg text-sm font-semibold hover:border-indigo-500 hover:text-indigo-400 transition-all duration-300"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fadeInUp">
          <div className="glass rounded-2xl p-8 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4">Interested in Working Together?</h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              I'm always open to discussing new projects and opportunities. 
              Let's build something amazing with React and AI!
            </p>
            <a
              href="/contact"
              className="btn-primary inline-block"
            >
              Start a Conversation
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;