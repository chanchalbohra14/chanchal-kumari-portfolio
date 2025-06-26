import React, { useState } from 'react';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Vibe Coding++ | AI-Powered Code Playground',
      description: 'Built using React.js and designed with V0 by Vercel. Features real-time HTML, CSS, and TypeScript editor with AI-powered code generation using OpenAI GPT API. Includes lo-fi music player and dark/light mode.',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
      tags: ['React.js', 'OpenAI GPT', 'V0 by Vercel', 'Tailwind CSS'],
      category: 'ai',
      features: ['AI Code Generation', 'Live Code Preview', 'Lo-fi Music Player', 'Dark/Light Mode'],
      liveUrl: 'https://lnkd.in/efe8gjp9',
      githubUrl: 'https://github.com/chanchalbohra14/vibe-coding'
    },
    {
      id: 2,
      title: 'Real-Time AI Agent with OpenAI & SerpAPI',
      description: 'Cloud-based AI Agent combining OpenAI reasoning with real-time search via SerpAPI, orchestrated through n8n. Features context-aware responses, live data fetching, and multi-modal capabilities.',
      image: 'https://images.pexels.com/photos/5475750/pexels-photo-5475750.jpeg',
      tags: ['OpenAI', 'SerpAPI', 'n8n', 'AI Agents'],
      category: 'ai',
      features: ['Real-time Search', 'Context Memory', 'Multi-modal Processing', 'Workflow Automation'],
      liveUrl: '#',
      githubUrl: 'https://github.com/chanchalbohra14/ai-agent-openai-serpapi'
    },
    {
      id: 3,
      title: 'AI Email Agent with n8n',
      description: 'Intelligent email automation agent using n8n workflow management, OpenAI for natural language processing, and Gmail integration. Features context retention and automated responses.',
      image: 'https://images.unsplash.com/photo-1576272531110-2a342fe22342',
      tags: ['n8n', 'OpenAI', 'Gmail API', 'Automation'],
      category: 'ai',
      features: ['Email Automation', 'Context Retention', 'Smart Responses', 'Workflow Management'],
      liveUrl: '#',
      githubUrl: 'https://github.com/chanchalbohra14/ai-email-agent'
    },
    {
      id: 4,
      title: 'UI Design with Stitch AI (Google)',
      description: 'Premium e-commerce UI concept for organic dark chocolate brand created using Stitch AI. Complete website interface including home, about, products, contact, and checkout pages.',
      image: 'https://images.unsplash.com/photo-1613203713329-b2e39e14c266',
      tags: ['Stitch AI', 'UI/UX Design', 'E-commerce', 'Google AI'],
      category: 'design',
      features: ['AI-Generated UI', 'E-commerce Flow', 'Premium Design', 'Complete Website'],
      liveUrl: '#',
      githubUrl: 'https://github.com/chanchalbohra14/stitch-ai-ecommerce'
    },
    {
      id: 5,
      title: 'E-Commerce Clothing Website',
      description: 'Shopify-based e-commerce platform for clothing rental business. Features responsive design, product management, and integrated payment solutions.',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
      tags: ['Shopify', 'E-commerce', 'Responsive Design', 'Payment Integration'],
      category: 'ecommerce',
      features: ['Product Management', 'Payment Gateway', 'Responsive Design', 'Inventory System'],
      liveUrl: '#',
      githubUrl: 'https://github.com/chanchalbohra14/ecommerce-clothing'
    },
    {
      id: 6,
      title: 'B-Click Photography Website',
      description: 'Fully responsive photography portfolio website using HTML and CSS, featuring a visually appealing gallery, categorized image sections, and social media integration.',
      image: 'https://images.pexels.com/photos/5475750/pexels-photo-5475750.jpeg',
      tags: ['HTML5', 'CSS3', 'Responsive Design', 'Gallery'],
      category: 'frontend',
      features: ['Responsive Gallery', 'Category Sections', 'Social Media Integration', 'Elegant Design'],
      liveUrl: 'https://chanchalbohra14.github.io/B-Click-Photography-/',
      githubUrl: 'https://github.com/chanchalbohra14/B-Click-Photography-'
    },
    {
      id: 7,
      title: 'Social Media Dashboard',
      description: 'Modern React-based social media dashboard featuring analytics, user engagement metrics, and responsive design for managing social media presence effectively.',
      image: 'https://images.unsplash.com/photo-1576272531110-2a342fe22342',
      tags: ['React', 'CSS3', 'Dashboard', 'Analytics'],
      category: 'react',
      features: ['Analytics Dashboard', 'User Metrics', 'Responsive Design', 'Data Visualization'],
      liveUrl: 'https://chanchalbohra14.github.io/social-media-dashboard-using-react/',
      githubUrl: 'https://github.com/chanchalbohra14/social-media-dashboard-using-react'
    },
    {
      id: 8,
      title: 'Alfido Tech Internship Projects',
      description: 'Collection of React.js projects from Alfido Tech internship including API Data Fetcher, React Counter App, and React Router Navigation demonstrating practical development skills.',
      image: 'https://images.unsplash.com/photo-1613203713329-b2e39e14c266',
      tags: ['React.js', 'API Integration', 'React Hooks', 'React Router'],
      category: 'react',
      features: ['API Data Fetching', 'State Management', 'Routing', 'Component Design'],
      liveUrl: '#',
      githubUrl: 'https://github.com/chanchalbohra14/Alfido-Tech-Internship'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'ai', name: 'AI Projects' },
    { id: 'react', name: 'React' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'ecommerce', name: 'E-commerce' },
    { id: 'design', name: 'Design' }
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