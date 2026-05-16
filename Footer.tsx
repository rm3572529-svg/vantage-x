import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="border-t border-border py-12 mt-12">
      <div className="container mx-auto px-4 grid gap-8 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 mb-3">
            <img src={logo} alt="" className="h-7 w-7" width={28} height={28} />
            <span className="font-display font-bold text-lg">Vantage <span className="gradient-text">X</span></span>
          </div>
          <p className="text-sm text-muted-foreground max-w-xs">Premium cloud media hosting and smart sharing for the mobile era.</p>
        </div>
        <div>
          <p className="font-semibold text-sm mb-3">Product</p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="#features" className="hover:text-foreground">Features</a></li>
            <li><a href="#upload" className="hover:text-foreground">Upload</a></li>
            <li><a href="#gallery" className="hover:text-foreground">Gallery</a></li>
          </ul>
        </div>
        <div>
          <p className="font-semibold text-sm mb-3">Company</p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="#" className="hover:text-foreground">About</a></li>
            <li><a href="#" className="hover:text-foreground">Privacy</a></li>
            <li><a href="#" className="hover:text-foreground">Terms</a></li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-10 pt-6 border-t border-border text-xs text-muted-foreground flex flex-wrap justify-between gap-2">
        <span>© {new Date().getFullYear()} Vantage X. All rights reserved.</span>
        <span>Crafted with care for creators worldwide.</span>
      </div>
    </footer>
  );
}
