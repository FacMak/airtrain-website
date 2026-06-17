import { NAV_LINKS } from "@/lib/data";
import { TrainIcon } from "./ui/Icons";

export function Footer() {
  return (
    <footer className="border-t border-line bg-paper-pure">
      <div className="container-airtrain py-14">
        <div className="flex flex-col justify-between gap-10 lg:flex-row">
          <div className="max-w-sm">
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-ink text-paper-pure">
                <TrainIcon className="h-5 w-5" />
              </span>
              <span className="text-lg font-semibold tracking-tight">
                AirTrain
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              Die Zugklimaanlage, angetrieben vom Fahrtwind. Drastisch
              reduzierter Stromverbrauch, ausfallsicher, wartungsarm.
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-10 gap-y-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-ink/70 transition-colors hover:text-accent-deep"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-line pt-6 text-sm text-muted sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} AirTrain Technologies. Alle Rechte vorbehalten.</p>
          <div className="flex gap-6">
            <a href="#" className="transition-colors hover:text-ink">Impressum</a>
            <a href="#" className="transition-colors hover:text-ink">Datenschutz</a>
            <a href="#" className="transition-colors hover:text-ink">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
