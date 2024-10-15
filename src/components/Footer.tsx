import Link from "next/link"

function Footer() {
    return (
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Adresse</h3>
              <p>Edmund Stock GmbH</p>
              <p>Max-Eyth-Str. 3/1</p>
              <p>75443 Ötisheim</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Kontakt</h3>
              <p>Telefon: +49 (0)7041 / 937 36-0</p>
              <p>Telefax: +49 (0)7041 / 937 36-50</p>
              <p>E-Mail: info@stock-werkzeuge.de</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Infos</h3>
              <ul className="space-y-2">
                <li><Link href="/downloads" className="hover:underline">Downloads</Link></li>
                <li><Link href="/impressum" className="hover:underline">Impressum</Link></li>
                <li><Link href="/datenschutz" className="hover:underline">Datenschutz</Link></li>
                <li><Link href="/cookie-einstellungen" className="hover:underline">Cookie Einstellungen</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center">
            <p>&copy; 2024 Edmund Stock GmbH. Alle Rechte vorbehalten</p>
          </div>
        </div>
      </footer>
    )
  }

  export default Footer;