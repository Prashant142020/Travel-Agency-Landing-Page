import NavBar from '@/components/common/NavBar';
import BookNextTripSection from '@/components/sections/BookNextTripSection';
import CategorySection from '@/components/sections/CategorySection';
import FooterSection from '@/components/sections/FooterSection';
import HeroSection from '@/components/sections/HeroSection';
import LogoGroupSection from '@/components/sections/LogoGroupSection';
import NewsLetterSection from '@/components/sections/NewsLetterSection';
import TestimonialSection from '@/components/sections/TestimonialSection';
import TopSellingSection from '@/components/sections/TopSellingSection';

import Image from 'next/image';

export default function Home() {
    return (
        <main className="relative poppins  md:px-[9rem]">
            <NavBar />
            <div className="px-4 flex flex-col gap-[7.69rem]">
                <HeroSection />
                <div className="absolute top-0 right-0 -z-10">
                    <Image
                        width={787}
                        height={873}
                        src="/images/blob-shape.png"
                        alt="blob background shape"
                    />
                </div>
                <div className="absolute top-0 left-0 -z-10">
                    <Image
                        width={478}
                        height={496}
                        src="/images/top-left-gradient.png"
                        alt="blob background shape"
                    />
                </div>
                <div className="relative">
                    <CategorySection />
                    <div className="absolute top-0 right-0">
                        <Image
                           width={153}
                           height={166}
                            src="/images/plus-group.png"
                            alt="blob background shape"
                        />
                    </div>
                </div>

                <TopSellingSection />
                <BookNextTripSection />
                <TestimonialSection />
                <LogoGroupSection />
                <NewsLetterSection />
                <FooterSection />
            </div>
        </main>
    );
}
