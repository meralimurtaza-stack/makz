export function Footer() {
  return (
    <footer className="border-t border-white/[0.06]">
      <div className="flex flex-col sm:flex-row justify-between items-center py-10 px-6 max-w-[1200px] mx-auto gap-4">
        <span className="font-headline text-sm font-bold text-white tracking-tight">
          MAKZ
        </span>
        <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-text-muted/60">
          &copy; 2026 MAKZ. All rights reserved.
        </span>
      </div>
    </footer>
  );
}
