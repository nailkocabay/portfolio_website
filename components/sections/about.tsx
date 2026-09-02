import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Layers, GraduationCap, Briefcase, Globe, Cpu } from "lucide-react"

const skillCategories = [
  {
    category: "Languages",
    skills: ["Python", "C#", "Java", "C", "SQL", "JavaScript", "TypeScript", "HTML5", "CSS3"],
  },
  {
    category: "AI / ML & Data Science",
    skills: [
      "Machine Learning",
      "Multi-Agent AI",
      "Fraud Detection",
      "Anomaly Detection",
      "Feature Engineering",
      "Clustering",
      "KNN",
      "Recommendation Systems",
      "Pandas",
      "NumPy",
      "scikit-learn",
      "RAPIDS cuML",
      "Dask",
    ],
  },
  {
    category: "Frameworks & Backend Architecture",
    skills: [
      "ASP.NET Core 8",
      "React 18",
      "Next.js",
      "FastAPI",
      "Entity Framework Core",
      "REST APIs",
      "Clean Architecture",
      "CQRS",
      "DDD",
      "MediatR",
      "JWT",
      "RBAC",
      "Socket Programming",
    ],
  },
  {
    category: "Databases & Cloud / DevOps",
    skills: [
      "SQL Server",
      "PostgreSQL",
      "Docker",
      "Docker Compose",
      "Git",
      "GitHub",
      "Microsoft Azure",
      "Google Cloud Platform (GCP)",
    ],
  },
]

export function About() {
  return (
    <div id="about" className="min-h-screen p-6 md:p-12">
      <div className="max-w-5xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">About Me</h1>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Computer Engineering student specializing in AI/ML engineering, backend architecture, and full-stack development.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column: Story & What I Do */}
          <div className="space-y-6">
            <Card className="hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl">
                  <Code className="w-5 h-5 text-blue-500" />
                  My Story
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground leading-relaxed text-sm sm:text-base">
                <p>
                  I am a fourth-year Computer Engineering student at Marmara University with all coursework completed and only a mandatory 18-day internship remaining for graduation (GPA: 83.8 / 100).
                </p>
                <p>
                  My expertise spans Artificial Intelligence & Machine Learning pipelines, backend systems design (Clean Architecture, CQRS, DDD), and responsive full-stack applications. I have hands-on experience building production fraud detection models over 16M+ transactions and multi-agent AI systems.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl">
                  <Cpu className="w-5 h-5 text-purple-500" />
                  What I Do
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-foreground">AI & Machine Learning Engineering</h4>
                    <p className="text-sm text-muted-foreground">
                      Developing end-to-end ML pipelines, feature engineering, card profiling using cuML & MiniBatchKMeans, and multi-agent AI fraud reasoning systems using LLMs and GPU acceleration.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Backend & System Architecture</h4>
                    <p className="text-sm text-muted-foreground">
                      Designing modular microservices and web APIs with ASP.NET Core 8, FastAPI, gRPC, and custom multithreaded HTTP socket servers containerized with Docker.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Full-Stack Development</h4>
                    <p className="text-sm text-muted-foreground">
                      Building modern web interfaces with React, Next.js, and TypeScript, integrated with scalable databases (SQL Server, PostgreSQL) and robust authentication (JWT, RBAC).
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Languages section */}
            <Card className="hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl">
                  <Globe className="w-5 h-5 text-emerald-500" />
                  Languages
                </CardTitle>
              </CardHeader>
              <CardContent className="flex gap-4">
                <div className="flex-1 p-3 rounded-lg border bg-muted/30 text-center">
                  <span className="font-semibold block">Turkish</span>
                  <span className="text-xs text-muted-foreground">Native</span>
                </div>
                <div className="flex-1 p-3 rounded-lg border bg-muted/30 text-center">
                  <span className="font-semibold block">English</span>
                  <span className="text-xs text-muted-foreground">B2 Upper-Intermediate</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column: Skills, Education, Experience */}
          <div className="space-y-6">
            <Card className="hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl">
                  <Layers className="w-5 h-5 text-indigo-500" />
                  Technical Skills
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {skillCategories.map((group) => (
                  <div key={group.category} className="space-y-1.5">
                    <h5 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      {group.category}
                    </h5>
                    <div className="flex flex-wrap gap-1.5">
                      {group.skills.map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-xs font-normal hover:bg-primary/20 transition-colors">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl">
                  <GraduationCap className="w-5 h-5 text-amber-500" />
                  Education
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="border-l-2 border-amber-500 pl-4 space-y-1">
                  <h4 className="font-semibold">Computer Engineering</h4>
                  <p className="text-sm font-medium text-muted-foreground">Marmara University, Istanbul • 2022 – 2026</p>
                  <p className="text-xs text-muted-foreground leading-relaxed pt-1">
                    GPA: <strong>83.8 / 100</strong>. Completed all fourth-year coursework with only a mandatory 18-day internship remaining for graduation.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl">
                  <Briefcase className="w-5 h-5 text-green-500" />
                  Work Experience
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="border-l-2 border-green-500 pl-4 space-y-2">
                  <div className="flex justify-between items-start flex-wrap">
                    <h4 className="font-semibold">AI Engineering Intern</h4>
                    <span className="text-xs text-muted-foreground font-mono">Sep 2025 – May 2026</span>
                  </div>
                  <p className="text-xs font-medium text-blue-600 dark:text-blue-400">Payantis Finansal Teknoloji A.Ş., İstanbul</p>
                  <ul className="text-xs text-muted-foreground space-y-1 list-disc list-inside leading-relaxed">
                    <li>Developed end-to-end machine learning pipelines for fraud detection across <strong>16M+ transactions</strong>.</li>
                    <li>Engineered <strong>13 behavioral features</strong> capturing transaction velocity, spending patterns, temporal behavior, and geographic/MCC changes.</li>
                    <li>Applied MiniBatchKMeans and GPU-accelerated <strong>RAPIDS cuML KMeans</strong> for card behavioral profiling.</li>
                    <li>Built a <strong>multi-agent AI fraud reasoning system</strong> optimized using Pandas, Dask, parallel processing, and GPU acceleration.</li>
                  </ul>
                </div>

                <div className="border-l-2 border-blue-500 pl-4 space-y-2">
                  <div className="flex justify-between items-start flex-wrap">
                    <h4 className="font-semibold">Engineering Intern</h4>
                    <span className="text-xs text-muted-foreground font-mono">Jul 2025 – Sep 2025</span>
                  </div>
                  <p className="text-xs font-medium text-blue-600 dark:text-blue-400">JMW Jant Sanayi A.Ş., Aydın</p>
                  <ul className="text-xs text-muted-foreground space-y-1 list-disc list-inside leading-relaxed">
                    <li>Worked on Windows Server administration, system configuration, network security, and enterprise IT infrastructure.</li>
                    <li>Assisted with IT system monitoring, server management, troubleshooting, and network issue investigation.</li>
                  </ul>
                </div>

                <div className="border-l-2 border-purple-500 pl-4 space-y-2">
                  <div className="flex justify-between items-start flex-wrap">
                    <h4 className="font-semibold">Intern - Frontend Development</h4>
                    <span className="text-xs text-muted-foreground font-mono">Aug 2024 – Sep 2024</span>
                  </div>
                  <p className="text-xs font-medium text-blue-600 dark:text-blue-400">FLO Mağazacılık A.Ş., İstanbul</p>
                  <ul className="text-xs text-muted-foreground space-y-1 list-disc list-inside leading-relaxed">
                    <li>Developed responsive web page components using HTML5 and CSS3 applying semantic HTML & CSS layout techniques.</li>
                    <li>Recreated company web interface components with modern UI practices and responsive layout principles.</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

