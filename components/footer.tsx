import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  const productCategories = ["Mattresses", "Car Mats", "Table Mats", "Gym Floor Mats", "Flip-Flops", "Kids Toys"]

  const quickLinks = ["About Us", "Our Products", "Quality Assurance", "Contact Us", "Careers", "News & Updates"]

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ]

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">
              ERGENDO
              <span className="text-secondary block">TRADE & INDUSTRY</span>
            </h3>
            <p className="text-primary-foreground/80 text-pretty">
              Leading manufacturer of quality products in Ethiopia. Committed to excellence, innovation, and customer
              satisfaction since 2010.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center hover:bg-secondary/80 transition-colors"
                    aria-label={social.label}
                  >
                    <IconComponent className="h-5 w-5 text-secondary-foreground" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Our Products</h4>
            <ul className="space-y-2">
              {productCategories.map((category, index) => (
                <li key={index}>
                  <a href="#" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                    {category}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                <div className="text-primary-foreground/80">
                  <p>Addis Ababa, Ethiopia</p>
                  <p>Industrial Zone, Bole Sub-City</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-secondary flex-shrink-0" />
                <span className="text-primary-foreground/80">+251-11-XXX-XXXX</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-secondary flex-shrink-0" />
                <span className="text-primary-foreground/80">info@ergendotrade.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/60 text-sm">
              © 2024 Ergendo Trade and Industry PLC. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-primary-foreground/60 hover:text-secondary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-secondary transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-secondary transition-colors">
                Quality Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
