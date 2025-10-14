// "use client"

// import { Card, CardContent } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
// import { Bed, Car, Home, Dumbbell, Footprints, Baby } from "lucide-react"
// import { useState } from "react"

// export function ProductCategories() {
//   const [activeCategory, setActiveCategory] = useState("all")

//   const categories = [
//     {
//       id: "mattresses",
//       icon: Bed,
//       title: "Mattresses",
//       description: "Premium quality mattresses for comfortable sleep",
//       image: "/luxury-mattress-in-modern-bedroom-setting.png",
//       products: [
//         { name: "Memory Foam Mattress", price: "From $299", description: "Contours to your body for perfect support" },
//         { name: "Spring Mattresses", price: "From $199", description: "Traditional comfort with modern durability" },
//         { name: "Orthopedic Mattress", price: "From $399", description: "Designed for back and joint support" },
//         { name: "Kids Mattresses", price: "From $149", description: "Safe and comfortable for growing children" },
//       ],
//     },
//     {
//       id: "automotive",
//       icon: Car,
//       title: "Automotive Mats",
//       description: "Durable car mats for all vehicle types",
//       image: "/high-quality-car-floor-mats-in-luxury-vehicle-inte.png",
//       products: [
//         { name: "All-Weather Floor Mats", price: "From $49", description: "Protection in all seasons" },
//         { name: "Custom Fit Mats", price: "From $79", description: "Perfectly tailored for your vehicle" },
//         { name: "Trunk Mats", price: "From $39", description: "Keep your trunk clean and organized" },
//         { name: "Luxury Carpet Mats", price: "From $89", description: "Premium comfort and style" },
//       ],
//     },
//     {
//       id: "table",
//       icon: Home,
//       title: "Table Mats",
//       description: "Elegant table mats for dining and decoration",
//       image: "/elegant-dining-table-with-decorative-placemats-and.png",
//       products: [
//         { name: "Dining Placemats", price: "From $12", description: "Elegant protection for your table" },
//         { name: "Heat Resistant Mats", price: "From $18", description: "Safe for hot dishes and cookware" },
//         { name: "Decorative Table Runners", price: "From $25", description: "Add style to any dining setting" },
//         { name: "Easy Clean Mats", price: "From $15", description: "Wipeable and stain-resistant" },
//       ],
//     },
//     {
//       id: "gym",
//       icon: Dumbbell,
//       title: "Gym Floor Mats",
//       description: "Professional grade gym and fitness mats",
//       image: "/professional-gym-with-rubber-floor-mats-and-exerci.png",
//       products: [
//         { name: "Interlocking Gym Mats", price: "From $3/sq ft", description: "Easy installation and removal" },
//         { name: "Heavy Duty Rubber Mats", price: "From $5/sq ft", description: "Built for intense workouts" },
//         { name: "Anti-Slip Yoga Mats", price: "From $29", description: "Perfect grip for all poses" },
//         { name: "Commercial Gym Flooring", price: "From $8/sq ft", description: "Professional grade durability" },
//       ],
//     },
//     {
//       id: "footwear",
//       icon: Footprints,
//       title: "Footwear",
//       description: "Comfortable flip-flops and casual footwear",
//       image: "/colorful-flip-flops-and-casual-footwear-display.png",
//       products: [
//         { name: "Classic Flip-Flops", price: "From $12", description: "Comfortable everyday wear" },
//         { name: "Beach Sandals", price: "From $18", description: "Perfect for sand and water" },
//         { name: "Crocs Style Clogs", price: "From $25", description: "All-day comfort and support" },
//         { name: "Kids Footwear", price: "From $15", description: "Fun designs for little feet" },
//       ],
//     },
//     {
//       id: "toys",
//       icon: Baby,
//       title: "Kids Toys",
//       description: "Safe and educational toys for children",
//       image: "/colorful-educational-toys-and-play-items-for-child.png",
//       products: [
//         { name: "Educational Building Blocks", price: "From $19", description: "Develop creativity and motor skills" },
//         { name: "Soft Plush Toys", price: "From $15", description: "Safe and cuddly companions" },
//         { name: "Outdoor Play Sets", price: "From $45", description: "Active fun for the backyard" },
//         { name: "Creative Art Sets", price: "From $22", description: "Inspire artistic expression" },
//       ],
//     },
//   ]

//   const filteredCategories =
//     activeCategory === "all" ? categories : categories.filter((cat) => cat.id === activeCategory)

//   return (
//     <section id="products" className="py-20 bg-muted/30 ">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4 text-balance">Our Product Categories</h2>
//           <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
//             Discover our comprehensive range of quality manufactured products designed to meet your everyday needs with
//             excellence and reliability.
//           </p>
//         </div>

//         <div className="flex flex-wrap justify-center gap-3 mb-12">
//           <Button
//             variant={activeCategory === "all" ? "default" : "outline"}
//             onClick={() => setActiveCategory("all")}
//             className={
//               activeCategory === "all"
//                 ? "bg-red-600 hover:bg-red-700"
//                 : "hover:bg-red-50 hover:text-red-600 hover:border-red-600"
//             }
//           >
//             All Products
//           </Button>
//           {categories.map((category) => (
//             <Button
//               key={category.id}
//               variant={activeCategory === category.id ? "default" : "outline"}
//               onClick={() => setActiveCategory(category.id)}
//               className={
//                 activeCategory === category.id
//                   ? "bg-red-600 hover:bg-red-700"
//                   : "hover:bg-red-50 hover:text-red-600 hover:border-red-600"
//               }
//             >
//               {category.title}
//             </Button>
//           ))}
//         </div>

//         {activeCategory === "all" ? (
//           // Show category overview
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {categories.map((category, index) => {
//               const IconComponent = category.icon
//               return (
//                 <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border">
//                   <CardContent className="p-0">
//                     <div className="aspect-video overflow-hidden rounded-t-lg">
//                       <img
//                         src={category.image || "/placeholder.svg"}
//                         alt={category.title}
//                         className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
//                       />
//                     </div>
//                     <div className="p-6">
//                       <div className="flex items-center gap-3 mb-3">
//                         <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
//                           <IconComponent className="h-5 w-5 text-red-600" />
//                         </div>
//                         <h3 className="text-xl font-semibold text-card-foreground">{category.title}</h3>
//                       </div>
//                       <p className="text-muted-foreground mb-4 text-pretty">{category.description}</p>
//                       <Button
//                         variant="outline"
//                         onClick={() => setActiveCategory(category.id)}
//                         className="w-full group-hover:bg-red-600 group-hover:text-white transition-colors bg-transparent hover:bg-red-600 hover:text-white"
//                       >
//                         View Products
//                       </Button>
//                     </div>
//                   </CardContent>
//                 </Card>
//               )
//             })}
//           </div>
//         ) : (
//           // Show detailed products for selected category
//           <div className="space-y-8">
//             {filteredCategories.map((category) => {
//               const IconComponent = category.icon
//               return (
//                 <div key={category.id} className="space-y-6">
//                   <div className="flex items-center gap-4 mb-8">
//                     <div className="w-16 h-16 bg-red-100 rounded-xl flex items-center justify-center">
//                       <IconComponent className="h-8 w-8 text-red-600" />
//                     </div>
//                     <div>
//                       <h3 className="text-2xl font-bold text-primary">{category.title}</h3>
//                       <p className="text-muted-foreground">{category.description}</p>
//                     </div>
//                   </div>

//                   <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//                     {category.products.map((product, idx) => (
//                       <Card key={idx} className="group hover:shadow-lg transition-all duration-300">
//                         <CardContent className="p-6">
//                           <div className="aspect-square bg-gradient-to-br from-red-50 to-gray-50 rounded-lg mb-4 flex items-center justify-center">
//                             <IconComponent className="h-12 w-12 text-red-600" />
//                           </div>
//                           <h4 className="font-semibold text-card-foreground mb-2">{product.name}</h4>
//                           <p className="text-sm text-muted-foreground mb-3">{product.description}</p>
//                           <div className="flex items-center justify-between">
//                             {/* <span className="text-lg font-bold text-red-600">{product.price}</span> */}
//                             <Button size="sm" className="bg-red-600 hover:bg-red-700">
//                               Inquire
//                             </Button>
//                           </div>
//                         </CardContent>
//                       </Card>
//                     ))}
//                   </div>
//                 </div>
//               )
//             })}
//           </div>
//         )}
//       </div>
//     </section>
//   )
// }



"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Bed, Car, Home, Dumbbell, Footprints, Plus } from "lucide-react"
import { useState } from "react"

export function ProductCategories() {
  const [activeCategory, setActiveCategory] = useState("all")

  const categories = [
    {
      id: "mattresses",
      icon: Bed,
      title: "Mattresses",
      description: "Premium quality mattresses for comfortable sleep",
      image: "/luxury-mattress-in-modern-bedroom-setting.png",
      products: [
        { name: "Memory Foam Mattress", price: "From $299", description: "Contours to your body for perfect support" },
        { name: "Spring Mattresses", price: "From $199", description: "Traditional comfort with modern durability" },
        { name: "Orthopedic Mattress", price: "From $399", description: "Designed for back and joint support" },
        { name: "Kids Mattresses", price: "From $149", description: "Safe and comfortable for growing children" },
      ],
    },
    {
      id: "automotive",
      icon: Car,
      title: "Car Mats",
      description: "Durable car mats for all vehicle types",
      image: "/high-quality-car-floor-mats-in-luxury-vehicle-inte.png",
      products: [
        { name: "All-Weather Floor Mats", price: "From $49", description: "Protection in all seasons" },
        { name: "Custom Fit Mats", price: "From $79", description: "Perfectly tailored for your vehicle" },
        { name: "Trunk Mats", price: "From $39", description: "Keep your trunk clean and organized" },
        { name: "Luxury Carpet Mats", price: "From $89", description: "Premium comfort and style" },
      ],
    },
    {
      id: "table",
      icon: Home,
      title: "Table Mats",
      description: "Elegant table mats for dining and decoration",
      image: "/elegant-dining-table-with-decorative-placemats-and.png",
      products: [
        { name: "Dining Placemats", price: "From $12", description: "Elegant protection for your table" },
        { name: "Heat Resistant Mats", price: "From $18", description: "Safe for hot dishes and cookware" },
        { name: "Decorative Table Runners", price: "From $25", description: "Add style to any dining setting" },
        { name: "Easy Clean Mats", price: "From $15", description: "Wipeable and stain-resistant" },
      ],
    },
    {
      id: "gym",
      icon: Dumbbell,
      title: "Gym Mats",
      description: "Professional grade gym and fitness mats",
      image: "/professional-gym-with-rubber-floor-mats-and-exerci.png",
      products: [
        { name: "Interlocking Gym Mats", price: "From $3/sq ft", description: "Easy installation and removal" },
        { name: "Heavy Duty Rubber Mats", price: "From $5/sq ft", description: "Built for intense workouts" },
        { name: "Anti-Slip Yoga Mats", price: "From $29", description: "Perfect grip for all poses" },
        { name: "Commercial Gym Flooring", price: "From $8/sq ft", description: "Professional grade durability" },
      ],
    },
    {
      id: "footwear",
      icon: Footprints,
      title: "Flip-Flops",
      description: "Comfortable flip-flops and casual footwear",
      image: "/colorful-flip-flops-and-casual-footwear-display.png",
      products: [
        { name: "Classic Flip-Flops", price: "From $12", description: "Comfortable everyday wear" },
        { name: "Beach Sandals", price: "From $18", description: "Perfect for sand and water" },
        { name: "Crocs Style Clogs", price: "From $25", description: "All-day comfort and support" },
        { name: "Kids Footwear", price: "From $15", description: "Fun designs for little feet" },
      ],
    },
  ]

  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8 text-balance">Our Product Categories</h2>

          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <Button
              variant={activeCategory === "all" ? "default" : "outline"}
              onClick={() => setActiveCategory("all")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === "all"
                  ? "bg-gray-900 text-white hover:bg-gray-800"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200 border-0"
              }`}
            >
              All Products
            </Button>
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category.id
                    ? "bg-gray-900 text-white hover:bg-gray-800"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200 border-0"
                }`}
              >
                {category.title}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {(activeCategory === "all"
            ? categories.slice(0, 4)
            : categories.filter((cat) => cat.id === activeCategory).slice(0, 4)
          ).map((category, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md">
              <CardContent className="p-0">
                <div className="aspect-[4/3] overflow-hidden rounded-t-lg bg-gray-50">
                  <img
                    src={category.image || "/placeholder.svg?height=240&width=320"}
                    alt={category.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{category.title}</h3>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="bg-green-100 text-green-800 text-xs font-medium px-3 py-1 rounded-full">
                        INDOOR
                      </span>
                    </div>
                    <Button
                      size="sm"
                      variant="outline"
                      className="w-8 h-8 p-0 rounded-full border-gray-300 hover:bg-gray-50 bg-transparent"
                      onClick={() => setActiveCategory(category.id)}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {activeCategory !== "all" && (
          <div className="mt-16">
            {categories
              .filter((cat) => cat.id === activeCategory)
              .map((category) => (
                <div key={category.id} className="space-y-8">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{category.title} Collection</h3>
                    <p className="text-gray-600 max-w-2xl mx-auto">{category.description}</p>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {category.products.map((product, idx) => (
                      <Card key={idx} className="group hover:shadow-lg transition-all duration-300">
                        <CardContent className="p-6">
                          <div className="aspect-square bg-gradient-to-br from-red-50 to-gray-50 rounded-lg mb-4 flex items-center justify-center">
                            <category.icon className="h-12 w-12 text-red-600" />
                          </div>
                          <h4 className="font-semibold text-gray-900 mb-2">{product.name}</h4>
                          <p className="text-sm text-gray-600 mb-3">{product.description}</p>
                          <div className="flex items-center justify-between">
                            <span className="text-lg font-bold text-red-600">{product.price}</span>
                            <Button size="sm" className="bg-red-600 hover:bg-red-700">
                              Inquire
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
          </div>
        )}
      </div>
    </section>
  )
}

