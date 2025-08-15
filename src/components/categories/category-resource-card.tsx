import Link from "next/link"
import { ExternalLink, Star, Tag } from "lucide-react"
import { Resource } from "@/types/resourceType"



interface CategoryResourceCardProps {
  resource: Resource
  featured?: boolean
  viewMode?: "grid" | "list"
}

export function CategoryResourceCard({ resource, featured = false, viewMode = "grid" }: CategoryResourceCardProps) {
  if (viewMode === "list") {
    return (
      <div
        className={`group relative overflow-hidden rounded-xl transition-all duration-300 hover:scale-[1.02] ${
          featured
            ? "bg-gradient-to-r from-blue-900/50 to-slate-800/50 border border-blue-500/20 hover:border-blue-400/40"
            : "bg-slate-800/50 border border-slate-700/50 hover:border-slate-600/50"
        } backdrop-blur-sm hover:shadow-xl ${featured ? "hover:shadow-blue-500/10" : "hover:shadow-slate-900/20"}`}
      >
        <div className="p-6">
          <div className="flex items-start space-x-4">
            <div
              className={`text-3xl p-3 rounded-lg flex-shrink-0 ${
                featured ? "bg-blue-600/20" : "bg-slate-700/50"
              } group-hover:scale-110 transition-transform duration-300`}
            >
              {resource.icon}
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between mb-2">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">
                    {resource.name}
                  </h3>
                  {featured && (
                    <div className="flex items-center space-x-1 mt-1">
                      <Star className="h-3 w-3 fill-current text-blue-400" />
                      <span className="text-xs text-blue-400 font-medium">Featured</span>
                    </div>
                  )}
                </div>
                <Link
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    featured
                      ? "bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/25"
                      : "bg-slate-700 hover:bg-slate-600 text-slate-200 hover:text-white"
                  } group-hover:scale-105`}
                >
                  <span>Visit</span>
                  <ExternalLink className="h-4 w-4" />
                </Link>
              </div>

              <p className="text-slate-400 text-sm leading-relaxed mb-4">{resource.description}</p>

              <div className="flex flex-wrap gap-2">
                {resource.tags.map((tag, index) => (
                  <span
                    key={index}
                    className={`inline-flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium ${
                      featured ? "bg-blue-500/20 text-blue-300" : "bg-slate-600/50 text-slate-300"
                    }`}
                  >
                    <Tag className="h-3 w-3" />
                    <span>{tag}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div
      className={`group relative overflow-hidden rounded-xl transition-all duration-300 hover:scale-105 ${
        featured
          ? "bg-gradient-to-br from-blue-900/50 to-slate-800/50 border border-blue-500/20 hover:border-blue-400/40"
          : "bg-slate-800/50 border border-slate-700/50 hover:border-slate-600/50"
      } backdrop-blur-sm hover:shadow-2xl ${featured ? "hover:shadow-blue-500/10" : "hover:shadow-slate-900/20"}`}
    >
      {featured && (
        <div className="absolute top-3 right-3 z-10">
          <div className="flex items-center space-x-1 bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-medium">
            <Star className="h-3 w-3 fill-current" />
            <span>Featured</span>
          </div>
        </div>
      )}

      <div className="p-6 h-full flex flex-col">
        <div className="flex items-start space-x-4 mb-4">
          <div
            className={`text-3xl p-3 rounded-lg ${
              featured ? "bg-blue-600/20" : "bg-slate-700/50"
            } group-hover:scale-110 transition-transform duration-300`}
          >
            {resource.icon}
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors truncate">
              {resource.name}
            </h3>
          </div>
        </div>

        <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-1">{resource.description}</p>

        <div className="flex flex-wrap gap-2 mb-6">
          {Array.isArray(resource?.tags) ? resource.tags.slice(0, 3).map((tag, index) => (
            <span
              key={index}
              className={`inline-flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium ${
                featured ? "bg-blue-500/20 text-blue-300" : "bg-slate-600/50 text-slate-300"
              }`}
            >
              <Tag className="h-3 w-3" />
              <span>{tag}</span>
            </span>
          )) : null}
          {Array.isArray(resource?.tags) && resource.tags.length > 3 && (
            <span className="text-xs text-slate-500">
              +{resource.tags.length - 3} more
            </span>
          )}
        </div>

        <Link
          href={resource.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center justify-center space-x-2 w-full py-3 px-4 rounded-lg font-medium transition-all duration-200 ${
            featured
              ? "bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/25 hover:shadow-blue-500/30"
              : "bg-slate-700 hover:bg-slate-600 text-slate-200 hover:text-white"
          } group-hover:scale-105`}
        >
          <span>Visit Resource</span>
          <ExternalLink className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      {/* Hover overlay effect */}
      <div
        className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none ${
          featured
            ? "bg-gradient-to-br from-blue-600/5 to-transparent"
            : "bg-gradient-to-br from-slate-600/5 to-transparent"
        }`}
      />
    </div>
  )
}
