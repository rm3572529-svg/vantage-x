import { ArrowRight, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    <section id="pricing" className="py-24">
      <div className="container mx-auto px-4">
        <div className="relative overflow-hidden rounded-3xl glass p-10 md:p-16 text-center mesh-bg">
          <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-primary/30 blur-3xl animate-blob" />
          <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-primary-glow/30 blur-3xl animate-blob" style={{ animationDelay: "3s" }} />
          <div className="relative">
            <div className="inline-flex items-center gap-2 rounded-full bg-card/70 px-4 py-1.5 text-xs font-medium mb-6 border border-border">
              <Smartphone className="h-3.5 w-3.5 text-primary" /> Install as PWA on Android & iOS
            </div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight max-w-3xl mx-auto">
              Ready to host the <span className="gradient-text">future</span> of your media?
            </h2>
            <p className="mt-5 text-muted-foreground max-w-xl mx-auto">
              Free to start. No credit card. Built on a global edge network with 99.99% uptime.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button size="lg" className="h-12 px-6 bg-gradient-to-r from-primary to-primary-glow text-primary-foreground shadow-[var(--shadow-elevated)]">
                Create free account <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="h-12 px-6 glass-soft">View pricing</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
