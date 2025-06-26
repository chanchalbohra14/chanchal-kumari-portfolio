import React, { useState } from 'react';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'AI Code Playground (Vibe Coding++)',
      description: 'AI-powered code playground built with React.js and designed using V0 by Vercel. Features live HTML/CSS/JS editor with real-time preview, OpenAI GPT API integration for code generation, Tailwind CSS styling, light/dark theme switcher, and lo-fi background music.',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
      tags: ['React.js', 'V0 by Vercel', 'OpenAI GPT', 'Tailwind CSS'],
      category: 'ai',
      features: ['AI Code Generation', 'Live Editor', 'Real-time Preview', 'Theme Switcher'],
      liveUrl: 'https://vibe-coding-plus.vercel.app/',
      githubUrl: 'https://github.com/chanchalbohra14/AI-Code-Playground'
    },
    {
      id: 2,
      title: 'Real-Time AI Agent (OpenAI + SerpAPI)',
      description: 'Context-aware AI agent using OpenAI, SerpAPI, and Calculator logic, orchestrated in n8n. Enables real-time web search, memory retention, and math operations through modular, no-code workflows with intelligent multi-step responses.',
      image: 'https://images.pexels.com/photos/5475750/pexels-photo-5475750.jpeg',
      tags: ['n8n', 'OpenAI', 'SerpAPI', 'AI Agents'],
      category: 'ai',
      features: ['Real-time Search', 'Memory Retention', 'Math Operations', 'No-code Workflow'],
      liveUrl: 'https://n8n.cloud/workflow/12345',
      githubUrl: 'https://github.com/chanchalbohra14/Real-Time-Ai-Agent-OpenAI-SerpAPI-n8n'
    },
    {
      id: 3,
      title: 'Email AI Agent using N8N',
      description: 'Automated email workflow that generates intelligent responses using OpenAI and sends them via Gmail. Built entirely with n8n\'s no-code tools, enabling smart outbound communication without backend coding.',
      image: 'https://images.unsplash.com/photo-1576272531110-2a342fe22342',
      tags: ['n8n', 'OpenAI', 'Gmail API', 'AI Agents'],
      category: 'ai',
      features: ['Email Automation', 'AI Responses', 'Gmail Integration', 'No-code Solution'],
      liveUrl: 'https://n8n.cloud/workflow/67890',
      githubUrl: 'https://github.com/chanchalbohra14/Email-Ai-Agent-Using-n8n'
    },
    {
      id: 4,
      title: 'E-Commerce WebApp with Lovable.dev',
      description: 'End-to-end e-commerce web application developed with lovable.dev, designed to deliver a seamless shopping experience with powerful integrations and user-friendly design using AI-powered development.',
      image: 'https://images.unsplash.com/photo-1613203713329-b2e39e14c266',
      tags: ['Lovable.dev', 'E-commerce', 'AI Development', 'Prompt Engineering'],
      category: 'ecommerce',
      features: ['AI-powered Development', 'Full E-commerce Flow', 'Seamless UX', 'Integration Ready'],
      liveUrl: 'https://ecommerce-lovable.vercel.app/',
      githubUrl: 'https://github.com/chanchalbohra14/E-Commerce-WebApp-With-Lovable.dev'
    },
    {
      id: 5,
      title: 'CRUD Operation MERN Stack',
      description: 'Full-stack CRUD application with React, React Hook Form, Node.js, Express, and MongoDB. Features form validation, RESTful API, Axios for client-server communication, deployed backend on Render with proper environment handling.',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
      tags: ['React.js', 'Node.js', 'MongoDB', 'Express.js'],
      category: 'fullstack',
      features: ['Full CRUD Operations', 'Form Validation', 'RESTful API', 'Cloud Deployment'],
      liveUrl: 'https://crud-mern-frontend.vercel.app/',
      githubUrl: 'https://github.com/chanchalbohra14/crud-op-frontend'
    },
    {
      id: 6,
      title: 'Social Media Dashboard',
      description: 'Responsive social media dashboard built with React that fetches and displays data. Features six main navigation sections: Posts, Comments, Albums, Photos, Todos, and Users with interactive data visualization.',
      image: 'https://images.pexels.com/photos/5475750/pexels-photo-5475750.jpeg',
      tags: ['React.js', 'React Hooks', 'CSS3', 'Data Visualization'],
      category: 'react',
      features: ['Data Fetching', 'Interactive Dashboard', 'Multiple Datasets', 'Responsive Design'],
      liveUrl: 'https://social-media-dashboard-react.vercel.app/',
      githubUrl: 'https://github.com/chanchalbohra14/social-media-dashboard-using-react'
    },
    {
      id: 7,
      title: 'E-Commerce Clothing Website',
      description: 'Shopify-based e-commerce platform for clothing business. Features comprehensive product management, payment integration, responsive design, and seamless shopping experience.',
      image: 'https://images.unsplash.com/photo-1576272531110-2a342fe22342',
      tags: ['Shopify', 'E-commerce', 'Payment Integration', 'Responsive Design'],
      category: 'ecommerce',
      features: ['Product Management', 'Payment Gateway', 'Mobile Responsive', 'Admin Dashboard'],
      liveUrl: '#',
      githubUrl: 'https://github.com/chanchalbohra14/ecommerce-clothing'
    },
    {
      id: 8,
      title: 'B Cyrus Desai Photography',
      description: 'Fully responsive photography portfolio website using HTML and CSS, featuring visually appealing gallery, categorized image sections, social media integration, and elegant design that enhances user experience.',
      image: 'https://images.unsplash.com/photo-1613203713329-b2e39e14c266',
      tags: ['HTML5', 'CSS3', 'Photography', 'Responsive Design'],
      category: 'frontend',
      features: ['Photo Gallery', 'Category Sections', 'Social Integration', 'Elegant Design'],
      liveUrl: 'https://b-cyrus-photography.vercel.app/',
      githubUrl: 'https://github.com/chanchalbohra14/B-Click-Photography-'
    },
    {
      id: 9,
      title: 'UI Design with Stitch AI by Google',
      description: 'Premium e-commerce UI for organic dark chocolate brand created using Stitch AI. Full-page layouts including Home, About, Products, Contact & Checkout with zero-code AI assistance, reflecting earthy, sustainable aesthetics.',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
      tags: ['Stitch AI', 'UI/UX Design', 'Google AI', 'Prompt Engineering'],
      category: 'design',
      features: ['AI-Generated UI', 'Complete Design System', 'Zero-code Design', 'Premium Aesthetics'],
      liveUrl: '#',
      githubUrl: 'https://github.com/chanchalbohra14/stitch-ai-ecommerce'
    },
    {
      id: 10,
      title: 'SMDC College Website',
      description: 'Responsive college website using HTML and CSS with structured navigation, image gallery, contact form, Google Maps integration, and social media links for enhanced user engagement.',
      image: 'https://images.pexels.com/photos/5475750/pexels-photo-5475750.jpeg',
      tags: ['HTML5', 'CSS3', 'Google Maps', 'Forms'],
      category: 'frontend',
      features: ['College Portal', 'Maps Integration', 'Contact Forms', 'Social Links'],
      liveUrl: 'https://smdc-college.vercel.app/',
      githubUrl: 'https://github.com/chanchalbohra14/SMDC-website'
    },
    {
      id: 11,
      title: 'Village Vacation Event Management',
      description: 'Responsive event management website with image slider, categorized gallery, service details, contact form, and social media integration for seamless user engagement and event promotion.',
      image: 'https://images.unsplash.com/photo-1576272531110-2a342fe22342',
      tags: ['HTML5', 'CSS3', 'Event Management', 'Image Slider'],
      category: 'frontend',
      features: ['Image Slider', 'Event Gallery', 'Service Details', 'Contact System'],
      liveUrl: 'https://village-vacation.vercel.app/',
      githubUrl: 'https://github.com/chanchalbohra14/Village-Vacation'
    },
    {
      id: 12,
      title: 'Spotify Analytics Dashboard',
      description: 'Streamlit application to visualize Spotify data, showcasing metrics like listeners, revenue, and plays. Features interactive charts and customized UI elements for enhanced data visualization experience.',
      image: 'https://images.unsplash.com/photo-1613203713329-b2e39e14c266',
      tags: ['Python', 'Streamlit', 'Data Visualization', 'Analytics'],
      category: 'analytics',
      features: ['Interactive Charts', 'Data Metrics', 'Custom UI', 'Spotify Integration'],
      liveUrl: 'https://spotify-analytics-dashboard.streamlit.app/',
      githubUrl: 'https://github.com/chanchalbohra14/Spotify-Analytics-Dashboard'
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