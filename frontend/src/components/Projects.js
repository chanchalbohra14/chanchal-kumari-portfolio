import React, { useState } from "react";

const Projects = () => {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "AI Code Playground (Vibe Coding++)",
      description:
        "AI-powered code playground built with React.js and designed using V0 by Vercel. Features live HTML/CSS/JS editor with real-time preview, OpenAI GPT API integration for code generation, Tailwind CSS styling, light/dark theme switcher, and lo-fi background music.",
      image: "/images/ai-code-playground.png",
      tags: ["React.js", "V0 by Vercel", "OpenAI GPT", "Tailwind CSS"],
      category: "ai",
      features: [
        "AI Code Generation",
        "Live Editor",
        "Real-time Preview",
        "Theme Switcher",
      ],
      liveUrl: "https://v0-react-app-with-ai-code.vercel.app/",
      githubUrl:
        "https://github.com/chanchalbohra14/AI-Code-Playground-Vibe-Coding",
    },
    {
      id: 2,
      title: "Real-Time AI Agent (OpenAI + SerpAPI)",
      description:
        "Context-aware AI agent using OpenAI, SerpAPI, and Calculator logic, orchestrated in n8n. Enables real-time web search, memory retention, and math operations through modular, no-code workflows with intelligent multi-step responses.",
      image: "/images/real-time.png",
      tags: ["n8n", "OpenAI", "SerpAPI", "AI Agents"],
      category: "ai",
      features: [
        "Real-time Search",
        "Memory Retention",
        "Math Operations",
        "No-code Workflow",
      ],
      liveUrl:
        "https://www.linkedin.com/posts/chanchal-kumari-219aba335_openai-serpapi-n8n-activity-7341350604276953088-hdTc?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFRYx7UBK5hZk8wZseS4vYVgWgFZCllXc-w",
      githubUrl:
        "https://github.com/chanchalbohra14/Real-Time-Ai-Agent-OpenAI-SerpAPI-n8n",
    },
    {
      id: 3,
      title: "Email AI Agent using N8N",
      description:
        "Automated email workflow that generates intelligent responses using OpenAI and sends them via Gmail. Built entirely with n8n's no-code tools, enabling smart outbound communication without backend coding.",
      image: "/images/email.png",
      tags: ["n8n", "OpenAI", "Gmail API", "AI Agents"],
      category: "ai",
      features: [
        "Email Automation",
        "AI Responses",
        "Gmail Integration",
        "No-code Solution",
      ],
      liveUrl:
        "https://www.linkedin.com/posts/chanchal-kumari-219aba335_ai-n8n-automation-activity-7341064731912232962-3-4q?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFRYx7UBK5hZk8wZseS4vYVgWgFZCllXc-w",
      githubUrl: "https://github.com/chanchalbohra14/Email-Ai-Agent-Using-n8n",
    },
    {
      id: 4,
      title: "E-Commerce WebApp with Lovable.dev",
      description:
        "End-to-end e-commerce web application developed with lovable.dev, designed to deliver a seamless shopping experience with powerful integrations and user-friendly design using AI-powered development.",
      image: "/images/e-commerce-lovable.png",
      tags: [
        "Lovable.dev",
        "E-commerce",
        "AI Development",
        "Prompt Engineering",
      ],
      category: "ecommerce",
      features: [
        "AI-powered Development",
        "Full E-commerce Flow",
        "Seamless UX",
        "Integration Ready",
      ],
      liveUrl: "https://smart-cart-connect.lovable.app/",
      githubUrl:
        "https://github.com/chanchalbohra14/E-Commerce-WebApp-With-Lovable.dev",
    },
    {
      id: 5,
      title: "CRUD Operation MERN Stack",
      description:
        "Full-stack CRUD application with React, React Hook Form, Node.js, Express, and MongoDB. Features form validation, RESTful API, Axios for client-server communication, deployed backend on Render with proper environment handling.",
      image: "/images/crud-operation.png",
      tags: ["React.js", "Node.js", "MongoDB", "Express.js"],
      category: "fullstack",
      features: [
        "Full CRUD Operations",
        "Form Validation",
        "RESTful API",
        "Cloud Deployment",
      ],
      liveUrl: "https://crud-op-frontend.vercel.app/",
      githubUrl: "https://github.com/chanchalbohra14/crud-op-frontend",
    },
    {
      id: 6,
      title: "Social Media Dashboard",
      description:
        "Responsive social media dashboard built with React that fetches and displays data. Features six main navigation sections: Posts, Comments, Albums, Photos, Todos, and Users with interactive data visualization.",
      image: "/images/social-media-dashboard.png",
      tags: ["React.js", "React Hooks", "CSS3", "Data Visualization"],
      category: "react",
      features: [
        "Data Fetching",
        "Interactive Dashboard",
        "Multiple Datasets",
        "Responsive Design",
      ],
      liveUrl: "https://social-media-dashboard-using-react.netlify.app/",
      githubUrl:
        "https://github.com/chanchalbohra14/social-media-dashboard-using-react",
    },
    {
      id: 7,
      title: "E-Commerce Clothing Website",
      description:
        "Currently building a Shopify-based e-commerce platform for a modern clothing brand. The project focuses on streamlined product management, responsive UI, and secure payment integration.",
      image: "/images/shopify.png",
      tags: ["Shopify", "E-commerce", "Responsive Design", "Work in Progress"],
      category: "ecommerce",
      features: [
        "Product Management (In Progress)",
        "Payment Integration (Planned)",
        "Mobile Responsive Design",
        "Admin Panel (Coming Soon)",
      ],
      liveUrl: null,
      githubUrl: null,
      note: "✨ Currently Under Development – GitHub and Live Demo Coming Soon",
    },

    {
      id: 8,
      title: "B Cyrus Desai Photography",
      description:
        "Work-in-progress responsive photography portfolio website using HTML and CSS. It will feature a visually rich gallery, categorized image sections, social media integration, and a refined layout focused on user experience.",
      image: "/images/b-cyrus-desai-photography.png",
      tags: [
        "HTML5",
        "CSS3",
        "Photography",
        "Responsive Design",
        "In Progress",
      ],
      category: "frontend",
      features: [
        "Photo Gallery (In Progress)",
        "Category Sections (Planned)",
        "Social Integration (Coming Soon)",
        "Elegant Design",
      ],
      liveUrl: null,
      githubUrl: null,
      note: "✨ In Progress – Live Preview & GitHub coming soon",
    },

    {
      id: 9,
      title: "UI Design with Stitch AI by Google",
      description:
        "Premium e-commerce UI for an organic dark chocolate brand, created using Stitch AI. Features full-page layouts for Home, About, Products, Contact & Checkout, inspired by earthy and sustainable aesthetics — built entirely with AI-powered no-code tools.",
      image: "/images/chocolate-website.png",
      tags: [
        "Stitch AI",
        "UI/UX Design",
        "Google AI",
        "Prompt Engineering",
        "Design Only",
      ],
      category: "design",
      features: [
        "AI-Generated UI",
        "Complete Design System",
        "Zero-code Workflow",
        "Premium Aesthetic Design",
      ],
      liveUrl: null,
      githubUrl: null,
      note: "🎨 UI Design Concept – Built with Stitch AI (No Code/Deployment)",
    },
    {
      id: 10,
      title: "B Click Photography",
      description:
        "Fully responsive photography portfolio website using HTML and CSS, featuring a visually appealing gallery, categorized image sections, social media integration, and an elegant design that enhances user experience.",
      image: "/images/b-click-photo.png",
      tags: ["HTML5", "CSS3", "Photography", "Responsive Design"],
      category: "frontend",
      features: [
        "Photo Gallery",
        "Category Sections",
        "Social Integration",
        "Elegant Design",
      ],
      liveUrl: "https://b-click-photo.netlify.app/",
      githubUrl: "https://github.com/chanchalbohra14/B-Click-Photography-",
    },

    {
      id: 11,
      title: "Village Vacation Event Management",
      description:
        "Responsive event management website with image slider, categorized gallery, service details, contact form, and social media integration for seamless user engagement and event promotion.",
      image: "/images/village-vacation.png",
      tags: ["HTML5", "CSS3", "Event Management", "Image Slider"],
      category: "frontend",
      features: [
        "Image Slider",
        "Event Gallery",
        "Service Details",
        "Contact System",
      ],
      liveUrl: "https://village-vacation.netlify.app/",
      githubUrl: "https://github.com/chanchalbohra14/Village-Vacation",
    },
    {
      id: 12,
      title: "Spotify Analytics Dashboard",
      description:
        "Streamlit application to visualize Spotify data, showcasing metrics like listeners, revenue, and plays. Features interactive charts and customized UI elements for enhanced data visualization experience.",
      image: "/images/spotify-analytics-dashboard.png",
      tags: ["Python", "Streamlit", "Data Visualization", "Analytics"],
      category: "analytics",
      features: [
        "Interactive Charts",
        "Data Metrics",
        "Custom UI",
        "Spotify Integration",
      ],
      liveUrl: "https://spotify-analytics-dashboard.streamlit.app/",
      githubUrl:
        "https://github.com/chanchalbohra14/Spotify-Analytics-Dashboard",
    },
    {
      id: 13,
      title: "SMDC College Website",
      description:
        "Responsive college website using HTML and CSS with structured navigation, image gallery, contact form, Google Maps integration, and social media links for enhanced user engagement.",
      image: "/images/smdc.png",
      tags: ["HTML5", "CSS3", "Google Maps", "Forms"],
      category: "frontend",
      features: [
        "College Portal",
        "Maps Integration",
        "Contact Forms",
        "Social Links",
      ],
      liveUrl: "https://smdc-website.netlify.app/",
      githubUrl: "https://github.com/chanchalbohra14/SMDC",
    },
    {
      id: 14,
      title: "Alfido Tech – Frontend Internship Tasks",
      description:
        "Contributed to the development of a responsive frontend dashboard using React.js. Built reusable UI components, integrated APIs, and implemented React Router for smooth navigation during a short-term internship at Alfido Tech.",
      image: "/images/alfido-tech.png",
      tags: ["React.js", "JavaScript", "HTML5", "CSS3", "Internship"],
      category: "react",
      features: [
        "Reusable UI Components",
        "React Router Navigation",
        "API Integration",
        "Responsive Design",
      ],
      liveUrl: "https://task4-fetch-api-data.netlify.app/",
      githubUrl: "https://github.com/chanchalbohra14/Alfido-Tech-Internship",
    },
  ];

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "ai", name: "AI Projects" },
    { id: "react", name: "React" },
    { id: "fullstack", name: "Full Stack" },
    { id: "ecommerce", name: "E-commerce" },
    { id: "frontend", name: "Frontend" },
    { id: "design", name: "Design" },
    { id: "analytics", name: "Analytics" },
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <h1 className="text-5xl font-bold gradient-text mb-6">My Projects</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A showcase of my work in React development, AI integration, and
            modern web technologies
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
                  ? "bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg"
                  : "text-gray-300 border border-gray-600 hover:border-indigo-500 hover:text-indigo-400"
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
                <h3 className="text-xl font-bold text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-indigo-500/20 text-indigo-300 px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-indigo-300 mb-2">
                    Key Features:
                  </h4>
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
                {project.liveUrl && project.githubUrl ? (
                  <div className="flex gap-3">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-center py-2 px-4 rounded-lg text-sm font-semibold hover:from-indigo-600 hover:to-purple-700 transition-all duration-300"
                    >
                      Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 border border-gray-600 text-gray-300 text-center py-2 px-4 rounded-lg text-sm font-semibold hover:border-indigo-500 hover:text-indigo-400 transition-all duration-300"
                    >
                      GitHub
                    </a>
                  </div>
                ) : (
                  <p className="text-yellow-500 text-sm font-medium mt-4 italic">
                    {project.note ||
                      "✨ Work in Progress – Live Demo & GitHub Coming Soon"}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fadeInUp">
          <div className="glass rounded-2xl p-8 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4">
              Interested in Working Together?
            </h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              I'm always open to discussing new projects and opportunities.
              Let's build something amazing with React and AI!
            </p>
            <a href="/contact" className="btn-primary inline-block">
              Start a Conversation
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
