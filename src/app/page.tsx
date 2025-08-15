import { Header } from "@/components/common/header"
import { Hero } from "@/components/hero"
import { ResourceGrid } from "@/components/resource-grid"
import { Footer } from "@/components/common/footer"

export default function HomePage() {

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Header />
      <main>
        <Hero />
        <ResourceGrid />
      </main>
      <Footer />
    </div>
  )
}
