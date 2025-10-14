import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, ArrowRight, TrendingUp, Award, Users } from "lucide-react"

export function NewsSection() {
  const featuredNews = {
    date: "March 15, 2024",
    category: "Product Launch",
    title: "Revolutionary Eco-Friendly Mattress Line Launches",
    excerpt:
      "Ergendo Trade introduces a groundbreaking sustainable mattress collection made from 100% recycled materials, setting new industry standards for environmental responsibility.",
    image: "/floor_mat2.jpeg",
  }

  const announcements = [
    {
      icon: TrendingUp,
      date: "March 10, 2024",
      title: "Q1 2024 Production Capacity Increased by 40%",
      category: "Company News",
    },
    {
      icon: Award,
      date: "March 5, 2024",
      title: "Ergendo Wins 'Best Manufacturing Innovation Award'",
      category: "Achievement",
    },
    {
      icon: Users,
      date: "February 28, 2024",
      title: "New Partnership with Leading Automotive Brands",
      category: "Partnership",
    },
  ]

  return (
    <section className="py-20 bg-background" id="news">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4 text-balance">Latest News & Updates</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Stay informed about our latest product launches, company achievements, and industry insights.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Featured Article */}
          <div className="lg:col-span-2">
            <Card className="overflow-hidden border-border hover:shadow-lg transition-shadow duration-300">
              <div className="aspect-video overflow-hidden">
                <img
                  src={featuredNews.image || "/placeholder.svg"}
                  alt={featuredNews.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-secondary/10 text-secondary rounded-full font-medium">
                    {featuredNews.category}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Calendar className="h-4 w-4" />
                    {featuredNews.date}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-primary hover:text-secondary transition-colors text-balance">
                  {featuredNews.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-pretty">{featuredNews.excerpt}</p>
                <Button variant="outline" className="group bg-transparent">
                  Read Full Story
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Announcements Timeline */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-primary mb-6">Recent Announcements</h3>
            <div className="space-y-4">
              {announcements.map((announcement, index) => {
                const IconComponent = announcement.icon
                return (
                  <Card
                    key={index}
                    className="p-4 border-border hover:border-secondary/50 hover:shadow-md transition-all duration-300 cursor-pointer group"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-secondary/20 transition-colors">
                        <IconComponent className="h-5 w-5 text-secondary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 text-xs text-muted-foreground mb-1">
                          <Calendar className="h-3 w-3" />
                          <span>{announcement.date}</span>
                        </div>
                        <h4 className="font-semibold text-foreground text-sm leading-snug mb-1 group-hover:text-secondary transition-colors">
                          {announcement.title}
                        </h4>
                        <span className="text-xs text-muted-foreground">{announcement.category}</span>
                      </div>
                    </div>
                  </Card>
                )
              })}
            </div>
            <Button variant="outline" className="w-full mt-4 bg-transparent">
              View All News
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
