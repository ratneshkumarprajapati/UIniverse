"use client"

import type React from "react"

import { useState } from "react"
import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"



interface HeroProps {
  onSearch?: (query: string) => void
  onCategoryChange?: (category: string) => void
}

export function Hero({ onSearch, onCategoryChange }: HeroProps = {}) {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    onSearch?.(searchQuery)
  }

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category)
    onCategoryChange?.(category)
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="space-y-6">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
              Curated UI Resources
            </span>
            <br />
            <span className="text-slate-200">at Your Fingertips</span>
          </h1>

          <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Discover the best design tools, fonts, color palettes, icons, and components to elevate your next project.
            All carefully curated for modern developers and designers.
          </p>

          <div className="pt-8 space-y-6">
            {/* Search Bar */}
            <form onSubmit={handleSearch} className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
                <Input
                  type="text"
                  placeholder="Search resources..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 pr-4 py-4 w-full bg-slate-800 border-slate-700 text-white placeholder-slate-400 focus:border-blue-500 focus:ring-blue-500 rounded-xl text-lg"
                />
                <Button
                  type="submit"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 hover:bg-blue-500 text-white px-6 py-2 rounded-lg transition-colors"
                >
                  Search
                </Button>
              </div>
            </form>

        
          </div>
        </div>
      </div>
    </section>
  )
}
