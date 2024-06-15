import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';

export default function AcmeLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
    >
      <Image src="https://www.valleylandscape.ca/wp-content/uploads/2023/03/icon.svg" alt='logo' width={56} height={56} ></Image>
      <p className="text-[44px]">Valley Landscape</p>
    </div>
  );
}
