import { Github, Twitter, Linkedin } from "lucide-react"

const team = [
  {
    name: "Alex Johnson",
    role: "Founder & Lead Curator",
    bio: "Former design lead at tech startups with 8+ years of experience in UI/UX design and front-end development.",
    avatar: "/placeholder.svg?height=120&width=120",
    social: {
      github: "https://github.com",
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
    },
  },
  {
    name: "Sarah Chen",
    role: "Content Strategist",
    bio: "Design systems expert and technical writer who ensures our resource descriptions are accurate and helpful.",
    avatar: "/placeholder.svg?height=120&width=120",
    social: {
      github: "https://github.com",
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
    },
  },
  {
    name: "Marcus Rodriguez",
    role: "Technical Lead",
    bio: "Full-stack developer passionate about creating fast, accessible web experiences and modern development tools.",
    avatar: "/placeholder.svg?height=120&width=120",
    social: {
      github: "https://github.com",
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
    },
  },
]

export function Team() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Meet Our Team</h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            We're a small but passionate team of designers and developers dedicated to making design resources
            accessible to everyone.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-slate-800/30 rounded-2xl p-8 border border-slate-700/50 hover:border-blue-500/30 transition-all duration-300 text-center group"
            >
              <div className="w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden bg-slate-700">
                <img
                  src={member.avatar || "/placeholder.svg"}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                {member.name}
              </h3>

              <div className="text-blue-400 font-medium mb-4">{member.role}</div>

              <p className="text-slate-400 text-sm leading-relaxed mb-6">{member.bio}</p>

              <div className="flex justify-center space-x-4">
                <a
                  href={member.social.github}
                  className="p-2 rounded-lg bg-slate-700/50 hover:bg-slate-600 text-slate-400 hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href={member.social.twitter}
                  className="p-2 rounded-lg bg-slate-700/50 hover:bg-slate-600 text-slate-400 hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a
                  href={member.social.linkedin}
                  className="p-2 rounded-lg bg-slate-700/50 hover:bg-slate-600 text-slate-400 hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
