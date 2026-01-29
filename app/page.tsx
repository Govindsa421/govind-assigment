import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import HeroSection from "./components/HeroSection"
import PhilosophySection from "./components/PhilosophySection"
import BuildingBharatSection from "./components/BuildingBharatSection"

export default function Home() {
  return (
    <main>
      <Navbar />

      {/* Section 1 */}
      <HeroSection />

      {/* Section 2 */}
      <PhilosophySection />

      {/* Section 3 */}
      <BuildingBharatSection />

      <Footer />
    </main>
  )
}
