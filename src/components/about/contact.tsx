import { Mail, MessageCircle, Github, Coffee } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Contact() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Get in Touch</h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Have a question, suggestion, or want to contribute? We'd love to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50">
            <h3 className="text-xl font-bold text-white mb-6">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-600/20 rounded-lg flex items-center justify-center">
                  <Mail className="h-5 w-5 text-blue-400" />
                </div>
                <div>
                  <div className="text-white font-medium">Email</div>
                  <div className="text-slate-400 text-sm">hello@uiniverse.com</div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-600/20 rounded-lg flex items-center justify-center">
                  <Github className="h-5 w-5 text-blue-400" />
                </div>
                <div>
                  <div className="text-white font-medium">GitHub</div>
                  <div className="text-slate-400 text-sm">github.com/uiniverse</div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-600/20 rounded-lg flex items-center justify-center">
                  <MessageCircle className="h-5 w-5 text-blue-400" />
                </div>
                <div>
                  <div className="text-white font-medium">Discord</div>
                  <div className="text-slate-400 text-sm">Join our community</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50">
            <h3 className="text-xl font-bold text-white mb-6">Ways to Contribute</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                <div>
                  <div className="text-white font-medium">Submit Resources</div>
                  <div className="text-slate-400 text-sm">Know a great design tool? Share it with the community!</div>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                <div>
                  <div className="text-white font-medium">Report Issues</div>
                  <div className="text-slate-400 text-sm">Help us improve by reporting bugs or broken links.</div>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                <div>
                  <div className="text-white font-medium">Spread the Word</div>
                  <div className="text-slate-400 text-sm">
                    Share UI Resources Hub with fellow designers and developers.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-900/20 to-slate-800/20 rounded-2xl p-8 border border-blue-500/20">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-blue-600/20 rounded-2xl flex items-center justify-center">
                <Coffee className="h-8 w-8 text-blue-400" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Support Our Mission</h3>
            <p className="text-slate-400 mb-6 max-w-2xl mx-auto">
              UI Resources Hub is completely free and always will be. If you find value in what we do, consider
              supporting us to help cover hosting costs and development time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3">Buy us a coffee ☕</Button>
              <Button
                variant="outline"
                className="border-slate-600 text-slate-300 hover:bg-slate-800 px-8 py-3 bg-transparent"
              >
                Become a sponsor
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
