import Link from "next/link"
import { Github, Twitter, Linkedin, Heart, Code2 } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-900/95 backdrop-blur">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="p-2 rounded-lg bg-blue-600">
                <Code2 className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                UIniverse
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">
              Curating the best design resources for developers and designers worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/resources" className="text-slate-400 hover:text-blue-400 transition-colors text-sm">
                  Browse Resources
                </Link>
              </li>
              <li>
                <Link href="/categories" className="text-slate-400 hover:text-blue-400 transition-colors text-sm">
                  Categories
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-slate-400 hover:text-blue-400 transition-colors text-sm">
                  About
                </Link>
              </li>
              {/* <li>
                <Link href="#submit" className="text-slate-400 hover:text-blue-400 transition-colors text-sm">
                  Submit Resource
                </Link>
              </li> */}
            </ul>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#fonts" className="text-slate-400 hover:text-blue-400 transition-colors text-sm">
                  Fonts
                </Link>
              </li>
              <li>
                <Link href="#colors" className="text-slate-400 hover:text-blue-400 transition-colors text-sm">
                  Colors
                </Link>
              </li>
              <li>
                <Link href="#icons" className="text-slate-400 hover:text-blue-400 transition-colors text-sm">
                  Icons
                </Link>
              </li>
              <li>
                <Link href="#components" className="text-slate-400 hover:text-blue-400 transition-colors text-sm">
                  Components
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold">Connect</h3>
            <div className="flex space-x-3">
              <Link
                href="https://github.com/ratneshkumarprajapati"
                className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-5 w-5" />
              </Link>
              <Link
                href="https://x.com/Ratnesh_Kumar_4"
                className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link
                href="https://linkedin.com"
                className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
            <p className="text-slate-500 text-xs">Follow us for updates and new resources</p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <p className="text-slate-500 text-sm">© {new Date().getFullYear()} UIniverse. All rights reserved.</p>
          <div className="flex items-center space-x-1 text-slate-500 text-sm">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-red-500 fill-current" />
            <span>for the design community</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
