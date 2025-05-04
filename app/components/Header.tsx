import Image from 'next/image'

export default function Header() {
  return (
    <header className="bg-red-600 text-white py-4 shadow-md">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Image 
            src="/img/logo_superior.png"
            alt="Logo Fatec"
            width={220}
            height={55}
            className="mr-3"
          />
        </div>
        
        <nav>
          <div className="flex justify-center md:justify-end space-x-4 mt-3">
            <a href="https://facebook.com" target="_blank">
              <Image src="/img/facebook.png" alt="Facebook" width={24} height={24} />
            </a>
            <a href="https://instagram.com" target="_blank">
              <Image src="/img/instagram.png" alt="Instagram" width={24} height={24} />
            </a>
            <a href="https://linkedin.com" target="_blank">
              <Image src="/img/linkedin.png" alt="LinkedIn" width={24} height={24} />
            </a>
          </div>
        </nav>
      </div>
    </header>
  )
}