
'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from '@/components/ui/navigation-menu'
import { Menu, X } from 'lucide-react'


const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about', subItems: ['Über uns', 'Team', 'Karriere'] },
    { name: 'Services', href: '/services', subItems: ['Prozesse', 'Qualität', 'Technologie'] },
    { name: 'Produkte', href: '/servicesAndProcedures', subItems: ['Test1', 'Test2', 'Test3'] },
    { name: 'Contact', href: '/contact' },
    { name: 'Referenzen', href: '/referenzen' },
  ]
  


interface HeaderProps {
    isScrolled: boolean;
    mobileMenuOpen: boolean;
    setMobileMenuOpen: (value: boolean) => void;
}

function Header({ isScrolled, mobileMenuOpen, setMobileMenuOpen }: HeaderProps) {
    return (
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 ${
          isScrolled ? 'shadow-md py-2' : 'py-4'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto flex items-center justify-between px-4">
          <Link href="/" className="text-2xl font-bold text-blue-600">
            STOCK
          </Link>
          <div className="hidden md:block">
            <NavigationMenu>
              <NavigationMenuList>
                {menuItems.map((item) => (
                  <NavigationMenuItem key={item.name}>
                    {item.subItems ? (
                      <NavigationMenuTrigger>{item.name}</NavigationMenuTrigger>
                    ) : (
                      <Link href={item.href} legacyBehavior passHref>
                        <NavigationMenuLink className="text-sm font-medium">
                          {item.name}
                        </NavigationMenuLink>
                      </Link>
                    )}
                    {item.subItems && (
                      <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                          {item.subItems.map((subItem) => (
                            <li key={subItem}>
                              <NavigationMenuLink asChild>
                                <a
                                  className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                  href="#"
                                >
                                  {subItem}
                                </a>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          <div className="hidden md:block">
            <Button variant="outline">KONTAKT</Button>
          </div>
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              className="fixed inset-0 z-50 bg-white"
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ duration: 0.3 }}
            >
              <div className="container mx-auto py-8">
                <button
                  className="absolute top-4 right-4"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <X size={24} />
                </button>
                <nav className="flex flex-col space-y-4">
                  {menuItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-lg font-medium"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    )
  }

  export default Header;