"use client"

import { useEffect, useState } from "react"

const stats = [
  { label: "Curated Resources", value: 500, suffix: "+" },
  { label: "Active Users", value: 10000, suffix: "+" },
  { label: "Countries Reached", value: 50, suffix: "+" },
  { label: "Hours Saved", value: 1000, suffix: "K+" },
]

export function Stats() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-900/10 via-slate-900/50 to-blue-900/10">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Impact by Numbers</h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Join thousands of designers and developers who trust UI Resources Hub for their creative projects.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50 group-hover:border-blue-500/30 transition-all duration-300">
                <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent mb-2">
                  {isVisible ? stat.value.toLocaleString() : "0"}
                  {stat.suffix}
                </div>
                <div className="text-slate-400 font-medium">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
