import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink, Sparkles } from "lucide-react"

interface Project {
  title: string
  description: string
  technologies: string[]
  githubUrl?: string
  secondGithubUrl?: string
  secondGithubLabel?: string
  highlight?: string
  category: string
}

const projects: Project[] = [
  {
    title: "Okey Game Analysis – Computer Vision & Optimization",
    description:
      "Developed an end-to-end Okey tile detection and classification pipeline using OpenCV, YOLOv8-Nano, and ResNet-18. Created a dataset of 219 images with 4,432 annotations across 55 classes. Implemented a DFS algorithm with memoization for tile-hand optimization with sub-10 ms response time and integrated into a full web app.",
    highlight: "Achieved 99.4% mAP50, 97.26% classification accuracy & sub-10 ms DFS hand optimization response.",
    technologies: ["OpenCV", "YOLOv8-Nano", "ResNet-18", "DFS Memoization", "Python", "Flask", "Next.js", "TypeScript", "REST APIs"],
    category: "Computer Vision & AI",
  },
  {
    title: "AI-Powered Product Image Generation System",
    description:
      "Developed a local GPU-based generative AI application transforming a single product image into front, side, and isometric views. Integrated Qwen Image Edit, ComfyUI, VAE, CLIP, UNET, Lightning LoRA, and AuraFlow. Built a React 18 & Vite frontend with WebSocket progress tracking.",
    highlight: "Generates 3 product views locally in 30–60 seconds per product without paid cloud APIs.",
    technologies: ["Generative AI", "Qwen Image Edit", "ComfyUI", "React 18", "Vite", "WebSocket", "CLIP", "UNET", "LoRA", "AuraFlow"],
    category: "Generative AI",
  },
  {
    title: "Multi-Agent Fraud Reasoning System",
    description:
      "Designed specialized AI agents for data analysis, financial reasoning, legal analysis, and final decision making using transaction history, 13 engineered behavioral features, and card-level clustering. Built parallel data reasoning pipelines with LLMs, Pandas, and Dask.",
    highlight: "Achieved 71.43% precision, 100% recall, 83.33% binary F1, and 79.17% macro F1.",
    technologies: ["Python", "Multi-Agent AI", "LLMs", "Fraud Reasoning", "cuML", "Pandas", "Dask", "scikit-learn"],
    category: "AI / ML",
  },
  {
    title: "Spotify Music Recommendation Platform",
    description:
      "Developed a content-based recommendation platform using Python, FastAPI, scikit-learn, Pandas, and NumPy. Cleaned a 114K+ track dataset down to 89,740 usable records. Implemented a KNN recommendation engine using cosine distance, feature scaling, and 10 audio features.",
    highlight: "Cleaned 114K+ tracks to 89,740 usable records; built 10-feature KNN recommendation engine.",
    technologies: ["Python", "FastAPI", "scikit-learn", "Pandas", "NumPy", "KNN Engine", "Recommendation Systems"],
    githubUrl: "https://github.com/nailkocabay/spotify-recommendation-platform",
    category: "AI / ML",
  },
  {
    title: "Full-Stack E-Commerce Platform",
    description:
      "Developed a full-stack e-commerce application using ASP.NET Core 8, React 18, SQL Server, and Entity Framework Core. Applied Clean Architecture, CQRS, Domain-Driven Design (DDD), MediatR, and FluentValidation. Implemented JWT authentication with RBAC and containerized with Docker.",
    technologies: [
      "ASP.NET Core 8",
      "React 18",
      "Entity Framework Core",
      "Clean Architecture",
      "CQRS",
      "DDD",
      "MediatR",
      "Docker",
      "JWT",
      "SQL Server",
    ],
    githubUrl: "https://github.com/nailkocabay/E-Commerce",
    category: "Full-Stack",
  },
  {
    title: "HTTP Web Server Project",
    description:
      "Built an HTTP web server from scratch using Python socket programming supporting multithreaded client connections. Implemented static file serving, MIME type detection, JSON APIs, structured logging, and HTTP error handling with Docker containerization.",
    technologies: ["Python", "Socket Programming", "Docker", "Multithreading", "HTTP Protocol"],
    githubUrl: "https://github.com/nailkocabay/Docker_HTTP_Server",
    category: "Backend Systems",
  },
  {
    title: "University Library REST & gRPC API",
    description:
      "Microservices ecosystem for university library management featuring OpenAPI 3.0.3 REST API specifications and high-performance gRPC protocol buffer communication services.",
    technologies: ["Python", "FastAPI", "gRPC", "OpenAPI 3.0", "Protocol Buffers", "REST API"],
    githubUrl: "https://github.com/nailkocabay/university-library-api",
    secondGithubUrl: "https://github.com/nailkocabay/grpc_university",
    secondGithubLabel: "gRPC Repository",
    category: "Backend Systems",
  },
  {
    title: "Portfolio Website",
    description:
      "Developed a modern, responsive portfolio website using Next.js, React 18, and TypeScript. Built reusable UI components with Tailwind CSS and Radix UI primitives with smooth theme switching and responsive sidebar layout.",
    technologies: ["Next.js", "React 18", "TypeScript", "Tailwind CSS", "Radix UI"],
    githubUrl: "https://github.com/nailkocabay/portfolio_website",
    category: "Full-Stack",
  },
  {
    title: "Suicide Content Analysis Research",
    description:
      "Authored a research paper on detecting suicidal intent in social media posts using deep learning models. Implemented and compared two novel models in literature, achieving 97% accuracy in both models.",
    highlight: "Achieved 97% accuracy using deep learning models on social media text data.",
    technologies: ["Python", "Deep Learning", "NLP", "Machine Learning", "Data Analysis"],
    category: "AI / ML Research",
  },
  {
    title: "Multiplayer Pac-Man Game",
    description:
      "A unique twist on the classic Pac-Man game where real human players control the ghosts to compete against Pac-Man in real time. Designed and developed with C#.",
    technologies: ["C#", "Game Development", "Multiplayer", "Real-Time"],
    githubUrl: "https://github.com/nailkocabay/MultiPlayer-Pac-Man",
    category: "Software Development",
  },
  {
    title: "Book Shopping Website",
    description:
      "Developed a comprehensive book store web application using Java and SQL. Features user authentication, book catalog browsing, shopping cart management, and order processing pipelines.",
    technologies: ["Java", "SQL", "Database Design", "Web Development"],
    githubUrl: "https://github.com/nailkocabay/book-store",
    category: "Full-Stack",
  },
  {
    title: "Travel Reservation App",
    description:
      "A desktop travel planning and booking application built with Java and JavaFX that helps users organize trips, manage bookings, and track travel itineraries.",
    technologies: ["Java", "JavaFX", "Desktop App", "UI/UX Design"],
    githubUrl: "https://github.com/nailkocabay/TravelReservationAppFullVersion",
    category: "Software Development",
  },
  {
    title: "To-Do App (React)",
    description:
      "Responsive task management application built with React featuring task creation, status filtering, completion tracking, and browser local storage persistence.",
    technologies: ["JavaScript", "React", "HTML/CSS", "Web Development"],
    githubUrl: "https://github.com/nailkocabay/To-Do-App_React",
    category: "Frontend",
  },
]

export function Projects() {
  return (
    <div id="projects" className="min-h-screen p-6 md:p-12">
      <div className="max-w-6xl mx-auto space-y-10">
        <div className="text-center space-y-4">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">Featured Projects</h1>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my AI/ML implementations, full-stack platforms, backend microservices, and software engineering projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="flex flex-col justify-between hover:shadow-xl hover:border-primary/40 transition-all duration-300">
              <CardHeader className="space-y-2 pb-3">
                <div className="flex justify-between items-start gap-2">
                  <Badge variant="outline" className="text-xs font-medium text-blue-600 dark:text-blue-400 border-blue-500/30">
                    {project.category}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold">{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 flex-1 flex flex-col justify-between pt-0">
                <div className="space-y-3">
                  <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {project.highlight && (
                    <div className="flex items-center gap-1.5 p-2 rounded bg-amber-500/10 text-amber-700 dark:text-amber-300 text-xs font-medium border border-amber-500/20">
                      <Sparkles className="w-3.5 h-3.5 shrink-0" />
                      <span>{project.highlight}</span>
                    </div>
                  )}
                </div>

                <div className="space-y-4 pt-4 border-t">
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-[11px] font-normal">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2 pt-1">
                    {project.githubUrl && (
                      <Button size="sm" variant="outline" className="h-8 text-xs gap-1.5 hover:scale-105 transition-transform" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="w-3.5 h-3.5" />
                          <span>Code Repository</span>
                        </a>
                      </Button>
                    )}

                    {project.secondGithubUrl && (
                      <Button size="sm" variant="outline" className="h-8 text-xs gap-1.5 hover:scale-105 transition-transform" asChild>
                        <a href={project.secondGithubUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-3.5 h-3.5" />
                          <span>{project.secondGithubLabel || "Repository"}</span>
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

