"use client"

import { Building2, Dumbbell, GraduationCap, Heart } from "lucide-react"

const partners = [
  { name: "Sweatbox Gym", icon: Dumbbell, category: "Fitness" },
  { name: "Champions Gym", icon: Dumbbell, category: "Fitness" },
  { name: "Africa Gym", icon: Dumbbell, category: "Fitness" },
  { name: "Golf Club Gym", icon: Dumbbell, category: "Fitness" },
  { name: "Ethio Dance and Fitness", icon: Dumbbell, category: "Fitness" },
  { name: "New Hope Academy", icon: GraduationCap, category: "Education" },
  { name: "Prime Minister Office", icon: Building2, category: "Government" },
  { name: "Dibora Foundation", icon: Heart, category: "Non-Profit" },
]

export function PartnersSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Trusted Partners</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Proud to serve leading organizations across Ethiopia with premium quality products
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {partners.map((partner, index) => {
            const Icon = partner.icon
            return (
              <div
                key={index}
                className="group relative bg-white rounded-xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-red-500/20"
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-red-50 to-red-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg mb-1">{partner.name}</h3>
                    <span className="inline-block px-3 py-1 text-xs font-medium text-red-600 bg-red-50 rounded-full">
                      {partner.category}
                    </span>
                  </div>
                </div>
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            )
          })}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">Join our growing network of satisfied partners</p>
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors duration-300"
          >
            Become a Partner
          </a>
        </div>
      </div>
    </section>
  )
}
