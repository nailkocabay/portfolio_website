"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, MapPin, Send } from "lucide-react"

export function Contact() {
  return (
    <div id="contact" className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold hover:text-blue-500 transition-colors duration-200">Get In Touch</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto hover:text-foreground transition-colors duration-200">
            I'm always interested in new opportunities and collaborations. Feel free to reach out if you'd like to work
            together!
          </p>
        </div>

        <div className="space-y-6">
          <Card className="hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-500" />
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-muted-foreground hover:text-foreground transition-colors duration-200">nailkocabay0@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-red-500" />
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-muted-foreground hover:text-foreground transition-colors duration-200">Istanbul, Turkey</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
            <CardHeader>
              <CardTitle>Let's Connect</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4 hover:text-foreground transition-colors duration-200">
                I'm currently seeking internship opportunities and open to discussing new projects, creative ideas, or
                opportunities to apply my technical knowledge in real-world scenarios. Whether you're a company
                looking for an intern or a fellow developer wanting to collaborate, I'd love to hear from you.
              </p>
              <div className="space-y-2">
                <p className="text-sm">
                  <strong>Response Time:</strong> Usually within 24 hours
                </p>
                <p className="text-sm">
                  <strong>Availability:</strong> Open to internship and entry-level opportunities
                </p>
                <p className="text-sm">
                  <strong>Languages:</strong> Turkish (Native), English (B2)
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
