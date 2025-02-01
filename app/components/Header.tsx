"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { useLocale } from "./LocaleProvider"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { ShoppingCart, Search, Menu } from "lucide-react"

const Header = () => {
  const { locale, setLocale } = useLocale()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-01-25%20at%2015.57.58_f2f966b3.jpg-06oBFARrYHrlNpnZs8PubivTzGZv23.jpeg"
            alt="FRATINO"
            width={150}
            height={50}
            className="h-12 w-auto"
            priority
          />
        </Link>

        <div className="hidden md:flex items-center space-x-4">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Products</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                          href="/"
                        >
                          <div className="mb-2 mt-4 text-lg font-medium">Featured Product</div>
                          <p className="text-sm leading-tight text-muted-foreground">Check out our latest innovation</p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a href="/products/category1">Category 1</a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a href="/products/category2">Category 2</a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a href="/products/category3">Category 3</a>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/about" legacyBehavior passHref>
                  <NavigationMenuLink>About</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/contact" legacyBehavior passHref>
                  <NavigationMenuLink>Contact</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="relative">
            <Input type="search" placeholder="Search products..." className="pl-8" />
            <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>

          <Button variant="ghost">
            <ShoppingCart className="mr-2 h-4 w-4" /> Cart
          </Button>

          <select value={locale} onChange={(e) => setLocale(e.target.value)} className="bg-transparent border-none">
            <option value="en">EN</option>
            <option value="fr">FR</option>
            <option value="ar">AR</option>
          </select>
        </div>

        <Button variant="ghost" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <Menu />
        </Button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white p-4">
          <nav className="flex flex-col space-y-2">
            <Link href="/products">Products</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </nav>
          <div className="mt-4">
            <Input type="search" placeholder="Search products..." className="w-full" />
          </div>
          <div className="mt-4">
            <Button variant="outline" className="w-full">
              <ShoppingCart className="mr-2 h-4 w-4" /> Cart
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header

