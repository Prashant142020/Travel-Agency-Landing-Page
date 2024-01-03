import Test from '@/components/Test'
import NavBar from '@/components/common/NavBar'
import FooterSection from '@/components/sections/FooterSection'
import HeroSection from '@/components/sections/HeroSection'
import Image from 'next/image'

export default function Home() {
  return (
    <main>

      <NavBar />
      <HeroSection />
      <FooterSection />
    </main>
  )
}
