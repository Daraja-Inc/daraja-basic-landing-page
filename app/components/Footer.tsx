export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t border-white/10 bg-black/20 backdrop-blur-md">
      <div className="container mx-auto px-6 py-8">
        <div className="flex items-center justify-center">
          <div className="text-sm text-white/60">
            © {currentYear} DARAJA. Tous droits réservés.
          </div>
        </div>
      </div>
    </footer>
  );
}
