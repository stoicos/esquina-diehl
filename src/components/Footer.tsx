import { RiFacebookFill, RiInstagramFill } from "@remixicon/react"

export const Footer = () => {
  return (
    <footer className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center border-t-2 py-4">
            <div className="flex space-x-6 mb-2">
            <a 
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visita nuestra página de Facebook"
                >
                    <RiFacebookFill />
                </a>
                <a 
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visita nuestro perfil de Instagram"
                >
                    <RiInstagramFill />
                </a>
            </div>
            <p className="text-sm">&copy; 2024 Esquina Diehl. Todos los derechos reservados.</p>
        </div>
    </footer>
  )
}
