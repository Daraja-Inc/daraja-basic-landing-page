import Image from "next/image";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/20 backdrop-blur-md">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-start">
          <Image 
            src="/images/icon.png" 
            alt="DARAJA" 
            width={40} 
            height={40}
            className="object-contain"
          />
        </nav>
      </div>
    </header>
  );
}
