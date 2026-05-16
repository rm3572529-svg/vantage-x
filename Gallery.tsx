import { Heart, Eye } from "lucide-react";

const items = [
  { src: "https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=800&q=80", h: "h-64", title: "Mountain dawn", views: "2.1k" },
  { src: "https://images.unsplash.com/photo-1682687982107-14492010e05e?w=800&q=80", h: "h-80", title: "City lights", views: "5.4k" },
  { src: "https://images.unsplash.com/photo-1682687220063-4742bd7fd538?w=800&q=80", h: "h-72", title: "Coastal drift", views: "3.8k" },
  { src: "https://images.unsplash.com/photo-1682695797221-8164ff1fafc9?w=800&q=80", h: "h-96", title: "Quiet forest", views: "1.2k" },
  { src: "https://images.unsplash.com/photo-1682687221038-404670f01d09?w=800&q=80", h: "h-64", title: "Desert sky", views: "4.7k" },
  { src: "https://images.unsplash.com/photo-1682695794816-7b9da18ed470?w=800&q=80", h: "h-80", title: "Northern lights", views: "8.2k" },
];

export function Gallery() {
  return (
    <section id="gallery" className="py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
          <div>
            <p className="text-sm font-medium text-primary mb-3">TRENDING</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Live from the cloud.</h2>
          </div>
          <div className="flex gap-2 text-sm">
            {["Trending", "Popular", "Recent", "Featured"].map((t, i) => (
              <button key={t} className={`px-4 py-2 rounded-full transition-colors ${i === 0 ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground hover:text-foreground"}`}>
                {t}
              </button>
            ))}
          </div>
        </div>
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {items.map((it) => (
            <div key={it.src} className="break-inside-avoid relative group rounded-2xl overflow-hidden bg-secondary cursor-pointer">
              <img src={it.src} alt={it.title} loading="lazy" className={`w-full ${it.h} object-cover group-hover:scale-105 transition-transform duration-500`} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4 text-white">
                <p className="font-medium text-sm">{it.title}</p>
                <div className="flex gap-3 mt-1 text-xs opacity-90">
                  <span className="inline-flex items-center gap-1"><Eye className="h-3 w-3" /> {it.views}</span>
                  <span className="inline-flex items-center gap-1"><Heart className="h-3 w-3" /> Like</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
