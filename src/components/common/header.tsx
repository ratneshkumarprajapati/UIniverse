import Link from "next/link"
import { Code2, Github } from "lucide-react"

export function Header() {
  return (
    <header className="border-b border-slate-800 bg-slate-900/95 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="p-2 rounded-lg bg-blue-600 group-hover:bg-blue-500 transition-colors">
              <Code2 className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              UIniverse
            </span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-slate-300 hover:text-blue-400 transition-colors">
              Home
            </Link>
            <Link href="/categories" className="text-slate-300 hover:text-blue-400 transition-colors">
              Categories
            </Link>
            <Link href="/about" className="text-slate-300 hover:text-blue-400 transition-colors">
              About
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Link
              href="https://github.com"
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-5 w-5 text-slate-300" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
