import { useState, useRef } from "react";
import { UploadCloud, FileImage, Film, X, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

interface UploadItem { id: string; name: string; size: number; type: string; progress: number; done: boolean; }

export function UploadZone() {
  const [items, setItems] = useState<UploadItem[]>([]);
  const [drag, setDrag] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFiles = (files: FileList | null) => {
    if (!files) return;
    const newItems: UploadItem[] = Array.from(files).map((f) => ({
      id: crypto.randomUUID(), name: f.name, size: f.size, type: f.type, progress: 0, done: false,
    }));
    setItems((prev) => [...prev, ...newItems]);
    // Simulate upload
    newItems.forEach((item) => {
      const interval = setInterval(() => {
        setItems((prev) => prev.map((i) => {
          if (i.id !== item.id) return i;
          const next = Math.min(100, i.progress + Math.random() * 18);
          if (next >= 100) { clearInterval(interval); return { ...i, progress: 100, done: true }; }
          return { ...i, progress: next };
        }));
      }, 250);
    });
  };

  const remove = (id: string) => setItems((p) => p.filter((i) => i.id !== id));

  return (
    <section id="upload" className="py-24 bg-gradient-to-b from-background to-secondary/40">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mb-12">
          <p className="text-sm font-medium text-primary mb-3">UPLOAD</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Drop in. Share out.</h2>
          <p className="mt-4 text-muted-foreground">Drag and drop any image or video. We'll handle compression, thumbnails, and the smart link.</p>
        </div>

        <div className="mx-auto max-w-3xl">
          <div
            onDragOver={(e) => { e.preventDefault(); setDrag(true); }}
            onDragLeave={() => setDrag(false)}
            onDrop={(e) => { e.preventDefault(); setDrag(false); handleFiles(e.dataTransfer.files); }}
            onClick={() => inputRef.current?.click()}
            className={`relative cursor-pointer rounded-3xl border-2 border-dashed p-12 text-center transition-all glass ${
              drag ? "border-primary scale-[1.01] shadow-[var(--shadow-elevated)]" : "border-primary/30 hover:border-primary/60"
            }`}
          >
            <input ref={inputRef} type="file" multiple accept="image/*,video/*" className="hidden" onChange={(e) => handleFiles(e.target.files)} />
            <div className="mx-auto h-16 w-16 rounded-2xl bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center text-primary-foreground shadow-[var(--shadow-elevated)] mb-5 animate-float">
              <UploadCloud className="h-8 w-8" />
            </div>
            <h3 className="font-display text-xl font-semibold">Drop files here, or click to browse</h3>
            <p className="mt-2 text-sm text-muted-foreground">JPG, PNG, WebP, GIF · MP4, MOV, WebM, MKV · Up to 2 GB</p>
            <Button className="mt-6 bg-gradient-to-r from-primary to-primary-glow text-primary-foreground" onClick={(e) => { e.stopPropagation(); inputRef.current?.click(); }}>
              Choose files
            </Button>
          </div>

          {items.length > 0 && (
            <div className="mt-6 space-y-3">
              {items.map((i) => (
                <div key={i.id} className="rounded-2xl bg-card border border-border p-4 flex items-center gap-4 animate-fade-up">
                  <div className="h-10 w-10 rounded-lg bg-secondary flex items-center justify-center text-primary shrink-0">
                    {i.type.startsWith("video") ? <Film className="h-5 w-5" /> : <FileImage className="h-5 w-5" />}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-center gap-2">
                      <p className="text-sm font-medium truncate">{i.name}</p>
                      <span className="text-xs text-muted-foreground shrink-0">{(i.size / 1024 / 1024).toFixed(2)} MB</span>
                    </div>
                    <Progress value={i.progress} className="h-1.5 mt-2" />
                  </div>
                  <Button variant="ghost" size="icon" className="h-8 w-8 shrink-0" onClick={() => remove(i.id)}>
                    {i.done ? <Check className="h-4 w-4 text-primary" /> : <X className="h-4 w-4" />}
                  </Button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
