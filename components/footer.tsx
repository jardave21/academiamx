import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded bg-accent flex items-center justify-center">
                <span className="text-primary font-bold">E</span>
              </div>
              <span className="font-bold text-lg">EduPlatform</span>
            </div>
            <p className="text-sm text-primary-foreground/80">
              Plataforma premium de educación y conferencias profesionales.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>
                <Link href="/catalog" className="hover:text-accent transition">
                  Catálogo
                </Link>
              </li>
              <li>
                <Link href="/professors" className="hover:text-accent transition">
                  Profesores
                </Link>
              </li>
              <li>
                <Link href="/conferences" className="hover:text-accent transition">
                  Conferencias
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-accent transition">
                  Sobre Nosotros
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-4">Soporte</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>
                <Link href="/help" className="hover:text-accent transition">
                  Centro de Ayuda
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-accent transition">
                  Privacidad
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-accent transition">
                  Términos
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-accent transition">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contacto</h3>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:info@eduplatform.com" className="hover:text-accent transition">
                  info@eduplatform.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <a href="tel:+1234567890" className="hover:text-accent transition">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1" />
                <span>Calle Principal 123, Ciudad</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-primary-foreground/60">&copy; 2025 EduPlatform. Todos los derechos reservados.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="text-primary-foreground/60 hover:text-accent transition">
              Facebook
            </a>
            <a href="#" className="text-primary-foreground/60 hover:text-accent transition">
              Twitter
            </a>
            <a href="#" className="text-primary-foreground/60 hover:text-accent transition">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
