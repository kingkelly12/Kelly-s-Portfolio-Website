import { motion } from 'framer-motion';
import { 
  Code2, 
  Database, 
  Palette, 
  Globe, 
  Wrench, 
  GitBranch,
  Server,
  Smartphone,
  Cloud,
  TestTube
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Code2,
      color: 'text-blue-500',
      skills: [
        { name: 'React', level: 90, description: 'Building dynamic user interfaces' },
        { name: 'JavaScript', level: 88, description: 'Modern ES6+ features' },
        { name: 'TypeScript', level: 80, description: 'Type-safe development' },
        { name: 'HTML/CSS', level: 92, description: 'Semantic markup & styling' },
        { name: 'Tailwind CSS', level: 85, description: 'Utility-first CSS framework' }
      ]
    },
    {
      title: 'Backend Development',
      icon: Server,
      color: 'text-green-500',
      skills: [
        { name: 'Python', level: 85, description: 'Flask, FastAPI development' },
        { name: 'Flask', level: 80, description: 'RESTful API development' },
        { name: 'Node.js', level: 75, description: 'Server-side JavaScript' },
        { name: 'RESTful APIs', level: 82, description: 'API design & implementation' },
        { name: 'Authentication', level: 78, description: 'JWT, OAuth integration' }
      ]
    },
    {
      title: 'Database & Storage',
      icon: Database,
      color: 'text-purple-500',
      skills: [
        { name: 'PostgreSQL', level: 80, description: 'Relational database design' },
        { name: 'MongoDB', level: 75, description: 'NoSQL document database' },
        { name: 'SQLAlchemy', level: 78, description: 'Python ORM' },
        { name: 'Database Design', level: 82, description: 'Schema optimization' }
      ]
    },
    {
      title: 'Development Tools',
      icon: Wrench,
      color: 'text-orange-500',
      skills: [
        { name: 'Git & GitHub', level: 88, description: 'Version control & collaboration' },
        { name: 'VS Code', level: 90, description: 'Development environment' },
        { name: 'Docker', level: 70, description: 'Containerization basics' },
        { name: 'Postman', level: 85, description: 'API testing & documentation' }
      ]
    },
    {
      title: 'Design & UX',
      icon: Palette,
      color: 'text-pink-500',
      skills: [
        { name: 'UI/UX Design', level: 75, description: 'User-centered design' },
        { name: 'Figma', level: 70, description: 'Design prototyping' },
        { name: 'Responsive Design', level: 88, description: 'Mobile-first approach' },
        { name: 'Accessibility', level: 80, description: 'Inclusive design principles' }
      ]
    },
    {
      title: 'Cloud & Deployment',
      icon: Cloud,
      color: 'text-cyan-500',
      skills: [
        { name: 'Vercel', level: 82, description: 'Frontend deployment' },
        { name: 'Heroku', level: 78, description: 'Full-stack applications' },
        { name: 'Netlify', level: 80, description: 'Static site deployment' },
        { name: 'AWS Basics', level: 65, description: 'Cloud services fundamentals' }
      ]
    }
  ];

  const additionalSkills = [
    'Agile/Scrum', 'Test-Driven Development', 'Code Review', 'Technical Writing',
    'Problem Solving', 'Team Collaboration', 'Continuous Learning', 'Mentoring'
  ];

  return (
    <section id="skills" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-primary bg-clip-text text-transparent">Skills & Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A comprehensive toolkit built through hands-on projects and continuous learning. 
            I'm always expanding my skills to stay current with industry trends.
          </p>
        </motion.div>

        {/* Skills Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: categoryIndex * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                className="gradient-card rounded-2xl p-6 shadow-medium hover-lift"
              >
                {/* Category Header */}
                <div className="flex items-center space-x-3 mb-6">
                  <div className={`p-2 rounded-lg bg-accent ${category.color}`}>
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{category.title}</h3>
                </div>

                {/* Skills List */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: (categoryIndex * 0.1) + (skillIndex * 0.05), duration: 0.6 }}
                      viewport={{ once: true }}
                      className="space-y-2"
                    >
                      {/* Skill Name and Level */}
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-foreground">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>

                      {/* Progress Bar */}
                      <div className="relative h-2 bg-muted rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ delay: (categoryIndex * 0.1) + (skillIndex * 0.05) + 0.3, duration: 1 }}
                          viewport={{ once: true }}
                          className="h-full gradient-primary rounded-full"
                        />
                      </div>

                      {/* Skill Description */}
                      <p className="text-xs text-muted-foreground">{skill.description}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl font-semibold text-foreground mb-8">Additional Skills</h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {additionalSkills.map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                viewport={{ once: true }}
                className="px-4 py-2 bg-accent text-accent-foreground rounded-full text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Learning Goals */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="gradient-card rounded-2xl p-8 shadow-medium max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-semibold text-foreground mb-4">Currently Learning</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              I'm always expanding my skillset. Here's what I'm currently focusing on to stay ahead of the curve.
            </p>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { name: 'Next.js', focus: 'Full-stack React framework' },
                { name: 'GraphQL', focus: 'Modern API development' },
                { name: 'AWS', focus: 'Cloud infrastructure' },
                { name: 'DevOps', focus: 'CI/CD pipelines' },
                { name: 'Mobile Development', focus: 'React Native' },
                { name: 'Machine Learning', focus: 'Python libraries' }
              ].map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-background/50 rounded-lg p-4 border border-border"
                >
                  <h4 className="font-medium text-primary mb-1">{item.name}</h4>
                  <p className="text-xs text-muted-foreground">{item.focus}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;