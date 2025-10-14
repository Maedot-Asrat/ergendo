import { Button } from "@/components/ui/button"
import { ArrowRight, Award, Users, Factory } from "lucide-react"

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/floor_mat1.jpeg"
          alt="Ergendo Manufacturing Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-balance leading-tight text-white">
                Quality Manufacturing
                <span className="text-red-500 block">Excellence</span>
              </h1>
              <p className="text-xl text-gray-200 text-pretty leading-relaxed">
                Leading manufacturer of mattresses, automotive accessories, home essentials, and lifestyle products.
                Delivering quality and innovation since 2010.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
                Explore Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-black bg-transparent"
              >
                Contact Us
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-red-600/20 rounded-lg mb-2 mx-auto backdrop-blur-sm">
                  <Award className="h-6 w-6 text-red-400" />
                </div>
                <div className="text-2xl font-bold text-white">15+</div>
                <div className="text-sm text-gray-300">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-red-600/20 rounded-lg mb-2 mx-auto backdrop-blur-sm">
                  <Users className="h-6 w-6 text-red-400" />
                </div>
                <div className="text-2xl font-bold text-white">1000+</div>
                <div className="text-sm text-gray-300">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-red-600/20 rounded-lg mb-2 mx-auto backdrop-blur-sm">
                  <Factory className="h-6 w-6 text-red-400" />
                </div>
                <div className="text-2xl font-bold text-white">50+</div>
                <div className="text-sm text-gray-300">Product Lines</div>
              </div>
            </div>
          </div>

          <div className="relative lg:block hidden">
            {/* Floating card */}
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg border border-white/20">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center">
                  <Factory className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-white">ISO Certified</div>
                  <div className="text-sm text-gray-300">Quality Assured</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
