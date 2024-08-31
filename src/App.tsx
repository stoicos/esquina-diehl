import { ContactUs } from "./components/ContactUs"
import { Footer } from "./components/Footer"
import { Hero } from "./components/Hero"
import { Navbar } from "./components/Navbar"
import { Reviews } from "./components/Reviews"
import { Services } from "./components/Services"

export const App = () => {
  return (
    <main className="overflow-x-hidden antialiased text-neutral-800">

      <Navbar />
      <Hero /> 
      <Services />
      <Reviews />
      <ContactUs />
      <Footer />
    </main>
  )
}
