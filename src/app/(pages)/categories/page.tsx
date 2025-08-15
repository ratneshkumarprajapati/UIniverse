import { CategoriesLayout } from "@/components/categories/categories-layout"
import { Footer } from "@/components/common/footer"
import { Header } from "@/components/common/header"

export const metadata = {
  title: "Categories - UI Resources Hub",
  description: "Browse design resources by category - fonts, colors, icons, gradients, components, and tools.",
}

export default function CategoriesPage() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Header />
      <main>
        <CategoriesLayout />
      </main>
      <Footer />
    </div>
  )
}
