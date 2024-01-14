import Image from 'next/image';

function LogoGroupSection() {
    return (
        <div className="w-full flex justify-center">
            <Image
                width={1073}
                height={162}
                src="/images/logo-group.png"
                alt="logo group"
            />
        </div>
    );
}

export default LogoGroupSection;
