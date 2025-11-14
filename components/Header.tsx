import Image from "next/image";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <header className="fixed top-4 left-0 w-full flex justify-center z-50">
      <div className="flex items-center justify-between w-full max-w-4xl px-6 py-3 rounded-full backdrop-blur-md bg-white border border-white/20 shadow-lg transition-all duration-300">
        
        <div className="flex items-center space-x-3">
          <Image
            src="/images/fitness-logo.png"
            alt="Logo"
            width={160}
            height={40}
            className="object-contain"
          />
        </div>
        
        <Navbar />
      </div>
    </header>
  );
}
