// app/components/About.js
import { FiAward, FiBriefcase, FiCalendar, FiMapPin, FiUser } from "react-icons/fi";
import Image from "next/image";

export default function About() {
  const experiences = [
    {
      year: "2024 - Present",
      role: "Frontend Developer",
      company: "Digital Solutions Ltd.",
      description: "Built responsive web applications and collaborated with design teams on UI/UX.",
    },
    {
      year: "2022 - 2024",
      role: "Web Developer",
      company: "Creative Agency Co.",
      description: "Developed websites for various clients focusing on performance and user experience.",
    },
  ];

  const education = [
    {
      degree: "Matriculation in Computer Science",
      institution: "Ismail Allah Wala Najam Girls Secondary School",
      year: "2021",
    },
    {
      degree: "Intermediate in Commerce",
      institution: "Goverment Collage Of Commerce And Economics",
      year: "2023",
    },
  ];

  const stats = [
    { label: "Projects Completed", value: "50+", icon: <FiBriefcase /> },
    { label: "Happy Clients", value: "35+", icon: <FiUser /> },
    { label: "Years Experience", value: "5+", icon: <FiCalendar /> },
    { label: "Awards Won", value: "12", icon: <FiAward /> },
  ];

  return (
    <section id="about" className="py-20 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-9">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-lg text-text-muted max-w-3xl mx-auto">
            Passionate developer creating digital experiences that make a difference
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Column - Image & Personal Info */}
          <div className="lg:w-2/5">
            <div className="relative mb-8">
              <div className="relative z-10 rounded-2xl overflow-hidden">
                <div className="aspect-square bg-linear-to-br from-surface to-secondary rounded-2xl flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-92 h-92 mx-auto mb-5 rounded-full bg-linear-to-r from-primary to-accent flex items-center justify-center">
                      <img className="text-4xl font-bold text-background" src="/duapic.jpg" alt="Dua Ali" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Dua Ali</h3>
                    <p className="text-primary font-medium">Frontend Developer</p>
                  </div>
                </div>
                <div className="absolute -inset-4 bg-linear-to-r from-primary to-accent rounded-2xl opacity-20 blur-xl -z-10"></div>
              </div>
            </div>

            {/* Personal Info */}
            <div className="glass-effect rounded-2xl p-6 mb-8">
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <FiUser className="mr-3 text-primary" />
                Personal Info
              </h3>
              <div className="space-y-4">
                <div className="flex items-center text-text-muted">
                  <FiBriefcase className="mr-3 text-primary" />
                  <span className="font-medium mr-2">Position:</span>
                  <span>Junior Developer</span>
                </div>
                <div className="flex items-center text-text-muted">
                  <FiMapPin className="mr-3 text-primary" />
                  <span className="font-medium mr-2">Location:</span>
                  <span>Karachi, Pakistan</span>
                </div>
                <div className="flex items-center text-text-muted">
                  <FiCalendar className="mr-3 text-primary" />
                  <span className="font-medium mr-2">Experience:</span>
                  <span>2+ Years</span>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="glass-effect rounded-2xl p-4 text-center"
                >
                  <div className="text-primary mb-2 flex justify-center">
                    <div className="text-2xl">{stat.icon}</div>
                  </div>
                  <div className="text-2xl font-bold text-text mb-1">{stat.value}</div>
                  <div className="text-sm text-text-muted">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Bio & Experience */}
          <div className="lg:w-3/5">
            {/* Bio */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6">My Journey</h3>
              <div className="space-y-4 text-text-muted">
                <p>
                  Hello! I'm Dua, a passionate frontend developer with over 2 years of experience creating
                  digital solutions. My journey began with a curiosity about how websites work, which evolved
                  into a career building applications that solve real-world problems.
                </p>
                <p>
                  I specialize in modern web technologies like React, Next.js, and Node.js, with a strong focus
                  on creating responsive, accessible, and performant applications. I believe in writing clean,
                  maintainable code and following best practices.
                </p>
                <p>
                  When I'm not coding, you can find me exploring new technologies, contributing to open-source
                  projects, or sharing knowledge through tech blogs and workshops.
                </p>
              </div>
            </div>

            {/* Experience Timeline */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-8">Work Experience</h3>
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border"></div>
                
                <div className="space-y-8">
                  {experiences.map((exp, index) => (
                    <div key={index} className="relative">
                      {/* Timeline dot */}
                      <div className="absolute left-6 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background"></div>
                      
                      <div className="ml-12">
                        <div className="glass-effect rounded-2xl p-6 hover:transform hover:-translate-y-1 transition-all duration-300">
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                            <h4 className="text-xl font-bold text-text">{exp.role}</h4>
                            <span className="inline-flex items-center px-3 py-1 rounded-full bg-surface text-primary text-sm font-medium mt-2 sm:mt-0">
                              {exp.year}
                            </span>
                          </div>
                          <div className="mb-3">
                            <span className="text-primary font-medium">{exp.company}</span>
                          </div>
                          <p className="text-text-muted">{exp.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Education */}
            <div>
              <h3 className="text-2xl font-bold mb-8">Education</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {education.map((edu, index) => (
                  <div
                    key={index}
                    className="glass-effect rounded-2xl p-6 hover:transform hover:-translate-y-1 transition-all duration-300"
                  >
                    <h4 className="text-xl font-bold text-text mb-2">{edu.degree}</h4>
                    <div className="text-primary font-medium mb-2">{edu.institution}</div>
                    <div className="text-text-muted">Graduated {edu.year}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}