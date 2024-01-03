import Test from '@/components/Test'
 
import NavBar from '@/components/common/NavBar'
import CategorySection from '@/components/sections/CategorySection'
import FooterSection from '@/components/sections/FooterSection'
import HeroSection from '@/components/sections/HeroSection'
 
import Image from 'next/image'

export default function Home() {
  return (
    <main  className='relative poppins  md:px-[9rem]'>

      <NavBar />
      <HeroSection />
      <CategorySection />
       
      <FooterSection />
    </main>
  )
}
