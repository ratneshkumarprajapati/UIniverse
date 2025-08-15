"use client"

import { useState, useMemo } from "react"
import { ResourceCard } from "./resource-card"
import { Hero } from "./hero"
import { useGetResourcesQuery } from "@/lib/redux/services/resourceApi"
import { Resource } from "@/types/resourceType"
// AIzaSyCOU8lKAKIu57v7LZZQWNpVRktGF5LS6wU
// const resources = [
//   {
//     id: 1,
//     name: "Google Fonts",
//     description: "Open source fonts for web and print design",
//     url: "https://fonts.google.com",
//     category: "Fonts",
//     icon: "🔤",
//     featured: true,
//   },
//   {
//     id: 2,
//     name: "Coolors",
//     description: "Generate perfect color palettes for your designs",
//     url: "https://coolors.co",
//     category: "Colors",
//     icon: "🎨",
//     featured: true,
//   },
//   {
//     id: 3,
//     name: "Heroicons",
//     description: "Beautiful hand-crafted SVG icons by Tailwind CSS",
//     url: "https://heroicons.com",
//     category: "Icons",
//     icon: "⭐",
//     featured: false,
//   },
//   {
//     id: 4,
//     name: "uiGradients",
//     description: "Beautiful color gradients for designers and developers",
//     url: "https://uigradients.com",
//     category: "Gradients",
//     icon: "🌈",
//     featured: false,
//   },
//   {
//     id: 5,
//     name: "Tailwind UI",
//     description: "Beautiful UI components built with Tailwind CSS",
//     url: "https://tailwindui.com",
//     category: "Components",
//     icon: "🧩",
//     featured: true,
//   },
//   {
//     id: 6,
//     name: "Figma",
//     description: "Collaborative interface design tool",
//     url: "https://figma.com",
//     category: "Tools",
//     icon: "🎯",
//     featured: false,
//   },
//   {
//     id: 7,
//     name: "Feather Icons",
//     description: "Simply beautiful open source icons",
//     url: "https://feathericons.com",
//     category: "Icons",
//     icon: "🪶",
//     featured: false,
//   },
//   {
//     id: 8,
//     name: "Adobe Fonts",
//     description: "Thousands of fonts from Adobe and partners",
//     url: "https://fonts.adobe.com",
//     category: "Fonts",
//     icon: "📝",
//     featured: false,
//   },
//   {
//     id: 9,
//     name: "Mesh Gradients",
//     description: "Generate beautiful mesh gradients",
//     url: "https://meshgradient.com",
//     category: "Gradients",
//     icon: "🕸️",
//     featured: false,
//   },
//   {
//     id: 10,
//     name: "Shadcn/ui",
//     description: "Beautifully designed components built with Radix UI",
//     url: "https://ui.shadcn.com",
//     category: "Components",
//     icon: "⚡",
//     featured: true,
//   },
//   {
//     id: 11,
//     name: "Palette Generator",
//     description: "Create color palettes from images",
//     url: "https://palettegenerator.com",
//     category: "Colors",
//     icon: "🖼️",
//     featured: false,
//   },
//   {
//     id: 12,
//     name: "Framer",
//     description: "Interactive design and prototyping tool",
//     url: "https://framer.com",
//     category: "Tools",
//     icon: "🚀",
//     featured: false,
//   },
// ]
export function ResourceGrid() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const { data, isLoading, isError } = useGetResourcesQuery(selectedCategory);

  const [searchQuery, setSearchQuery] = useState("");

  // Normalize the resources from API or fallback
  const allResources = useMemo(() => {
    return Array.isArray(data) ? data : [];
  }, [data]);

  // Apply search and category filters
  const filteredResources = useMemo(() => {
    return allResources.filter((resource) => {
      const name = resource.name?.toLowerCase() ?? "";
      const description = resource.description?.toLowerCase() ?? "";
      const searchTerm = searchQuery.toLowerCase();

      const matchesSearch =
        name.includes(searchTerm) || description.includes(searchTerm);
      const matchesCategory =
        selectedCategory === "All" || resource.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory, allResources]);

  // Separate featured and regular resources
  const featuredResources = useMemo(
    () => filteredResources.filter((res) => res.featured),
    [filteredResources]
  );

  const regularResources = useMemo(
    () => filteredResources.filter((res) => !res.featured),
    [filteredResources]
  );

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category)
  }

  const categories = ["All", "Fonts", "Colors", "Icons", "Gradients", "Components", "Tools"]

  return (
    <section id="resources" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="space-y-16">
          {/* Loading State */}
          {isLoading && (
            <div className="flex flex-col items-center justify-center py-24">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mb-6"></div>
              <p className="text-lg text-blue-400 font-semibold">Loading resources...</p>
            </div>
          )}

          {/* Error State */}
          {isError && !isLoading && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">⚠️</div>
              <h3 className="text-xl font-semibold text-red-400 mb-2">Failed to load resources</h3>
              <p className="text-slate-500">Please try again later.</p>
            </div>
          )}

          {/* Main Content */}
          {!isLoading && !isError && (
            <>
              {/* Featured Resources */}
              <div>
                <div className="flex items-center space-x-3 mb-8">
                  <h2 className="text-2xl font-bold text-white">Featured Resources</h2>
                  <div className="h-px bg-gradient-to-r from-blue-500 to-transparent flex-1"></div>
                </div>
                {/* Category Filters */}
                <div className="flex flex-wrap justify-center mb-8  gap-3">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => handleCategoryClick(category)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${selectedCategory === category
                        ? "bg-blue-600 text-white shadow-lg shadow-blue-600/25"
                        : "bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white"
                        }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {featuredResources.length > 0 && featuredResources.map((resource) => (
                    <ResourceCard key={resource.id ?? resource.name ?? Math.random()} resource={resource} featured />
                  ))}
                </div>
              </div>

              {/* All Resources */}
              {regularResources.length > 0 && (
                <div>
                  <div className="flex items-center space-x-3 mb-8">
                    <h2 className="text-2xl font-bold text-white">
                      {selectedCategory === "All" ? "All Resources" : `${selectedCategory} Resources`}
                    </h2>
                    <div className="h-px bg-gradient-to-r from-slate-600 to-transparent flex-1"></div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {regularResources.map((resource) => (
                      <ResourceCard key={resource.id} resource={resource} />
                    ))}
                  </div>
                </div>
              )}

              {/* No Results */}
              {filteredResources.length === 0 && (
                <div className="text-center py-16">
                  <div className="text-6xl mb-4">🔍</div>
                  <h3 className="text-xl font-semibold text-slate-300 mb-2">No resources found</h3>
                  <p className="text-slate-500">Try adjusting your search or category filter</p>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </section>
  )
}
