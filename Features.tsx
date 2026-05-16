import { Upload, Link2, Eye, Lock, Sparkles, Gauge, QrCode, Globe } from "lucide-react";

const features = [
  { icon: Upload, title: "Drag & drop uploads", desc: "Batch upload images and videos with pause, resume, and auto-retry." },
  { icon: Link2, title: "Smart sharing links", desc: "Expiring links from 1 hour to 30 days, with passwords and view limits." },
  { icon: Eye, title: "Premium media viewer", desc: "Fullscreen viewer with swipe, zoom, and adaptive video streaming." },
  { icon: Sparkles, title: "AI auto-tagging", desc: "Automatic categorization, smart search, and duplicate detection." },
  { icon: Lock, title: "End-to-end protection", desc: "Encrypted storage, watermarks, and anti-bot rate limiting." },
  { icon: Gauge, title: "Core Web Vitals tuned", desc: "Lazy loading, WebP, and CDN delivery for instant previews." },
  { icon: QrCode, title: "QR code sharing", desc: "Generate QR codes for any link — share to phones in one tap." },
  { icon: Globe, title: "PWA & offline ready", desc: "Install as an app on any device with offline-first caching." },
];

export function Features() {
  return (
    <section id="features" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mb-14">
          <p className="text-sm font-medium text-primary mb-3">FEATURES</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Everything you need to host, share, and grow.
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((f) => (
            <div key={f.title} className="group rounded-2xl bg-card border border-border p-6 hover:shadow-[var(--shadow-soft)] hover:-translate-y-1 transition-all duration-300">
              <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center text-primary-foreground shadow-md mb-4 group-hover:scale-110 transition-transform">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-base mb-1.5">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
