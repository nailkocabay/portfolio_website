"use client"

import type React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, MapPin, Phone, Linkedin, Github, Globe, CheckCircle2 } from "lucide-react"

export function Contact() {
  return (
    <div id="contact" className="min-h-screen p-6 md:p-12">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">Get In Touch</h1>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm currently seeking AI Engineering, Backend, or Full-Stack Software Engineering roles. Feel free to reach out via email or connect on LinkedIn and GitHub!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-xl">Contact Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground font-medium">Email</p>
                  <a href="mailto:nailkocabay0@gmail.com" className="text-sm font-semibold hover:text-blue-500 transition-colors">
                    nailkocabay0@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center text-green-500 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground font-medium">Phone</p>
                  <a href="tel:+905422316191" className="text-sm font-semibold hover:text-green-500 transition-colors">
                    +90 542 231 61 91
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-500 shrink-0">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground font-medium">LinkedIn</p>
                  <a href="https://linkedin.com/in/nail-kocabay" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold hover:text-purple-500 transition-colors">
                    linkedin.com/in/nail-kocabay
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-slate-500/10 flex items-center justify-center text-foreground shrink-0">
                  <Github className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground font-medium">GitHub</p>
                  <a href="https://github.com/nailkocabay" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold hover:text-blue-500 transition-colors">
                    github.com/nailkocabay
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground font-medium">Location</p>
                  <p className="text-sm font-semibold">İstanbul, Türkiye</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
            <CardHeader>
              <CardTitle className="text-xl">Status & Availability</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm">
              <div className="p-3 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-700 dark:text-blue-300 space-y-1">
                <div className="flex items-center gap-2 font-semibold text-xs uppercase tracking-wider">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Graduation Status</span>
                </div>
                <p className="text-xs leading-relaxed">
                  Marmara University Computer Engineering student. All 4th-year coursework completed, only mandatory 18-day internship remaining.
                </p>
              </div>

              <div className="space-y-2 pt-2">
                <div>
                  <span className="text-muted-foreground block text-xs">Open To:</span>
                  <span className="font-semibold text-foreground text-sm">Full-Time, Internship, & Entry-Level Software Engineering Roles</span>
                </div>
                <div>
                  <span className="text-muted-foreground block text-xs">Core Focus:</span>
                  <span className="font-medium text-foreground text-xs">AI/ML Engineering, Backend Systems, Full-Stack Development</span>
                </div>
                <div>
                  <span className="text-muted-foreground block text-xs">Languages:</span>
                  <span className="font-medium text-foreground text-xs">Turkish (Native), English (B2 Upper-Intermediate)</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

