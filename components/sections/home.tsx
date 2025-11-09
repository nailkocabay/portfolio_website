import { Button } from "@/components/ui/button"
import { ArrowDown, Download } from "lucide-react"
import Link from "next/link"

export function Home() {
  return (
    <div id="home" className="min-h-screen flex items-center justify-center p-8">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent hover:from-blue-600 hover:to-purple-700 transition-all duration-300">
            Hello, I'm Nail Kocabay
          </h1>
          <h2 className="text-xl md:text-2xl text-muted-foreground hover:text-foreground transition-colors duration-200">
            Computer Engineering Student & AI Engineer & Software Developer
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto hover:text-foreground transition-colors duration-200">
            Fourth-year Computer Engineering student at Marmara University, passionate about Artificial Intelligence and intelligent systems. I continuously strive to improve myself, explore cutting-edge AI technologies, and apply them to real-world solutions.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="gap-2 hover:scale-105 transition-transform duration-200" asChild>
            <a href="/resume.pdf" download="CV">
              <Download className="w-4 h-4" />
              Download Resume
            </a>
          </Button>
          <Button variant="outline" size="lg" className="gap-2 hover:scale-105 transition-transform duration-200" asChild>
            <Link href="/projects">
              <ArrowDown className="w-4 h-4" />
              View My Projects
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
