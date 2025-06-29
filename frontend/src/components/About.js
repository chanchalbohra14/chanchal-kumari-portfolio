import React from "react";

const About = () => {
  const skills = [
    "React.js",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Git",
    "GitHub",
    "AWS",
    "Shopify",
    "Lovable.dev",
    "Cursor",
    "Replit",
    "v0",
    "n8n",
    "Stitch AI",
    "OpenAI",
    "SerpAPI",
    "Canva",
    "Content Creation",
  ];

  const experience = [
    {
      title: "Frontend Developer",
      company: "Freelance",
      period: "Nov 2024 - Present (8 mos)",
      description:
        "Developing responsive web applications using modern technologies. Focus on React.js development, Shopify integrations, and AI-powered development tools.",
      skills: [
        "JavaScript",
        "HTML5",
        "CSS3",
        "Shopify",
        "Prompt Engineering",
        "Vercel",
      ],
    },
    {
      title: "Social Media Manager",
      company: "Instagram (Freelance)",
      period: "Feb 2025 - Present (5 mos)",
      description:
        "Managing social media presence and content strategy for KUSHI || RENTAL WEAR (@kushi_clothing_rental). Creating engaging content and implementing growth strategies.",
      skills: [
        "Canva",
        "Time Management",
        "Content Creation",
        "Engagement Strategy",
        "VN",
        "Capcut",
        "Video Editing",
      ],
    },
    {
      title: "Content Creator",
      company: "Full-time",
      period: "Nov 2024 - Present (8 mos)",
      description:
        "Creating engaging digital content and managing personal brand (@dumps.bycb). Specializing in tech content, AI-powered development workflows, and social media growth.",
      skills: [
        "Canva",
        "Content Creation",
        "Engagement Strategy",
        "VN",
        "Capcut",
        "Video Editing",
      ],
    },
  ];

  const internships = [
    {
      title: "React.js Developer Intern",
      company: "Alfido Tech",
      period: "May 2025 (1 mo)",
      description:
        "Built dynamic and responsive web applications using React.js, React Hooks, and modern JavaScript. Developed portfolio sites, interactive dashboards, and API-driven applications.",
      skills: ["React Hooks", "JavaScript", "HTML5", "CSS3", "React.js"],
      link: "https://www.alfidotech.com/Certificate/Chanchal%20Kumari.pdf",
    },
    {
      title: "UX Design Intern",
      company: "Lloyds Banking Group",
      period: "Jun 2025",
      description:
        "Introduction to user experience design principles, design thinking methodologies, and banking sector UX considerations for financial services applications.",
      skills: ["UX Design", "Design Thinking", "User Research"],
      link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Zbnc2o4ok6kD2NEXx/N65hfzBKXRiATv6yd_Zbnc2o4ok6kD2NEXx_QJ3TKpCx6EZocS7mB_1750931394212_completion_certificate.pdf",
    },
    {
      title: "Software Engineering Intern",
      company: "Accenture Nordics",
      period: "Jun 2025",
      description:
        "Gained experience in software engineering best practices, debugging complex codebases, and waterfall methodology. Worked on enterprise-level software solutions.",
      skills: ["Debugging Code", "Reading Code", "Waterfall"],
      link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/xhih9yFWsf6AYfngd/HNpZwZcuYwona2d8Y_xhih9yFWsf6AYfngd_QJ3TKpCx6EZocS7mB_1750925045211_completion_certificate.pdf",
    },

    {
      title: "GenAI Intern",
      company: "BCG X",
      period: "Jun 2025",
      description:
        "Worked on cutting-edge generative AI projects including chatbot development, data extraction workflows, and AI model implementation using Python and Jupyter notebooks.",
      skills: [
        "Chatbot Development",
        "Microsoft Excel",
        "Jupyter",
        "Data Extraction",
        "Python",
      ],
      link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/SKZxezskWgmFjRvj9/gabev3vXhuACr48eb_SKZxezskWgmFjRvj9_QJ3TKpCx6EZocS7mB_1750928013272_completion_certificate.pdf",
    },
    {
      title: "Solutions Architecture Intern",
      company: "AWS",
      period: "Jun 2025",
      description:
        "Learned AWS cloud architecture principles, solutions design patterns, and best practices for scalable cloud applications and infrastructure management.",
      skills: [
        "Amazon Web Services (AWS)",
        "Cloud Architecture",
        "Solutions Design",
      ],
      link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/pmnMSL4QiQ9JCgE3W/kkE9HyeNcw6rwCRGw_pmnMSL4QiQ9JCgE3W_QJ3TKpCx6EZocS7mB_1750923592731_completion_certificate.pdf",
    },
  ];

  const education = [
    {
      degree: "Bachelor of Computer Applications",
      institution: "Shree Medha Degree College",
      period: "2021 - 2024",
      grade: "CGPA: 9.33",
      location: "Ballari, Karnataka, India",
      level: "undergraduate",
    },
    {
      PU: "Commerce [CEBA]",
      institution: "Basarajeshwari Public School and College",
      period: "2019 - 2021",
      grade: "",
      location: "Ballari, Karnataka, India",
      level: "intermediate",
    },
    {
      SSLC: "Secondary School Leaving Certificate (SSLC)",
      institution: "St. Joseph Co-Education High School",
      period: "2018 - 2019",
      grade: "",
      location: "Ballari, Karnataka, India",
      level: "secondary",
    },
  ];

  const certifications = [
    {
      title: "Microsoft Azure AI Engineer Associate",
      issuer: "ICT Academy",
      date: "Jan 2025",
      category: "Cloud & AI",
      image: "images/Certificates/azure.jpg",
    },
    {
      title: "AWS APAC Solutions Architecture Job Simulation",
      issuer: "Forage",
      date: "Jun 2025",
      category: "Cloud & AI",
      link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/pmnMSL4QiQ9JCgE3W/kkE9HyeNcw6rwCRGw_pmnMSL4QiQ9JCgE3W_QJ3TKpCx6EZocS7mB_1750923592731_completion_certificate.pdf",
    },
    {
      title: "BCG GenAI Job Simulation",
      issuer: "Forage",
      date: "Jun 2025",
      category: "AI & ML",
      link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/SKZxezskWgmFjRvj9/gabev3vXhuACr48eb_SKZxezskWgmFjRvj9_QJ3TKpCx6EZocS7mB_1750928013272_completion_certificate.pdf",
    },

    {
      title: "Accenture Nordics Software Engineering Job Simulation",
      issuer: "Forage",
      date: "Jun 2025",
      category: "Software Engineering",
      link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/xhih9yFWsf6AYfngd/HNpZwZcuYwona2d8Y_xhih9yFWsf6AYfngd_QJ3TKpCx6EZocS7mB_1750925045211_completion_certificate.pdf",
    },
    {
      title: "React.js Developer Intern",
      issuer: "Alfido Tech",
      date: "June 2025",
      category: "React.JS",
      link: "https://www.alfidotech.com/Certificate/Chanchal%20Kumari.pdf",
    },
    {
      title: "ChatGPT Prompt Engineering for Developers",
      issuer: "OpenAI",
      date: "Jun 2025",
      category: "AI & ML",
      link: "https://learn.deeplearning.ai/accomplishments/36c6978d-d83a-42e5-a8ca-c71d36221f1e",
    },
    {
      title: "Multi AI Agent Systems with crewAI",
      issuer: "CrewAI",
      date: "Jun 2025",
      category: "AI & ML",
      link: "https://learn.deeplearning.ai/accomplishments/7d5b5156-13d0-419e-be34-094104e0152c",
    },

    {
      title: "AI For Beginners",
      issuer: "HP",
      date: "Jun 2025",
      category: "AI & ML",
      link: "https://www.life-global.org/certificate/da7edf28-cde2-42ea-9b19-016feebc4da4",
    },
    {
      title: "Chatgpt For Everyone",
      issuer: "United Latino Students Association",
      date: "Jun 2025",
      category: "AI & ML",
      link: "https://learnprompting.thinkific.com/certificates/6izeeghvak",
    },
    {
      title: "Agile Project Management",
      issuer: "HP",
      date: "Jun 2025",
      category: "Project Management",
      link: "https://www.life-global.org/certificate/b5f9a3e3-6e7f-4835-814b-1a77f254c3df",
    },
    {
      title: "Data Science & Analytics",
      issuer: "HP",
      date: "Jun 2025",
      category: "Data Science",
      link: "https://www.life-global.org/certificate/4242222d-185e-4d87-a3c8-67764aa1f6d1",
    },
    {
      title: "Introduction to Cybersecurity Awareness",
      issuer: "HP",
      date: "Jun 2025",
      category: "Security",
      link: "https://www.life-global.org/certificate/f987d257-9155-4751-897e-968afa5942aa",
    },
    {
      title: "Prompt Engineering",
      issuer: "AI IXX",
      date: "Jun 2025",
      category: "AI & ML",
      link: "https://aiixx.ai/image/show-pdf/60/5070#toolbar=0&navpanes=0&scrollbar=0",
    },
    {
      title: "Lloyds Banking Group UX Design Introduction",
      issuer: "Forage",
      date: "Jun 2025",
      category: "Design",
      link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Zbnc2o4ok6kD2NEXx/N65hfzBKXRiATv6yd_Zbnc2o4ok6kD2NEXx_QJ3TKpCx6EZocS7mB_1750931394212_completion_certificate.pdf",
    },
    {
      title: "Introduction To MERN Stack",
      issuer: "Simplilearn",
      date: "Jan 2025",
      category: "Full Stack Development",
      link: "https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiIzMzM3IiwiY2VydGlmaWNhdGVfdXJsIjoiaHR0cHM6XC9cL2NlcnRpZmljYXRlcy5zaW1wbGljZG4ubmV0XC9zaGFyZVwvNzc0MTgwN183MDM3NTYwMTczNjA5Nzg0ODU4Mi5wbmciLCJ1c2VybmFtZSI6IkNoYW5jaGFsIEt1bWFyaSAifQ&utm_source=shared-certificate&utm_medium=app_lms&utm_campaign=shared-certificate-promotion&referrer=https%3A%2F%2Fcertificates.simplicdn.net%2Fshare%2F7741807_70375601736097848582.png&_branch_match_id=1425060035561738500&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXL87MLcjJ1EssKNDLyczL1veoKjYvKAv2DwtJsq8rSk1LLSrKzEuPTyrKLy9OLbL1AapJTfHMAwArpTxxPwAAAA%3D%3D",
    },
    {
      title: "Digital Marketing Fundamentals",
      issuer: "IIDE",
      date: "Dec 2024",
      category: "Marketing",
      image: "images/Certificates/IIDE.jpg",
    },
    {
      title: "Python Fundamentals For Beginners",
      issuer: "Great Learning",
      date: "Sep 2023",
      category: "Programming",
      image: "images/Certificates/great-learning.jpg",
    },
    {
      title: "Deplomat Coding Event",
      issuer: "De Paul College",
      date: "Jun 2023",
      category: "Coding Event",
      image: "images/Certificates/deplomat.jpg",
    },
    {
      title: "Enthrone Event CodeVita",
      issuer: "Shree Medha College",
      date: "Jan 2022",
      category: "Coding Event",
      image: "images/Certificates/enthrone.jpg",
    },
  ];

  const additionalCerts = [
    "Gen AI Agents: Transform Your Organization",
    "Gen AI Apps: Transform Your Work",
    "Gen AI: Beyond the Chatbot",
    "Gen AI: Navigate the Landscape",
    "Gen AI: Unlock Foundational Concepts",
    "Google Cloud Fundamentals: Core Infrastructure",
    "Introduction to Gen AI",
    "Prompt Design in Vertex AI",
    "Build Real World AI Applications with Gemini and Imagen",
  ];

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <h1 className="text-5xl font-bold gradient-text mb-6">About Me</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Recent Computer Applications graduate passionate about React.js and
            AI-powered development
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
                  <h2 className="text-2xl font-bold text-white">
                    Chanchal Kumari
                  </h2>
                  <p className="text-indigo-300 font-semibold">
                    React Enthusiast + AI Explorer
                  </p>
                  <p className="text-gray-400 text-sm">
                    Ballari, Karnataka, India
                  </p>
                </div>
              </div>

              <p className="text-gray-300 leading-relaxed mb-6">
                Hello, I'm Chanchal Kumari, a recent Computer Applications
                graduate passionate about React.js and front-end development,
                eager to grow into a skilled full-stack developer. I've gained
                practical experience through internships at top companies like
                Accenture, BCG X, and AWS, plus hands-on development experience
                at Alfido Tech.
              </p>

              <p className="text-gray-300 leading-relaxed mb-6">
                I enjoy crafting clean, modular UI components using React and
                designing seamless user experiences that work beautifully across
                all devices. I'm also exploring AI-powered development tools
                like Lovable.dev, Replit, Cursor, and building AI agents with
                n8n and OpenAI.
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-indigo-400 font-semibold">
                  Currently:
                </span>
                <span className="text-green-400 text-sm font-medium">
                  Open to React Developer & Full Stack roles
                </span>
              </div>
            </div>

            {/* Education Section */}
            <div className="glass rounded-2xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-white mb-6">Education</h3>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div
                    key={index}
                    className={`border-l-4 pl-6 ${
                      edu.level === "undergraduate"
                        ? "border-green-500"
                        : edu.level === "intermediate"
                        ? "border-blue-500"
                        : "border-yellow-500"
                    }`}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="text-lg font-semibold text-white">
                          {edu.degree}
                        </h4>
                        <p
                          className={`font-medium ${
                            edu.level === "undergraduate"
                              ? "text-green-400"
                              : edu.level === "intermediate"
                              ? "text-blue-400"
                              : "text-yellow-400"
                          }`}
                        >
                          {edu.institution}
                        </p>
                      </div>
                      <span className="text-gray-400 text-sm font-medium">
                        {edu.period}
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm mb-2">{edu.location}</p>
                    {edu.grade && (
                      <div className="inline-block">
                        <span className="bg-green-500/20 text-green-400 font-semibold text-sm px-3 py-1 rounded-full border border-green-500/30">
                          {edu.grade}
                        </span>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Academic Achievement Highlight */}
              <div className="mt-6 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-lg p-4 border border-green-500/30">
                <div className="flex items-center mb-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full mr-3"></div>
                  <h4 className="text-green-400 font-semibold">
                    Academic Excellence
                  </h4>
                </div>
                <p className="text-gray-300 text-sm">
                  Graduated with exceptional academic performance (CGPA:
                  9.33/10.0) in Computer Applications, demonstrating strong
                  foundation in programming, software development, and
                  technology.
                </p>
              </div>
            </div>

            {/* Certifications */}
            <div className="glass rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">
                Key Certifications
              </h3>

              <div className="space-y-4 mb-6">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="border-l-4 border-green-500 pl-4 bg-white/5 rounded-lg p-3"
                  >
                    <div className="flex justify-between items-start mb-2">
                      {cert.link ? (
                        <a
                          href={cert.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm font-semibold text-white hover:underline"
                        >
                          {cert.title}
                        </a>
                      ) : cert.image ? (
                        <a
                          href={cert.image}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm font-semibold text-white hover:underline"
                        >
                          {cert.title}
                        </a>
                      ) : (
                        <h4 className="text-sm font-semibold text-white">
                          {cert.title}
                        </h4>
                      )}
                      <span className="text-xs text-green-400 font-medium">
                        {cert.date}
                      </span>
                    </div>
                    <p className="text-green-400 text-xs font-medium">
                      {cert.issuer}
                    </p>
                    <span className="text-xs bg-green-500/20 text-green-300 px-2 py-1 rounded-full mt-2 inline-block">
                      {cert.category}
                    </span>
                  </div>
                ))}
              </div>

              {/* Additional Certifications */}
              <div className="border-t border-gray-600 pt-6">
                <h4 className="text-lg font-semibold text-indigo-300 mb-4">
                  Additional Certifications
                </h4>

                <div className="grid grid-cols-1 gap-2">
                  {additionalCerts.map((cert, index) => (
                    <div
                      key={index}
                      className="flex items-center p-2 bg-white/5 rounded-lg"
                    >
                      <div className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></div>
                      <span className="text-gray-300 text-sm">{cert}</span>
                    </div>
                  ))}
                </div>

                {/* 🔗 Link to Cloud Skills Boost profile */}
                <a
                  href="https://www.cloudskillsboost.google/public_profiles/e5f5583e-32ba-49be-b9f1-de3606cdf7fd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 text-sm text-indigo-400 hover:underline"
                >
                  View My Cloud Skills Boost Profile →
                </a>
              </div>

              {/* Certification Stats */}
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-green-400">28+</div>
                  <div className="text-sm text-gray-300">
                    Total Certifications
                  </div>
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
              <h3 className="text-2xl font-bold text-white mb-6">
                Current Experience
              </h3>
              <div className="space-y-6">
                {experience.map((exp, index) => (
                  <div
                    key={index}
                    className="border-l-4 border-indigo-500 pl-6"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="text-lg font-semibold text-white">
                          {exp.title}
                        </h4>
                        <p className="text-indigo-400 font-medium">
                          {exp.company}
                        </p>
                      </div>
                      <span className="text-indigo-400 text-sm font-medium">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed mb-3">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="text-xs bg-indigo-500/20 text-indigo-300 px-2 py-1 rounded-full"
                        >
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
              <h3 className="text-2xl font-bold text-white mb-6">
                Recent Internships (2025)
              </h3>
              <div className="space-y-6">
                {internships.map((internship, index) => (
                  <div
                    key={index}
                    className="border-l-4 border-purple-500 pl-6"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        {internship.link ? (
                          <a
                            href={internship.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-lg font-semibold text-white hover:underline"
                          >
                            {internship.title}
                          </a>
                        ) : (
                          <h4 className="text-lg font-semibold text-white">
                            {internship.title}
                          </h4>
                        )}
                        <p className="text-purple-400 font-medium">
                          {internship.company}
                        </p>
                      </div>
                      <span className="text-purple-400 text-sm font-medium">
                        {internship.period}
                      </span>
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed mb-3">
                      {internship.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {internship.skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded-full"
                        >
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
              <h3 className="text-2xl font-bold text-white mb-8">
                Skills & Technologies
              </h3>

              {/* Core Development */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-indigo-300 mb-4">
                  Core Development
                </h4>
                <div className="flex flex-wrap gap-3">
                  {[
                    "React.js",
                    "JavaScript",
                    "HTML5",
                    "CSS3",
                    "Git",
                    "GitHub",
                    "Netlify",
                    "Vercel",
                    "Render",
                  ].map((skill) => (
                    <span key={skill} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* AI & Modern Tools */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-indigo-300 mb-4">
                  AI & Modern Tools
                </h4>
                <div className="flex flex-wrap gap-3">
                  {[
                    "Lovable.dev",
                    "Cursor",
                    "Replit",
                    "v0",
                    "n8n",
                    "Stitch AI",
                    "OpenAI",
                  ].map((skill) => (
                    <span key={skill} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Cloud & AI Platforms */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-indigo-300 mb-4">
                  Cloud & AI Platforms
                </h4>
                <div className="flex flex-wrap gap-3">
                  {["AWS", "Microsoft Azure", "OpenAI", "Gemini"].map(
                    (skill) => (
                      <span key={skill} className="skill-tag">
                        {skill}
                      </span>
                    )
                  )}
                </div>
              </div>

              {/* Content & Design */}
              <div className="mb-8">
                <h4 className=" text-lg font-semibold text-indigo-300 mb-4">
                  Content & Design
                </h4>
                <div className="flex flex-wrap gap-3">
                  {[
                    "Canva",
                    "Content Creation",
                    "Video Editing",
                    "VN",
                    "Capcut",
                    "UI/UX Design",
                    "Engagement Strategy",
                  ].map((skill) => (
                    <span key={skill} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Additional Skills */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-indigo-300 mb-4">
                  Additional Skills
                </h4>
                <div className="flex flex-wrap gap-3">
                  {["Python", "Digital Marketing", "UX Design"].map((skill) => (
                    <span key={skill} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Backend & Databases */}
              <div>
                <h4 className="text-lg font-semibold text-indigo-300 mb-4">
                  Backend & Databases
                </h4>
                <div className="flex flex-wrap gap-3">
                  {["Node.js", "MongoDB", "Express.js", "Shopify"].map(
                    (skill) => (
                      <span key={skill} className="skill-tag">
                        {skill}
                      </span>
                    )
                  )}
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
