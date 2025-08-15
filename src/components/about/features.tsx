import { Search, Filter, Star, Zap, Shield, RefreshCwIcon as Refresh } from "lucide-react"

const features = [
  {
    icon: Search,
    title: "Smart Search",
    description: "Find exactly what you need with our intelligent search system that understands context and intent.",
  },
  {
    icon: Filter,
    title: "Advanced Filtering",
    description: "Filter resources by category, popularity, date added, and more to discover the perfect tools.",
  },
  {
    icon: Star,
    title: "Quality Curation",
    description: "Every resource is manually reviewed and tested by our team to ensure the highest quality standards.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Built with performance in mind, our platform loads quickly and provides instant search results.",
  },
  {
    icon: Shield,
    title: "Safe & Secure",
    description: "All resources are verified for safety and security, protecting you from malicious content.",
  },
  {
    icon: Refresh,
    title: "Regular Updates",
    description:
      "We continuously add new resources and update existing ones to keep the collection fresh and relevant.",
  },
]

export function Features() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Why Choose UI Resources Hub?</h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            We've built the platform we always wished existed - comprehensive, reliable, and completely free.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-slate-800/30 rounded-xl p-6 border border-slate-700/50 hover:border-blue-500/30 hover:bg-slate-800/50 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-600/30 transition-colors">
                <feature.icon className="h-6 w-6 text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
                {feature.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
