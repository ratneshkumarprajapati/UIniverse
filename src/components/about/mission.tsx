import { Target, Heart, Lightbulb } from "lucide-react"

export function Mission() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Our Mission & Vision</h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            We believe that great design should be accessible to everyone, regardless of budget or experience level.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50 hover:border-blue-500/30 transition-all duration-300">
            <div className="w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center mb-6">
              <Target className="h-6 w-6 text-blue-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Our Mission</h3>
            <p className="text-slate-400 leading-relaxed">
              To create the most comprehensive, accessible, and user-friendly platform for design resources, helping
              creators save time and focus on what they do best - creating amazing experiences.
            </p>
          </div>

          <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50 hover:border-blue-500/30 transition-all duration-300">
            <div className="w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center mb-6">
              <Heart className="h-6 w-6 text-blue-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Our Values</h3>
            <p className="text-slate-400 leading-relaxed">
              Quality over quantity, accessibility for all, community collaboration, and continuous innovation. We're
              committed to maintaining the highest standards while keeping everything free and open.
            </p>
          </div>

          <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50 hover:border-blue-500/30 transition-all duration-300">
            <div className="w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center mb-6">
              <Lightbulb className="h-6 w-6 text-blue-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Our Vision</h3>
            <p className="text-slate-400 leading-relaxed">
              A world where every designer and developer has instant access to the tools and resources they need to
              bring their creative visions to life, fostering innovation and beautiful digital experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
