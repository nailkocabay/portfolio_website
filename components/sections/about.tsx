import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Palette, Zap } from "lucide-react"

const skills = [
  "Python",
  "Java",
  "C#",
  "React",
  "C",
  "SQL",
  "JavaScript",
  "HTML",
  "CSS",
  "Git",
  "GitHub",
  "MSSQL",
  "Microsoft Azure",
  "Google Cloud Platform",
  "Cursor",
  "Claude",
  "AntiGravity",
]

export function About() {
  return (
    <div id="about" className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold hover:text-blue-500 transition-colors duration-200">About Me</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto hover:text-foreground transition-colors duration-200">
            Learn more about my background, skills, and what drives my passion for development.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <Card className="hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="w-5 h-5" />
                  My Story
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground hover:text-foreground transition-colors duration-200">
                  I am a fourth-year Computer Engineering student at Marmara University with interests in Artificial Intelligence and Full-Stack Development. I build end-to-end applications using modern frontend technologies and backend system design principles.
                </p>
                <p className="text-muted-foreground hover:text-foreground transition-colors duration-200">
                  I am seeking an opportunity to grow as a Full-Stack / AI-oriented Software Engineer and contribute to
                  real-world projects.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Palette className="w-5 h-5" />
                  What I Do
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold">AI & Machine Learning</h4>
                    <p className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">
                      Building ML models, data pipelines, and multi-agent systems for fraud detection and automation in
                      production environments.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Full-Stack Development</h4>
                    <p className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">
                      Developing end-to-end applications with React, Next.js, TypeScript, and backend services following
                      modern architecture principles.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Infrastructure & Backend Systems</h4>
                    <p className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">
                      Working with custom HTTP servers, Docker, cloud platforms, and IT infrastructure including network
                      security and server management.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="w-5 h-5" />
                  Skills & Technologies
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="hover:bg-accent hover:text-accent-foreground transition-colors duration-200">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
              <CardHeader>
                <CardTitle>Education</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="border-l-2 border-purple-500 pl-4">
                    <h4 className="font-semibold">Computer Engineering</h4>
                    <p className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">Marmara University, Istanbul • 2022 - Present</p>
                    <p className="text-sm text-muted-foreground mt-1 hover:text-foreground transition-colors duration-200">
                      Fourth-year student. GPA: 83.8 / 100
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
              <CardHeader>
                <CardTitle>Experience</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="border-l-2 border-green-500 pl-4">
                    <h4 className="font-semibold">AI Engineering Intern</h4>
                    <p className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">Payantis Finansal Teknoloji A.Ş., Istanbul • September 2025 - May 2026</p>
                    <p className="text-sm text-muted-foreground mt-1 hover:text-foreground transition-colors duration-200">
                      Built AI-driven automation tools to streamline engineering workflows. Developed ML models for fraud
                      detection, designed data pipelines for feature engineering and model evaluation, and contributed to a
                      multi-agent fraud detection system with parallel processing. Prototyped and deployed solutions using
                      AI tools and cloud environments.
                    </p>
                  </div>
                  <div className="border-l-2 border-blue-500 pl-4">
                    <h4 className="font-semibold">Engineering Intern</h4>
                    <p className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">JMW Jant Sanayi A.Ş., Umurlu/Aydın • July 2025 - September 2025</p>
                    <p className="text-sm text-muted-foreground mt-1 hover:text-foreground transition-colors duration-200">
                      Worked on network security, network configuration, and Windows Server management. Supported computer
                      hardware tasks across IT infrastructure.
                    </p>
                  </div>
                  <div className="border-l-2 border-purple-500 pl-4">
                    <h4 className="font-semibold">Intern - Frontend Development</h4>
                    <p className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">FLO Mağazacılık A.Ş., Istanbul • August 2024 - September 2024</p>
                    <p className="text-sm text-muted-foreground mt-1 hover:text-foreground transition-colors duration-200">
                      Strengthened HTML and CSS skills by recreating the company homepage with semantic HTML, responsive
                      design principles, and modern UI practices.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
