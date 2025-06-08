import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Palette, Zap } from "lucide-react"

const skills = [
  "Python",
  "Java",
  "C",
  "JavaScript",
  "HTML",
  "SQL",
  "CSS",
  "Git",
  "GitHub",
  "C#",
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
                  I am a third-year Computer Engineering student at Marmara University's Faculty of Technology, seeking
                  opportunities to apply my technical knowledge in real-world projects. I am passionate about Software
                  Development, continuously striving to improve myself and stay up to date with the
                  latest technologies.
                </p>
                <p className="text-muted-foreground hover:text-foreground transition-colors duration-200">
                  With my analytical thinking skills, fast-learning ability, and problem-solving mindset, I believe I
                  can adapt to a dynamic work environment and make a meaningful contribution. I aim to contribute to
                  team efforts and gain valuable industry experience.
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
                    <h4 className="font-semibold">Software Development</h4>
                    <p className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">
                      Building applications with Java, Python, and C#. Experience with desktop and web applications.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Data Analysis & Machine Learning</h4>
                    <p className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">
                      Implementing deep learning models for data analysis, achieving high accuracy in classification
                      tasks.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Frontend Development</h4>
                    <p className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">
                      Creating responsive web interfaces using HTML, CSS, and JavaScript with modern development tools.
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
                    <h4 className="font-semibold">Computer Engineering Student</h4>
                    <p className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">Marmara University • 2022 - Present</p>
                    <p className="text-sm text-muted-foreground mt-1 hover:text-foreground transition-colors duration-200">
                      Third-year student at Faculty of Technology, focusing on software development and data analysis.
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
                  <div className="border-l-2 border-blue-500 pl-4">
                    <h4 className="font-semibold">Intern - Frontend Development</h4>
                    <p className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">FLO Mağazacılık A.Ş. • August 2024 - September 2024</p>
                    <p className="text-sm text-muted-foreground mt-1 hover:text-foreground transition-colors duration-200">
                      Enhanced HTML and CSS skills through web development projects, gained hands-on experience in
                      Frontend Design.
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
