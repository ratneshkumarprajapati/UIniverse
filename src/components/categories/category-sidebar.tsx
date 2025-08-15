"use client"

import { Categories } from "@/types/categoryType"
import { X, Menu } from "lucide-react"



interface CategorySidebarProps {
  categories: Categories[]
  selectedCategory: string
  onCategorySelect: (categoryId: string) => void
  isOpen: boolean
  onToggle: () => void
}

export function CategorySidebar({
  categories,
  selectedCategory,
  onCategorySelect,
  isOpen,
  onToggle,
}: CategorySidebarProps) {
  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={onToggle}
        className="lg:hidden fixed top-20 left-4 z-50 p-2 bg-slate-800 hover:bg-slate-700 rounded-lg border border-slate-700 transition-colors"
      >
        <Menu className="h-5 w-5 text-slate-300" />
      </button>

      {/* Overlay for mobile */}
      {isOpen && <div className="lg:hidden fixed inset-0 bg-black/50 z-40" onClick={onToggle} />}

      {/* Sidebar */}
      <div
        className={`fixed lg:fixed top-0 left-0 h-full w-80 bg-slate-900/95 backdrop-blur border-r border-slate-800 z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
        style={{ paddingTop: "4rem" }}
      >
        {/* Close button for mobile */}
        <button
          onClick={onToggle}
          className="lg:hidden absolute top-4 right-4 p-2 text-slate-400 hover:text-white transition-colors"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="p-6 h-full overflow-y-auto">
          <div className="mb-8">
            <h2 className="text-xl font-bold text-white mb-2">Categories</h2>
            <p className="text-sm text-slate-400">Browse resources by category</p>
          </div>

          <nav className="space-y-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => {
                  onCategorySelect(category.id)
                  onToggle() // Close sidebar on mobile after selection
                }}
                className={`w-full text-left p-4 rounded-xl transition-all duration-200 group ${
                  selectedCategory === category.id
                    ? "bg-blue-600/20 border border-blue-500/30 text-white"
                    : "bg-slate-800/30 border border-slate-700/50 text-slate-300 hover:bg-slate-800/50 hover:border-slate-600/50 hover:text-white"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{category.icon}</span>
                    <span className="font-medium">{category.name}</span>
                  </div>
                  <span
                    className={`text-xs px-2 py-1 rounded-full ${
                      selectedCategory === category.id
                        ? "bg-blue-500/30 text-blue-300"
                        : "bg-slate-600/50 text-slate-400 group-hover:bg-slate-600/70"
                    }`}
                  >
                    {category.count}
                  </span>
                </div>
                <p className="text-xs text-slate-400 group-hover:text-slate-300">{category.description}</p>
              </button>
            ))}
          </nav>

          {/* Additional Info */}
          <div className="mt-8 p-4 bg-slate-800/30 rounded-xl border border-slate-700/50">
            <h3 className="text-sm font-semibold text-white mb-2">💡 Pro Tip</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Use the search function on the homepage to find specific resources across all categories.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
