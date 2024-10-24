import "./globals.css";
import Image from "next/image";

export default function Popupdesktop() {
  return (
    <div className=" bg-customGrey p-20 flex flex-row items-center w-full h-24">
      <Image src="/icon-share.svg" alt="Share" width={24} height={24} className="hover:text-gray-400 cursor-pointer" />
      <Image src="/icon-facebook.svg" alt="Facebook" width={24} height={24} className="hover:text-gray-400 cursor-pointer" />
      <Image src="/icon-twitter.svg" alt="Twitter" width={24} height={24} className="hover:text-gray-400 cursor-pointer" />
      <Image src="/icon-pinterest.svg" alt="Pinterest" width={24} height={24} className="hover:text-gray-400 cursor-pointer" />
    </div>
  );
}
