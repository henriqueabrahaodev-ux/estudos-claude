import Image from "next/image";
import Header from "@/components/header";
import Footer from "@/components/footer";

/* ─── Data ──────────────────────────────────────────────────── */

const services = [
  {
    title: "Banho e Tosa",
    description:
      "Higiene completa com produtos naturais e profissionais especializados. Deixamos seu pet cheiroso, limpo e feliz.",
    detail: "A partir de R$ 65",
  },
  {
    title: "Consulta Veterinária",
    description:
      "Atendimento clínico com veterinários experientes e apaixonados pelo que fazem. Diagnóstico cuidadoso, tratamento preciso.",
    detail: "Seg – Sáb, com agendamento",
  },
  {
    title: "Pet Shop",
    description:
      "Ração, acessórios, petiscos e produtos de higiene das melhores marcas. Tudo que o seu pet precisa, em um único lugar.",
    detail: "Entrega disponível",
  },
  {
    title: "Hotel para Pets",
    description:
      "Hospedagem segura, confortável e supervisionada enquanto você viaja. Seu pet em boas mãos — de verdade.",
    detail: "Reserve com antecedência",
  },
];

const differentials = [
  {
    stat: "10+",
    unit: "anos",
    title: "Equipe Especializada",
    description:
      "Veterinários e tosadores com formação sólida e anos de prática. Uma equipe que cresce junto com a sua família.",
  },
  {
    stat: "100%",
    unit: "higienizado",
    title: "Ambiente Seguro",
    description:
      "Espaço higienizado diariamente, monitorado e preparado para o bem-estar de cada animal que passa por aqui.",
  },
  {
    stat: "1 a 1",
    unit: "atenção",
    title: "Atendimento Personalizado",
    description:
      "Cada pet recebe atenção individual. Sabemos o nome, o temperamento e o histórico de quem cuidamos.",
  },
];

const testimonials = [
  {
    name: "Ana Lima",
    pet: "Tutora do Thor",
    text: "O Thor adora vir aqui! A equipe é super carinhosa e ele sempre sai feliz e cheiroso. Não troco por nada.",
    stars: 5,
  },
  {
    name: "Carlos Mendes",
    pet: "Tutor da Mel",
    text: "Melhor petshop da região. A Mel passou uma semana no hotel e foi tratada como rainha. Voltamos sempre.",
    stars: 5,
  },
  {
    name: "Fernanda Costa",
    pet: "Tutora do Bolinha",
    text: "Atendimento incrível, preços justos e o Bolinha ficou lindo. Super recomendo para quem quer qualidade.",
    stars: 5,
  },
];
/* ─── Service icon SVGs ─────────────────────────────────────── */
function IconBath() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M9 6L9 2C9 1.44772 9.44772 1 10 1H14C14.5523 1 15 1.44772 15 2V6" />
      <path d="M4 6H20C21.1046 6 22 6.89543 22 8V19C22 20.1046 21.1046 21 20 21H4C2.89543 21 2 20.1046 2 19V8C2 6.89543 2.89543 6 4 6Z" />
      <path d="M12 10V14M10 12H14" />
    </svg>
  );
}

function IconVet() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
  );
}

function IconShop() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <path d="M16 10a4 4 0 01-8 0" />
    </svg>
  );
}

function IconHotel() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

const serviceIcons = [IconBath, IconVet, IconShop, IconHotel];

/* ─── Star rating ───────────────────────────────────────────── */
function Stars({ count }: { count: number }) {
  return (
    <span className="flex gap-0.5" aria-label={`${count} estrelas`}>
      {Array.from({ length: count }).map((_, i) => (
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="text-amber-brand"
          aria-hidden="true"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </span>
  );
}

/* ─── Page ──────────────────────────────────────────────────── */
export default function Home() {
  return (
    <>
      <Header />

      {/* ════════════════════════════════════════════════════
          HERO — dark, editorial, two-column
          ════════════════════════════════════════════════════ */}
      <section className="bg-bark" aria-label="Apresentação">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] lg:min-h-[82vh] items-center gap-10 lg:gap-0">

            {/* Left: headline + CTAs */}
            <div className="py-20 lg:py-24 lg:pr-16 hero-enter">
              <h1 className="font-display font-black text-[clamp(2.6rem,7vw,4.25rem)] text-page leading-[1.03] tracking-[-0.03em] mb-6">
                Cuidamos do seu{" "}
                <span className="text-amber-brand">melhor amigo</span>{" "}
                com amor e experiência.
              </h1>
              <p className="text-sand text-lg leading-relaxed mb-10 max-w-[42ch]">
                Banho, tosa, consultas veterinárias, hotel e pet shop — tudo em
                um único lugar, no coração de São Paulo.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="#contato"
                  className="rounded-full bg-amber-brand px-8 py-3.5 font-black text-sm text-bark
                             hover:bg-amber-deep transition-colors duration-150 text-center
                             focus-visible:ring-2 focus-visible:ring-amber-brand focus-visible:ring-offset-2 focus-visible:ring-offset-bark"
                >
                  Agendar Agora
                </a>
                <a
                  href="#servicos"
                  className="rounded-full border border-umber px-8 py-3.5 font-bold text-sm text-sand
                             hover:border-sand hover:text-page transition-colors duration-150 text-center
                             focus-visible:ring-2 focus-visible:ring-sand focus-visible:ring-offset-2 focus-visible:ring-offset-bark"
                >
                  Ver Serviços
                </a>
              </div>
            </div>

            {/* Right: hero image */}
            <div
              className="hidden lg:block h-full min-h-[500px] relative panel-enter"
              aria-hidden="true"
            >
              <Image
                src="/images/hero-patafeliz.png"
                alt="Clínica PataFeliz — espaço, equipe e pets"
                fill
                className="object-cover"
                priority
              />
            </div>

          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          TRUST BAND — three quick-hit stats
          ════════════════════════════════════════════════════ */}
      <div className="bg-umber py-5 px-6" aria-label="Dados rápidos">
        <div className="mx-auto max-w-6xl">
          <dl className="grid grid-cols-3 divide-x divide-[#52321e]">
            {[
              { value: "10+", label: "anos de experiência" },
              { value: "4", label: "serviços completos" },
              { value: "5★", label: "avaliação dos clientes" },
            ].map(({ value, label }) => (
              <div key={label} className="flex flex-col items-center px-4 py-1">
                <dt className="font-display font-black text-2xl sm:text-3xl text-amber-brand leading-none">
                  {value}
                </dt>
                <dd className="text-xs sm:text-sm text-sand mt-1 text-center leading-tight">
                  {label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* ════════════════════════════════════════════════════
          SERVICES — editorial list, not cards
          ════════════════════════════════════════════════════ */}
      <section id="servicos" className="bg-page py-20 px-6" aria-labelledby="services-heading">
        <div className="mx-auto max-w-6xl">

          {/* Section header */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8 mb-12">
            <div>
              <h2
                id="services-heading"
                className="font-display font-black text-3xl sm:text-4xl text-bark leading-tight tracking-tight"
              >
                Nossos Serviços
              </h2>
            </div>
            <div className="lg:pl-8">
              <p className="text-clay text-base leading-relaxed max-w-prose">
                Tudo que o seu pet precisa em um único endereço, com a qualidade
                e o cuidado que vocês dois merecem.
              </p>
            </div>
          </div>

          {/* Service list */}
          <div
            className="divide-y divide-petal"
            role="list"
            aria-label="Lista de serviços"
          >
            {services.map((service, i) => {
              const Icon = serviceIcons[i];
              return (
                <div
                  key={service.title}
                  role="listitem"
                  className="grid grid-cols-1 sm:grid-cols-[auto_1fr_auto] items-start gap-x-8 gap-y-3
                             py-7 group"
                >
                  {/* Icon */}
                  <div
                    className="hidden sm:flex items-center justify-center w-10 h-10 rounded-full
                                bg-petal text-clay group-hover:bg-amber-brand group-hover:text-bark
                                transition-colors duration-200 mt-0.5 shrink-0"
                    aria-hidden="true"
                  >
                    <Icon />
                  </div>

                  {/* Copy */}
                  <div>
                    <h3 className="font-display font-bold text-xl sm:text-2xl text-bark mb-2 leading-snug tracking-tight">
                      {service.title}
                    </h3>
                    <p className="text-clay text-base leading-relaxed max-w-[55ch]">
                      {service.description}
                    </p>
                  </div>

                  {/* Detail */}
                  <p className="text-xs font-bold text-amber-deep uppercase tracking-wider sm:text-right whitespace-nowrap mt-1">
                    {service.detail}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          DIFFERENTIALS — petal background, stat-forward
          ════════════════════════════════════════════════════ */}
      <section
        id="sobre"
        className="bg-petal py-20 px-6"
        aria-labelledby="differentials-heading"
      >
        <div className="mx-auto max-w-6xl">

          <h2
            id="differentials-heading"
            className="font-display font-black text-3xl sm:text-4xl text-bark leading-tight tracking-tight mb-14"
          >
            Por que a PataFeliz?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-[#e0ceba]">
            {differentials.map((item) => (
              <article
                key={item.title}
                className="bg-petal p-8 sm:p-10 flex flex-col gap-4"
              >
                {/* Stat */}
                <div className="flex items-baseline gap-2">
                  <span className="font-display font-black text-5xl sm:text-6xl text-bark leading-none">
                    {item.stat}
                  </span>
                  <span className="text-sm font-bold text-clay uppercase tracking-wider">
                    {item.unit}
                  </span>
                </div>

                {/* Title + description */}
                <div>
                  <h3 className="font-display font-bold text-lg text-bark mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-clay text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          TESTIMONIALS — dark, featured quote
          ════════════════════════════════════════════════════ */}
      <section className="bg-bark py-20 px-6" aria-labelledby="testimonials-heading">
        <div className="mx-auto max-w-6xl">

          <h2
            id="testimonials-heading"
            className="font-display font-black text-3xl sm:text-4xl text-page leading-tight tracking-tight mb-12"
          >
            O que dizem nossos clientes
          </h2>

          {/* Featured testimonial */}
          <blockquote className="border-l-2 border-amber-brand pl-8 mb-12">
            <p className="font-display font-bold text-2xl sm:text-3xl text-page leading-[1.3] tracking-tight max-w-3xl mb-6">
              &ldquo;{testimonials[0].text}&rdquo;
            </p>
            <footer className="flex items-center gap-4">
              <Stars count={testimonials[0].stars} />
              <div>
                <p className="text-sm font-bold text-page">{testimonials[0].name}</p>
                <p className="text-xs text-clay">{testimonials[0].pet}</p>
              </div>
            </footer>
          </blockquote>

          {/* Supporting testimonials */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 border-t border-umber pt-10">
            {testimonials.slice(1).map((t) => (
              <article key={t.name} className="flex flex-col gap-4">
                <Stars count={t.stars} />
                <blockquote>
                  <p className="text-sand text-base leading-relaxed">
                    &ldquo;{t.text}&rdquo;
                  </p>
                </blockquote>
                <div>
                  <p className="text-sm font-bold text-page">{t.name}</p>
                  <p className="text-xs text-clay">{t.pet}</p>
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}
