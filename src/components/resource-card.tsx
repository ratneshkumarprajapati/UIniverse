import Link from "next/link"
import { ExternalLink, Star } from "lucide-react"
import { Resource } from "@/types/resourceType"


interface ResourceCardProps {
  resource: Resource
  featured?: boolean
}

export function ResourceCard({ resource, featured = false }: ResourceCardProps) {
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
            <div
              className={`inline-block px-2 py-1 rounded-full text-xs font-medium mt-1 ${
                featured ? "bg-blue-500/20 text-blue-300" : "bg-slate-600/50 text-slate-300"
              }`}
            >
              {resource.category}
            </div>
          </div>
        </div>

        <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-1">{resource.description}</p>

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
