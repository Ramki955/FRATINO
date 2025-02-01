import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Image from "next/image"
import Link from "next/link"

// Product type definition
type Product = {
  id: number
  name: string
  price: number
  image: string
  category: string
  description: string
}

// Sample products data
const products: Product[] = [
  {
    id: 1,
    name: "Performance Athletic Jumpsuit",
    price: 89.99,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-02-01%20at%2017.11.10_51a32007.jpg-PZ1nXqSBVybATIFaEFlwoeW63yLzBh.jpeg",
    category: "Athletic Wear",
    description:
      "Premium athletic jumpsuit in forest green, featuring moisture-wicking fabric and ergonomic design. Perfect for workout sessions and athleisure wear.",
  },
  // ... other products will be added here
]

export default function ProductCatalog() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Product Catalog</h1>

      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <Input type="search" placeholder="Search products..." className="md:w-1/3" />
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Category" />
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            <SelectItem value="athletic">Athletic Wear</SelectItem>
            <SelectItem value="casual">Casual Wear</SelectItem>
            <SelectItem value="accessories">Accessories</SelectItem>
          </SelectContent>
        </SelectTrigger>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Sort By" />
          <SelectContent>
            <SelectItem value="price-asc">Price: Low to High</SelectItem>
            <SelectItem value="price-desc">Price: High to Low</SelectItem>
            <SelectItem value="name-asc">Name: A to Z</SelectItem>
            <SelectItem value="name-desc">Name: Z to A</SelectItem>
          </SelectContent>
        </SelectTrigger>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-96">
              <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
              <p className="text-gray-600 mb-2">{product.category}</p>
              <p className="text-primary font-bold mb-4">${product.price.toFixed(2)}</p>
              <Button asChild className="w-full">
                <Link href={`/products/${product.id}`}>View Details</Link>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

