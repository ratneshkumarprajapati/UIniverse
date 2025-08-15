import { Header } from "@/components/common/header"
import { Footer } from "@/components/common/footer"
import { AboutHero } from "@/components/about/about-hero"
import { Mission } from "@/components/about/mission"
import { Features } from "@/components/about/features"
import { Stats } from "@/components/about/stats"
import { Team } from "@/components/about/team"
import { Contact } from "@/components/about/contact"

export const metadata = {
  title: "About - UI Resources Hub",
  description: "Learn about our mission to curate the best design resources for developers and designers worldwide.",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Header />
      <main>
        <AboutHero />
        <Mission />
        <Features />
        <Stats />
        {/* <Team /> */}
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
