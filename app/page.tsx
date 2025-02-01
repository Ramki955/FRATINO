import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">Where Quality Meets Innovation</h1>
              <p className="text-xl mb-6">
                Discover FRATINO's high-quality products and services, blending Tunisian craftsmanship with modern
                technology.
              </p>
              <div className="flex space-x-4">
                <Button asChild>
                  <Link href="/products">Shop Now</Link>
                </Button>
                <Button variant="outline">Learn More</Button>
              </div>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/hero-image.jpg"
                alt="FRATINO products"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Replace with actual product data */}
            {[1, 2, 3].map((product) => (
              <div key={product} className="bg-white rounded-lg shadow-md overflow-hidden">
                <Image
                  src={`/product-${product}.jpg`}
                  alt={`Product ${product}`}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">Coming Soon</h3>
                  <p className="text-gray-600 mb-4">
                    New products arriving shortly. Stay tuned for our latest collection.
                  </p>
                  <Button asChild variant="outline">
                    <Link href="/products">Notify Me</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Web3 Features Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Experience the Future of E-commerce</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4">Blockchain Payments</h3>
              <p className="text-gray-600 mb-4">Securely pay with cryptocurrencies like Bitcoin and Ethereum.</p>
              <Button variant="outline">Learn More</Button>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4">Decentralized Identity</h3>
              <p className="text-gray-600 mb-4">Create a secure, blockchain-based account for enhanced privacy.</p>
              <Button variant="outline">Get Started</Button>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4">NFT Rewards</h3>
              <p className="text-gray-600 mb-4">Earn unique digital collectibles through our loyalty program.</p>
              <Button variant="outline">Explore NFTs</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Join the FRATINO Community</h2>
          <p className="text-xl mb-6">
            Be part of our innovative journey and stay updated with the latest products and offers.
          </p>
          <Button asChild size="lg">
            <Link href="/signup">Sign Up Now</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

