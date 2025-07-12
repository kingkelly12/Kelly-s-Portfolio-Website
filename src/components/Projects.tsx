import { motion } from 'framer-motion';
import { ExternalLink, Github, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Projects = () => {
  const projects = [
    {
      title: 'TaskFlow - Project Management App',
      description: 'A comprehensive project management application built with React and Python Flask. Features real-time collaboration, task tracking, and team analytics.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop',
      technologies: ['React', 'TypeScript', 'Python', 'Flask', 'PostgreSQL', 'Socket.io'],
      features: [
        'Real-time collaboration',
        'Kanban board interface',
        'Team analytics dashboard',
        'File sharing system'
      ],
      githubUrl: 'https://github.com/kingkelly12/taskflow',
      liveUrl: 'https://taskflow-demo.vercel.app',
      category: 'Full-Stack'
    },
    {
      title: 'WeatherWise - Climate Dashboard',
      description: 'A modern weather application with interactive maps, detailed forecasts, and climate data visualization. Built with React and integrated with multiple weather APIs.',
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&h=600&fit=crop',
      technologies: ['React', 'JavaScript', 'Chart.js', 'OpenWeatherMap API', 'Tailwind CSS'],
      features: [
        'Interactive weather maps',
        '7-day detailed forecasts',
        'Climate data visualization',
        'Location-based alerts'
      ],
      githubUrl: 'https://github.com/kingkelly12/weatherwise',
      liveUrl: 'https://weatherwise-demo.vercel.app',
      category: 'Frontend'
    },
    {
      title: 'BookHub - Community Library API',
      description: 'A RESTful API for a community book sharing platform. Handles user authentication, book management, and borrowing systems with comprehensive documentation.',
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=600&fit=crop',
      technologies: ['Python', 'Flask', 'SQLAlchemy', 'JWT', 'Swagger', 'PostgreSQL'],
      features: [
        'RESTful API design',
        'JWT authentication',
        'Automated testing suite',
        'API documentation'
      ],
      githubUrl: 'https://github.com/kingkelly12/bookhub-api',
      liveUrl: 'https://bookhub-api.herokuapp.com/docs',
      category: 'Backend'
    },
    {
      title: 'ExpenseTracker - Personal Finance',
      description: 'A mobile-responsive expense tracking application with budget planning, spending analytics, and financial goal setting features.',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Chart.js', 'PWA'],
      features: [
        'Budget planning tools',
        'Expense categorization',
        'Financial analytics',
        'Mobile-responsive design'
      ],
      githubUrl: 'https://github.com/kingkelly12/expense-tracker',
      liveUrl: 'https://expense-tracker-kelly.vercel.app',
      category: 'Full-Stack'
    }
  ];

  const categories = ['All', 'Full-Stack', 'Frontend', 'Backend'];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="projects" className="py-20 bg-background">
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
            <span className="gradient-primary bg-clip-text text-transparent">Featured Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A showcase of my recent work, demonstrating proficiency across the full development stack. 
            Each project represents real-world solutions built with modern technologies.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              className={`transition-all duration-300 ${
                selectedCategory === category
                  ? 'gradient-primary text-primary-foreground shadow-medium'
                  : 'border-primary text-primary hover:bg-primary hover:text-primary-foreground'
              }`}
            >
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className="gradient-card rounded-2xl overflow-hidden shadow-medium hover-lift group"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Quick Action Buttons */}
                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-background/90 backdrop-blur-sm rounded-full text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Github size={16} />
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-background/90 backdrop-blur-sm rounded-full text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <ExternalLink size={16} />
                  </a>
                </div>

                {/* Category Badge */}
                <div className="absolute bottom-4 left-4">
                  <Badge variant="secondary" className="bg-background/90 backdrop-blur-sm">
                    {project.category}
                  </Badge>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-foreground mb-3">Key Features:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {project.features.map((feature) => (
                      <div key={feature} className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <ChevronRight size={12} className="text-primary" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-foreground mb-3">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="border-primary/20 text-primary bg-primary/5"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    asChild
                    className="gradient-primary text-primary-foreground hover:opacity-90 transition-opacity flex-1"
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={16} className="mr-2" />
                      Live Demo
                    </a>
                  </Button>
                  
                  <Button
                    variant="outline"
                    asChild
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground flex-1"
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github size={16} className="mr-2" />
                      View Code
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* More Projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground mb-6">
            Want to see more of my work? Check out my GitHub for additional projects and contributions.
          </p>
          <Button
            variant="outline"
            size="lg"
            asChild
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:shadow-medium"
          >
            <a href="https://github.com/kingkelly12" target="_blank" rel="noopener noreferrer">
              <Github size={20} className="mr-2" />
              View All Projects on GitHub
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

// Add useState import
import { useState } from 'react';

export default Projects;