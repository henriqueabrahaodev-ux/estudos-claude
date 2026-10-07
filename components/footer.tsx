/* Primary booking CTA + utility footer */

export default function Footer() {
  return (
    <>
      {/* ── Booking CTA ─────────────────────────────────────────── */}
      <section
        id="contato"
        className="bg-amber-brand py-20 px-6"
        aria-labelledby="cta-heading"
      >
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Copy */}
            <div>
              <p className="font-display font-black text-4xl sm:text-5xl text-bark leading-[1.05] tracking-tight mb-4">
                Pronto para agendar?
              </p>
              <p className="text-umber text-lg leading-relaxed max-w-md">
                Entre em contato pelo WhatsApp ou telefone.
                Respondemos rápido e marcamos o horário ideal para você e seu pet.
              </p>
            </div>

            {/* Actions */}
            <div className="flex flex-col gap-4">
              <a
                href="https://wa.me/5511912345678"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 rounded-full bg-bark
                           px-8 py-4 font-black text-page hover:bg-umber
                           active:scale-[0.97] transition text-center text-sm
                           focus-visible:ring-2 focus-visible:ring-bark focus-visible:ring-offset-2 focus-visible:ring-offset-amber-brand"
              >
                {/* WhatsApp icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Falar pelo WhatsApp
              </a>

              <a
                href="tel:+5511912345678"
                className="flex items-center justify-center gap-3 rounded-full border-2 border-bark
                           px-8 py-4 font-black text-bark hover:bg-amber-deep hover:border-amber-deep hover:text-page
                           transition text-center text-sm
                           focus-visible:ring-2 focus-visible:ring-bark focus-visible:ring-offset-2 focus-visible:ring-offset-amber-brand"
              >
                {/* Phone icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z" />
                </svg>
                (11) 91234-5678
              </a>

              <p className="text-center text-sm text-umber">
                Ou escreva para{" "}
                <a
                  href="mailto:contato@patafeliz.com.br"
                  className="underline underline-offset-2 hover:text-bark transition-colors"
                >
                  contato@patafeliz.com.br
                </a>
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ── Utility footer ────────────────────────────────────────── */}
      <footer className="bg-bark text-sand">
        <div className="mx-auto max-w-6xl px-6 pt-14 pb-10 grid grid-cols-1 gap-10 sm:grid-cols-3">

          {/* Brand */}
          <div>
            <p className="font-display font-black text-xl tracking-tight mb-3">
              <span className="text-amber-brand">Pata</span>
              <span className="text-page">Feliz</span>
            </p>
            <p className="text-sm leading-relaxed text-sand max-w-xs">
              Cuidando com amor de quem você mais ama — em São Paulo, há mais de 10 anos.
            </p>
          </div>

          {/* Contato */}
          <div>
            <p className="text-xs font-black uppercase tracking-widest text-page mb-4">
              Contato
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0 text-clay" aria-hidden="true">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
                </svg>
                Rua das Flores, 123 — São Paulo, SP
              </li>
              <li>
                <a href="tel:+5511912345678" className="flex items-center gap-2 hover:text-page transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-clay" aria-hidden="true">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z"/>
                  </svg>
                  (11) 91234-5678
                </a>
              </li>
              <li>
                <a href="mailto:contato@patafeliz.com.br" className="flex items-center gap-2 hover:text-page transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-clay" aria-hidden="true">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                  </svg>
                  contato@patafeliz.com.br
                </a>
              </li>
            </ul>
          </div>

          {/* Horário */}
          <div>
            <p className="text-xs font-black uppercase tracking-widest text-page mb-4">
              Horário
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex justify-between gap-4">
                <span className="text-clay">Seg – Sex</span>
                <span>8h – 18h</span>
              </li>
              <li className="flex justify-between gap-4">
                <span className="text-clay">Sábado</span>
                <span>8h – 14h</span>
              </li>
              <li className="flex justify-between gap-4">
                <span className="text-clay">Domingo</span>
                <span>Fechado</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-umber py-5 text-center text-xs text-clay">
          © {new Date().getFullYear()} PataFeliz. Todos os direitos reservados.
        </div>
      </footer>
    </>
  );
}
