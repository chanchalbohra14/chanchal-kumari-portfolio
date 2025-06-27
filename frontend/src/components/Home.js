import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left animate-fadeInUp">
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
              Hi, I'm <span className="gradient-text">Chanchal Kumari</span>
            </h1>

            <h2 className="text-2xl lg:text-3xl text-indigo-300 mb-6 font-semibold">
              React Enthusiast + AI | MERN Stack Developer
            </h2>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl">
              Recent Computer Applications graduate passionate about React.js
              and front-end development. Experienced with AI tools like
              Lovable.dev, Cursor, v0, Replit, Stitch, Firebase Studio.
              Exploring AI Agent Development. Open to React Developer & Full
              Stack roles.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/projects" className="btn-primary">
                View My Work
              </Link>
              <Link to="/contact" className="btn-secondary">
                Get In Touch
              </Link>
            </div>

            {/* Recent Achievement */}
            <div className="mt-8 glass rounded-lg p-4 max-w-md mx-auto lg:mx-0">
              <p className="text-green-400 font-semibold text-sm mb-2">
                🎉 Recent Achievement
              </p>
              <p className="text-gray-300 text-sm">
                Completed internships at{" "}
                <span className="text-indigo-400 font-semibold">Accenture</span>
                ,<span className="text-indigo-400 font-semibold"> BCG X</span>,
                and
                <span className="text-indigo-400 font-semibold"> AWS</span> in
                June 2025
              </p>
            </div>

            {/* Tech Stack Icons */}
            <div className="mt-12">
              <p className="text-gray-400 mb-4 text-sm uppercase tracking-wider">
                Core Skills
              </p>
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                {[
                  "React.js",
                  "JavaScript",
                  "Node JS",
                  "Mongo DB",
                  "Express JS",
                  "AI Tools[Lovabel.dev, Cursor, Replit, FireBase Studio, Stitch by Google]",
                  "Shopify",
                  "n8n",
                  "HTML5",
                  "CSS",
                ].map((tech) => (
                  <span key={tech} className="skill-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Hero Image */}
          <div className="flex justify-center lg:justify-end animate-float">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden glass border-4 border-indigo-500/30 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1576272531110-2a342fe22342"
                  alt="Developer workspace"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full opacity-70 animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-70 animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
