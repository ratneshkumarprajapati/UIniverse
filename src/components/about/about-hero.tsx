import { Sparkles, Users, Globe } from "lucide-react"

export function AboutHero() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-slate-900/20"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto max-w-4xl text-center relative z-10">
        <div className="space-y-8">
          <div className="inline-flex items-center space-x-2 bg-blue-600/20 text-blue-300 px-4 py-2 rounded-full text-sm font-medium border border-blue-500/30">
            <Sparkles className="h-4 w-4" />
            <span>About UI Resources Hub</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            <span className="text-slate-200">Empowering</span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
              Creative Excellence
            </span>
          </h1>

          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            We're on a mission to democratize access to high-quality design resources, making it easier for creators
            worldwide to build beautiful, functional, and accessible digital experiences.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12">
            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-blue-600/20 rounded-xl flex items-center justify-center mx-auto">
                <Users className="h-8 w-8 text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold text-white">Community Driven</h3>
              <p className="text-slate-400 text-sm">Built by designers, for designers and developers</p>
            </div>
            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-blue-600/20 rounded-xl flex items-center justify-center mx-auto">
                <Sparkles className="h-8 w-8 text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold text-white">Carefully Curated</h3>
              <p className="text-slate-400 text-sm">Every resource is handpicked for quality and relevance</p>
            </div>
            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-blue-600/20 rounded-xl flex items-center justify-center mx-auto">
                <Globe className="h-8 w-8 text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold text-white">Always Free</h3>
              <p className="text-slate-400 text-sm">Committed to keeping design resources accessible to all</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
