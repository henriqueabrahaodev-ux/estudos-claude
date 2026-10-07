import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-bark border-b border-umber">
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">

        {/* Wordmark */}
        <Link
          href="/"
          className="font-display font-black text-xl tracking-tight leading-none"
          aria-label="PataFeliz — página inicial"
        >
          <span className="text-amber-brand">Pata</span>
          <span className="text-page">Feliz</span>
        </Link>

        {/* Desktop nav */}
        <nav
          className="hidden sm:flex items-center gap-8 text-sm font-bold text-sand"
          aria-label="Navegação principal"
        >
          <a
            href="#servicos"
            className="hover:text-amber-brand transition-colors duration-150"
          >
            Serviços
          </a>
          <a
            href="#sobre"
            className="hover:text-amber-brand transition-colors duration-150"
          >
            Sobre
          </a>
          <a
            href="#contato"
            className="hover:text-amber-brand transition-colors duration-150"
          >
            Contato
          </a>
        </nav>

        {/* CTA */}
        <a
          href="#contato"
          className="rounded-full bg-amber-brand px-5 py-2 text-sm font-black text-bark
                     hover:bg-amber-deep transition-colors duration-150
                     focus-visible:ring-2 focus-visible:ring-amber-brand focus-visible:ring-offset-2 focus-visible:ring-offset-bark"
        >
          Agendar
        </a>

      </div>
    </header>
  );
}
