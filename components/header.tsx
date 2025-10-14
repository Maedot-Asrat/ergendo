"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone, Mail } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: "Home", href: "#home" },
    { name: "Products", href: "#products" },
    { name: "About", href: "#about" },
    { name: "News", href: "#news" },
  ]

  return (
    <header className=" border-b border-border sticky top-0 z-50 ">
      {/* Top bar with contact info */}
      <div className="bg-primary text-primary-foreground py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+251-11-XXX-XXXX</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>info@ergendotrade.com</span>
              </div>
            </div>
            <div className="hidden md:block">
              <span>Quality Manufacturing Since 2010</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="mx-auto px-4 sm:px-6 lg:px-8 bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg border border-white/20">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
               <img
                src="/ergendo_logo.png"
                alt="Ergendo Manufacturing Facility"
                className="w-100px md:w-full h-10 md:h-30 object-cover"
              />
              {/* <h1 className="text-2xl font-bold text-primary">
                ERGENDO
                <span className="text-secondary ml-2">TRADE & INDUSTRY</span>
              </h1> */}
            </div>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-secondary px-3 py-2 text-sm font-medium transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </nav>

          <div className="hidden md:block">
            <Button className="bg-secondary hover:bg-secondary/90">Contact</Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-card border-t border-border">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-card-foreground hover:text-secondary block px-3 py-2 text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="px-3 py-2">
              <Button className="w-full bg-secondary hover:bg-secondary/90">Get Quote</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
