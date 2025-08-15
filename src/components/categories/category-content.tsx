"use client"

import { Search, Grid, List } from "lucide-react"
import { CategoryResourceCard } from "./category-resource-card"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Categories } from "@/types/categoryType"
import { Resource } from "@/types/resourceType"

// interface Category {
//   id: string
//   name: string
//   description: string
//   count: number
//   icon: string
// }

// interface Resource {
//   id: number
//   name: string
//   description: string
//   url: string
//   category: string
//   icon: string
//   featured: boolean
//   tags?: string[]
// }

interface CategoryContentProps {
  category: Categories
  resources: Resource[]
  onToggleSidebar: () => void
}

export function CategoryContent({ category, resources, onToggleSidebar }: CategoryContentProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [sortBy, setSortBy] = useState<"name" | "featured">("featured")

  const filteredResources = resources
    .filter(
      (resource) =>
        resource.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        resource.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        resource.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase())),
    )
    .sort((a, b) => {
      if (sortBy === "featured") {
        if (a.featured && !b.featured) return -1
        if (!a.featured && b.featured) return 1
        return a.name.localeCompare(b.name)
      }
      return a.name.localeCompare(b.name)
    })

  const featuredResources = filteredResources.filter((resource) => resource.featured)
  const regularResources = filteredResources.filter((resource) => !resource.featured)

  return (
    <div className="p-6 lg:p-8">
      {/* Category Header */}
      <div className="mb-8">
        <div className="flex items-center space-x-4 mb-4">
          {category && (
            <>
              <div className="text-4xl">{category.icon}</div>
              <div>
                <h1 className="text-3xl font-bold text-white">{category.name}</h1>
                <p className="text-slate-400">{category.description}</p>
              </div>
            </>
          )}
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          <div className="flex-1 max-w-md">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
              <Input
                type="text"
                placeholder="Search resources..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-slate-800 border-slate-700 text-white placeholder-slate-400 focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="flex items-center space-x-3">
            {/* Sort Dropdown */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as "name" | "featured")}
              className="bg-slate-800 border border-slate-700 text-white rounded-lg px-3 py-2 text-sm focus:border-blue-500 focus:ring-blue-500"
            >
              <option value="featured">Featured First</option>
              <option value="name">Alphabetical</option>
            </select>

            {/* View Mode Toggle */}
            <div className="flex bg-slate-800 rounded-lg p-1 border border-slate-700">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded-md transition-colors ${
                  viewMode === "grid" ? "bg-blue-600 text-white" : "text-slate-400 hover:text-white"
                }`}
              >
                <Grid className="h-4 w-4" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 rounded-md transition-colors ${
                  viewMode === "list" ? "bg-blue-600 text-white" : "text-slate-400 hover:text-white"
                }`}
              >
                <List className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Results Count */}
      <div className="mb-6">
        <p className="text-slate-400 text-sm">
          Showing {filteredResources.length} of {resources.length} resources
          {searchQuery && ` for "${searchQuery}"`}
        </p>
      </div>

      {/* Resources */}
      <div className="space-y-12">
        {/* Featured Resources */}
        {featuredResources.length > 0 && (
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <h2 className="text-xl font-bold text-white">Featured Resources</h2>
              <div className="h-px bg-gradient-to-r from-blue-500 to-transparent flex-1"></div>
            </div>
            <div
              className={`grid gap-6 ${
                viewMode === "grid" ? "grid-cols-1 md:grid-cols-2 xl:grid-cols-3" : "grid-cols-1"
              }`}
            >
              {featuredResources.map((resource) => (
                <CategoryResourceCard key={resource.id} resource={resource} featured viewMode={viewMode} />
              ))}
            </div>
          </div>
        )}

        {/* Regular Resources */}
        {regularResources.length > 0 && (
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <h2 className="text-xl font-bold text-white">
                {category?.name === "All Resources" ? "All Resources" : `${category?.name} Resources`}
              </h2>
              <div className="h-px bg-gradient-to-r from-slate-600 to-transparent flex-1"></div>
            </div>
            <div
              className={`grid gap-6 ${
                viewMode === "grid" ? "grid-cols-1 md:grid-cols-2 xl:grid-cols-3" : "grid-cols-1"
              }`}
            >
              {regularResources.map((resource) => (
                <CategoryResourceCard key={resource.id} resource={resource} viewMode={viewMode} />
              ))}
            </div>
          </div>
        )}

        {/* No Results */}
        {filteredResources.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-slate-300 mb-2">No resources found</h3>
            <p className="text-slate-500 mb-4">
              {searchQuery
                ? `No resources match "${searchQuery}" in this category`
                : "No resources available in this category yet"}
            </p>
            {searchQuery && (
              <Button
                onClick={() => setSearchQuery("")}
                variant="outline"
                className="border-slate-600 text-slate-300 hover:bg-slate-800 bg-transparent"
              >
                Clear search
              </Button>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
