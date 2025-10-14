import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Award, Users, Globe } from "lucide-react"

export function AboutSection() {
  const achievements = [
    { icon: Award, title: "ISO Certified", description: "Quality management systems" },
    { icon: Users, title: "200+ Employees", description: "Skilled workforce" },
    { icon: Globe, title: "Export Ready", description: "International standards" },
    { icon: CheckCircle, title: "15+ Years", description: "Industry experience" },
  ]

  const values = [
    "Quality Excellence in every product",
    "Customer satisfaction guarantee",
    "Sustainable manufacturing practices",
    "Continuous innovation and improvement",
    "Ethical business operations",
    "Community development support",
  ]

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold text-primary text-balance">
                About Ergendo Trade & Industry PLC
              </h2>
              <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
                Since 2010, Ergendo Trade and Industry PLC has been at the forefront of manufacturing excellence in
                Ethiopia. We specialize in producing high-quality mattresses, automotive accessories, home essentials,
                and lifestyle products that meet international standards.
              </p>
              <p className="text-muted-foreground text-pretty leading-relaxed">
                Our commitment to quality, innovation, and customer satisfaction has made us a trusted name in the
                industry. With state-of-the-art manufacturing facilities and a dedicated team of professionals, we
                continue to expand our product range and market reach.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-primary">Our Values</h3>
              <div className="grid gap-3">
                {values.map((value, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0" />
                    <span className="text-muted-foreground">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="aspect-video rounded-2xl overflow-hidden">
              <img
                src="/modern-manufacturing-facility-with-workers-and-mac.png"
                alt="Ergendo Manufacturing Facility"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              {achievements.map((achievement, index) => {
                const IconComponent = achievement.icon
                return (
                  <Card key={index} className="border-border">
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                        <IconComponent className="h-6 w-6 text-secondary" />
                      </div>
                      <h4 className="font-semibold text-card-foreground mb-1">{achievement.title}</h4>
                      <p className="text-sm text-muted-foreground">{achievement.description}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
