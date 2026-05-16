import { Link } from "@tanstack/react-router";
import { Cloud, Menu } from "lucide-react";
import logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="sticky top-0 z-50 glass-soft border-b border-border/50">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Vantage X" className="h-8 w-8" width={32} height={32} />
          <span className="font-display text-lg font-bold tracking-tight">
            Vantage <span className="gradient-text">X</span>
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          <a href="#features" className="hover:text-foreground transition-colors">Features</a>
          <a href="#upload" className="hover:text-foreground transition-colors">Upload</a>
          <a href="#gallery" className="hover:text-foreground transition-colors">Gallery</a>
          <a href="#pricing" className="hover:text-foreground transition-colors">Pricing</a>
        </nav>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" className="hidden sm:inline-flex">Sign in</Button>
          <Button size="sm" className="bg-gradient-to-r from-primary to-primary-glow text-primary-foreground shadow-md hover:shadow-lg transition-shadow">
            Get started
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden"><Menu className="h-5 w-5" /></Button>
        </div>
      </div>
    </header>
  );
}
