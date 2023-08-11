import Image from "next/image";
import Link from "next/link";

export default function NavbarLogo() {
  return (
    <div className="mh-18 text-center py-5 w-full">
      <Link href="/" className="relative">
        <h2 className="text-center text-2xl font-semibold text-gray-200 px-4 overflow-hidden hidden-compact flex justify-center">
          <Image src={"/images/logo.png"} alt={"Logo"} width={100}  height={50} className=""/>
        </h2>
      </Link>
    </div>
  );
}
