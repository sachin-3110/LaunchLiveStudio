'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronRight, Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { AnimatedSection } from '@/components/animated-section'
import { StatCounter } from '@/components/stat-counter'

const translations = {
  en: {
    nav: {
      creators: 'For Creators',
      brands: 'For Brands',
    },
    hero: {
      creatorsTitle: 'Creator growth is our mission.',
      creatorsSubtitle: 'Curious Media provides the perfect mix of strategic partnerships, revenue opportunities, and brand collaborations. It\'s how we drive proven, measurable growth for the world\'s best creators.',
      cta: 'Get in touch',
      brandsTitle: 'Powering authentic connections with top creators.',
      brandsSubtitle: 'Creators are redefining content creation for today\'s audiences. We connect brands with innovative creators, unlocking premium partnerships, engaged communities, and real business impact.',
    },
    stats: {
      metrics: [
        { value: '20K', suffix: '+', label: 'Creators', highlight: false },
        { value: '1.5B', suffix: '+', label: 'Total Monthly Reach', highlight: true, footnote: 'Powerful audience connections' },
        { value: '150', suffix: '%', label: 'Stronger Community', highlight: false, footnote: 'Community connection vs average' },
      ],
    },
    creators: {
      title: 'Meet creators we work with',
      seeMore: 'View all creators',
    },
    news: {
      title: 'Featured news & stories',
      items: [
        { title: 'New Series Launch: Curious Media Partners with Top Creators', date: '2024' },
        { title: '9 in 10 viewers trust authentic creator partnerships', date: '2024' },
        { title: 'Creator Economy Reaches New Heights with Strategic Collaborations', date: '2024' },
        { title: 'Brands See 3x Higher Engagement with Curious Media Creators', date: '2024' },
        { title: 'Curious Media Invests in Creator Success Programs', date: '2024' },
        { title: 'AI Tools Help Creators Reach 40% More Audience', date: '2024' },
      ],
    },
    footer: {
      copyright: '©2024 Curious Media, Inc. All rights reserved.',
      links: ['Platform terms', 'Acceptable use', 'Terms of service', 'Privacy policy', 'Cookie settings', 'DMCA policy'],
    },
  },
  hi: {
    nav: {
      creators: 'रचनाकारों के लिए',
      brands: 'ब्रांड्स के लिए',
    },
    hero: {
      creatorsTitle: 'रचनाकार विकास हमारा मिशन है।',
      creatorsSubtitle: 'Curious Media रणनीतिक साझेदारी, राजस्व के अवसर और ब्रांड सहयोग का सही मिश्रण प्रदान करता है। यह कैसे हम दुनिया के सर्वश्रेष्ठ रचनाकारों के लिए सिद्ध, मापने योग्य विकास चलाते हैं।',
      cta: 'संपर्क में रहें',
      brandsTitle: 'शीर्ष रचनाकारों के साथ प्रामाणिक कनेक्शन।',
      brandsSubtitle: 'रचनाकार आज के दर्शकों के लिए सामग्री निर्माण को फिर से परिभाषित कर रहे हैं। हम ब्रांड्स को नवीन रचनाकारों से जुड़ाते हैं, प्रीमियम साझेदारी, सक्रिय समुदाय और वास्तविक व्यावसायिक प्रभाव को अनलॉक करते हैं।',
    },
    stats: {
      metrics: [
        { value: '20K', suffix: '+', label: 'रचनाकार', highlight: false },
        { value: '1.5B', suffix: '+', label: 'कुल मासिक पहुंच', highlight: true, footnote: 'शक्तिशाली दर्शक कनेक्शन' },
        { value: '150', suffix: '%', label: 'मजबूत सामुदायिक', highlight: false, footnote: 'औसत की तुलना में कनेक्शन' },
      ],
    },
    creators: {
      title: 'हम जिन रचनाकारों के साथ काम करते हैं',
      seeMore: 'सभी रचनाकारों को देखें',
    },
    news: {
      title: 'फीचर समाचार और कहानियां',
      items: [
        { title: 'नई श्रृंखला लॉन्च: Curious Media शीर्ष रचनाकारों के साथ भागीदारी', date: '2024' },
        { title: '9 में से 10 दर्शक प्रामाणिक रचनाकार साझेदारी पर विश्वास करते हैं', date: '2024' },
        { title: 'रणनीतिक सहयोग के साथ निर्माता अर्थव्यवस्था नई ऊंचाई तक पहुंचती है', date: '2024' },
        { title: 'ब्रांड्स को Curious Media रचनाकारों के साथ 3x अधिक एनगेजमेंट दिखाई देता है', date: '2024' },
        { title: 'Curious Media रचनाकार सफलता कार्यक्रमों में निवेश करता है', date: '2024' },
        { title: 'AI उपकरण रचनाकारों को 40% अधिक दर्शकों तक पहुंचने में मदद करते हैं', date: '2024' },
      ],
    },
    footer: {
      copyright: '©2024 Curious Media, Inc. सर्वाधिकार सुरक्षित।',
      links: ['मंच शर्तें', 'स्वीकार्य उपयोग', 'सेवा की शर्तें', 'गोपनीयता नीति', 'कुकी सेटिंग्स', 'DMCA नीति'],
    },
  },
  es: {
    nav: {
      creators: 'Para Creadores',
      brands: 'Para Marcas',
    },
    hero: {
      creatorsTitle: 'El crecimiento de creadores es nuestra misión.',
      creatorsSubtitle: 'Curious Media proporciona la mezcla perfecta de asociaciones estratégicas, oportunidades de ingresos y colaboraciones con marcas. Así es como impulsamos el crecimiento comprobable y medible para los mejores creadores del mundo.',
      cta: 'Ponte en contacto',
      brandsTitle: 'Potenciando conexiones auténticas con creadores principales.',
      brandsSubtitle: 'Los creadores están redefiniendo la creación de contenido para las audiencias de hoy. Conectamos marcas con creadores innovadores, desbloqueando asociaciones premium, comunidades comprometidas e impacto comercial real.',
    },
    stats: {
      metrics: [
        { value: '20K', suffix: '+', label: 'Creadores', highlight: false },
        { value: '1.5B', suffix: '+', label: 'Alcance Mensual Total', highlight: true, footnote: 'Conexiones de audiencia poderosas' },
        { value: '150', suffix: '%', label: 'Comunidad Más Fuerte', highlight: false, footnote: 'Conexión vs promedio' },
      ],
    },
    creators: {
      title: 'Conoce a los creadores con los que trabajamos',
      seeMore: 'Ver todos los creadores',
    },
    news: {
      title: 'Noticias y historias destacadas',
      items: [
        { title: 'Lanzamiento de Nueva Serie: Curious Media se Asocia con Creadores Principales', date: '2024' },
        { title: '9 de cada 10 espectadores confían en asociaciones auténticas de creadores', date: '2024' },
        { title: 'La Economía de Creadores Alcanza Nuevas Alturas con Colaboraciones Estratégicas', date: '2024' },
        { title: 'Las Marcas Ven un 3x Mayor Engagement con Creadores de Curious Media', date: '2024' },
        { title: 'Curious Media Invierte en Programas de Éxito para Creadores', date: '2024' },
        { title: 'Herramientas de IA Ayudan a Creadores a Alcanzar 40% Más Audiencia', date: '2024' },
      ],
    },
    footer: {
      copyright: '©2024 Curious Media, Inc. Todos los derechos reservados.',
      links: ['Términos de plataforma', 'Política de uso aceptable', 'Términos de servicio', 'Política de privacidad', 'Configuración de cookies', 'Política DMCA'],
    },
  },
  de: {
    nav: {
      creators: 'Für Creator',
      brands: 'Für Marken',
    },
    hero: {
      creatorsTitle: 'Das Wachstum von Creatorn ist unsere Mission.',
      creatorsSubtitle: 'Curious Media bietet die perfekte Mischung aus strategischen Partnerschaften, Einnahmemöglichkeiten und Markenkooperationen. So treiben wir bewiesenes, messbares Wachstum für die besten Creator der Welt.',
      cta: 'Kontakt aufnehmen',
      brandsTitle: 'Authentische Verbindungen mit Top-Creatorn ermöglichen.',
      brandsSubtitle: 'Creator definieren die Content-Erstellung für heutige Zielgruppen neu. Wir verbinden Marken mit innovativen Creatorn und erschließen Premium-Partnerschaften, engagierte Communitys und echte Geschäftsergebnisse.',
    },
    stats: {
      metrics: [
        { value: '20K', suffix: '+', label: 'Creator', highlight: false },
        { value: '1.5B', suffix: '+', label: 'Gesamtmonatliche Reichweite', highlight: true, footnote: 'Starke Publikumsverbindungen' },
        { value: '150', suffix: '%', label: 'Stärkere Gemeinschaft', highlight: false, footnote: 'Verbindung vs. Durchschnitt' },
      ],
    },
    creators: {
      title: 'Treffen Sie Creator, mit denen wir arbeiten',
      seeMore: 'Alle Creator anzeigen',
    },
    news: {
      title: 'Ausgewählte Nachrichten und Geschichten',
      items: [
        { title: 'Neue Serienveröffentlichung: Curious Media Partnert mit Top-Creatorn', date: '2024' },
        { title: '9 von 10 Zuschauern vertrauen authentischen Creator-Partnerschaften', date: '2024' },
        { title: 'Creator-Ökonomie erreicht neue Höhen mit strategischen Zusammenarbeiten', date: '2024' },
        { title: 'Marken sehen 3x höheres Engagement mit Curious Media Creatorn', date: '2024' },
        { title: 'Curious Media investiert in Creator-Erfolgsprogramme', date: '2024' },
        { title: 'KI-Tools helfen Creatorn, 40% mehr Zielgruppe zu erreichen', date: '2024' },
      ],
    },
    footer: {
      copyright: '©2024 Curious Media, Inc. Alle Rechte vorbehalten.',
      links: ['Plattformbedingungen', 'Akzeptable Nutzung', 'Nutzungsbedingungen', 'Datenschutzrichtlinie', 'Cookie-Einstellungen', 'DMCA-Richtlinie'],
    },
  },
}

const creatorLogos = [
  'Creator 1', 'Creator 2', 'Creator 3', 'Creator 4', 'Creator 5',
  'Creator 6', 'Creator 7', 'Creator 8', 'Creator 9', 'Creator 10',
]

export default function Home() {
  const [language, setLanguage] = useState<'en' | 'hi' | 'es' | 'de'>('en')
  const [activeTab, setActiveTab] = useState<'creators' | 'brands'>('creators')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const t = translations[language]

  return (
    <div className="min-h-screen bg-white dark:bg-black overflow-hidden">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/80 dark:bg-black/80 backdrop-blur-md z-50 border-b border-gray-200/50 dark:border-gray-800/50 transition-smooth">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0 hover-lift cursor-pointer">
              <Image src="/logo.png" alt="Curious Media" width={35} height={35} className="h-9 w-auto" />
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-12">
              <button
                onClick={() => setActiveTab('creators')}
                className={`text-sm font-medium transition-smooth relative group ${
                  activeTab === 'creators'
                    ? 'text-foreground'
                    : 'text-gray-600 dark:text-gray-400'
                }`}
              >
                {t.nav.creators}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-smooth ${
                    activeTab === 'creators' ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </button>
              <button
                onClick={() => setActiveTab('brands')}
                className={`text-sm font-medium transition-smooth relative group ${
                  activeTab === 'brands'
                    ? 'text-foreground'
                    : 'text-gray-600 dark:text-gray-400'
                }`}
              >
                {t.nav.brands}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-smooth ${
                    activeTab === 'brands' ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </button>
            </div>

            {/* Language & Mobile Menu */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1 bg-gray-100/80 dark:bg-gray-900/80 rounded-lg p-1 backdrop-blur-sm transition-smooth">
                {(['en', 'hi', 'es', 'de'] as const).map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setLanguage(lang)}
                    className={`px-2 py-1 text-xs font-medium rounded transition-smooth ${
                      language === lang
                        ? 'bg-primary text-white shadow-lg scale-105'
                        : 'text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-800'
                    }`}
                  >
                    {lang.toUpperCase()}
                  </button>
                ))}
              </div>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 text-gray-600 dark:text-gray-400 hover:text-foreground transition-smooth hover-lift"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4 space-y-3 border-t border-gray-200 dark:border-gray-800 animate-slide-down">
              <button
                onClick={() => { setActiveTab('creators'); setMobileMenuOpen(false); }}
                className="block w-full text-left text-sm font-medium hover:text-primary transition-smooth py-2"
              >
                {t.nav.creators}
              </button>
              <button
                onClick={() => { setActiveTab('brands'); setMobileMenuOpen(false); }}
                className="block w-full text-left text-sm font-medium hover:text-primary transition-smooth py-2"
              >
                {t.nav.brands}
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section - Dual Tab */}
      <section className="pt-28 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="space-y-12 min-h-96">
            {activeTab === 'creators' ? (
              <AnimatedSection animation="slide-up" delay={0}>
                <div className="space-y-8">
                  <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-balance leading-tight">
                    {t.hero.creatorsTitle}
                  </h1>
                  <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 text-pretty leading-relaxed max-w-3xl">
                    {t.hero.creatorsSubtitle}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      size="lg"
                      className="bg-primary hover:bg-blue-700 text-white hover-lift shadow-lg"
                    >
                      {t.hero.cta} <ChevronRight className="ml-2 w-4 h-4" />
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="hover-lift transition-smooth"
                    >
                      Learn more
                    </Button>
                  </div>
                </div>
              </AnimatedSection>
            ) : (
              <AnimatedSection animation="slide-up" delay={0}>
                <div className="space-y-8">
                  <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-balance leading-tight">
                    {t.hero.brandsTitle}
                  </h1>
                  <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 text-pretty leading-relaxed max-w-3xl">
                    {t.hero.brandsSubtitle}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      size="lg"
                      className="bg-primary hover:bg-blue-700 text-white hover-lift shadow-lg"
                    >
                      {t.hero.cta} <ChevronRight className="ml-2 w-4 h-4" />
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="hover-lift transition-smooth"
                    >
                      Explore
                    </Button>
                  </div>
                </div>
              </AnimatedSection>
            )}
          </div>
        </div>
      </section>

      {/* Stats Section with Animations */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-y border-gray-200/50 dark:border-gray-800/50">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {t.stats.metrics.map((metric, i) => (
              <AnimatedSection
                key={i}
                animation="slide-up"
                delay={i * 100}
              >
                <StatCounter
                  endValue={parseInt(metric.value)}
                  suffix={metric.suffix}
                  label={metric.label}
                  highlight={metric.highlight}
                  footnote={metric.footnote}
                />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Creators Carousel */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection animation="slide-up">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold">{t.creators.title}</h2>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-smooth hover-lift"
              >
                {t.creators.seeMore} <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </AnimatedSection>

          {/* Creators Grid with Stagger */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-8">
            {creatorLogos.map((creator, i) => (
              <AnimatedSection
                key={i}
                animation="bounce-in"
                delay={i * 50}
              >
                <div className="bg-gradient-to-br from-gray-100 to-gray-50 dark:from-gray-900 dark:to-gray-950 rounded-lg p-8 flex items-center justify-center h-32 hover-lift cursor-pointer border border-gray-200/50 dark:border-gray-800/50 transition-smooth group">
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-400 text-center group-hover:text-primary transition-smooth">
                    {creator}
                  </span>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {creatorLogos.slice(0, 5).map((creator, i) => (
              <AnimatedSection
                key={i}
                animation="bounce-in"
                delay={(i + 10) * 50}
              >
                <div className="bg-gradient-to-br from-gray-100 to-gray-50 dark:from-gray-900 dark:to-gray-950 rounded-lg p-8 flex items-center justify-center h-32 hover-lift cursor-pointer border border-gray-200/50 dark:border-gray-800/50 transition-smooth group">
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-400 text-center group-hover:text-primary transition-smooth">
                    {creator}
                  </span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* News & Stories Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900/50 dark:to-black">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection animation="slide-up">
            <h2 className="text-3xl sm:text-4xl font-bold mb-12">{t.news.title}</h2>
          </AnimatedSection>

          <div className="space-y-4">
            {t.news.items.map((item, i) => (
              <AnimatedSection
                key={i}
                animation="slide-up"
                delay={i * 50}
              >
                <a
                  href="#"
                  className="block p-6 border border-gray-200/50 dark:border-gray-800/50 rounded-lg hover:border-primary/50 dark:hover:border-primary/50 transition-smooth group hover-lift bg-white dark:bg-gray-900/30 backdrop-blur-sm"
                >
                  <h3 className="text-base sm:text-lg font-semibold mb-3 group-hover:text-primary transition-smooth line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">{item.date}</p>
                </a>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black border-t border-gray-200/50 dark:border-gray-800/50">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection animation="slide-up">
            <div className="flex flex-col sm:flex-row justify-between items-start gap-8 mb-8">
              <Image src="/logo.png" alt="Curious Media" width={30} height={30} className="h-8 w-auto hover-lift" />
              <div className="flex flex-wrap gap-4 sm:gap-6 text-sm">
                {t.footer.links.map((link, i) => (
                  <a
                    key={i}
                    href="#"
                    className="text-gray-600 dark:text-gray-400 hover:text-primary transition-smooth relative group"
                  >
                    {link}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-smooth group-hover:w-full" />
                  </a>
                ))}
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-in">
            <div className="border-t border-gray-200/50 dark:border-gray-800/50 pt-8 text-center text-xs sm:text-sm text-gray-600 dark:text-gray-400">
              <p>{t.footer.copyright}</p>
            </div>
          </AnimatedSection>
        </div>
      </footer>
    </div>
  )
}
