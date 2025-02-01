import { Button } from "@/components/ui/button"
import { SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Image from "next/image"
import { Star } from "lucide-react"

// Product type definition
type Product = {
  id: string
  name: string
  price: number
  description: string
  image: string
  category: string
  sizes: string[]
  colors: string[]
}

// This would typically come from an API or database
const getProduct = (id: string): Product => ({
  id,
  name: "Performance Athletic Jumpsuit",
  price: 89.99,
  description:
    "Experience ultimate comfort and style with our Premium Athletic Jumpsuit. Crafted from high-performance, moisture-wicking fabric, this jumpsuit features an ergonomic design perfect for both intense workouts and casual wear. The forest green color adds a touch of sophistication to your athletic wardrobe.\n\nKey Features:\n- Moisture-wicking fabric\n- Four-way stretch material\n- Ergonomic design\n- FRATINO branded detail\n- Flattering fit\n- Machine washable",
  image:
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-02-01%20at%2017.11.10_51a32007.jpg-PZ1nXqSBVybATIFaEFlwoeW63yLzBh.jpeg",
  category: "Athletic Wear",
  sizes: ["XS", "S", "M", "L", "XL"],
  colors: ["Forest Green", "Black", "Navy"],
})

export default function ProductDetail({ params }: { params: { id: string } }) {
  const product = getProduct(params.id)

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2">
          <div className="relative h-[600px] rounded-lg overflow-hidden">
            <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
          </div>
        </div>
        <div className="md:w-1/2">
          <div className="sticky top-8">
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
            <div className="flex items-center mb-4">
              <div className="flex items-center mr-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <span className="text-gray-600">(24 reviews)</span>
            </div>
            <p className="text-2xl font-bold text-primary mb-6">${product.price.toFixed(2)}</p>
            <div className="mb-6">
              <h2 className="font-semibold mb-2">Select Size</h2>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Choose a size" />
                <SelectContent>
                  {product.sizes.map((size) => (
                    <SelectItem key={size} value={size}>
                      {size}
                    </SelectItem>
                  ))}
                </SelectContent>
              </SelectTrigger>
            </div>
            <div className="mb-6">
              <h2 className="font-semibold mb-2">Select Color</h2>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Choose a color" />
                <SelectContent>
                  {product.colors.map((color) => (
                    <SelectItem key={color} value={color}>
                      {color}
                    </SelectItem>
                  ))}
                </SelectContent>
              </SelectTrigger>
            </div>
            <div className="space-y-4">
              <Button className="w-full" size="lg">
                Add to Cart
              </Button>
              <Button variant="outline" className="w-full" size="lg">
                Add to Wishlist
              </Button>
            </div>
            <div className="mt-8">
              <h2 className="font-semibold mb-4">Product Description</h2>
              <div className="prose max-w-none">
                {product.description.split("\n").map((paragraph, index) => (
                  <p key={index} className="text-gray-600 mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

