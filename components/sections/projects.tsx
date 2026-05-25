import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github } from "lucide-react"

const projects = [
  {
    title: "Agent Network Project",
    description:
      "Designed a multi-agent system for AI-driven fraud detection and financial compliance. Built scalable architecture with domain-specific agents, consensus-based decision pipelines, data pipelines with feature engineering, and parallel processing for large-scale analysis.",
    technologies: ["Python", "Machine Learning", "Multi-Agent Systems", "Data Pipelines"],
  },
  {
    title: "HTTP Web Server Project",
    description:
      "Built a custom HTTP web server from scratch using socket programming, implementing request-response handling, static file serving, and a JSON API endpoint. Containerized the application with Docker following backend architecture principles.",
    technologies: ["Python", "Socket Programming", "Docker", "Backend Development"],
  },
  {
    title: "Portfolio Website",
    description:
      "Developed a modern, responsive portfolio website using Next.js, React, and TypeScript. Built reusable UI components with Tailwind CSS and Radix UI, implemented form validation and data visualizations, and deployed via GitHub and Cloudflare Pages with performance optimization.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/nailkocabay/portfolio_website",
  },
  {
    title: "Suicide Content Analysis Research",
    description:
      "Authored a research paper on detecting suicidal intent in social media posts using deep learning models. Implemented and compared two unused models in literature, achieving 97% accuracy in both models.",
    technologies: ["Python", "Deep Learning", "Data Analysis", "Machine Learning"],
  },
  {
    title: "To Do App",
    description:
      "Built a responsive To-Do List app with React, featuring task creation, completion tracking, and local storage support. Designed with a clean UI and modular component structure.",
    technologies: ["JavaScript", "React", "Web Development"],
    githubUrl: "https://github.com/nailkocabay/To-Do-App_React",
  },
  {
    title: "Travel Reservation App",
    description:
      "A travel planning and booking application that helps users organize their trips by managing reservations, tracking itineraries, and ensuring a seamless travel experience.",
    technologies: ["Java", "JavaFX", "UI/UX Design"],
    githubUrl: "https://github.com/nailkocabay/TravelReservationAppFullVersion",
  },
  {
    title: "Multiplayer Pac-Man Game",
    description:
      "A unique twist on the classic Pac-Man game, where instead of AI-controlled ghosts, real players take control of the ghosts to compete against Pac-Man. Designed and developed with C#.",
    technologies: ["C#", "Game Development", "Multiplayer", "Real-time"],
    githubUrl: "https://github.com/nailkocabay/MultiPlayer-Pac-Man",
  },
  {
    title: "Book Shopping Website",
    description:
      "Developed a comprehensive Book Shopping Website using Java and SQL. Features include user authentication, book catalog management, shopping cart functionality, and order processing.",
    technologies: ["Java", "SQL", "Web Development", "Database Design"],
    githubUrl: "https://github.com/nailkocabay/book-store",
  },
]

export function Projects() {
  return (
    <div id="projects" className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold hover:text-blue-500 transition-colors duration-200">My Projects</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto hover:text-foreground transition-colors duration-200">
            Here are some of the projects I've worked on. Each one represents a unique challenge and learning
            opportunity that has helped me grow as a developer.
          </p>
        </div>

        <div className="space-y-6">
          {projects.map((project, index) => (
            <Card key={index} className="hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
              <div className="flex flex-col md:flex-row">
                <CardHeader className="md:w-1/3">
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="md:w-2/3 space-y-4 pt-6 md:pt-6">
                  <p className="text-muted-foreground text-sm">{project.description}</p>

                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs hover:bg-accent hover:text-accent-foreground transition-colors duration-200">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    {project.githubUrl && (
                      <Button size="sm" variant="outline" className="hover:scale-105 transition-transform duration-200" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="gap-1">
                          <Github className="w-3 h-3" />
                          View Code
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
