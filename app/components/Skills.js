import { FiCode, FiPenTool, FiSmartphone, FiServer } from "react-icons/fi";

const skills = [
  {
    category: "Frontend Development",
    icon: <FiCode className="w-8 h-8" />,
    items: ["React/Next.js", "Vue.js", "TypeScript", "Tailwind CSS" , "JavaScript", "HTML", "CSS"],
    color: "text-primary",
  },
  {
    category: "UI/UX Design",
    icon: <FiPenTool className="w-8 h-8" />,
    items: ["Figma", "Prototyping", "Design Systems", "User Research", "Wireframing" , "Adobe XD" , "prototyping"],
    color: "text-purple-400",
  },
  {
    category: "API & Data Handling",
    icon: <FiSmartphone className="w-8 h-8" />,
    items: ["JSON Handling", "Fetch API", "Axios", "REST APIs" , "GraphQL", "WebSockets", "Node.js"],
    color: "text-blue-400",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            A comprehensive skill set for full-stack development and design
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {skills.map((skill) => (
            <div
              key={skill.category}
              className="glass-effect rounded-2xl p-6 hover:transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className={`${skill.color} mb-4`}>
                {skill.icon}
              </div>
              
              <h3 className="text-xl font-bold mb-4">
                {skill.category}
              </h3>
              
              <ul className="space-y-3">
                {skill.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center text-text-muted"
                  >
                    <div className="w-2 h-2 rounded-full bg-primary mr-3"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Progress Bars */}
        <div className="mt-12 lg:mt-16 glass-effect rounded-2xl p-6 lg:p-8">
          <h3 className="text-2xl font-bold mb-8">Expertise Level</h3>
          
          <div className="space-y-6">
            {[
              { skill: "React/Next.js", level: "95%" },
              { skill: "UI/UX Design", level: "90%" },
              { skill: "TypeScript", level: "88%" },
              { skill: "Node.js", level: "85%" },
              { skill: "Cloud Platforms", level: "80%" },
            ].map((item) => (
              <div key={item.skill}>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">{item.skill}</span>
                  <span className="text-primary font-semibold">{item.level}</span>
                </div>
                <div className="h-2 bg-surface rounded-full overflow-hidden">
                  <div
                    className="h-full bg-linear-to-r from-primary to-primary-dark rounded-full transition-all duration-1000"
                    style={{ width: item.level }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}