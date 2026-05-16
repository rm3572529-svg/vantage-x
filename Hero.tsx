import { ArrowRight, Sparkles, Shield, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import hero from "@/assets/hero.jpg";

export function Hero() {
  return (
    <section className="relative overflow-hidden mesh-bg">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-primary/20 blur-3xl animate-blob" />
      <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-primary-glow/20 blur-3xl animate-blob" style={{ animationDelay: "4s" }} />

      <div className="container relative mx-auto px-4 pt-20 pb-24 md:pt-28 md:pb-32">
        <div className="mx-auto max-w-3xl text-center animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-foreground/80 mb-6">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            AI-powered media cloud · Now in public beta
          </div>
          <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tight leading-[1.05]">
            Your media,<br />
            <span className="gradient-text">beautifully shared.</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Premium cloud hosting for photos and videos. Generate smart links with expiry, passwords, and stunning previews — built for the mobile-first web.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button size="lg" className="bg-gradient-to-r from-primary to-primary-glow text-primary-foreground shadow-[var(--shadow-elevated)] hover:scale-[1.02] transition-transform h-12 px-6">
              Start uploading <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="h-12 px-6 glass-soft">
              View demo
            </Button>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-6 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1.5"><Shield className="h-3.5 w-3.5 text-primary" /> Encrypted links</span>
            <span className="inline-flex items-center gap-1.5"><Zap className="h-3.5 w-3.5 text-primary" /> CDN-fast delivery</span>
            <span className="inline-flex items-center gap-1.5"><Sparkles className="h-3.5 w-3.5 text-primary" /> AI auto-tagging</span>
          </div>
        </div>

        <div className="mt-16 mx-auto max-w-5xl animate-fade-up" style={{ animationDelay: "0.2s" }}>
          <div className="relative rounded-3xl glass p-2 md:p-3 shadow-[var(--shadow-elevated)]">
            <img
              src={hero}
              alt="Vantage X cloud media gallery preview"
              className="w-full rounded-2xl"
              width={1600}
              height={1200}
              fetchPriority="high"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
