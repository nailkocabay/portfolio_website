import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Download, Sparkles } from "lucide-react"
import Link from "next/link"

export function Home() {
  return (
    <div id="home" className="min-h-screen flex flex-col items-center justify-center p-6 md:p-12 relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/10 dark:bg-blue-500/15 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-500/10 dark:bg-purple-500/15 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/10 text-blue-600 dark:text-blue-400 text-sm font-medium transition-all hover:border-blue-500/40">
          <Sparkles className="w-4 h-4 animate-pulse" />
          <span>Marmara University • Computer Engineering</span>
        </div>

        <div className="space-y-4">
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 dark:from-blue-400 dark:via-purple-400 dark:to-indigo-400 bg-clip-text text-transparent pb-1">
            Hello, I'm Nail Kocabay
          </h1>
          <h2 className="text-xl sm:text-2xl font-semibold text-muted-foreground">
            AI Engineer & Full-Stack / Backend Developer
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Computer Engineering student building scalable AI systems, high-throughput machine learning data pipelines across 16M+ transactions, multi-agent LLM reasoning solutions, and robust full-stack web applications.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 max-w-xl mx-auto pt-2">
          {["AI & Machine Learning", "Backend Systems", "Full-Stack Web", "Multi-Agent AI", "Data Pipelines"].map((tag) => (
            <Badge key={tag} variant="secondary" className="px-3 py-1 text-xs font-medium bg-secondary/60 hover:bg-secondary transition-colors">
              {tag}
            </Badge>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Button size="lg" className="gap-2 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-[1.02] transition-all duration-200" asChild>
            <a href="/resume.pdf" download="Nail_Kocabay_Resume.pdf">
              <Download className="w-4 h-4" />
              Download Resume
            </a>
          </Button>
          <Button variant="outline" size="lg" className="gap-2 hover:scale-[1.02] transition-all duration-200" asChild>
            <Link href="/projects">
              <span>View Projects</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

