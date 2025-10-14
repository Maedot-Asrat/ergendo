import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, ShoppingCart } from "lucide-react"

export function FeaturedProducts() {
  const featuredProducts = [
    {
      name: "Premium Memory Foam Mattress",
      category: "Mattresses",
      price: "From ETB 15,000",
      rating: 4.9,
      reviews: 124,
      image: "/luxury-memory-foam-mattress-with-modern-bedding.png",
      features: ["Memory Foam", "Cooling Technology", "10 Year Warranty"],
      badge: "Best Seller",
    },
    {
      name: "All-Weather Car Mat Set",
      category: "Automotive",
      price: "From ETB 2,500",
      rating: 4.8,
      reviews: 89,
      image: "/premium-car-floor-mats-set-in-luxury-vehicle.png",
      features: ["Waterproof", "Custom Fit", "Easy Clean"],
      badge: "Popular",
    },
    {
      name: "Professional Gym Mat",
      category: "Fitness",
      price: "From ETB 800",
      rating: 4.7,
      reviews: 156,
      image: "/professional-rubber-gym-floor-mat-in-fitness-cente.png",
      features: ["Anti-Slip", "Shock Absorbing", "Durable"],
      badge: "New",
    },
    {
      name: "Comfort Flip-Flops",
      category: "Footwear",
      price: "From ETB 350",
      rating: 4.6,
      reviews: 203,
      image: "/comfortable-colorful-flip-flops-on-beach-sand.png",
      features: ["Ergonomic", "Lightweight", "Multiple Colors"],
      badge: null,
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4 text-balance">Featured Products</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Explore our most popular and highly-rated products, trusted by thousands of customers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-border">
              <CardContent className="p-0">
                <div className="relative aspect-square overflow-hidden rounded-t-lg">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {product.badge && (
                    <Badge className="absolute top-3 left-3 bg-secondary text-secondary-foreground">
                      {product.badge}
                    </Badge>
                  )}
                </div>
                <div className="p-6">
                  <div className="mb-2">
                    <span className="text-sm text-secondary font-medium">{product.category}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-card-foreground mb-2 text-balance">{product.name}</h3>

                  {/* <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{product.rating}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">({product.reviews} reviews)</span>
                  </div> */}

                  <div className="space-y-1 mb-4">
                    {product.features.map((feature, idx) => (
                      <div key={idx} className="text-sm text-muted-foreground flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-secondary rounded-full"></div>
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* <div className="flex items-center justify-between mb-4">
                    <span className="text-lg font-bold text-primary">{product.price}</span>
                  </div> */}

                  
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  )
}
