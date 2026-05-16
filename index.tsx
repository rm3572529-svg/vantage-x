import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/vx/Header";
import { Hero } from "@/components/vx/Hero";
import { Features } from "@/components/vx/Features";
import { UploadZone } from "@/components/vx/UploadZone";
import { Gallery } from "@/components/vx/Gallery";
import { CTA } from "@/components/vx/CTA";
import { Footer } from "@/components/vx/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vantage X — Premium Cloud Media Hosting & Smart Sharing" },
      { name: "description", content: "Vantage X is a premium cloud platform to host images and videos, generate smart sharing links with expiry and passwords, and deliver them at CDN speed. Install as a PWA." },
      { name: "keywords", content: "cloud media hosting, image sharing, video hosting, smart links, file sharing, PWA, Vantage X" },
      { property: "og:title", content: "Vantage X — Premium Cloud Media Hosting" },
      { property: "og:description", content: "Host, share and stream your photos and videos with smart expiring links." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Vantage X — Premium Cloud Media Hosting" },
      { name: "twitter:description", content: "Premium cloud media hosting & smart sharing." },
    ],
    links: [
      { rel: "canonical", href: "/" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap" },
      { rel: "manifest", href: "/manifest.json" },
      { rel: "icon", type: "image/png", href: "/favicon.png" },
    ],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: "Vantage X",
        applicationCategory: "MultimediaApplication",
        operatingSystem: "Web, Android, iOS",
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
        description: "Premium cloud media hosting and smart sharing platform.",
      }),
    }],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Features />
        <UploadZone />
        <Gallery />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
